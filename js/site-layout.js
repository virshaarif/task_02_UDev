(() => {
    const fileName = window.location.pathname.split('/').pop() || 'index.html';

    const escapeHtml = (value) => value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    const setActiveNavigation = () => {
        document.querySelectorAll('.sidebar-nav a').forEach((link) => {
            const target = link.getAttribute('href') || '';
            const matches = target === fileName || (fileName === '' && target === 'index.html');
            link.classList.toggle('active', matches);
        });
    };

    const minimalizeHeader = (topbar) => {
        const topbarInner = topbar.querySelector('.topbar-inner');
        if (!topbarInner) {
            return;
        }

        topbar.classList.add('minimal-header');

        const titleElement = topbar.querySelector('.page-title');
        const subtitleElement = topbar.querySelector('.page-subtitle');
        const title = titleElement ? titleElement.textContent.trim() : document.title;
        const subtitle = subtitleElement ? subtitleElement.textContent.trim() : '';

        topbarInner.classList.add('minimal-header-inner');
        topbarInner.innerHTML = `
            <div class="shell-header">
                <button class="btn btn-light border responsive-sidebar-toggle me-2" type="button" data-sidebar-toggle aria-label="Toggle navigation">
                    <i class="bi bi-list"></i>
                </button>
                <div class="shell-header-copy">
                    <h2 class="page-title">${escapeHtml(title)}</h2>
                    ${subtitle ? `<p class="page-subtitle">${escapeHtml(subtitle)}</p>` : ''}
                </div>
            </div>
        `;
    };

    const minimalizeFooter = (footer) => {
        const panel = footer.querySelector('.footer-panel');
        if (!panel) {
            return;
        }

        footer.classList.add('minimal-footer');

        panel.classList.add('minimal-footer-panel');
        panel.innerHTML = `
            <div class="footer-minimal">
                <div>
                    <strong>Airblue Airways</strong>
                    <div>Airplane Management System</div>
                </div>
                <div>Develop By Virsha Arif 💻</div>
            </div>
        `;
    };

    const setupSidebarToggle = () => {
        const body = document.body;
        const overlay = document.createElement('button');
        overlay.type = 'button';
        overlay.className = 'layout-overlay';
        overlay.setAttribute('aria-label', 'Close navigation');
        overlay.hidden = true;
        document.body.appendChild(overlay);

        const closeSidebar = () => {
            body.classList.remove('sidebar-open');
            overlay.hidden = true;
        };

        const openSidebar = () => {
            body.classList.add('sidebar-open');
            overlay.hidden = false;
        };

        document.addEventListener('click', (event) => {
            const toggleButton = event.target.closest('[data-sidebar-toggle]');
            if (toggleButton) {
                event.preventDefault();
                if (body.classList.contains('sidebar-open')) {
                    closeSidebar();
                } else {
                    openSidebar();
                }
            }
        });

        overlay.addEventListener('click', closeSidebar);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeSidebar();
            }
        });

        document.querySelectorAll('.sidebar-nav a').forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 1200) {
                    closeSidebar();
                }
            });
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        setActiveNavigation();

        document.querySelectorAll('.topbar').forEach(minimalizeHeader);
        document.querySelectorAll('.footer').forEach(minimalizeFooter);

        document.querySelectorAll('.sidebar-footer').forEach((footer) => {
            footer.remove();
        });

        setupSidebarToggle();
    });
})();

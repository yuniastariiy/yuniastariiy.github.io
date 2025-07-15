// script.js
document.addEventListener('DOMContentLoaded', function () {
    // === AOS (Animate On Scroll) Initialization ===
    if (typeof AOS !== 'undefined') {
        AOS.init({
            offset: 0,
            duration: 1000,
            once: true, 
        });
    }

    // === Typed.js Initialization ===
    const typedElement = document.querySelector('.typed-text');
    if (typedElement && typeof Typed !== 'undefined') { 
        new Typed('.typed-text', {
            strings: ['Data Analyst', 'Data Integrator', 'Strategic Insights'],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            loopCount: false, 
            smartBackspace: true
        });
    }

    // === Tab Functionality (Education/Experience, dll.) ===
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;

                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // === Toggle Experience/Education Details ===
    const entryTitles = document.querySelectorAll('.entry-title');
    if (entryTitles.length > 0) {
        entryTitles.forEach(title => {
            title.addEventListener('click', function () {
                const parentEntry = this.closest('.entry');
                const icon = this.querySelector('.toggle-icon'); 

                if (parentEntry && icon) {
                    parentEntry.classList.toggle('open');
                    icon.textContent = parentEntry.classList.contains('open') ? '-' : '+';
                }
            });
        });
    }

    // === Mobile Dropdown Menu ===
    const hamburg = document.getElementById('hamburg-icon');
    const cancel = document.getElementById('cancel-icon');
    const dropdown = document.getElementById('dropdown-menu');
    const dropdownLinks = document.querySelectorAll('.dropdown-links a');

    if (hamburg && cancel && dropdown) {
        const openMenu = () => {
            dropdown.classList.add('open');
            hamburg.classList.add('hide'); 
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            dropdown.classList.remove('open');
            hamburg.classList.remove('hide'); 
            document.body.style.overflow = '';
        };

        hamburg.addEventListener('click', openMenu);
        cancel.addEventListener('click', closeMenu);

        if (dropdownLinks.length > 0) {
            dropdownLinks.forEach(link => link.addEventListener('click', closeMenu));
        }
    }


    // === Project Pagination ===
    const projectCards = document.querySelectorAll('.project-card');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');
    const pageIndicatorElement = document.getElementById('pageIndicator');

    if (projectCards.length > 0 && prevPageButton && nextPageButton && pageIndicatorElement) {
        const itemsPerPage = 3;
        let currentPage = 1;

        const showPage = (page) => {
            const totalPages = Math.ceil(projectCards.length / itemsPerPage);

            projectCards.forEach((card, index) => {
                card.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'flex' : 'none';
            });

            pageIndicatorElement.textContent = page;
            prevPageButton.disabled = page === 1;
            nextPageButton.disabled = page === totalPages;
        };

        prevPageButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        nextPageButton.addEventListener('click', () => {
            const totalPages = Math.ceil(projectCards.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });

        window.addEventListener('resize', () => showPage(currentPage));

        showPage(currentPage);
    }


    // === Certification Pagination ===
    const certCards = document.querySelectorAll('.certification-card');
    const prevCertPageButton = document.getElementById('prevCertPage');
    const nextCertPageButton = document.getElementById('nextCertPage');
    const certPageIndicatorElement = document.getElementById('certPageIndicator');

    if (certCards.length > 0 && prevCertPageButton && nextCertPageButton && certPageIndicatorElement) {
        const certItemsPerPage = 3; 
        let currentCertPage = 1;

        const showCertPage = (page) => {
            const totalCertPages = Math.ceil(certCards.length / certItemsPerPage);

            certCards.forEach((card, index) => {
                card.style.display = (index >= (page - 1) * certItemsPerPage && index < page * certItemsPerPage) ? 'flex' : 'none';
            });

            certPageIndicatorElement.textContent = page;
            prevCertPageButton.disabled = page === 1;
            nextCertPageButton.disabled = page === totalCertPages;
        };

        prevCertPageButton.addEventListener('click', () => {
            if (currentCertPage > 1) {
                currentCertPage--;
                showCertPage(currentCertPage);
            }
        });

        nextCertPageButton.addEventListener('click', () => {
            const totalCertPages = Math.ceil(certCards.length / certItemsPerPage);
            if (currentCertPage < totalCertPages) {
                currentCertPage++;
                showCertPage(currentCertPage);
            }
        });

        window.addEventListener('resize', () => showCertPage(currentCertPage));

        showCertPage(currentCertPage);
    }
});
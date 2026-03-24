class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="site-logo">
                    <a href="./">Website</a>
                </div>
                <nav class="header-links">
                    <ul>
                        <li><a href="About.html">About</a></li>
                        <li><a href="Projects.html">Projects</a></li>
                        <li><a href="Contact.html">Contact</a></li>
                        <li><a href="Extras.html">Extras</a></li>
                    </ul>
                </nav>
            </header>
        `
        this.setActiveLink();
    }

    setActiveLink() {
        var currentPath = window.location.pathname.split('/').pop();
        if(currentPath === '') currentPath = 'index.html';

        const navLinks = this.querySelectorAll('.header-links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            if (href === currentPath || (currentPath === 'index.html' && href === './')) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('site-header', SiteHeader);
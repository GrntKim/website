class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                &copy; JMK 2026
            </footer>
        `
    }
}

customElements.define('site-footer', SiteFooter);
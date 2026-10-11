class ReusableNav extends HTMLElement {
  connectedCallback() {
    // Use Fetch (AJAX) to load the external component file
    fetch('./template.html')
      .then(response => response.text())
      .then(html => {
        // Attach a shadow DOM for style encapsulation
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = html;
      });
  }
}



customElements.define('re-nav', ReusableNav);

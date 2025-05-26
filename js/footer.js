class MiFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer class="text-center">
    <p>&copy; 2025 Neotech Store. Todos los derechos reservados.</p>
  </footer>
    `;
  }
}
customElements.define('mi-footer', MiFooter);

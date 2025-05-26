class MiNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
       <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#inicio">
        <img src="Images/Untitled-removebg-preview.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
        Neotech Store
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#nosotros">Nosotros</a></li>
          <li class="nav-item"><a class="nav-link" href="tienda.html">Tienda</a></li>
          <li class="nav-item"><a class="nav-link" href="carrito.html">Carrito</a></li>
          <li class="nav-item"><a class="nav-link" href="#noticias">Noticias</a></li>
          <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
          <li class="nav-item"><a class="nav-link" href="login.html" id="loginLink">Login</a></li>          
        </ul>
        <div id="userIconContainer" class="d-flex align-items-center"></div>
      </div>
    </div>
    </div>
  </div>
</nav>
  </nav>
    `;
  }
}
customElements.define('mi-navbar', MiNavbar);

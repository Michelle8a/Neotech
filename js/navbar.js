class MiNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
       <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="Images/Untitled-removebg-preview.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
        Neotech Store
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html"><i class="bi bi-house-fill"></i>Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="nosotros.html"><i class="bi bi-people-fill"></i>Nosotros</a></li>
          <li class="nav-item"><a class="nav-link" href="tienda.html"><i class="bi bi-bag-fill"></i>Tienda</a></li>
          <li class="nav-item"><a class="nav-link" href="carrito.html"><i class="bi bi-cart-fill"></i>Carrito</a></li>
          <li class="nav-item"><a class="nav-link" href="noticias.html"><i class="bi bi-newspaper"></i>Noticias</a></li>
          <li class="nav-item"><a class="nav-link" href="contacto.html"><i class="bi bi-person-lines-fill"></i>Contacto</a></li>
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

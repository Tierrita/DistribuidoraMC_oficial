// Componente de barra de navegación
// Inserta el header fijo con navegación en todas las vistas

function renderNavbar(sectionTitle) {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="header__container">
      <h1 class="header__title">${sectionTitle}</h1>
      <nav class="nav">
        <ul class="nav__list">
          <li><a href="/mi-aplicacion/frontend/index.html" class="nav__link">Dashboard</a></li>
          <li><a href="/mi-aplicacion/frontend/pages/categorias.html" class="nav__link">Categorías</a></li>
          <li><a href="/mi-aplicacion/frontend/pages/inventario.html" class="nav__link">Productos</a></li>
          <li><a href="/mi-aplicacion/frontend/pages/clientes.html" class="nav__link">Clientes</a></li>
          <li><a href="/mi-aplicacion/frontend/pages/ventas.html" class="nav__link">Ventas</a></li>
        </ul>
      </nav>
    </div>
  `;
  document.body.prepend(header);
}
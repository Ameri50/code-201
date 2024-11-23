// Selecciona el botón de alternar tema
const themeToggleButton = document.querySelector('.theme-toggle');

// Función para cambiar el tema
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); // Cambia el tema
  const icon = themeToggleButton.querySelector('i');

  // Cambiar el icono según el tema activo
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun'); // Icono de sol para el modo claro
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon'); // Icono de luna para el modo oscuro
  }
});

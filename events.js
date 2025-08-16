document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');
  const btn = document.getElementById('saludarBtn');

  box.addEventListener('click', () => {
    alert('Hola! Soy el div');
  });

  // Evita que el click del botón dispare el handler del div por burbujeo
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    // (Opcional) mover la alerta del botón a JS:
    // alert('Hola!');
  });
});


// Deshabilitar clic derecho en toda la página
document.addEventListener('contextmenu', event => event.preventDefault());

// Evitar teclas comunes para inspeccionar código
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

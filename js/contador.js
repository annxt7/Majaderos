// Fecha de fin de las votaciones
const fechaFin = new Date("2025-06-11T23:59:59");

function actualizarTemporizador() {
  const ahora = new Date();
  const diferencia = fechaFin - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("days").textContent = dias;
  document.getElementById("hours").textContent = horas;
  document.getElementById("minutes").textContent = minutos;
  document.getElementById("seconds").textContent = segundos;

  // Si la fecha ya pasó
  if (diferencia <= 0) {
    document.getElementById("contador").textContent = "⏳ Las votaciones han finalizado.";
  }
}

// Ejecuta al cargar
actualizarTemporizador();
setInterval(actualizarTemporizador, 1000);
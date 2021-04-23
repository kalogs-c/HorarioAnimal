"use strict";

function carregar() {
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var img = document.getElementById('img');
  var msg = document.getElementById('msg');
  var bom = document.getElementById('bom');
  var hora = 5;
  msg.innerHTML = "Agora s\xE3o ".concat(hora, ":").concat(minuto);

  if (hora == 5) {
    img.src = 'capivara.png';
    bom.innerHTML = 'Bom Dia!';
    document.body.style.background = '#e6f759';
  }
}
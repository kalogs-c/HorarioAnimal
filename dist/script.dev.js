"use strict";

function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('img');
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  /* TESTE */

  var hora = 12;
  var bom = document.getElementById('bom');
  var falt = Number((minuto - 60) * -1);
  msg.innerHTML = "Agora s\xE3o <strong>".concat(hora, ":").concat(minuto, "</strong>");

  if (hora == 5) {
    img.src = 'capivara.png';
    bom.innerHTML = 'Cinco horas! Horario oficial do CALDO DE CAPIVARA!';
    document.body.style.background = '#e6f759';
  } else if (hora == 6) {
    img.src = 'jupara.png';
    bom.innerHTML = 'Seis horas! Horario oficial do GRÃO DE JUPARA!';
    document.body.style.background = '#fab047';
  } else if (hora < 8) {
    img.src = 'fotomanha.png';
    bom.innerHTML = "Faltam ".concat(falt, " minutos para o CREME DE PAV\xC3OZINHO-DO-PARA!");
    document.body.style.background = '#03505a';
  } else if (hora == 8) {
    img.src = 'pavaozinho.png';
    bom.innerHTML = 'Oito horas! Horário oficial do CREME DE PAVÃOZINHO-DO-PARA!';
    document.body.style.background = '#03505a';
  } else if (hora == 9) {
    img.src = 'fotomanha.png';
    bom.innerHTML = "Faltam ".concat(falt, " minutos para a GELATINA DE LOBO GUAR\xC1!");
    document.body.style.background = '#03505a';
  } else if (hora == 10) {
    img.src = 'loboguara.png';
    bom.innerHTML = 'Dez horas! Horário oficial da GELATINA DE LOBO GUARÁ!';
    document.body.style.background = '#e6f759';
  } else if (hora == 11) {
    img.src = 'jaguatirica.png';
    bom.innerHTML = 'Onze horas! Horário oficial do EXTRATO DE JAGUATIRICA!';
    document.body.style.background = '#e6f759';
  } else if (hora == 12) {
    img.src = 'ararajuba.png';
    bom.innerHTML = 'Meio dia! Horário oficial do EXTRATO DE JAGUATIRICA!';
    document.body.style.background = '#e6f759';
  }
}
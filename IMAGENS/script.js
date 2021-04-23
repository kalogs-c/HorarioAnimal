var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
function carregar() {
    /* TESTE */
    //var hora = 24 
    var bom = document.getElementById('bom')
    var faltmin = Number((minuto - 60) * -1)
    if (hora == 5) {
        img.src = 'capivara.png'
        bom.innerHTML = 'Cinco horas! Horario oficial do CALDO DE CAPIVARA!'
        document.body.style.background = '#e6f759'
    } else if (hora == 6) {
        img.src = 'jupara.png'
        bom.innerHTML = 'Seis horas! Horario oficial do GRÃO DE JUPARA!'
        document.body.style.background = '#fab047'
    } else if (hora == 7) {
        img.src = 'fotomanha.png'
        bom.innerHTML = `Faltam ${faltmin} minutos para o CREME DE PAVÃOZINHO-DO-PARA!`
        document.body.style.background = '#03505a'
    } else if (hora == 8) {
        img.src = 'pavaozinho.png'
        bom.innerHTML = 'Oito horas! Horário oficial do CREME DE PAVÃOZINHO-DO-PARA!'
        document.body.style.background = '#03505a'
    } else if (hora == 9) {
        img.src = 'fotomanha.png'
        bom.innerHTML = `Faltam ${faltmin} minutos para a GELATINA DE LOBO GUARÁ!`
        document.body.style.background = '#03505a'
    } else if (hora == 10) {
        img.src = 'loboguara.png'
        bom.innerHTML = 'Dez horas! Horário oficial da GELATINA DE LOBO GUARÁ!'
        document.body.style.background = '#e6f759'
    } else if (hora == 11) {
        img.src = 'jaguatirica.png'
        bom.innerHTML = 'Onze horas! Horário oficial do EXTRATO DE JAGUATIRICA!'
        document.body.style.background = '#e6f759'
    } else if (hora == 12) {
        img.src = 'ararajuba.png'
        bom.innerHTML = 'Meio dia! Horário oficial do EXTRATO DE JAGUATIRICA!'
        document.body.style.background = '#e6f759'
    } else if (hora == 13) {
        img.src = 'fototarde.png'
        bom.innerHTML = `Faltam ${faltmin} minutos para o CALDO DE JACARAMAÇU!`
        document.body.style.background = '#fab047'
    } else if (hora == 14) {
        img.src = 'jacaramaçu.png'
        bom.innerHTML = `Quatorze horas! Horário oficial do CALDO DE JACARAMAÇU!`
        document.body.style.background = '#fab047'
    } else if (hora == 15) {
        img.src = 'jacutinga.png'
        bom.innerHTML = 'Quinze horas! Horário oficial do EXTRATO DE JACUTINGA!'
        document.body.style.background = '#fab047'
    } else if (hora == 16) {
        img.src = 'formiga.png'
        bom.innerHTML = 'Dezesseis horas! Horário oficial do CHÁ DE FORMIGA!'
        document.body.style.background = '#fab047'
    } else if (hora == 17) {
        img.src = 'tamanduamirim.png'
        bom.innerHTML = 'Dezessete horas! Horário oficial do EXTRATO DE TAMANDUÁ-MIRIM!'
        document.body.style.background = '#fab047'
    } else if (hora == 18) {
        img.src = 'pinguimreal.png'
        bom.innerHTML = 'Dezoito horas! Horário oficial do SAPATEADO DO PINGUIM REAL!'
        document.body.style.background = '#fab047'
    } else if (hora == 19) {
        img.src = 'fotonoite.png'
        bom.innerHTML = `Faltam ${faltmin} minutos para a ESSÊNCIA DE PIRARUCU!`
        document.body.style.background = '#03505a'
    } else if (hora == 20) {
        img.src = 'pirarucu.png'
        bom.innerHTML = `Vinte horas! Horário oficial da ESSÊNCIA DE PIRARUCU!`
        document.body.style.background = '#03505a'
    } else if (hora == 21) {
        img.src = 'toupeirapelado.png'
        bom.innerHTML = 'Vinte e uma horas! Horário oficial do SUCO DE TOUPEIRA PELADO!'
        document.body.style.background = '#03505a'
    } else if (hora == 22) {
        img.src = 'porcoespinho.png'
        bom.innerHTML = 'Vinte e duas horas! Horário oficial da FARINHA DE PORCO ESPINHO!'
        document.body.style.background = '#03505a'
    } else if (hora == 23) {
        img.src = 'tatubola.png'
        bom.innerHTML = 'Vinte e três horas! Horário oficial do TEMPERO DE TATU BOLA!'
        document.body.style.background = '#03505a'
    } else if (hora < 5 && hora > 0) {
        var falthor = Number((hora - 5) * -1)
        img.src = 'fotomanha.png'
        bom.innerHTML = `Faltam ${falthor} horas e ${faltmin} minutos para o CALDO DE CAPIVARA`
        document.body.style.background = '#03505a'
    } else {
        img.src = 'macaco.png'
        bom.innerHTML = 'Meia noite! Horário oficial do OLEO DE MACACO!'
        document.body.style.background = '#03505a'
    }
}

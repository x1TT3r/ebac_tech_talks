AOS.init();

var dataEvento = new Date("Dec 12, 2025 19:00:00");
var timeStampDoEvento = dataEvento.getTime();

var contadorDeHoras = setInterval(function(){
    var agora = new Date();
    
    var timeStampAtual = agora.getTime();
    
    var distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    var diaEmMs = 1000 * 60 * 60 * 24;
    var horaEmMs = 1000 * 60 * 60;
    var minutosEmMs = 1000 * 60;

    var diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    var horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / (horaEmMs));

    var minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);

    var segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contadorDeHoras);
        document.getElementById("contador").innerHTML = 'Evento Expirado !'
    }

}, 1000);
//Q1
document.getElementById("estados").onchange = function () {
    localStorage.setItem("estado", document.getElementById("estados").value);
};

document.getElementById("estados").value = localStorage.estado;

//Q2
document.getElementById("confirmar_pedido").onclick = function () {
    var opc = document.getElementById("envios").value;
    var data_atual = new Date();
    if (opc != "escolha") {
        if (opc == 'normal') {
            var outraData = new Date();
            outraData.setDate(data_atual.getDate() + 18);
            document.getElementById("data_pedido").innerHTML = format_time(data_atual.getDate()) + "/" + format_time((data_atual.getMonth() + 1)) + "/" + format_time(data_atual.getFullYear());
            document.getElementById("data_entrega").innerHTML = format_time(outraData.getDate()) + "/" + format_time((outraData.getMonth() + 1)) + "/" + format_time(outraData.getFullYear());
        }
        else if (opc == 'express') {
            var outraData = new Date();
            outraData.setDate(data_atual.getDate() + 12);
            document.getElementById("data_pedido").innerHTML = format_time(data_atual.getDate()) + "/" + format_time((data_atual.getMonth() + 1)) + "/" + format_time(data_atual.getFullYear());
            document.getElementById("data_entrega").innerHTML = format_time(outraData.getDate()) + "/" + format_time((outraData.getMonth() + 1)) + "/" + format_time(outraData.getFullYear());

        }
    }
}

function format_time(time) {
    if (time >= 0 && time <= 9) {
        var formatted_time = time.toString();
        formatted_time = "0" + formatted_time;
    }
    else {
        var formatted_time = time.toString();
    }

    return formatted_time;
}

//Q3
var iniciado = false, hora_inicio, hora_atual, tempo_passado, init_cronometro, hora, minutos, segundos, mili;

document.getElementById("comecar_parar").onclick = function () {

    if (!iniciado) {
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";
        if (!hora_inicio) {
            hora_inicio = new Date().getTime();
        }
        else {
            hora_inicio = new Date().getTime() - tempo_passado;

        }
        init_cronometro = window.setInterval(function () {

            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;

            hora = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (hora * 360000);

            minutos = Math.floor(resto / 60000);
            resto = resto - (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto = resto - (segundos * 1000);

            mili = resto;

            document.getElementById("cronometro").innerHTML = tempo_passado;
            document.getElementById("cronometro").innerHTML = format_time(hora) + ":" + format_time(minutos) + ":" + format_time(segundos) + " " + format_timeMili(mili);

        })
    }
    else {
        iniciado = false;
        window.clearInterval(init_cronometro);
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

document.getElementById("zerar").onclick = function () {
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
}


function format_time(time) {
    if (time >= 0 && time <= 9) {
        var formatted_time = time.toString();
        formatted_time = "0" + formatted_time;
    }
    else {
        var formatted_time = time.toString();
    }

    return formatted_time;
}

function format_timeMili(time) {
    if (time >= 0 && time <= 9) {
        var formatted_time = time.toString();
        formatted_time = "00" + formatted_time;
    }
    else if (time >= 10 && time <= 99) {
        var formatted_time = time.toString();
        formatted_time = "0" + formatted_time;
    }
    else {
        var formatted_time = time.toString();
    }

    return formatted_time;
}

//Q4
var carros = [
    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }
];


function busca_preco(categoria) {
    switch (categoria) {
        case '1':
            return 11.22;
            break;
        case '2':
            return 22.45;
            break;
        case '3':
            return 16.88;
            break;
        case '4':
            return 33.65;
            break;
        default:
            return 0;
    }
}

var valor = 0;

for (var i = 0; i < carros.length; i++) {
    valor = valor + busca_preco(carros[i].categoria);
}
valor = valor.toFixed(2);
document.getElementById("faturamento_total").innerHTML = valor.toString().replace(".", ",");


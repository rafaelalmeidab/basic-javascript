//Q1
function c_To_f() {
    var tempC = parseFloat(document.getElementById("temp_celsius").value);
    var result = (((9 * tempC) / 5) + 32).toFixed(2);
    return result;
}

document.getElementById("converter").onclick = function () {
    var temp = c_To_f();
    document.getElementById("temp_fahr").innerHTML = temp;
}

//Q2
var list_element = document.getElementById("anos_copa");
list_element.innerText = "";
for (var a = 1930; a <= 2018; a = a + 4) {
    list_element.innerHTML += '<li>' + a + '</li>';
}

//Q3
document.getElementById("calcular").onclick = function () {
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n_faltas = ((parseInt(document.getElementById("n_faltas").value) * 100) / 20);
    var media = (n1 + n2) / 2;


    if (media >= 6.5 && n_faltas <= 30) {
        document.getElementById("result").innerHTML = "Você foi aprovado!";
    }
    else if (media >= 6.5 && n_faltas > 30) {
        document.getElementById("result").innerHTML = "Você foi reprovado por faltas!";
    }
    else if (media < 6.5 && n_faltas <= 30) {
        document.getElementById("result").innerHTML = "Você foi reprovado por nota!";
    }
    else {
        document.getElementById("result").innerHTML = "Você foi reprovado por nota e por faltas!";
    }
}

//Q4
var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
    }
];

//Errado
/*
var elementos = document.getElementsByTagName("tr");
for (var i = 0; i < vendas_cursos.length; i++) {
    elementos[1].innerHTML = "<td>" + vendas_cursos[i].aluno + "</td><td>" + vendas_cursos[i].data + "</td><td>" + vendas_cursos[i].valor + "</td>";
}
*/

//Correção
var total_vendas = 0;

document.getElementById("vendas_cursos").innerHTML = '';

for (var i = 0; i < vendas_cursos.length; i++) {
    if (vendas_cursos[i].reembolso == null) {
        total_vendas = total_vendas + vendas_cursos[i].valor;

        var linhaHTML = "<tr><td>" + vendas_cursos[i].aluno + " </td><td>" + vendas_cursos[i].data + "</td><td>" + vendas_cursos[i].valor + "</td></tr>";

        document.getElementById("vendas_cursos").innerHTML += linhaHTML;
    }

}

document.getElementById("total_vendas").innerHTML = total_vendas;

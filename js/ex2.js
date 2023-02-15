//Q1
var result = parseInt(document.getElementById("num_1").innerHTML) + parseInt(document.getElementById("num_2").innerHTML);
document.getElementById("resultado").innerHTML = "<strong>" + result + "</strong>"

//Q2
function c_To_f() {
    var tempC = parseFloat(document.getElementById("caixa_azul").innerHTML);
    var result = (((9 * tempC) / 5) + 32).toFixed(2);
    document.getElementById("caixa_amarela").innerHTML = result;
}
c_To_f();

//Q3
var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];

var a1 = [];
a1.push(grupos[1]);
a1.push(grupos[2]);
a1.push(["Mari", "Felipe", "Carla"]);
console.log("Q3");
console.log(a1);

//Q4
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

function media_avaliacoes() {
    var media = ((curso.n_aval_5_estrelas * 5 + curso.n_aval_4_estrelas * 4 + curso.n_aval_3_estrelas * 3 + curso.n_aval_2_estrelas * 2 + curso.n_aval_1_estrela) / (curso.n_aval_5_estrelas + curso.n_aval_4_estrelas + curso.n_aval_3_estrelas + curso.n_aval_2_estrelas + curso.n_aval_1_estrela)).toFixed(2);
    return media;
}

function total_avaliacoes() {
    var total = (curso.n_aval_5_estrelas + curso.n_aval_4_estrelas + curso.n_aval_3_estrelas + curso.n_aval_2_estrelas + curso.n_aval_1_estrela);
    return total;
}
document.getElementById("media_aval").innerHTML = media_avaliacoes();
document.getElementById("total_aval").innerHTML = total_avaliacoes();

//Q5
var funcionario = {
    'nome': 'Rafael',
    'sobrenome': 'Almeida',
    'email': 'rafaelalmeidab@hotmail.com'
}

function objectToHTML(param) {
    return "<div class='tableBox'><table><tr><th>Nome Completo</th><th>Email</th></tr><tr><td>" + param.nome + " " + param.sobrenome + "</td><td>" + param.email + "</td></tr></table></div>";
}

document.getElementById("tabela").innerHTML = objectToHTML(funcionario);

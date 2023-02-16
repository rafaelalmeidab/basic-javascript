
//Aula 3 - Variáveis
/*
var latitude = 40.232;
var longitude = -2.239;

console.log(latitude);
console.log(latitude);

var Latitude = 88.234;
console.log(Latitude);

var LaTitude = -107.662;
console.log(LaTitude);
*/

//Aula 4 - Strings
/*
var nome = "Rafael";
var sobrenome = "Almeida";
console.log(nome + ' ' + sobrenome);
console.log(nome[0]);
console.log(nome[5]);
console.log(nome.length);
*/

//Aula 5 - Números
/*
var ano = 1996;
var preco = 16.99;
var temp = -5;
var not_cientifica = 2.2e20;

var num1 = 10;
var num2 = 23;
var soma = num1 + num2;
console.log(soma);
var subtracao = num1 - num2;
console.log(subtracao);
var div = num1/num2;
console.log(div);
var mult = num1*num2;
console.log(mult);
var media = (num1+num2)/2;
console.log(media);
console.log(Math.pow(2, 4));
console.log(Math.pow(num1, 4));
console.log(Math.round(2.7));
console.log(Math.floor(2.7));
console.log(Math.sqrt(16));

var increment = 20;
increment = increment + 5;
console.log(increment);
increment = 1;
increment += 5;
console.log(increment);

increment++;
console.log(increment);

increment -= 1;
console.log(increment);

increment--;
console.log(increment);

var ddd = 32;
var tel = 34627545;

var ddd_string = ddd.toString();
var tel_string = tel.toString();
console.log(ddd_string+tel_string);

var idade = '25';
idade = parseInt(idade);
idade ++;
console.log(idade);
*/

//Aula 6 - Booleanos
/*
var teste = true;
var teste2 = 'true';
var idade = '60';
var teste3 = 65<60;
console.log(teste3);
var teste3 = 59<60;
console.log(teste3);
var teste3 = idade == 60;
console.log(teste3);
var teste3 = idade === 60;
console.log(teste3);

var vtype = true;
console.log(typeof(vtype));
var vtype = 'true';
console.log(typeof(vtype));
var vtype = '65';
console.log(typeof(vtype));
console.log(typeof(vtype) == 'number');
*/

//Aula 7 - Null e Undefined
/*
var undf;
console.log(undf);
console.log(typeof undf);

var nome = "Rafael";
console.log(nome[6]);

var temp = 35;
console.log(temp);
temp = null;
console.log(temp);
console.log(typeof temp);
console.log(temp == undefined);
console.log(temp === undefined);
*/

//Aula 10 - Trabalhando com o DOM
/*
var conteudoCaixa = document.getElementById("caixa_azul").innerHTML;
console.log(conteudoCaixa);

document.getElementById("caixa_amarela").innerHTML = conteudoCaixa;
document.getElementById("caixa_azul").innerHTML = "<h1>Aula 10 - Trabalhando com o DOM!</h1>";
document.getElementById("caixa_amarela").innerHTML = '<h1>' + conteudoCaixa + '</h1>';
*/

//Aula 11 - Funções
/*
function soma_numeros() {
    var x = 5;
    var y = 8;
    var soma = x + y;
    console.log(soma);
}

function soma_args(num1, num2) {
    var soma = num1 + num2;
    console.log(soma);
}

function soma_args_return(num1, num2) {
    var soma = num1 + num2;
    return soma;
}

soma_numeros();
soma_args(1, 2);
soma_args(-2, 47);
var n1 = 50;
var n2 = 30;
console.log(soma_args_return(n1, n2));


function valor_imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

var meu_peso = parseFloat(document.getElementById("peso").innerHTML);
var minha_altura = parseFloat(document.getElementById("altura").innerHTML);
var meu_imc = valor_imc(meu_peso, minha_altura);
document.getElementById("imc").innerHTML = meu_imc.toFixed(2);
*/

//Aula 12 - Arrays
/*
var alunos = ['João', 'Maria', 'Rafael'];
var num_primos = [2, 3, 5, 7, 11, 13];
console.log(alunos.length);
console.log(num_primos[2]);
console.log(num_primos[10]);

var grupos = [['A', 'B'],
['C', 'D', 'E'],
['F', 'G', 'H', 'I']];
console.log(grupos.length);

var cursos = ["HTML", "Python", "PHP"];
cursos.push("Javascript");
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]
cursos.unshift("Bootstrap");
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]
cursos.pop();
console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]
cursos.shift();
console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]
var ingredientes = ["pão branco", "queijo", "presunto"];
ingredientes[0] = "pão integral";
ingredientes[3] = "maionese";
ingredientes.push("queijo brie");
console.log(ingredientes);
console.log(ingredientes.slice(0, 2));
*/

//Aula 13 - Objetos
/*
var funcionario = {
    'nome': 'Rafael Almeida',
    'idade': 26,
    'cargo': 'Programador'
}

console.log(funcionario.nome);
console.log(funcionario['nome']);

funcionario.cargo = 'Engenheiro';
funcionario.cidade = 'Leopoldina';
console.log(funcionario);

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }

];

console.log(typeof cursos);
console.log(cursos[1].categorias[0]);
cursos[2].categorias[1] = 'administração de empresas';
console.log(cursos);
*/

//Aula 14 - Métodos
/*
var aluno = {
    'nome': 'Rafael',
    'sobrenome': 'Almeida',
    'ano_nasc': 1996,
    'nome_completo': function () {
        var n_completo = this.nome + " " + this.sobrenome;
        return n_completo;
    },
    'ver_idade': function () {
        var idade = 2022 - this.ano_nasc;
        return idade;
    }
};
console.log("TESTE");
console.clear();
console.log(aluno.nome_completo());
console.log(aluno.ver_idade());
*/

//Aula 16 - Eventos
/*
document.getElementById("click-me").onclick = function () {
    alert('Você clicou no botão');
};

document.getElementById("hover-me").onmouseover = function () {
    alert('Você passou o cursor por cima do botão');
};

document.getElementById("leave-me").onmouseout = function () {
    alert('Você passou o cursor por cima do botão e depois saiu');
};

document.onkeydown = function () {
    alert("Você apertou a tecla: " + event.keyCode);
}

function button_clicked() {
    alert('Você clicou no botão');
}
*/

//Aula 17 - Manipulação CSS
/*
var botao = document.getElementById("botao_cor");
botao.onclick = function () {
    this.style['background-color'] = 'yellow';
    document.getElementById("botao_cor").style.transform = "translateX(100px)";
}
*/

//Aula 18 - Outros getElement
/*
var exemplo = document.getElementsByClassName("exemplo");
exemplo[0].innerHTML = "Teste 1";
console.log(exemplo);

var exemplo2 = document.getElementsByTagName("p");
console.log(exemplo2);
*/

//Aula 19 - Estruturas de repetição (for)
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var alunos = ['Rafael', 'Fernanda', 'Mari', 'Carol', 'Lucca'];
for (var a = 0; a < alunos.length; a++) {
    console.log(alunos[a]);
}

var carro = {
    'Ano': 2018,
    'Modelo': 'Fox',
    'Cilindradas': '1.8',
    'Combustível': 'Gasolina'
}

for (var b in carro) {
    console.log(b + ": " + carro[b]);
}

var elementos = document.getElementsByClassName("exemplo");
console.log(elementos);

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = 'orange';
    elementos[c].style['font-weight'] = 'bold';
}

var elementos = document.getElementsByTagName("p");
console.log(elementos);

for (var c = 0; c < elementos.length; c++) {
    elementos[c].style.color = 'orange';
    elementos[c].style['font-weight'] = 'bold';
}
*/

//Aula 20 - Estruturas de repetição (while/do while)
/*
var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

var elementos = document.getElementsByClassName("exemplo");
console.log(elementos);
count = 0;

while (count < elementos.length) {
    elementos[count].style.color = 'orange';
    elementos[count].style['font-weight'] = 'bold';
    count++;
}

count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
*/

//Aula 21 - Estruturas Condicionais
/*
var idade = 26
if (idade < 18) {
    console.log("Menor de idade.");
}
else if (idade == 18) {
    console.log("Tem 18 anos.");
}
else {
    console.log("Tem mais que 18 anos.");
}

var nota = 8;
var faltas = 1;
if (nota >= 7 && faltas <= 4) {
    console.log("Aluno aprovado!");
}
else {
    console.log("Aluno reprovado.");
}

if (nota < 7 || faltas > 4) {
    console.log("Aluno reprovado.");
}
else {
    console.log("Aluno aprovado!");
}

var nome = "";
if (nome) {
    console.log("Nome: " + nome);
}
else {
    console.log("Nome não informado.");
}
*/

//Aula 22 - Aninhamento de loops e condicionais
/*
var socio = false;
var idade = 25;

if (socio || idade >= 65) {
    console.log("O ingresso é grátis!");
}
else {
    if (idade < 18) {
        console.log("Preço a pagar: R$6,00");
    }
    else {
        console.log("Preço a pagar: R$12,00");
    }
}

var funcionarios = [
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39
        //'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    }
];

var list_element = document.getElementById("filhos");
for (var i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].filhos) {
        var lista_filhos = funcionarios[i].filhos;
        for (var j = 0; j < lista_filhos.length; j++) {
            list_element.innerHTML += '<li>' + lista_filhos[j] + ' - Pai: ' + funcionarios[i].nome + '</li>';
        }
    }
}
*/

//Aula 24 - BOM
/*
window.onmousemove = function (e) {
    if (e.pageY < 10) {
        alert("Você realmente deseja sair?");
    }
}
*/

//Aula 25 - Local Storage
/*
window.localStorage.setItem("nome", "Rafael");
console.log(localStorage['nome']);
localStorage.removeItem("nome");

console.log(localStorage['nome']);
document.getElementById("enviar-nome").onclick = function () {
    var nome = document.getElementById("nome-usuario").value;
    localStorage.setItem("nome", nome);

    document.getElementById("name-field").style.display = 'none';
    document.getElementById("welcome-area").style.display = 'initial';
    document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + ". Tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
}

document.getElementById("not-me").onclick = function () {
    localStorage.removeItem("nome");

    document.getElementById("welcome-area").style.display = 'none';
    document.getElementById("name-field").style.display = 'initial';
}

if (localStorage.nome) {
    document.getElementById("name-field").style.display = 'none';
    document.getElementById("welcome-area").style.display = 'initial';
    document.getElementById("welcome-text").innerHTML = "Olá, " + localStorage.nome + ". Tudo bem?";
    document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";

}
*/

//Aula 26 - Data e Hora
/*
var data_hoje = new Date();
//console.log(data_hoje);

var data_nasc = "1996-01-09";
var ano_nasc = new Date(data_nasc).getFullYear();
var ano_atual = new Date().getFullYear();
var idade = ano_atual - ano_nasc;
// console.log(idade);

var data1 = new Date("2018-03-20");
var data2 = new Date("2018-04-06");
var result = (data2 - data1) / 86400000;

document.getElementById("dias_entrega").innerHTML = result + " dias";
*/

//Aula 27 - Métodos de Tempo
/*
document.getElementById("mostrar-loader").onclick = function () {
    document.getElementById("spinner-loader").style['display'] = 'initial';
    window.setTimeout(function () {
        document.getElementById("spinner-loader").style['display'] = 'none';
        console.log("sumiu");
    }, 5000);
}

var count = 0;
var inter = window.setInterval(function () {
    console.log(count);
    count++;
    if (count >= 10) {
        window.clearInterval(inter);
    }
}, 1000);
*/

//Aula 28 - Desafio Relógio
/*
window.setInterval(function () {
    var date = new Date();
    var hora = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();
    document.getElementById("relogio").innerHTML = format_time(hora) + ":" + format_time(minutos) + ":" + format_time(segundos);
}, 1000);

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
*/

//Aula 29 - Switch
/*
function pedagio(categoria) {
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
            return "Categoria não encontrada!";
    }
}

var categoria_veiculo = '1';
console.log(pedagio(categoria_veiculo));
var categoria_veiculo = '5';
console.log(pedagio(categoria_veiculo));
*/

//Aula 30 - Break/Continue
/*
var lista = [1, 323, 4, 5, 6, 77, 12, 234, 19];
for (var i = 0; i < lista.length; i++) {
    if (lista[i] == 12) {
        console.log("Valor encontrado: ", lista[i]);
        break;
    }
    console.log('Tentativa: ', i);
}

var num = 0;
while (num < 20) {
    num++;
    if (num % 2 == 0) {
        continue;
    } else {
        console.log(num);
    }
}
*/

//Aula 30 - Formulários
/*
document.getElementById("mostrar_opcao").onclick = function () {
    var campo_select = document.getElementById("options");
    var indice = campo_select.options.selectedIndex;
    var opcao = campo_select.options[indice].innerHTML;

    document.getElementById("opcao_selecionada").innerHTML = opcao;
}

document.getElementById("mostrar_radio").onclick = function () {
    var radio = document.getElementsByName("genero");
    var radio_selected;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radio_selected = radio[i].value;
            break;
        }
    }

    document.getElementById("radio_selecionado").innerHTML = radio_selected;
}

document.getElementById("mostrar_check").onclick = function () {
    document.getElementById("check_selecionado").innerHTML = '';
    var check = document.getElementsByName("interesse");
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
            document.getElementById("check_selecionado").innerHTML += "<li>" + check[i].value + "</li>";
        }
    }
}

document.getElementById("mostrar_data").onclick = function () {
    var data = document.getElementById("data_evento").value;
    var data_completa = new Date(data);
    var dia = data_completa.getDate() + 1;
    var mes = data_completa.getMonth() + 1;
    var ano = data_completa.getFullYear();

    document.getElementById("data_selecionada").innerHTML = dia + "/" + mes + "/" + ano;

}
*/

//Aula 31 - On Change
/*
document.getElementById("escolaridade").onchange = function () {

    var campo_select = document.getElementById("escolaridade");
    var indice_selecionado = campo_select.options.selectedIndex;
    var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

};


var check = document.getElementsByName("lanche");
for (var a = 0; a < check.length; a++) {
    check[a].onchange = function () {
        document.getElementById("check_selecionado").innerHTML = "";
        for (var b = 0; b < check.length; b++) {
            if (check[b].checked) {
                document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
            }
        }
    }
}
*/

//Aula 34 - Sintaxe jQuery
/*
document.getElementById("exemplo").innerHTML = "Olá!";
$("#exemplo").html("Olá!");

$("#esconder").click(function () {
    //$(".exemplo").css("display", "none");
    $(".exemplo").hide();

});
*/

//Aula 35 - Manipulando HTML
/*
var conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

$("#paragrafo-html").html("Mudar conteúdo do parágrafo");
conteudo_html = $("#paragrafo-html").html();
console.log(conteudo_html);

var url = $("#paragrafo-link").attr("href");
console.log(url);

$("#paragrafo-link").attr("href", "http://www.udemy.com");
var url = $("#paragrafo-link").attr("href");
console.log(url);

$("#mudar_imagem").click(function () {
    $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    $("#mudar_imagem").hide();
});

// Remover o conteúdo, mantendo o elemento:
$("#paragrafo-empty").empty();

// Remover o elemento:
$("#paragrafo-empty").remove();
*/

//Aula 36 - Loop Each
/*
var lista = ["HTML", "CSS", "Javascript", "jQuery", "PHP"];

$.each(lista, function (index, valor) {
    console.log("lista[" + index + "] = " + valor);
});

var pessoa = {
    'nome': 'João Pedro',
    'DN': '20/01/1990',
    'CPF': '111.111.111-11'
};

$.each(pessoa, function (index, valor) {
    console.log("pessoa->" + index + " = " + valor);
});

var li_tela = $("#interesses").text(); // errado
var li_tela = $("#interesses li"); // correto
console.log(li_tela);
$.each(li_tela, function (index, valor) {
    //console.log("elementos[" + index + "] = " + valor); - errado
    console.log("elementos[" + index + "] = " + $(valor).text()); // correto
});
*/

//Aula 37 - Formulários
/*
console.log($("#campo_nome").val("Rafael Almeida"));
var opcao = $("#options").val();
$("#options").find(":selected").text();

$("#options").change(function () {
    console.log($("#options").find(":selected").text());
});

var radio_opcao = $("input[name='genero']:checked").val();
console.log(radio_opcao);
var radio_opcao = $("input[name='genero']:checked").parent("span").text();
console.log(radio_opcao);

$("input[name='interesse']").change(function () {
    var checkboxes_selecionados = $("input[name='interesse']:checked");
    var textos = [];

    $.each(checkboxes_selecionados, function (index, value) {
        textos.push($(value).parent("span").text());
    });

    console.log(textos);
});
*/

//Aula 38 - Manipulação de Classes CSS
/*
$("#adicionar_classe").click(function () {
    $("#paragrafo-classes").addClass("styling");
});


$("#remover_classe").click(function () {
    $("#paragrafo-classes").removeClass("styling");
});

$("#alternar_classe").click(function () {
    $("#paragrafo-classes").toggleClass("styling");
});
*/

//Aula 39 - Eventos
/*
$(document).ready(function () {
    console.log("document ready!");
});

$("#nome").on({
    keyup: function () {
        if ($("#nome").val() != '') {
            $("#confirmar").css("display", "block");
        }
        else {
            $("#confirmar").css("display", "none");
        }
    }
});
*/

//Aula 40 - Efeitos jQuery
/*
$("#botao-esconder").click(function () {
    $(this).hide(1000, function () {
        $("#texto-escondido").show();
    });
});

$("#toggle-tab").click(function () {
    $("#tab-content").slideToggle(500, function () {
        $("#toggle-tab").toggleClass("flip");
    });
});
*/

//Aula 41 - Animate
/*
$("#animar").click(function () {
    $("#quadrado").animate({
        width: "+=200px"
    }, 1000);

    $("#quadrado").animate({
        height: "+=200px"
    }, 1000);

    $("#quadrado").animate({
        paddingLeft: "+=200px"
    }, 1000);
});
*/

//Aula 42 - Métodos em Cadeia
/*
$("#animar").click(function () {
    $("#quadrado").animate({
        width: "+=200px"
    }, 1000)
        .animate({
            height: "+=200px"
        }, 1000, function () {
            $("#quadrado").css("background-color", "green");
        })
});
*/

//Aula 43 - Callback
/*
function pegar_usuario(callback){

        window.setTimeout(function(){
            var u = {
                'nome': 'João'
            };
            callback(u);
        }, 1000);

    }
            
    function saudar_usuario(user) {
        console.log('Olá ' + user.nome + ', como vai?');
    }
            
    pegar_usuario(saudar_usuario);
*/

//Aula 44 - Lidando com erros
/*
function pegar_usuario(){

    window.setTimeout(function(){
        var u = {
            'nome': 'Rafael'
        };
        return u;
    }, 1000);
    
}
        
function saudar_usuario(user) {
    console.log('Olá ' + user.nome + ', como vai?');
}

var user = {'nome': ''};

try{
    //var user = pegar_usuario();
    //saudar_usuario(user);

    if(user.nome == ''){
        throw 'Nome em branco!';
    }

    saudar_usuario(user);

}
catch(err){
    console.log(err);
}
*/
/*
finally{
    console.log('Esse trecho sempre será executado!');
}
*/

//Aula 45 - Ternário
//condição ? "valor se for verdadeiro" : "valor se for falso";

// Exemplo com if normal:
/*
var nome = "";
if (nome) {
    var mensagem = "Olá " + nome;
} else {
    var mensagem = "Nome não informado";
}

var mensagem;

// Exemplo com if ternário:
nome ? mensagem = "Olá " + nome : mensagem = "Nome não informado";

// Ou ainda mais simples:
mensagem = nome ? "Olá " + nome : "Nome não informado";

console.log(nome);
console.log(mensagem);

nome = "Rafael";
idade = 26;
mensagem = (nome && idade) ? "Olá " + nome + ", você tem " + idade + " anos."
: (!nome && !idade) ? "Nome e idade não informados."
: (!idade) ? "Idade não informada."
: "Nome não informado.";

console.log(mensagem);
*/

//Aula 46 - Escopo
/*
function criar_nome(){
    nome = 'Rafael';
    var nome2 = 'Fernanda';

    console.log("Nome: " + nome + " - Nome2: " + nome2);
}

criar_nome();

console.log(nome);
*/
//A variável 'nome2' não é mostrada no console.log pois foi criada sob a keyword var dentro 
//do escopo de uma função. Entretanto, a variável 'nome' é mostrada pois como não possui umar keyword,
//ela é uma variável global!
//console.log(nome2);

/*
if(true){
    var nome = "Mari";
    let nome2 = "Lucca";
}

//A keyword let define uma variável qualquer como local sob incidência da mesma dentro de qualquer
//chave no código, diferente da var, que só se torna local em funções.
console.log(nome);
console.log(nome2);
*/

/*
for (let i=0; i<5; i++){
    console.log(i);
}

const pi = "3.14";
pi = 0;
*/

//Aula 47 - Namespace
/*
var nome = "Rafael";

function ver_nome(){
    console.log(nome);
}

ver_nome();

var meuWebApp = {
    "nome" : "Felipe",
    "ver_nome": function() {
        console.log(this.nome);
    }
}

meuWebApp.ver_nome(); // O console mostrará 'Felipe'
// Podemos usar a keyword this para referenciar o objeto que guarda nossas variáveis e funções.

var meuWebApp = (function(){
    var nome = "Rafael";

    return {
        'ver_nome' : function(){
            return nome;
        },
        'mudar_nome' : function(novo_nome){
            nome = novo_nome;
        },
        'apagar_nome' : function(){
            nome = null;
        }
    }
})();

console.log(meuWebApp.ver_nome()); 
console.log(meuWebApp.mudar_nome("Giuliano"));
console.log(meuWebApp.ver_nome());
console.log(meuWebApp.apagar_nome());
console.log(meuWebApp.ver_nome());
*/

//Aula 48 - JSON - JavaScript Object Notation
/*
var funcionario = {
    'nome': "Fernanda Costa",
    'd_nascimento': '1988-10-01',
    'CPF': '111.111.111-11'
};

var funcionario_json = JSON.stringify(funcionario);
console.log(funcionario_json);
 
var funcionario_obj = JSON.parse(funcionario_json);
console.log(funcionario_obj);
console.log(funcionario_obj.nome);

var grupo_A = ['Real Madrid', 'Porto', 'Liverpool', 'Manchester United'];
console.log( JSON.stringify(grupo_A) );
console.log( typeof JSON.stringify(grupo_A) ); // O console mostrará "string"
*/

//Aula 49 - AJAX - Asynchronous JavaScript And XML

//Aula 50 - AJAX Request
/*
var xhttp = new XMLHttpRequest();

//Por conta de compatibilidade
var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

//API - Open Weather Map
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=-21.879101&lon=-42.694851&appid=93fd0da71a3f19b539f89d5617eab85a");
xhttp.send();
*/

//Aula 51 - AJAX Response
/*
function tempo_alemParaiba(callback) {
    var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText);
            
        } 
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=-21.879101&lon=-42.694851&appid=93fd0da71a3f19b539f89d5617eab85a");
    xhttp.send();
}

function mostrar_temperatura(dados){
    var dados_obj = JSON.parse(dados);
    console.log("A temperatura em Além Paraíba é de " + (dados_obj.main.temp-273) + "ºC.");
}

function mostrar_dados(dados){
    var dados_obj = JSON.parse(dados);
    console.log(dados_obj);

}

//tempo_alemParaiba(mostrar_temperatura);
tempo_alemParaiba(mostrar_dados);
*/

//Aula 52 - AJAX com jQuery
/*$.ajax({
    url : "https://api.openweathermap.org/data/2.5/weather?lat=-21.879101&lon=-42.694851&appid=93fd0da71a3f19b539f89d5617eab85a",
    type: "GET",
    dataType: "json"
}).done(function(data){
    console.log(data);
}).fail(function(){
    console.log("Erro na requisição");
});
*/
//OU
/*
$.ajax({
    url : "https://api.openweathermap.org/data/2.5/weather?lat=-21.879101&lon=-42.694851&appid=93fd0da71a3f19b539f89d5617eab85a",
    type: "GET",
    dataType: "json",
    success: function(data){
        console.log(data);
        console.log("Mínima: " + parseFloat(data.main.temp_min-273));
        $("#temp_min").html(parseFloat(data.main.temp_min-273));
        console.log("Máxima: " + parseFloat(data.main.temp_max-273));
        $("#temp_max").html(parseFloat(data.main.temp_min-273));
        console.log("Atual: " + parseFloat(data.main.temp-273));
        $("#temp_atual").html(parseFloat(data.main.temp_min-273));
   
    },
    error: function(){
        console.log("Erro na requisição");
    }
});

*/

//Aula 53 - Exercício 5 

//1
/*
function requisicaoPaises(callback) {
    $.ajax({
        url : "https://restcountries.com/v3.1/all",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log("Dados obtidos!");
            callback(data);
        },
        error: function(){
            console.log("Erro na requisição");
        }
    });
}

function preencherComboBox(data){
    console.log(data);
    var options = $('#paises');
    // console.log(data[0].name['common']);
    
    // options.find('option').remove();
    $.each(data, function (key, value) {
        $('#paises').append('<option value="' + key +'">' + data[key].name['common'] +'</option>');

    }); 
    
}

requisicaoPaises(preencherComboBox);

*/

//2
/*    
    var cursos = [
    {
        "titulo": "PHP",
        "aval": []
    },
    {
        "titulo": "Javascript",
        "aval": [5,5,4.5,4,5,5,5,4.5]
    },
    {
        "titulo": "Python",
        "aval": [5,5,4,4,5,3,5,4,4,5]
    },
    {
        "titulo": "Machine Learning",
        "aval": [5,5,4.5]
    }
    ];

    function calculaAvaliacao(listaCursos){

        var media = 0;  

        for(i=0; i<listaCursos.length; i++){
        
            try{   
                if(listaCursos[i].aval.length == 0){
                    throw 'Curso ' + listaCursos[i].titulo + ' não possui avaliações.';
                }
                else if(listaCursos[i].aval.length < 5){
                    throw 'Curso ' + listaCursos[i].titulo + ' possui menos de 5 avaliações.';
                }
            
                $.each(listaCursos[i].aval, function (index, valor) {
                    media = media + valor;
                });

                media = media / listaCursos[i].aval.length;

                console.log('O curso ' + listaCursos[i].titulo + ' tem média de avaliações de ' + media.toFixed(2));
           }    
            catch(err){
                console.log(err);
            }
        }
    }

    calculaAvaliacao(cursos);
    */

    //3
    /*   
    var usuarios = {
        "33884h": "João Gomes",
        "43585f": "Maria Luisa",
        "93661h": "Pedro Henqrique",
        "23172g": "Paula Carvalho",
    };

    var acessos = [
        {
            "usuario": "33884h",
            "data": "10/07/18"
        },
        {
            "usuario": "33884h",
            "data": "11/07/18"
        },
        {
            "usuario": "3585f",
            "data": "19/07/18"
        },
        {
            "usuario": "93661h",
            "data": "24/07/18"
        },
        {
            "usuario": "23172g",
            "data": "13/08/18"
        },
        {
            "usuario": "93661h",
            "data": "14/08/18"
        }
    ];

var meuWebApp = (function(){

    return {
        'ver_nome' : function(){
            
            var dados = [];
            dados.push(arguments[0]);
            dados.push(arguments[1]);

            console.log(dados[1]);

            var user = dados[1];

            $('#acessos').html("");

            $.each(dados[0], function (index, valor) {   
                $('#acessos').append('<p>Acesso de ' +  user[this.usuario] +', no dia ' + this.data +'</p>');                                                                                                     
            }); 
        }
    }
})();

meuWebApp.ver_nome(acessos, usuarios); // O console mostrará os dados dos objetos 'acessos' e 'usuarios'.
*/

//4
function requisicaoPergunta(callback) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&category=21",
        type: "GET",
        dataType: "json",
        success: function(data){
            callback(data.results[0]);
        },
        error: function(){
            console.log("Erro na requisição!");
        }
    });
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function gerarPergunta(pergunta){
    $("#pergunta").html(pergunta.question);
    var respostaCorreta = pergunta.correct_answer; 
    var respostas = pergunta.incorrect_answers;

    respostas.push(respostaCorreta);
    respostas = shuffle(respostas);

    // console.log("RC: " + respostaCorreta);
    // console.log("R: " + respostas);
    
    for(i=0; i<respostas.length; i++){
        $("#opcoes").append("<input type='radio' name='opcao' value=" + respostas[i] + "> " + respostas[i] + "<br>");
    }


    $("#opcoes input[name='opcao']").change(function(){
        $("#submitAPI").show();
    });
    
    $("#submitAPI").click(function(){
        var ans =  $("#opcoes input[name='opcao']:checked").val();
        $("#submitAPI").hide();

        if(ans == respostaCorreta){
            $("#erroAcerto").html("You made it!");
        }
        else{
            $("#erroAcerto").html("You almost made it! The correct answer is " + respostaCorreta + ".");    
        }

        $("#opcoes input[name='opcao']").attr("disabled", true);
        $("#playAgain").show();
    });
    
}

requisicaoPergunta(gerarPergunta);

$("#playAgain").click(function(){

    $("#opcoes").html("");
    $("#erroAcerto").html("");
    $("#pergunta").html("");
    $("#playAgain").hide("");

    requisicaoPergunta(gerarPergunta);
});
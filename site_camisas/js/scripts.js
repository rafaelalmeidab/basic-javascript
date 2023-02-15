
// Objeto para pegar os preços e as fotos das camisetas

var camisetas = {
    'branca': {

        'gola_v': {
            'sem_estampa': {
                'preco_unit': 5.12,
                'foto': 'v-white.jpg'
            },
            'com_estampa': {
                'preco_unit': 8.95,
                'foto': 'v-white-personalized.jpg'
            }
        },

        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 4.99,
                'foto': 'normal-white.jpg'
            },
            'com_estampa': {
                'preco_unit': 8.77,
                'foto': 'normal-white-personalized.jpg'
            }
        }
    },

    'colorida': {
        'gola_v': {
            'sem_estampa': {
                'preco_unit': 6.04,
                'foto': 'v-color.jpg'
            },
            'com_estampa': {
                'preco_unit': 9.47,
                'foto': 'v-color-personalized.png'
            }
        },

        'gola_normal': {
            'sem_estampa': {
                'preco_unit': 5.35,
                'foto': 'normal-color.jpg'
            },
            'com_estampa': {
                'preco_unit': 9.28,
                'foto': 'normal-color-personalized.jpg'
            }
        }
    }
}


//Parâmetros da pesquisa

var parametros_pesquisa = {
    "quantidade": 1000,
    "cor": "colorida",
    "gola": "gola_v",
    "qualidade": "q150",
    "estampa": "sem_estampa",
    "embalagem": "unitaria"
}

// Regras adicionais para o orçamento:

// 1. Verificar se há em localStorage os parâmetros do último orçamento e se houver, carregar a página com eles.

// 2. A camisa de qualidade alta (190g/m2) deve acrescer o preço unitário em 12%.

// 3. A embalagem unitária tem um custo de 0.15 por unidade

// 4. Após cálculo do preço, há que se aplicar um desconto por quantidade, sendo: 
// faixa 1: acima de 1.000 - Desconto de 15%
// faixa 2: acima de 500 - Desconto de 10%
// faixa 3: acima de 100 - Desconto de 5%


// Resolução do desafio:

// Sugestão de etapas da resolução

// 1. Crie uma função para calcular o preço baseado nos parâmetros da variável "parametros_pesquisa" e solte o 
// valor no console para testar se está certo.

// Se quiser uma sugestão dos passos a seguir para a resolução, veja mais abaixo.

//OnClicks

// 2. Faça os eventos click e change para os filtros.

// a. Faça o evento click para os filtros do tipo botão (.option-filter). Sempre que houver um click, 
// remova a classe "selected" dos botões do grupo e depois aplique-a apenas ao que foi clicado para
// que ele fique azul.

// b. Faça o evento change para os filtros do tipo <select> e para o <input> de quantidade.

// c. Sempre que um dos eventos acima ocorrer, atualize a variável "parametros_pesquisa" e rode a função para 
// calcular o preço



// 3. Altere a função do cálculo do preço. Em vez de soltar os valores no console, atualize as informações
// nos elementos "result_", atualize o preço no elemento "valor-total" e mude o atributo "src" do elemento 
// "foto-produto" para alterar a imagem mostrada (todas as imagens estão na pasta img).

// 4. Adicione a funcionalidade de hide e show do spinner (elemento "refresh-loader") à função de cálculo de preço. 
// Como não estamos consultando dados externos, o cálculo acaba sendo rápido demais, portanto use um setTimeout 
// para deixar ele aparecer por pelo menos 2 segundos.

// 5. Crie a funcionalidade do localStorage e ao carregar a página, consulte o localStorage, 
// atualize a variável "parametros_pesquisa" e rode a função de cálculo de preço



$(function () {

    //Funcoes

    function atualizarOrcamento(parametros){
        $(".refresh-loader").show();

        var quantidade = parametros.quantidade;
        var precoUnitario = camisetas[parametros.cor][parametros.gola][parametros.estampa].preco_unit;
        var imagemProduto = "img/" + camisetas[parametros.cor][parametros.gola][parametros.estampa].foto;
        var valorTotal = quantidade * precoUnitario;

        if(parametros.qualidade == "q190"){
            valorTotal = valorTotal * 1.12;
        }

        if(parametros.embalagem == "unitaria"){
            valorTotal = valorTotal + (quantidade * 0.15);
        }

        if(parametros.quantidade >= 100 && parametros.quantidade < 500){
            valorTotal = valorTotal - ((valorTotal * 5) / 100);
        }
        else if(parametros.quantidade >= 500 && parametros.quantidade < 1000){
            valorTotal = valorTotal - ((valorTotal * 10) / 100);
        }
        else if(parametros.quantidade >= 1000){
            valorTotal = valorTotal * 0.85;
        } 

        setTimeout(function () {    
            $("#result_quantidade").html(parametros.quantidade);
            $("#result_cor").html($("#" + parametros.cor).html());
            $("#result_gola").html($("#" + parametros.gola).html());
            $("#result_qualidade").html($("#" + parametros.qualidade).html());
            $("#result_estampa").html($("option[value='" + parametros.estampa + "']").html());
            $("#result_embalagem").html($("option[value='" + parametros.embalagem + "']").html());
            $("#valor-total").html(valorTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
            $("#foto-produto").attr("src", imagemProduto);


            $(".refresh-loader").hide();
        }, 1000);
    }

    function atualizarCampos(parametros){
        $("#cor").children().removeClass("selected");
        $("option[value='" + parametros.cor + "']").addClass("selected");
        
        $("#gola").children().removeClass("selected");
        $("option[value='" + parametros.gola + "']").addClass("selected");    
        
        $("#qualidade").children().removeClass("selected");
        $("option[value='" + parametros.qualidade + "']").addClass("selected");
        
        
        $("#estampa").val(parametros.estampa);
        $("#embalagem").val(parametros.embalagem);
        $("#quantidade").val(parametros.quantidade);
    } 

    function atualizarLocalStorage(parametros){
        window.localStorage.setItem("quantidade", parametros.quantidade);
        window.localStorage.setItem("cor", parametros.cor);
        window.localStorage.setItem("gola", parametros.gola);
        window.localStorage.setItem("qualidade", parametros.qualidade);
        window.localStorage.setItem("estampa", parametros.estampa);
        window.localStorage.setItem("embalagem", parametros.embalagem);
    }
    
    //Fim funcoes

    $(".option-filter div").click(function(){
        $(this).parent().children("div").removeClass("selected");
        $(this).addClass("selected");

        var categoria = $(this).parent().attr("id");
        parametros_pesquisa[categoria] = $(this).attr("id");
        atualizarOrcamento(parametros_pesquisa);
        atualizarLocalStorage(parametros_pesquisa);
    });

    $("select").change(function(){
        var parametroSelect = $(this).attr("id");
        parametros_pesquisa[parametroSelect] = $(this).val();
        atualizarOrcamento(parametros_pesquisa);
        atualizarLocalStorage(parametros_pesquisa);
    });

    $("#quantidade").change(function(){
        var parametroInput = $(this).attr("id");
        parametros_pesquisa[parametroInput] = $(this).val();
        atualizarOrcamento(parametros_pesquisa);
        atualizarLocalStorage(parametros_pesquisa);
    });

    
    //Verificacao local storage

    if(window.localStorage["cor"]){
        parametros_pesquisa.cor = window.localStorage["cor"];
    }
    if(window.localStorage["gola"]){
        parametros_pesquisa.gola = window.localStorage["gola"];
    }
    if(window.localStorage["qualidade"]){
        parametros_pesquisa.qualidade = window.localStorage["qualidade"];
    }
    if(window.localStorage["estampa"]){
        parametros_pesquisa.estampa = window.localStorage["estampa"];
    }
    if(window.localStorage["embalagem"]){
        parametros_pesquisa.embalagem = window.localStorage["embalagem"];
    }
    if(window.localStorage["quantidade"]){
        parametros_pesquisa.quantidade = parseInt(window.localStorage["quantidade"]);
    }

    //Verificacao variavel parametros de pesquisa
    atualizarOrcamento(parametros_pesquisa);
    atualizarCampos(parametros_pesquisa);

});














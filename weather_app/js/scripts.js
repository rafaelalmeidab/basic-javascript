
$(function(){


// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo

    $.ajax(function(){
        url: "http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=%094HcUAvGLZiUCq7QChIDcGqFaHwF3kcG3&language=pt-BR",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
        },
        error: function(){
            console.log("Erro!");
        }

    });



});
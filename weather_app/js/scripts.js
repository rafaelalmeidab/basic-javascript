
$(function(){


    // *** APIs ***
    // clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
    // pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
    // pegar coordenadas do IP: http://www.geoplugin.net
    // gerar gráficos em JS: https://www.highcharts.com/demo

    var apiKey        = '4HcUAvGLZiUCq7QChIDcGqFaHwF3kcG3';
    var latitude      = "-21.60";
    var longitude     = "-42.70";
    var weatherObject = {
        cidade: "",
        estado: "",
        pais: "",
        tempetarura: "",
        textoClima: "",
        iconeClima: ""
    };

    
    // virgulo em url enconding => %2C
    function getCoordenadasIP(){ //http://www.geoplugin.net/json.gp
        $.ajax({
            url :"http://www.geoplugin.net/json.gp",
            type: "GET",
            dataType: "json",
            success: function(data){
                if(data.geoplugin_latitude && data.geoplugin_longitude){
                    getLocalUsuario(data.geoplugin_latitude, data.geoplugin_longitude);
                }
            },
            error: function(){
                console.log("Erro!");
                getLocalUsuario(latitude, longitude);
            }
        });
    }
    
    function getLocalUsuario(latitude, longitude){
        $.ajax({
            url :"http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + apiKey + "&q=" + latitude + "%2C" + longitude,
            type: "GET",
            dataType: "json",
            success: function(data){
                try{
                    weatherObject.cidade = data.ParentCity.LocalizedName;
                }
                catch{
                    weatherObject.cidade = data.LocalizedName;
                }
            
                weatherObject.estado      = data.AdministrativeArea.LocalizedName; 
                weatherObject.pais        = data.Country.LocalizedName;
                
                var cityKey = data.Key;
                getTempoAtual(cityKey);
            },
            error: function(){
                console.log("Erro!");
            }
        });
    }
    
    function getTempoAtual(cityKey){ //language=pt-BR
        $.ajax({
            url :"http://dataservice.accuweather.com/currentconditions/v1/" + cityKey +"?apikey=" + apiKey,
            type: "GET",
            dataType: "json",
            success: function(data){
                weatherObject.tempetarura = data[0].Temperature.Metric;
                weatherObject.textoClima  = data[0].WeatherText;
                var iconNumber = data[0].WeatherIcon <= 9 ? "0" + String(data[0].WeatherIcon) : data[0].WeatherIcon;
                weatherObject.iconeClima  = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";
                
                setDadosClima(weatherObject);
            },
            error: function(){
                console.log("Erro!");
            }
        });
    }

    function setDadosClima(dados){
        $("#texto_local").html(dados.cidade + ", " + dados.estado + ", " + dados.pais);
        $("#texto_clima").html(dados.textoClima);
        $('#texto_temperatura').html(String(dados.tempetarura.Value) + "&deg;");
        $('#icone_clima').css('background-image', "url('" + weatherObject.iconeClima + "')");
    }

    getCoordenadasIP();
    // setDadosClima(''); 
});
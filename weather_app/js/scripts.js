
$(function(){


    // *** APIs ***
    // clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
    // pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
    // pegar coordenadas do IP: http://www.geoplugin.net
    // gerar gráficos em JS: https://www.highcharts.com/demo

    var apiKey        = '';
    var apiKeyMapBox  = '';
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
                setGerarErro("Erro ao pegar coordenadas do usuário!");
                getLocalUsuario(latitude, longitude);
            }
        });
    }

    function getCoordenadasPesquisaMapBox(dados){
        var cidade = encodeURI(dados);
        $.ajax({
            url :"https://api.mapbox.com/geocoding/v5/mapbox.places" + cidade + ".json?access_token=" + apiKeyMapBox,
            type: "GET",
            dataType: "json",
            success: function(data){
                try{
                    var latitude  = data.features[0].geometry.coordinates[0];
                    var longitude = data.features[0].geometry.coordinates[1]; 

                    getLocalUsuario(latitude, longitude);
                }
                catch{
                    setGerarErro("Erro ao pegar coordenadas do MapBox!");
                }
            },
            error: function(){
                setGerarErro("Erro ao pegar coordenadas do MapBox!");
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
                getPrevisao5Dias(cityKey);
                getPrevisaoHoraAHora(cityKey);
            },
            error: function(){
                setGerarErro("Erro ao pegar local do usuário!");
            }
        });
    }

    function getPrevisao5Dias(cityKey){
        $.ajax({
            url :"http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + apiKey + "&language=pt-br&metric=true",
            type: "GET",
            dataType: "json",
            success: function(data){
                $("#texto_max_min").html(String(data.DailyForecasts[0].Temperature.Minimum.Value) + "&deg / " + String(data.DailyForecasts[0].Temperature.Maximum.Value) + "&deg");
                
                setPrevisao5Dias(data.DailyForecasts);
            },
            error: function(){
                setGerarErro("Erro ao pegar previsão 5 dias!");
            }
        });
    }

    function getPrevisaoHoraAHora(cityKey){
        $.ajax({
            url :"http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/" + cityKey + "?apikey=" + apiKey + "&language=pt-br&metric=true",
            type: "GET",
            dataType: "json",
            success: function(data){
                var horarios = [];
                var tempetaruras = []; 
                for(var i=0; i<data.length; i++){
                    var hora = new Date(data[i].DateTime).getHours();
                    horarios.push(String(hora) + "h");
                    tempetaruras.push(data[i].Temperature.Value);
                }

                setGerarGrafico(horarios, tempetaruras);
                $(".refresh-loader").fadeOut();
            },
            error: function(){
                setGerarErro("Erro ao pegar previsão hora a hora!");
            }
        });
    }
    
    function getTempoAtual(cityKey){
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
                setGerarErro("Erro ao pegar tempo atual!");
            }
        });
    }

    function setDadosClima(dados){
        $("#texto_local").html(dados.cidade + ", " + dados.estado + ", " + dados.pais);
        $("#texto_clima").html(dados.textoClima);
        $('#texto_temperatura').html(String(dados.tempetarura.Value) + "&deg;");
        $('#icone_clima').css('background-image', "url('" + weatherObject.iconeClima + "')");
    }

    function setGerarErro(mensagem){
        if(!mensagem){
            mensagem = "Erro na solicitação!";
        }
        else{
            $(".refresh-loader").hide();
            $("#aviso-erro").text(mensagem);
            $("#aviso-erro").slideDown();
            window.setTimeout(function(){
                $("#aviso-erro").slideUp();
            }, 4000);


        }

    }

    function setGerarGrafico(horarios, tempetaruras){
        Highcharts.chart('hourly_chart', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Temperatura Hora a Hora'
            },
            xAxis: {
                categories: horarios
            },
            yAxis: {
                title: {
                    text: 'Temperatura (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                showInLegend: false,
                data: tempetaruras
            }]
        });
    }

    function setPrevisao5Dias(dados){
        $("#info_5dias").html("");
        var arrayDiasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

        for(var i=0; i<dados.length; i++){
            var diaSemana         = new Date(dados[i].Date);
            diaSemana             = arrayDiasSemana[diaSemana.getDay()];
            var iconNumber        = dados[i].Day.Icon <= 9 ? "0" + String(dados[i].Day.Icon) : dados[i].Day.Icon;
            var iconeClima        = "https://developer.accuweather.com/sites/default/files/" + iconNumber + "-s.png";
            var tempetaruraMinima = String(dados[i].Temperature.Minimum.Value);
            var tempetaruraMaxima = String(dados[i].Temperature.Maximum.Value);

            var elementoHTML = "<div class='day col'>";
            elementoHTML    += "<div class='day_inner'>";
            elementoHTML    += "<div class='dayname'>";
            elementoHTML    += diaSemana;
            elementoHTML    += "</div>";
            elementoHTML    += '<div style="background-image: url(\'' + iconeClima + '\')" class="daily_weather_icon"></div>';
            elementoHTML    += "<div class='max_min_temp'>";
            elementoHTML    += tempetaruraMinima + "&deg; / " + tempetaruraMaxima +"&deg";
            elementoHTML    += "</div>";
            elementoHTML    += "</div>";
            elementoHTML    += "</div>";

            $("#info_5dias").append(elementoHTML);
            elementoHTML = '';
        }
    }

    getCoordenadasIP();

    $("#search-button").on('keyup', function(e){
        if(e.which == 13){
            $(".refresh-loader").show();
            console.log("enter");
            var local = $("input#local").val();
            if(local){
                getCoordenadasPesquisaMapBox(local);
            }
            else{
                alert("Local inválido!"); 
                $(".refresh-loader").fadeOut();
            }
        }
    });

    $("#search-button").click(function(){
        var local = $("input#local").val();
        if(local){
            $(".refresh-loader").show();
            getCoordenadasPesquisaMapBox(local);
        }
        else{
            alert("Local inválido!");   
            $(".refresh-loader").fadeOut();
        }
    });
})
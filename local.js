var temperature;

function getData(){
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   var latitude=position.coords.latitude; 
   var longitude=position.coords.longitude;
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=f04b0f0461cae18d836804ac0c1f5130",function(json){
 	
 	$("#area").text(json.name);//Girgaum
 	temperature = json.main.temp - 273.15;//Celcius
 	$("#temperature").text(temperature);//Fahrenhieght
 	$("#main").text(json.weather[0].main);//clear
 	$("#unit").text("C");
 	// alert(json.wind.deg);
 	IconGen(json.weather[0].main)
   	});
  });
}
}

 function IconGen(main) {
    var main = main.toLowerCase();
    $("div."+main).removeClass('hide');  
    
  }

$(document).ready(function(){
	getData();
	var check=0;
	$('#unit').on("click",function(){
		if(check==0){
			temperature=temperature*1.8+32;
			$("#temperature").text(temperature);
			$("#unit").text("F");
			check++;
		}
		else{
			check--;
			getData();
		}
	});
});
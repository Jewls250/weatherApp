var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;


$("#searchCity").click((e) => {
    e.preventDefault();
    let userKey = "445a1ffe9b9be4507ef4b09a14b88233"
    let cityName= $("#userInput").val()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${userKey}`;

  $.ajax({
  url: url,
  method: "GET"
}).then( response => {
    console.log(response);
    let forcast = (response.weather[0].description)
    let citySelected = response.name;
    let humidity = response.main.pressure;
    let kelvinTemp = response.main.temp;
    


    $("#forcast").append(forcast)
    $("#selectedCity").append(citySelected)
    $("#humidity").append(humidity)
    $("#kelvinTemp").append(kelvinTemp)
    $("#date").append(today);


  
    })
});



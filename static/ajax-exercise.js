"use strict";


// PART 1: SHOW A FORTUNE

// TODO: get the fortune and show it in the #fortune-text div
function fortuneResult(result) {
  let FORTUNES = result;
  $('#fortune-text').html(FORTUNES);
}

function showFortune(evt) {
$.get("/fortune",  fortuneResult);
}

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function weatherResult(results) {
  $('#weather-info').html(results.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()
  };

  $.get(url, formData, weatherResult);

}
$("#weather-form").on('submit', showWeather);



// PART 3: ORDER MELONS

function showResults(results) {
  $('#order-status').html(results.result_code);
}


function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
      "melon_type" : $("#melon-type-field").val(),
      "qty" : $("#qty-field").val()
    };

    
    $.post("/order-melons.json", formInputs, showResults);
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



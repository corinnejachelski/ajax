"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response);
  });
});

// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    zipcode: $('#zipcode-field').val()
  };

  $.get('/weather', formData, (response) => {
    $('#weather-info').html(response.forecast);
  });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const melonOrder = {
    qty: $('#qty-field').val(),
    melon_type: $('#melon-type-field').val()
  };
  
  $.post('/order-melons', melonOrder, (res) => {
    if (res.code === 'ERROR') {
        $('#order-status').html(res.msg).addClass('order-error');
    }
    else {
        $('#order-status').css('color', '').html(res.msg);
    }
  });
});

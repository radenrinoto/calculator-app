$(document).ready(function() {
  $("#color_mode").on("change", function () {
    colorModePreview(this);
  })
});

function colorModePreview(ele) {
  if($(ele).prop("checked") == true){
    $('body').addClass('dark-preview');
    $('body').removeClass('white-preview');
  }
  else if($(ele).prop("checked") == false){
    $('body').addClass('white-preview');
    $('body').removeClass('dark-preview');
  }
}

let display = document.getElementById('result');

function appendToDisplay(value) {
  if (display.value === "Error" || display.value === "undefined") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function resetDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

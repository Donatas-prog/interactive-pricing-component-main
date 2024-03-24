const slider = document.getElementById('slider_top');
const dollars = document.getElementById('month_number');
const dollars2 = document.getElementById('month_number2');
const views = document.getElementById('views_number');
const toggle = document.getElementById('toggle_input');
const pageViews = ['10K', '50K', '100K', '500K', '1M'];
const cost = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener('input', function() {
  validateInput();
  views.innerHTML = pageViews[slider.value];
  let value = this.value * 25;
  this.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`

});

toggle.addEventListener('change', function() {
  if(isYearly === false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  validateInput();
})
function validateInput() {
  if(isYearly) {
    dollars.innerHTML = cost[slider.value] * 0.75;
    dollars2.innerHTML = cost[slider.value] * 0.75;
  } else {
    dollars.innerHTML = cost[slider.value];
    dollars2.innerHTML = cost[slider.value];
  }
}




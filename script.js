const sliders = document.getElementsByClassName("slider");
const leftSlices = document.getElementsByClassName("leftSlice");
const middleSlices = document.getElementsByClassName("middleSlice");
const rightSlices = document.getElementsByClassName("rightSlice");
const slices = [leftSlices, middleSlices, rightSlices];
let lastChanged = 0;

function sliderFunc(ind){
    const slider = sliders[ind];
    // min = slider.min
    // max = slider.max
    val = slider.value
    // color = slider.getAttribute("color");
    // valPercent = ((val - min) / (max - min))*100;
    // slider.style.background = `linear-gradient(to right, ${color} ${valPercent}%, #D1D6E1 ${valPercent}%)`;

    for ( let i = 0; i < 4; i++ ) {
        const slice = slices[ind][i];
        const lastChangedSlice = slices[lastChanged][i];
        lastChangedSlice.classList.remove("changingSlice");
        if ( i + 2 <= val ) {
            slice.classList.remove("changingSlice");
            slice.classList.add("activeSlice");
        }
        else {
            slice.classList.remove("activeSlice");
            slice.classList.add("changingSlice");
        }
    }
    lastChanged = ind;
}
sliderFunc(0);
sliderFunc(1);
sliderFunc(2);
for ( let i = 0; i < 4; i++ ) {
    const lastChangedSlice = slices[lastChanged][i];
    lastChangedSlice.classList.remove("changingSlice");
}

document.getElementById('languageToggle').addEventListener('click', function() {
    document.body.classList.toggle('rtl');
  });
  
function switchLanguage() {
    var elements = document.querySelectorAll('[data-en], [data-ar]');
    elements.forEach(function(el) {
      if(document.body.classList.contains('rtl')) {
        el.textContent = el.getAttribute('data-ar');
      } else {
        el.textContent = el.getAttribute('data-en');
      }
    });
  }
  
  document.getElementById('languageToggle').addEventListener('click', switchLanguage);
  
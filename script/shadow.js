let shadowBox = document.getElementById('target');

// Default Shadow
shadowBox.style.boxShadow = `0px 14px 28px rgba(0,0,0,0.25)`;

var horizontalSlider = document.getElementById("horizontal-slider");
var horizontalSliderValue = document.getElementById("horizontal-value");
var verticalSlider = document.getElementById("vertical-slider");
var verticalSliderValue = document.getElementById("vertical-value");
var blurSlider = document.getElementById("blur-slider");
var blurSliderValue = document.getElementById("blur-value");
var spreadSlider = document.getElementById("spread-slider");
var spreadSliderValue = document.getElementById("spread-value");
var opacitySlider = document.getElementById("opacity-slider");
var opacitySliderValue = document.getElementById("opacity-value");

horizontalSlider.addEventListener("input", () => {
     displayRangeValue(horizontalSliderValue, horizontalSlider.value);
     changeBoxShadow();
});

verticalSlider.addEventListener("input", () => {
     displayRangeValue(verticalSliderValue, verticalSlider.value);
     changeBoxShadow();
});

blurSlider.addEventListener("input", () => {
     displayRangeValue(blurSliderValue, blurSlider.value);
     changeBoxShadow();
});

spreadSlider.addEventListener("input", () => {
     displayRangeValue(spreadSliderValue, spreadSlider.value);
     changeBoxShadow();
});

opacitySlider.addEventListener("input", () => {
     displayRangeValue(opacitySliderValue, opacitySlider.value/100);
     changeBoxShadow();
});

function displayRangeValue(range, value) {
    range.innerText = value;
}

function changeBoxShadow() {
    shadowBox.style.boxShadow = `${horizontalSlider.value}px ${verticalSlider.value}px ${blurSlider.value}px ${spreadSlider.value}px rgba(0,0,0,${opacitySlider.value/100})`;
    // console.log(`${horizontalSlider.value} ${verticalSlider.value} 0px 0px rgba(0,0,0,0.75)`);
}

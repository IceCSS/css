let strip = document.getElementById('colour-strip');
let colour = document.getElementById('colour-rgb-input');
let colourHex = document.getElementById('colour-hex-input');

strip.style.backgroundColor = `${colour.value}`;

let maxRGBValue = 256;

let search = document.getElementById('colour-search');
search.addEventListener("click", () => {
    // Validate data
    // console.log(colour.value);
    let cal = true;
    let patt = /^rgb\((?<red>\d{1,3}),(?<green>\d{1,3}),(?<blue>\d{1,3})\)$/;
    if(colour.value.match(patt)) {
        let groups = colour.value.match(patt).groups;
        if(groups.red >= 256) {
            cal = displayErrorMsg(`Usage: red need to be in value [0..${maxRGBValue}]`);
        }
        if(groups.green >= 256) {
            cal = displayErrorMsg(`Usage: green need to be in value [0..${maxRGBValue}]`);
        }
        if(groups.blue >= 256) {
            cal = displayErrorMsg(`Usage: blue need to be in value [0..${maxRGBValue}]`);
        }

        if (cal == true) {
            let hex = `#${rgbToHex(groups.red)}${rgbToHex(groups.green)}${rgbToHex(groups.blue)}`;
            console.log(hex);

            if (hex === `#000000`) {
                colour.style.color = `white`;
                search.style.color = `white`;
            } else {
                colour.style.color = `black`;
                search.style.color = `black`;
            }
            strip.style.backgroundColor = `${colour.value}`;
            colourHex.value = `${hex}`;
        }
    } else {
        displayErrorMsg(`Usage: rgb([0..${maxRGBValue}],[0..${maxRGBValue}],[0..${maxRGBValue}])`);
    }
});

function displayErrorMsg(msg) {
    document.getElementById('errorMsg').innerText = `${msg}`;
    return false;
}

function rgbToHex(val) {
    let hex = Number(val).toString(16);
    return (hex.length < 2) ? "0"+hex : hex;
};

let redSlider = document.getElementById('red-slider');
let redSliderValue = document.getElementById('red-value');
let greenSlider = document.getElementById('green-slider');
let greenSliderValue = document.getElementById('green-value');
let blueSlider = document.getElementById('blue-slider');
let blueSliderValue = document.getElementById('blue-value');

let colourDisplay = document.getElementById('colour-display');
let colorCode = document.getElementById('color-code');


redSlider.addEventListener("input", () => {
    displayRangeValue(redSliderValue, redSlider.value);
    let rgb = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
    colourDisplay.style.backgroundColor = `${rgb}`;
    displayRangeValue(colorCode, rgb);
});

greenSlider.addEventListener("input", () => {
    displayRangeValue(greenSliderValue, greenSlider.value);
    let rgb = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
    colourDisplay.style.backgroundColor = `${rgb}`;
    displayRangeValue(colorCode, rgb);
});

blueSlider.addEventListener("input", () => {
    displayRangeValue(blueSliderValue, blueSlider.value);
    let rgb = `rgb(${redSlider.value},${greenSlider.value},${blueSlider.value})`;
    colourDisplay.style.backgroundColor = `${rgb}`;
    displayRangeValue(colorCode, rgb);
});

function displayRangeValue(range, value) {
    range.innerText = value;
}

// let previewBtns = document.getElementsByClassName('preview-btn');
// for(let i = 0; i < previewBtns.length; i++) {
//     // console.log(previewBtns[i]);
//
//     previewBtns[i].addEventListener("mouseover", () => {
//         // console.log(previewBtns[i].children[1]);
//         previewBtns[i].children[1].classList.add('move-arrow');
//     });
//
//     previewBtns[i].addEventListener("mouseout", () => {
//         // console.log(previewBtns[i].children[1]);
//         previewBtns[i].children[1].classList.remove('move-arrow');
//     });
// }
//
// let shadowPreview = document.getElementById('preview-shadow-card');
// shadowPreview.addEventListener("mouseover", () => {
//     console.log('IN');
//     document.getElementById('preview-shadow').classList.add('preview-shadow-hover');
// });
//
// // let shadowPreview = document.getElementById('shadow-card');
// shadowPreview.addEventListener("mouseout", () => {
//     console.log('OUT');
//     document.getElementById('preview-shadow').classList.remove('preview-shadow-hover');
// });

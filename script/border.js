let borderType = 'border';

let target = document.getElementById('target');
let css = document.getElementById('css');

target.style.border = `5px solid #076bff`;
console.log(target);

/**
    BORDER
 */
 var borderWidth = document.getElementById("border-width");
 var borderWidthValue = document.getElementById("border-width-value");
 var borderStyle = document.getElementById("border-style");     // solid dotted dashed double groove ridge inset outset hidden none

borderWidth.addEventListener("input", () => {
     displayRangeValue(borderWidthValue, borderWidth.value);
     changeBorder(borderType);
});

borderStyle.addEventListener("change", () => {
    // console.log(borderStyle.options[borderStyle.selectedIndex].text);
    changeBorder(borderType);
});

function displayRangeValue(range, value) {
    range.innerText = value;
}

let borderAll = document.getElementById('border-all');
let borderTop = document.getElementById('border-top');
let borderRight = document.getElementById('border-right');
let borderBottom = document.getElementById('border-bottom');
let borderLeft = document.getElementById('border-left');

borderAll.addEventListener("click", () => {
    changeBorder('border');
});

borderTop.addEventListener("click", () => {
    changeBorder('border-top');
});

borderRight.addEventListener("click", () => {
    changeBorder('border-right');
});

borderBottom.addEventListener("click", () => {
    changeBorder('border-bottom');
});

borderLeft.addEventListener("click", () => {
    changeBorder('border-left');
});

/**
    BORDER RADIUS
 */
var borderRadiusTopLeft = document.getElementById("border-radius-top-left");
var borderRadiusTopLeftValue = document.getElementById("border-radius-top-left-value");
var borderRadiusTopRight = document.getElementById("border-radius-top-right");
var borderRadiusTopRightValue = document.getElementById("border-radius-top-right-value");
var borderRadiusBotLeft = document.getElementById("border-radius-bot-left");
var borderRadiusBotLeftValue = document.getElementById("border-radius-bot-left-value");
var borderRadiusBotRight = document.getElementById("border-radius-bot-right");
var borderRadiusBotRightValue = document.getElementById("border-radius-bot-right-value");

borderRadiusTopLeft.addEventListener("input", () => {
    displayRangeValue(borderRadiusTopLeftValue, borderRadiusTopLeft.value);
    changeBorder(borderType);
});

borderRadiusTopRight.addEventListener("input", () => {
    displayRangeValue(borderRadiusTopRightValue, borderRadiusTopRight.value);
    changeBorder(borderType);
});

borderRadiusBotLeft.addEventListener("input", () => {
    displayRangeValue(borderRadiusBotLeftValue, borderRadiusBotLeft.value);
    changeBorder(borderType);
});

borderRadiusBotRight.addEventListener("input", () => {
    displayRangeValue(borderRadiusBotRightValue, borderRadiusBotRight.value);
    changeBorder(borderType);
});

function changeBorder(pos) {
    target.style.borderRadius = `
        ${borderRadiusTopLeft.value}px
        ${borderRadiusTopRight.value}px
        ${borderRadiusBotLeft.value}px
        ${borderRadiusBotRight.value}px
        `;
    target.style.border = ``;
    document.getElementById('border-css').innerText = ``;
        switch (pos) {
        case "border":
            target.style.border = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "border";
            // Color Correct Code
            displayCode(borderType, target.style.border, target.style.borderRadius);
            break;
        case "border-top":
            target.style.borderTop = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "border-top";
            displayCode(borderType, target.style.borderTop, target.style.borderRadius);
            break;
        case "border-right":
            target.style.borderRight = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "border-right";
            displayCode(borderType, target.style.borderRight, target.style.borderRadius);
            break;
        case "border-bottom":
            target.style.borderBottom = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "border-bottom";
            displayCode(borderType, target.style.borderBottom, target.style.borderRadius);
            break;
        case "border-left":
            target.style.borderLeft = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "border-left";
            displayCode(borderType, target.style.borderLeft, target.style.borderRadius);
            break;
        }
}

function displayCode(type, border, borderRadius) {
    let b = document.createElement('span');
    b.classList.add('text-red');
    b.appendChild(document.createTextNode(`${type}`));
    document.getElementById('border-css').appendChild(b);

    document.getElementById('border-css').appendChild(document.createTextNode(`: `));

    let bVal = document.createElement('span');
    bVal.classList.add('text-blue');
    bVal.appendChild(document.createTextNode(`${border}`));
    document.getElementById('border-css').appendChild(bVal);
    document.getElementById('border-css').appendChild(document.createTextNode(`;`));


    let newLine = document.createElement('br');
    document.getElementById('border-css').appendChild(newLine);

    let bR = document.createElement('span');
    bR.classList.add('text-red');
    bR.appendChild(document.createTextNode('border-radius'));
    document.getElementById('border-css').appendChild(bR);

    document.getElementById('border-css').appendChild(document.createTextNode(`: `));

    let bRVal = document.createElement('span');
    bRVal.classList.add('text-blue');
    bRVal.appendChild(document.createTextNode(`${borderRadius}`));
    document.getElementById('border-css').appendChild(bRVal);
    document.getElementById('border-css').appendChild(document.createTextNode(`;`));
}

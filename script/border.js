let borderType = 'all';

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
    changeBorder('all');
});

borderTop.addEventListener("click", () => {
    changeBorder('top');
});

borderRight.addEventListener("click", () => {
    changeBorder('right');
});

borderBottom.addEventListener("click", () => {
    changeBorder('bottom');
});

borderLeft.addEventListener("click", () => {
    changeBorder('left');
});

function changeBorder(pos) {
    target.style.border = ``;
    switch (pos) {
    case "all":
        target.style.border = `
            ${borderWidth.value}px
            ${borderStyle.options[borderStyle.selectedIndex].text}
            #076bff
            `;
        borderType = "all";
        document.getElementById('border-css').innerText =
        `
        border: ${target.style.border};
        border-radius: ${target.style.borderRadius}
        `;
        break;
    case "top":
        target.style.borderTop = `
            ${borderWidth.value}px
            ${borderStyle.options[borderStyle.selectedIndex].text}
            #076bff
            `;
        borderType = "top";
        document.getElementById('border-css').innerText =
        `
        border-top: ${target.style.borderTop};
        border-radius: ${target.style.borderRadius}
        `;
        break;
    case "right":
        target.style.borderRight = `
            ${borderWidth.value}px
            ${borderStyle.options[borderStyle.selectedIndex].text}
            #076bff
            `;
        borderType = "right";
        document.getElementById('border-css').innerText =
        `
        border-right: ${target.style.borderRight};
        border-radius: ${target.style.borderRadius}
        `;
        break;
    case "bottom":
        target.style.borderBottom = `
            ${borderWidth.value}px
            ${borderStyle.options[borderStyle.selectedIndex].text}
            #076bff
            `;
        borderType = "bottom";
        document.getElementById('border-css').innerText =
        `
        border-bottom: ${target.style.borderBottom};
        border-radius: ${target.style.borderRadius}
        `;
        break;
    case "left":
        target.style.borderLeft = `
            ${borderWidth.value}px
            ${borderStyle.options[borderStyle.selectedIndex].text}
            #076bff
            `;
        borderType = "left";
        document.getElementById('border-css').innerText =
        `
        border-left: ${target.style.borderLeft};
        border-radius: ${target.style.borderRadius}
        `;
        break;
    }
    console.log(borderType);
    console.log(target);
}

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
    changeBorderRadius(borderType);
});

borderRadiusTopRight.addEventListener("input", () => {
    displayRangeValue(borderRadiusTopRightValue, borderRadiusTopRight.value);
    changeBorderRadius(borderType);
});

borderRadiusBotLeft.addEventListener("input", () => {
    displayRangeValue(borderRadiusBotLeftValue, borderRadiusBotLeft.value);
    changeBorderRadius(borderType);
});

borderRadiusBotRight.addEventListener("input", () => {
    displayRangeValue(borderRadiusBotRightValue, borderRadiusBotRight.value);
    changeBorderRadius(borderType);
});

function changeBorderRadius(pos) {
    target.style.borderRadius = `
        ${borderRadiusTopLeft.value}px
        ${borderRadiusTopRight.value}px
        ${borderRadiusBotLeft.value}px
        ${borderRadiusBotRight.value}px
        `;
        switch (pos) {
        case "all":
            target.style.border = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "all";
            document.getElementById('border-css').innerText =
            `
            border: ${target.style.border};
            border-radius: ${target.style.borderRadius}
            `;
            break;
        case "top":
            target.style.borderTop = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "top";
            document.getElementById('border-css').innerText =
            `
            border-top: ${target.style.borderTop};
            border-radius: ${target.style.borderRadius}
            `;
            break;
        case "right":
            target.style.borderRight = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "right";
            document.getElementById('border-css').innerText =
            `
            border-right: ${target.style.borderRight};
            border-radius: ${target.style.borderRadius}
            `;
            break;
        case "bottom":
            target.style.borderBottom = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "bottom";
            document.getElementById('border-css').innerText =
            `
            border-bottom: ${target.style.borderBottom};
            border-radius: ${target.style.borderRadius}
            `;
            break;
        case "left":
            target.style.borderLeft = `
                ${borderWidth.value}px
                ${borderStyle.options[borderStyle.selectedIndex].text}
                #076bff
                `;
            borderType = "left";
            document.getElementById('border-css').innerText =
            `
            border-left: ${target.style.borderLeft};
            border-radius: ${target.style.borderRadius}
            `;
            break;
        }
    // console.log('Border');
    // console.log(target.style.border);
    // console.log(target.style.borderRadius);
    // document.getElementById('border-css').innerText =
    // `
    // border: ${target.style.border};
    // border-radius: ${target.style.borderRadius}
    // `;
}

/**
border-top
border-left
border-bottom
border-right
 */

let codes = document.getElementsByClassName('code');
for(let i = 0; i < codes.length; i++){
    codes[i].addEventListener("click", () => {
        console.log(codes[i].getAttribute("code").replace(/^\s*/gm, "").replace(/^([^\.\@\#\}])/gm, "\t$1"));
        document.getElementById('snippet').innerText = `${codes[i].getAttribute("code").replace(/^\s*/gm, "").replace(/^([^\.\@\#\}])/gm, "\t$1")}`;
    })
}

let shadowPreview = document.getElementById('preview-shadow-card');
shadowPreview.addEventListener("mouseover", () => {
    document.getElementById('preview-shadow').style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";

});

// let shadowPreview = document.getElementById('shadow-card');
shadowPreview.addEventListener("mouseout", () => {
    document.getElementById('preview-shadow').style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";

});

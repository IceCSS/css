let fixedMsg = document.getElementById('fixedMsg');
setTimeout(() => {
    console.log(fixedMsg);
    fixedMsg.innerText = "";
    // <i class="far fa-thumbs-up"></i>
    let fixedMsgIcon = document.createElement('i');
    fixedMsgIcon.classList.add('far', 'fa-thumbs-up');
    fixedMsg.appendChild(fixedMsgIcon);
}, 2000);



let previewBtns = document.getElementsByClassName('preview-btn');
for(let i = 0; i < previewBtns.length; i++) {

    previewBtns[i].addEventListener("mouseover", () => {
        previewBtns[i].children[1].classList.add('move-arrow');
    });

    previewBtns[i].addEventListener("mouseout", () => {
        previewBtns[i].children[1].classList.remove('move-arrow');
    });
}

//
let shadowPreview = document.getElementById('preview-shadow-card');
shadowPreview.addEventListener("mouseover", () => {
    document.getElementById('preview-shadow').classList.add('preview-shadow-hover');
});

shadowPreview.addEventListener("mouseout", () => {
    document.getElementById('preview-shadow').classList.remove('preview-shadow-hover');
});

//
let img = document.getElementById("preview-colour");
let code = document.getElementById("preview-colour-code");
let pic = ["logo/icon.svg", "logo/icon-orange.svg", "logo/icon-green.svg"];
let previewColourCode = ["#34495e", "#f29d33", "58af61"];

let index = 0;
setInterval(function(){
    // console.log('here');
    img.setAttribute("src", `${pic[index]}`);
    code.innerText = previewColourCode[index];

    // console.log(index);
    index++;
    if(index == pic.length) { index = 0; }
}, 3000);

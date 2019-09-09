// <div class="float-left card w-75 mt-5 mb-5">
//     <div id="preview-shadow-card" class="p-5">
//         <!-- <div id="preview-shadow" class="float-right"></div> -->
//         <h1 class="">CSS Border</h1>
//         <img id="border-1" src="logo/icon.svg" class="float-right m-2" height="100px" alt="">
//         <img id="border-2" src="logo/icon-orange.svg" class="float-right m-2" height="100px" alt="">
//         <p class="">
//         Got a colour plalete your like? New to border design? A very easy and
//         simple tool that lets users create clean and aesthetic borders. Along
//         with many examples starters to help you create border designs for your html!
//         </p>
//         <button type="button" class="btn preview-btn"><a href="border.html">Design Border &gt;</a></button>
//     </div>
// </div>

function generateBorderPreview(position) {
    let card = document.createElement('div');
    card.classList.add('card', 'w-75', 'mt-5', 'mb-5', `${position}`);

    let wrapper = document.createElement('div');
    wrapper.classList.add('p-5');
    wrapper.setAttribute('id', 'preview-colour-card');
    card.appendChild(wrapper);

    // Title
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(`CSS Border`));
    wrapper.appendChild(h1);
    // Info
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(`Got a colour plalete your like? New to border design? A very easy and simple tool that lets users create clean and aesthetic borders. Along with many examples starters to help you create border designs for your html!`));
    wrapper.appendChild(p);
    // Img
    let border1 = document.createElement('img');
    border1.setAttribute('id', 'preview-border-1');
    border1.setAttribute('src', 'logo/icon.svg');
    border1.setAttribute('height', '100px');
    border1.classList.add('float-right', 'm-2');
    wrapper.appendChild(border1);
    let border2 = document.createElement('img');
    border2.setAttribute('id', 'preview-border-2');
    border2.setAttribute('src', 'logo/icon-orange.svg');
    border2.setAttribute('height', '100px');
    border2.classList.add('float-right', 'm-2');
    wrapper.appendChild(border2);
    // Button
    let a = document.createElement('a');
    a.setAttribute('href', 'border.html');
    a.classList.add('btn', 'preview-btn');
    let title = document.createElement('span');
    title.classList.add('preview-btn-align');
    title.appendChild(document.createTextNode(`Design Border`));
    a.appendChild(title);
    let icon = document.createElement('span');
    icon.classList.add('preview-btn-arrow');
    // a.appendChild(document.createTextNode(`Convert Colour`));
    let i = document.createElement('i');
    i.classList.add('fas', 'fa-chevron-right', 'ml-2');

    icon.appendChild(i);
    a.appendChild(icon);
    wrapper.appendChild(a);

    // console.log(card);
    return card;
}

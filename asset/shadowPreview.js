// <div class="float-left card w-75 mt-5 mb-5">
//     <div id="preview-shadow-card" class="p-5">
//         <div id="preview-shadow" class="float-right"></div>
//         <h1 class="">Shadow Box</h1>
//         <p class="">
//         Need a clean shadow design for your div? Our shadow box css website
//         also you to preview shadow, as well as providing simple and understandable
//         designs to help and motivate a smooth and nice looking shadow.
//         </p>
//         <img id="preview-shadow" src="logo/icon.svg" class="preview-align-icons float-right" height="100px" alt="">
//         <a href="#" class="btn preview-btn">
//             <span class="preview-btn-align">Design Broder</span>
//             <span class="preview-btn-arrow">
//                 <i class="material-icons">arrow_forward_ios</i>
//             </span>
//         </a>
//     </div>
// </div>

function generateShadowPreview(position) {
    let card = document.createElement('div');
    card.classList.add('card', 'w-75', 'mt-5', 'mb-5', `${position}`);

    let wrapper = document.createElement('div');
    wrapper.classList.add('p-5');
    wrapper.setAttribute('id', 'preview-shadow-card');
    card.appendChild(wrapper);

    // Title
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(`Box Shadow`));
    wrapper.appendChild(h1);
    // Info
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(`Need a clean shadow design for your div? Our shadow box css website also you to preview shadow, as well as providing simple and understandable designs to help and motivate a smooth and nice looking shadow.`));
    wrapper.appendChild(p);
    // Icon
    let img = document.createElement('img');
    img.setAttribute('id', 'preview-shadow');
    img.setAttribute('src', 'logo/icon.svg');
    img.setAttribute('height', '100px');
    img.classList.add('preview-align-icons', 'float-right');
    wrapper.appendChild(img);
    // Button
    let a = document.createElement('a');
    a.setAttribute('href', 'shadow.html');
    a.classList.add('btn', 'preview-btn');
    let title = document.createElement('span');
    title.classList.add('preview-btn-align');
    title.appendChild(document.createTextNode(`Create Shadow`));
    a.appendChild(title);
    let icon = document.createElement('span');
    icon.classList.add('preview-btn-arrow');
    // a.appendChild(document.createTextNode(`Convert Colour`));
    let i = document.createElement('i');
    i.classList.add('fas', 'fa-chevron-right', 'ml-2');
    icon.appendChild(i);
    a.appendChild(icon);
    wrapper.appendChild(a);

    console.log(card);
    return card;
}

// <div class="float-right card w-75 mt-5 mb-5">
//     <div id="preview-colour-card" class="p-5">
//         <h1 class="">RGB &lt;=&gt; HEX</h1>
//         <p class="">
//         Want to easy RGB and HEX converter? Simple output display and clean straight to the
//         point information between colour conversions from RGB and HEX Code.
//         </p>
//         <figure class="preview-align-icons float-right">
//             <img id="preview-colour" src="logo/icon.svg" class="float-right" height="100px" alt="">
//             <figcaption id="preview-colour-code" class="text-center">#34495e</figcaption>
//         </figure>
//         <a href="#" class="btn preview-btn">
//             <span class="preview-btn-align">DConvert Colour</span>
//             <span class="preview-btn-arrow">
//                 <i class="material-icons">arrow_forward_ios</i>
//             </span>
//         </a>
//     </div>
// </div>

function generateColourPreview(position) {
    let card = document.createElement('div');
    card.classList.add('card', 'w-75', 'mt-5', 'mb-5', `${position}`);

    let wrapper = document.createElement('div');
    wrapper.classList.add('p-5');
    wrapper.setAttribute('id', 'preview-colour-card');
    card.appendChild(wrapper);

    // Title
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(`RBG `));
    let i = document.createElement('i');
    i.classList.add('fas', 'fa-exchange-alt');
    h1.appendChild(i);
    h1.appendChild(document.createTextNode(` HEX`));
    wrapper.appendChild(h1);
    // Info
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(`Want to easy RGB and HEX converter? Simple output display and clean straight to the point information between colour conversions from RGB and HEX Code.`));
    wrapper.appendChild(p);
    // Figure
    let figure = document.createElement('figure');
    figure.classList.add('preview-align-icons', 'float-right');
    let img = document.createElement('img');
    img.setAttribute('id', 'preview-colour');
    img.setAttribute('src', 'logo/icon.svg');
    img.setAttribute('height', '100px');
    figure.appendChild(img);
    let figcaption = document.createElement('figcaption');
    figcaption.setAttribute('id', 'preview-colour-code');
    figcaption.classList.add('text-center');
    figcaption.appendChild(document.createTextNode(`#34495e`));
    figure.appendChild(figcaption);
    wrapper.appendChild(figure);
    // Button
    let btn = document.createElement('button');
    btn.classList.add('btn', 'preview-btn');
    btn.setAttribute('type', 'button');
    // Link
    let a = document.createElement('a');
    a.setAttribute('href', 'index.html');
    a.classList.add('btn', 'preview-btn');
    let title = document.createElement('span');
    title.classList.add('preview-btn-align');
    title.appendChild(document.createTextNode(`Convert Colour`));
    a.appendChild(title);
    let icon = document.createElement('span');
    icon.classList.add('preview-btn-arrow');
    // a.appendChild(document.createTextNode(`Convert Colour`));
    i = document.createElement('i');
    i.classList.add('fas', 'fa-chevron-right', 'ml-2');
    icon.appendChild(i);
    a.appendChild(icon);
    wrapper.appendChild(a);
    // console.log(card);
    return card;
}

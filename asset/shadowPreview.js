// <div class="float-left card w-75 mt-5 mb-5">
//     <div id="preview-shadow-card" class="p-5">
//         <div id="preview-shadow" class="float-right"></div>
//         <h1 class="">Shadow Box</h1>
//         <p class="">
//         Need a clean shadow design for your div? Our shadow box css website
//         also you to preview shadow, as well as providing simple and understandable
//         designs to help and motivate a smooth and nice looking shadow.
//         </p>
//         <button type="button" class="btn preview-btn"><a href="shadow.html">Create Shadow<i class="material-icons">arrow_forward_ios</i></a></button>
//
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
    // Button
    let btn = document.createElement('button');
    btn.classList.add('btn', 'preview-btn');
    btn.setAttribute('type', 'button');
    // Link
    let a = document.createElement('a');
    a.setAttribute('href', 'shadow.html');
    a.appendChild(document.createTextNode(`Convert Colour`));
    let i = document.createElement('i');
    i.classList.add('material-icons');
    i.appendChild(document.createTextNode(`arrow_forward_ios`));
    a.appendChild(i);
    btn.appendChild(a);
    wrapper.appendChild(btn);

    console.log(card);
    return card;
}

// <div class="float-right card w-75 mt-5 mb-5">
//     <div id="preview-colour-card" class="p-5">
//         <h1 class="">RGB &lt;=&gt; HEX</h1>
//         <p class="">
//         Want to easy RGB and HEX converter? Simple output display and clean straight to the
//         point information between colour conversions from RGB and HEX Code.
//         </p>
//         <button type="button" class="btn preview-btn"><a href="index.html">Convert Colour &gt;</a></button>
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
    h1.appendChild(document.createTextNode(`RBG <=> HEX`));
    wrapper.appendChild(h1);
    // Info
    let p = document.createElement('p');
    p.appendChild(document.createTextNode(`Want to easy RGB and HEX converter? Simple output display and clean straight to the point information between colour conversions from RGB and HEX Code.`));
    wrapper.appendChild(p);
    // Button
    let btn = document.createElement('button');
    btn.classList.add('btn', 'preview-btn');
    btn.setAttribute('type', 'button');
    // Link
    let a = document.createElement('a');
    a.setAttribute('href', 'index.html');
    a.appendChild(document.createTextNode(`Convert Colour`));
    let i = document.createElement('i');
    i.classList.add('material-icons');
    i.appendChild(document.createTextNode(`arrow_forward_ios`));
    a.appendChild(i);
    btn.appendChild(a);
    wrapper.appendChild(btn);

    // console.log(card);
    return card;
}

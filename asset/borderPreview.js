// <div class="float-left card w-75 mt-5 mb-5">
//     <div id="preview-shadow-card" class="p-5">
//         <!-- <div id="preview-shadow" class="float-right"></div> -->
//         <h1 class="">CSS Border</h1>
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
    // Button
    let btn = document.createElement('button');
    btn.classList.add('btn', 'preview-btn');
    btn.setAttribute('type', 'button');
    // Link
    let a = document.createElement('a');
    a.setAttribute('href', 'border.html');
    a.appendChild(document.createTextNode(`Convert Colour`));
    let i = document.createElement('i');
    i.classList.add('material-icons');
    i.appendChild(document.createTextNode(`arrow_forward_ios`));
    a.appendChild(i);
    btn.appendChild(a);    wrapper.appendChild(btn);

    // console.log(card);
    return card;
}

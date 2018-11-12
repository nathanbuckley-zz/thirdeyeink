import tingle from 'tingle.js';

const butcont = {

    img: 'https://via.placeholder.com/300x150?text=test+image',
    title: 'Test block Title',
    blurb: `This is a test blurb with an expression.`,
    modal:{
        title: '',
        content: `
            <h2>Sketchbook 2018</h2>
            <p>A look at some of my Fav sketches from 2018</p>
            <img src:'https://via.placeholder.com/300x150?text=test+image'>
            <p>fin<p>`
    }
}

//Main Div
let block = document.createElement('button');
block.setAttribute('class','galblock');
block.setAttribute('onclick', 'opentestmodal()');

//Image
let blockimg = new Image();
blockimg.src = butcont.img;

//Title
let blocktitle = document.createElement('h5');
let blocktitletxt = document.createTextNode(butcont.title);
blocktitle.setAttribute('class','galtitle');
blocktitle.appendChild(blocktitletxt);

//Blurb
let blockblurb = document.createElement('div');
let blockblurbtxt = document.createTextNode(butcont.blurb);
blockblurb.setAttribute('class','galblurb');
blockblurb.appendChild(blockblurbtxt);

//Combine
block.appendChild(blockimg);
block.appendChild(blocktitle);
block.appendChild(blockblurb);

//modal
var testmodal = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Fin",
    cssClass: ['modal'],
});

function opentestmodal(){
    testmodal.open();
}

// Add block to gallery onload
window.onload = function(){
    let galcontdom = document.getElementById('galcont');
    console.log(galcontdom);
    galcontdom.appendChild(block);
}

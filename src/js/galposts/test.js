const butcont = {
    img: 'https://via.placeholder.com/300x150?text=test+image',
    title: 'Test block Title',
    blurb: `This is a test blurb with an expression.`
}

//Main Div
let block = document.createElement('div');
block.setAttribute('class','galblock');

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

window.onload = function(){
    let galcontdom = document.getElementById('galcont');
    console.log(galcontdom);
    galcontdom.appendChild(block);
}

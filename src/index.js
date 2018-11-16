
//Libs
import tingle from 'tingle.js';
import Vivus from 'vivus';

//Styles
import './css/main.min.css';
import './css/modal.min.css';
import './css/tingle.min.css';
import './css/galpost.min.css';

//Gallery Posts
import './js/galposts/test.js';

// ******** Nav Scrolling ********
var essay = document.getElementById("essayNavbtn");
var gallery = document.getElementById("galNavbtn");
var projects = document.getElementById("projNavbtn");
var contact = document.getElementById("contNavbtn");

essay.onclick = function(){
    var essdiv = document.getElementById("ess");
    var essdivposition = essdiv.offsetTop;
    window.scrollTo({
        top: essdivposition,
        behavior: "smooth"
    });
}

gallery.onclick = function(){
    var galdiv = document.getElementById("gal");
    var galdivposition = galdiv.offsetTop;
    window.scrollTo({
        top: galdivposition,
        behavior: "smooth"
    });
}

projects.onclick = function(){
    var projdiv = document.getElementById("proj");
    var projdivposition = projdiv.offsetTop;
    window.scrollTo({
        top: projdivposition,
        behavior: "smooth"
    });
}

contact.onclick = function(){
    var contdiv = document.getElementById("contact");
    var contdivposition = contdiv.offsetTop;
    window.scrollTo({
        top: contdivposition,
        behavior: "smooth"
    });
}

// ******* Geo animation ********

var mainanimation = new Vivus('geo', 
    {
    type: 'scenario-sync',
    file: 'img/geo.svg',
    duration: 600, 
    delay: 0,
    pathTimingFunction: Vivus.EASE_IN,
    forceRender: true,
    reverseStack: true
});

// ******* Scroll to top button ********

//show/Hide button once scrolling beyond Nav
window.onscroll = function(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("topbtn").style.display = "block";
    } else {
        document.getElementById("topbtn").style.display = "none";
    }
}

// Scroll to top onclick function

var topbtnnode = document.getElementById('topbtn');
topbtnnode.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ******** Modal footer close button random choice generator *********

function randomBtnChoice(){
    
    var footerBtnChoices = ['Finished',
                            'Done',
                            'Compvare',
                            'Terminate',
                            'Abolish',
                            'Abort',
                            'Conclude',
                            'Dismiss',
                            'Wrap up', 
                            'Flawless Victory'];

    var rbc = footerBtnChoices[Math.floor(Math.random()*footerBtnChoices.length)];
    return rbc;
}

// secret modal


var hrt = document.getElementById('pxlhrt');

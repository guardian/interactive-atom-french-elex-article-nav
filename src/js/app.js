const globalTimer = 1000;
let pageAnchors = [];
let activeSections = [];

function init() {

    let scrollSections = window.parent.document.getElementsByTagName("h2");

    fixNavLabels()

    var n = 0;

    for (var i = 0; i < scrollSections.length; i++) {

        if (scrollSections[i].innerHTML == "Labour and welfare") {
            activeSections.push(scrollSections[i])
            var newObj = {};
            newObj.offSet = scrollSections[i].offsetTop;
            newObj.count = n;
            n++;
            pageAnchors.push(newObj);

        }
    }

    addListeners(pageAnchors);

}


function fixNavLabels(){
    let a = document.querySelectorAll('.gv-nav-label');

    for (var b = 0; b < a.length; b++) {
        var c = (a[b].innerHTML).split(" ");
        var d = e(c);
        a[b].innerHTML = d;
    }    

    function e(f){
        var g = "";
        for (var h = 0; h < f.length; h++){
            h == 0 ? g = g + f[h]+"<br/>" : g =  g + f[h]+" ";
        }


        return g;
    }
}


function addListeners(pageAnchors) {
    console.log(activeSections);
    var n = 0;
    [].slice.apply(document.querySelectorAll('.gv-list-item')).forEach(el => {
        var obj = pageAnchors[n];
        el.addEventListener('click', () => navClick(el));
        el.addEventListener('mouseover', () => navHover(el));
        el.addEventListener('mouseleave', () => navMouseOut(el));
        n++;
    });

}


function navClick(e) {

    var i = e.getAttribute('data-ind');

    if (i !== null) {



        var element = activeSections[i];

        var previous = element.previousElementSibling;

        var alignWithTop = true;

        console.log(i, element,previous)

        previous.scrollIntoView({ behavior: 'smooth' });

    }
}

function navHover(el){
    var a = el.querySelector('.gv-nav-btn');

    toggleClass(a, 'gv-hover', true); //add
}

function navMouseOut(el){
       var a = el.querySelector('.gv-nav-btn');

    toggleClass(a, 'gv-hover', false); //remove
}


function toggleClass(o,c,bAdd){
    var list = o.className.split(" ");
    if (list.indexOf(c)!==-1){
        if (!bAdd) delete list[list.indexOf(c)];
    }else{
        if (bAdd) list[list.length] = c;
    }
    o.className = list.join(" ");
}


init();
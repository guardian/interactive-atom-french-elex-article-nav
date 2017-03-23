import animatedScrollTo from "animated-scrollto";



const globalTimer = 1000;



function init() {
    

    let scrollSections = window.parent.document.getElementsByTagName("h2");

    let pageAnchors = []

    for(var i=0; i<scrollSections.length; i++){

    	if(scrollSections[i].innerHTML == "Labour and welfare"){
            var newObj = {};
            newObj.offSet = scrollSections[i].offsetTop;
            newObj.count = i;
    		pageAnchors.push(newObj);

    	}
    }
	
	addListeners(pageAnchors);
    
}


function addListeners(pageAnchors){
console.log(pageAnchors);
	var n = 0;
	[].slice.apply(document.querySelectorAll('.gv-list-item')).forEach(el => {

        var obj = pageAnchors[n];
        el.addEventListener('click', () => scrollCardIntoView(obj));
        n++;
    });

}



function scrollCardIntoView(obj) {

    var articleDivs = window.parent.document.querySelectorAll('.l-side-margins');

    //var bodyOffsets = articleDiv.getBoundingClientRect();

    console.log(articleDivs);

    console.log(window.parent.document.body);	

    console.log(obj.offSet, window.parent.document.body.offsetTop);

            animatedScrollTo(
                window.parent.document.body, // element to scroll with (most of times you want to scroll with whole <body>)
                obj.offSet + 88, // target scrollY (0 means top of the page)
                globalTimer / 3, // duration in ms
                function() { // callback function that runs after the animation (optional)
                    console.log('scrolled cards in', obj);
                }
            );
}

init();
'use-strict';

//add event on multiple elements
const addEventOnElements = function(elements,eventType,callback) {
    for (let i = 0; i < elements.length; index++) {
        elements[i].addEventListener(eventType,callback) 
    }
}

//PREAlOADING

const loadingElement = document.querySelector("[data-loading]")

window.addEventListener("load", function(){
    loadingElement.classList.add("loaded");
    document.body.classList.remove("active");
})
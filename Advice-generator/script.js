function fetchApi(){
    displayLoading();
    fetch('https://api.adviceslip.com/advice')
    .then(res => {
        return res.json();
    })
    .then(data => {
        hideLoading();
        const id = data.slip.id;
        const advice = data.slip.advice;
        newId(id,advice);
    });
}

function newId(id, advice){
    number.innerHTML =id;
    para.innerHTML = "&#8220;" + advice + "&#8221;";
}

function displayLoading(){
    loader.classList.add("skeleton");
    loader.classList.add("skeleton-text");
    para.innerHTML= "";
}

function hideLoading(){
    loader.classList.remove("skeleton");
    loader.classList.remove("skeleton-text");
}

const number = document.getElementById('number');
const para = document.querySelector('.advice');
const btn = document.querySelector('.dice');
const loader = document.querySelector(".skeleton");

btn.addEventListener('click', ()=>{
    displayLoading();
    setTimeout(()=>{
        fetchApi()
    },1000);
});

window.onload = fetchApi;




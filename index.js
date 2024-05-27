const login_container = document.querySelector(".container");
const section = document.querySelector("section");
const article = document.querySelector("article");
const login_button = document.querySelector(".container button");
const section_button = document.querySelector("section button");
const article_button = document.querySelector("article button");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const ncslogo = document.querySelector(".logo");
const main_btn = document.querySelector(".testimonials button");
const main = document.querySelector("main");
const select = document.querySelector(".select_container");
const icon = document.querySelector(".select_container i");
const social_icons = document.querySelector(".icons");

select.addEventListener('click', abcd);

function abcd(){
    icon.classList.toggle("rotate");
}


main_btn.addEventListener('click', function_zero);
login_button.addEventListener('click' , function_one);
section_button.addEventListener('click' , function_two);
forward.addEventListener('click', function_three);
backward.addEventListener('click', function_four);

function function_zero(){
    main.classList.add("toggle_class");
    login_container.classList.remove("toggle_class");
    ncslogo.classList.remove("toggle_class");
    social_icons.classList.add("toggle_class");

}
function function_one(){
    login_container.classList.add("toggle_class");
    section.classList.remove("toggle_class");
    forward.classList.remove("toggle_class");
    forward.classList.add("toggle_right");
    ncslogo.classList.add("toggle_left");
    ncslogo.classList.add("logo-toggle");
    ncslogo.classList.remove("logo");
}
function function_two(){
    section.classList.add("toggle_class");
    article.classList.remove("toggle_class");
    backward.classList.remove("toggle_class");
    forward.classList.add("toggle_class");
    ncslogo.classList.add("toggle_right");
    ncslogo.classList.remove("toggle_left");
    ncslogo.classList.add("logo_toggle");

}
function function_three(){
    section.classList.add("toggle_class");
    article.classList.remove("toggle_class");
    forward.classList.add("toggle_class");
    backward.classList.remove("toggle_class");
}
function function_four(){
    section.classList.remove("toggle_class");
    article.classList.add("toggle_class");
    forward.classList.remove("toggle_class");
    backward.classList.add("toggle_class");
}

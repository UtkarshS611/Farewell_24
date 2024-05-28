const article = document.querySelector("article");
const article_button = document.querySelector("article button");
const backward = document.querySelector("#backwards");
const ncslogo = document.querySelector(".logo");
const aside_btn = document.querySelector("aside button");
const popup = document.querySelector(".popup");
const fail = document.querySelector("#fail");
const result = document.querySelector("#message_result");

article_button.addEventListener('click', function_one);
aside_btn.addEventListener('click', function_two);

function function_one(){
    fail.classList.remove("toggle_class");
    result.classList.remove("toggle_class");
    article.classList.add("toggle_class");
    ncslogo.classList.add("toggle_class");
    backward.style.display = 'none';
}
function function_two(){
    result.classList.add("toggle_class");
    popup.classList.remove("toggle_class");
}

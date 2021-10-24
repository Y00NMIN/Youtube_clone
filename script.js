const text_button = document.querySelector('main .main_title .text_button');
const main_title_word = document.querySelector('main .main_title .main_title_word');

text_button.addEventListener('click', ()=>{
  text_button.classList.toggle('clicked');
  main_title_word.classList.toggle('clamp');
});
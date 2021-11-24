const textButton = document.querySelector(".main .main_title .text_button");
const mainTitleWord = document.querySelector(".main .main_title .main_title_word");

textButton.addEventListener('click', ()=>{
  textButton.classList.toggle('clicked');
  mainTitleWord.classList.toggle('clamp');
});



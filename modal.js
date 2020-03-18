const hidemodal = () => {
document.querySelector('.modal')
  .classList.toggle('modal_hide');
};

document.querySelector('#show')
.addEventListener('click',hidemodal);

document.querySelector('#clicknow')
.addEventListener('submit',(event) => {
  event.preventDefault();
  hidemodal();
});

document.querySelector('.modal_close span')
.addEventListener('click',hidemodal);

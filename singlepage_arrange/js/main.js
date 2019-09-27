"use strict";

const toggle_close = document.getElementById('fa-times');
const toggle_open = document.getElementById('fa-bars');
const toggle_menu = document.getElementById('toggle_menu');

toggle_open.addEventListener('click', () => {
  toggle_menu.classList.toggle('open')
});

toggle_close.addEventListener('click', () => {
  // alert('テスト');
  toggle_menu.classList.toggle('close');
});

"use strict";

{
  // ×ボタンを取得
  const toggle_close = document.getElementById('fa-times');
  // ハンバーガーボタンを取得
  const toggle_open = document.getElementById('fa-bars');
  // ハンバーガー押したときのメニューを取得
  const toggle_menu = document.getElementById('toggle_menu');
  // id:coverを取得
  // const cover = document.getElementById('cover');
  const t_link = document.getElementsByClassName('t_link');
  const logo = document.getElementsByClassName('logo');

  // ハンバーガーを押したときにopenクラスをつける
  toggle_open.addEventListener('click', () => {
    toggle_menu.classList.add('open')
    // cover.classList.add('menu_open')
  });

  // ×を押したときにopenクラスを外す
  toggle_close.addEventListener('click', () => {
    toggle_menu.classList.remove('open');
    // cover.classList.remove('menu_open')
  });

// これやるならfor文で回さないといけない
  t_link[0].addEventListener('click', () => {
    toggle_menu.classList.remove('open');
  });

// トップスクロールググり中
  logo[0].addEventListener('click', () => {
    // scrollIntoView(0. 0);
  });
}

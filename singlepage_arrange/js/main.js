"use strict";

{
  // ×ボタンを取得
  const toggle_close = document.getElementById('fa-times');
  // ハンバーガーボタンを取得
  const toggle_open = document.getElementById('fa-bars');
  // ハンバーガー押したときのメニューを取得
  const toggle_menu = document.getElementById('toggle_menu');

  // ハンバーガーを押したときにopenクラスをつける
  toggle_open.addEventListener('click', () => {
    toggle_menu.classList.add('open')
  });

  // ×を押したときにopenクラスを外す
  toggle_close.addEventListener('click', () => {
    toggle_menu.classList.remove('open');
  });
}

(function() {
'use strict';
// forked from suke009's "enchant.js - Lesson5" http://jsdo.it/suke009/QMS0
/*
 * おまじない
 */
enchant();

/*
 * 定数
 */
// パラメータ
var SCREEN_WIDTH = 320;
var SCREEN_HEIGHT = 320;

/*
 * グローバル変数
 */
var game = null;


/*
 * 汎用処理
 */
// ランダム値生成
var randfloat = function(min, max) {
  return Math.random() * (max - min) + min;
};

/*
 * メイン処理
 */
window.onload = function() {
  // ゲームオブジェクトの生成
  game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
  // 画像の読み込み
  game.preload('http://enchantjs.com/assets/images/chara1.gif');

  // ゲーム開始時の処理
  game.onload = function() {
    var scene = game.rootScene;
    scene.backgroundColor = "black";
      
  // スプライトの生成、表示
  var kuma0 = new Sprite(32, 32);
  kuma0.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
  kuma0.moveTo(50, 50);
  scene.addChild(kuma0);
  };

  game.start();
};
})();

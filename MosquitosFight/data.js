//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
var canvas = document.getElementById("game_canvas");var ctx = canvas.getContext("2d");var b_image ="engawa.png";var f_image ="furin.png";var goei_image ="buta.png";var uboat_image ="ka.png";var bomb_image ="kemuri.png";var oj_image ="ojisan.png";var start_image ="start.png";if(document.documentElement.lang == 'ja')start_image ="startj.png";var over_image ="over.png";var clear_image ="clear.png";var active_image="active.png";var bimage = new Image();bimage.src = b_image;var fimage = new Image();fimage.src = f_image;var goimage = new Image();goimage.src = goei_image;var ubimage = new Image();ubimage.src = uboat_image;var boimage = new Image();boimage.src = bomb_image;var ojimage = new Image();ojimage.src = oj_image;var simage = new Image();simage.src = start_image;var ovimage = new Image();ovimage.src = over_image;var cimage = new Image();cimage.src = clear_image;var aimage = new Image();aimage.src = active_image;var ubvalue = [[-120,-50,-9.7,2.1],[-120,-70,-11,2.4],[450,-60,14,1.8]];var bombs = [[0,-40,0],[0,-40,0]];var timer= 0;var score= 0;var count= 3;var goei_w = 50;var goei_h = 50;var goei_x = 0;var goei_y = 210;var uboat_w = 50;var uboat_h = 50;var bomb_w = 30;var bomb_h = 40;var oj_w = 90;var oj_h = 90;var gyorai_w = 6;var gyorai_h = 22;var x_marg = 0;var y_marg = 0;var top_marg = 20;var disc_margX=3;var disc_margY=127;var select_margY=60;var timer = 0;var turn = 0;var bturn = 0;var speed = 3;var espeed = 3;var bspeed = -4;var open  = 0;var ready = 1;var start = 2;var touch = 3;var bomb  = 4;var down  = 5;var hold  = 6;var up    = 7;var right = 8;var drop  = 9;var over  =10;var clear =11;var link  =12;var error =13;var flg = open;var bflg = "";var offsetXY=[0,0];function offsetX(oj){offsetXY[0] = -(document.documentElement.scrollLeft || document.body.scrollLeft);while(oj){offsetXY[0] += oj.offsetLeft;oj = oj.offsetParent;}return}function offsetY(oj){offsetXY[1] = -top_marg - (document.documentElement.scrollTop || document.body.scrollTop);while(oj){offsetXY[1] += oj.offsetTop;oj = oj.offsetParent;}return;}
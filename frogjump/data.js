//Copyright (C) Webbu Kobo Tokyo Japan All Rights Reserved
var canvas = document.getElementById("game_canvas");var ctx = canvas.getContext("2d");var disc_image ="num.png";var uma_image ="uma.png";var base_image ="base.png";var start_image ="start.png";if(document.documentElement.lang == 'ja')start_image ="startj.png";var over_image ="over.png";var clear_image ="clear.png";var active_image="active.png";var dimage = new Image();dimage.src = disc_image;var umaimage = new Image();umaimage.src = uma_image;var baseimage = new Image();baseimage.src = base_image;var simage = new Image();simage.src = start_image;var ovimage = new Image();ovimage.src = over_image;var cimage = new Image();cimage.src = clear_image;var aimage = new Image();aimage.src = active_image;var social_image="social.png";var socialimage = new Image();socialimage.src = social_image;var value = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];var bvalue = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];var umaPos=[-1,-1];var frogPos=[-1,-1];var qnum=3;var score=qnum-3;var count=1;var umaNum=0;var selectX=0;var selectY=0;var touchtime = 0;var timer= 0;var starttime=0;var gametime = starttime;var syoritime=0;var score= 0;var tama_w = 53;var tama_h = 40;var uma_w = 62;var uma_h = 96;var x_marg = 0;var y_marg = 0;var top_marg = 20;var disc_margX=1;var disc_margY=45;var select_margY=0;var social_w = 125;var social_h = 34;var open  = 0;var ready = 1;var slide = 2;var start = 3;var quest = 4;var touchW= 5;var touch = 6;var move  = 7;var check = 8;var error = 9;var clear =10;var next  =11;var over  =12;var link  =13;var error2=14;var tweet =15;var face  =16;var flg = open;var btnFlg = "";var offsetXY=[0,0];function offsetX(oj){offsetXY[0] = -(document.documentElement.scrollLeft || document.body.scrollLeft);while(oj){offsetXY[0] += oj.offsetLeft;oj = oj.offsetParent;}return}function offsetY(oj){offsetXY[1] = -top_marg - (document.documentElement.scrollTop || document.body.scrollTop);while(oj){offsetXY[1] += oj.offsetTop;oj = oj.offsetParent;}return;}
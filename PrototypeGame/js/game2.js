var opst_left_px = 0;//장애물 비행기 가로축 좌표 marginLeft
var opst_left_px1 = 0;//장애물 두번째 가로축 좌표
var opst_left_px2 = 0;
var opst_left_px3 = 0;
var opst_left_px4 = 0;
var opst_left_px5 = 0;
var opst_move_d = 5;//장애물 비행기 이동거리
var opst_move_s = 8;//스폐셜 비행기 이동거리

var opst_movex_time;//장애물 비행기 가로 setTimeout 함수 저장변수
var opst_movex_time1;//장애물 두번째 비행기 setTimeout 함수 저장변수
var opst_movex_time2;
var opst_movex_time3;
var opst_movex_time4;
var opst_movex_time5;
var game_point_init;

var opst_top_px = 0;//장애물 비행기 랜덤 출발 세로 좌표 저장변수 marginTop
var opst_top_px1 = 0;//장애물 두번째 비행기 랜덤 출발 세로 좌표 저장변수
var opst_top_px2 = 0;
var opst_top_px3 = 0;
var opst_top_px4 = 0;
var opst_top_px5 = 0;

var game_stage = 0;//게임 스테이지 저장 변수
var game_count = 0;//게임 레벨 카운터
var game_point = 0;//점수
var our_airp = 3;
var start;

function start_game(v) {
    img_airp.src = './img/main1.gif';
    div1.style.display = 'none';
    divstage.innerHTML ='점수: <br>스테이지 : ' + `${game_stage + v}`;
    opst_init();
    start = 1;
    x_on = 0;
    y_on = 0;
    our_airp_inve();
    game_stage_j(v);
    point_count();
    console.log(`start_game : ${game_stage}, v : ${v}`);
}

function restart_game() {
    our_airp = 3;
    game_stage = 0;
    game_point = 0;
    game_count = 0;
    opst_move_d = 5;
    opst_move_s = 8;
    div3.style.display = 'none';
    document.styleSheets[0].rules[10].style.display = 'block';
    document.styleSheets[0].rules[11].style.display = 'block';
    start_game(1);
}

function point_count() {
    game_point += game_stage;
    div2.innerHTML = game_point;
    divnextpoint.innerHTML = game_count + '/' + game_stage * 4;
    if(start === 1){
        game_point_init = setTimeout(point_count, 1);
    }
}

function stage_message() {
    div1.style.display = 'block';
    start = 0;
    div1.innerHTML = '<button style="font-size: 150px; color: red; margin-top: 15%;" onclick="re_play">'
                        + game_stage + ' STAGE CLEAR!' + '</button><br>카운트 속도 증가!<br>계속해서 진행하시려면 클릭해 주세요!';
    // divstage.innerHTML ='점수: <br>스테이지 : ' + `${game_stage + 1}`;
    
    opst_init();
}

function re_play() {
    div1.style.display = 'none';
    
    point_count();
    game_stage_j(0);
}

//게임 스테이지 판별 함수
function game_stage_j(v) {
    game_stage += v;
    
    if (game_stage == 1) {
        opst_move_f1();
    }
    else if (game_stage == 2) {
        
        opst_move_f1();
        setTimeout(opst_move_f2, 500);
    }
    else if (game_stage == 3) {
        
        opst_move_f1();
        setTimeout(opst_move_f2, 400);
        setTimeout(opst_move_f3, 800);
    }
    else if (game_stage == 4) {
        opst_move_d = 6;
        opst_move_f1();
        setTimeout(opst_move_f2, 300);
        setTimeout(opst_move_f3, 600);
        setTimeout(opst_move_f4, 900);
    }
    else if (game_stage == 5) {
        
        opst_move_f1();
        setTimeout(opst_move_f2, 200);
        setTimeout(opst_move_f3, 400);
        setTimeout(opst_move_f4, 600);
        setTimeout(opst_move_f5, 800);
    }
    else if (game_stage == 6) {
        
        opst_move_f1();
        setTimeout(opst_move_f2, 200);
        setTimeout(opst_move_f3, 400);
        setTimeout(opst_move_f4, 600);
        setTimeout(opst_move_f5, 800);
        setTimeout(opst_move_f6, 900);
    }
    else if (game_stage == 7) {
        opst_move_d = 6;//장애물 비행기 이동거리
        opst_move_s = 9;//스폐셜 비행기 이동거리
        opst_move_f1();
        setTimeout(opst_move_f2, 200);
        setTimeout(opst_move_f3, 400);
        setTimeout(opst_move_f4, 600);
        setTimeout(opst_move_f5, 800);
        setTimeout(opst_move_f6, 900);
    }
    else if (game_stage == 8) {
        opst_move_d = 7;//장애물 비행기 이동거리
        opst_move_s = 10;//스폐셜 비행기 이동거리
        opst_move_f1();
        setTimeout(opst_move_f2, 200);
        setTimeout(opst_move_f3, 400);
        setTimeout(opst_move_f4, 600);
        setTimeout(opst_move_f5, 800);
        setTimeout(opst_move_f6, 900);
    }
    else if (game_stage >= 9) {
        opst_move_d = 8;//장애물 비행기 이동거리
        opst_move_s = 11;//스폐셜 비행기 이동거리
        opst_move_f1();
        setTimeout(opst_move_f2, 200);
        setTimeout(opst_move_f3, 400);
        setTimeout(opst_move_f4, 600);
        setTimeout(opst_move_f5, 800);
        setTimeout(opst_move_f6, 900);
    }
}

// 장애물 비행기 초기화
function opst_init() {
    clearTimeout(opst_movex_time);
    clearTimeout(opst_movex_time1);
    clearTimeout(opst_movex_time2);
    clearTimeout(opst_movex_time3);
    clearTimeout(opst_movex_time4);
    clearTimeout(opst_movex_time5);
    opst_top_px = br_height * Math.random() - 400;
    opst_top_px1 = br_height * Math.random() - 400;
    opst_top_px2 = br_height * Math.random() - 400;
    opst_top_px3 = br_height * Math.random() - 400;
    opst_top_px4 = br_height * Math.random() - 400;
    opst_top_px5 = br_height * Math.random() - 400;
    opst_left_px = 0;//장애물 비행기 가로축 좌표
    opst_left_px1 = 0;//장애물 두번째 가로축 좌표
    opst_left_px2 = 0;
    opst_left_px3 = 0;
    opst_left_px4 = 0;
    opst_left_px5 = 0;
    document.styleSheets[0].rules[1].style.marginTop = opst_top_px + 'px';
    document.styleSheets[0].rules[3].style.marginTop = opst_top_px1 + 'px';
    document.styleSheets[0].rules[4].style.marginTop = opst_top_px2 + 'px';
    document.styleSheets[0].rules[5].style.marginTop = opst_top_px3 + 'px';
    document.styleSheets[0].rules[6].style.marginTop = opst_top_px4 + 'px';
    document.styleSheets[0].rules[8].style.marginTop = opst_top_px5 + 'px';
    document.styleSheets[0].rules[1].style.marginLeft = '0px';
    document.styleSheets[0].rules[3].style.marginLeft = '0px';
    document.styleSheets[0].rules[4].style.marginLeft = '0px';
    document.styleSheets[0].rules[5].style.marginLeft = '0px';
    document.styleSheets[0].rules[6].style.marginLeft = '0px';
    document.styleSheets[0].rules[8].style.marginLeft = '0px';
    document.styleSheets[0].rules[1].style.left = br_width + 'px';
    document.styleSheets[0].rules[3].style.left = br_width + 'px';
    document.styleSheets[0].rules[4].style.left = br_width + 'px';
    document.styleSheets[0].rules[5].style.left = br_width + 'px';
    document.styleSheets[0].rules[6].style.left = br_width + 'px';
    document.styleSheets[0].rules[8].style.left = br_width + 'px';
    document.styleSheets[0].rules[1].style.display = 'none';
    document.styleSheets[0].rules[3].style.display = 'none';
    document.styleSheets[0].rules[4].style.display = 'none';
    document.styleSheets[0].rules[5].style.display = 'none';
    document.styleSheets[0].rules[6].style.display = 'none';
    document.styleSheets[0].rules[8].style.display = 'none';
}

function opst_move_f1() {
    document.styleSheets[0].rules[1].style.display = 'block';
    opst_left_px = opst_left_px - opst_move_d;
    document.styleSheets[0].rules[1].style.marginLeft = opst_left_px + 'px';
    opst_movex_time = setTimeout(opst_move_f1, 1);
    if (opst_left_px <= -br_width) {
        clearTimeout(opst_movex_time);
        opst_left_px = 0;
        document.styleSheets[0].rules[1].style.marginLeft = opst_left_px + 'px';
        opst_top_px = br_height * Math.random() - 400;
        document.styleSheets[0].rules[1].style.marginTop = opst_top_px + 'px';
        opst_move_f1();
    }
    if (opst_left_px <= left_px - br_width + 150 && opst_left_px >= left_px - br_width - 50 && opst_top_px <= top_px + 53 && opst_top_px >= top_px - 53) {
        game_count = game_count + 2;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time);
        opst_left_px = 0;
        document.styleSheets[0].rules[1].style.marginLeft = opst_left_px + 'px';
        opst_top_px = br_height * Math.random() - 400;
    
        document.styleSheets[0].rules[1].style.marginTop = opst_top_px + 'px';
        opst_move_f1();
        if (game_count == game_stage * 4) {
            game_count = 0;
            stage_message();
        
        }
    }
    
}

function opst_move_f2() {
    document.styleSheets[0].rules[3].style.display = 'block';
    opst_left_px1 = opst_left_px1 - opst_move_d;
    document.styleSheets[0].rules[3].style.marginLeft = opst_left_px1 + 'px';
    opst_movex_time1 = setTimeout(opst_move_f2, 1);
    if (opst_left_px1 <= -br_width) {
        //game_count=game_count+1;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time1);
        opst_left_px1 = 0;
        document.styleSheets[0].rules[3].style.marginLeft = opst_left_px1 + 'px';
        opst_top_px1 = br_height * Math.random() - 400;
        document.styleSheets[0].rules[3].style.marginTop = opst_top_px1 + 'px';
        opst_move_f2();
    }
    if (opst_left_px1 <= left_px - br_width + 150 && opst_left_px1 >= left_px - br_width - 50 && opst_top_px1 <= top_px + 53 && opst_top_px1 >= top_px - 53) {
        
        air_crash(2);
        
    }
}

function opst_move_f3() {
    document.styleSheets[0].rules[4].style.display = 'block';
    opst_left_px2 = opst_left_px2 - opst_move_d;
    document.styleSheets[0].rules[4].style.marginLeft = opst_left_px2 + 'px';
    opst_movex_time2 = setTimeout(opst_move_f3, 1);
    if (opst_left_px2 <= -br_width) {
        //game_count=game_count+1;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time2);
        opst_left_px2 = 0;
        document.styleSheets[0].rules[4].style.marginLeft = opst_left_px2 + 'px';
        opst_top_px2 = br_height * Math.random() - 400;
        document.styleSheets[0].rules[4].style.marginTop = opst_top_px2 + 'px';
        opst_move_f3();
    }
    if (opst_left_px2 <= left_px - br_width + 150 && opst_left_px2 >= left_px - br_width - 50 && opst_top_px2 <= top_px + 53 && opst_top_px2 >= top_px - 53) {
        
        air_crash(3);
        
    }
}

function opst_move_f4() {
    document.styleSheets[0].rules[5].style.display = 'block';
    opst_left_px3 = opst_left_px3 - opst_move_d;
    document.styleSheets[0].rules[5].style.marginLeft = opst_left_px3 + 'px';
    opst_movex_time3 = setTimeout(opst_move_f4, 1);
    if (opst_left_px3 <= -br_width) {
        //game_count=game_count+1;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time3);
        opst_left_px3 = 0;
        document.styleSheets[0].rules[5].style.marginLeft = opst_left_px3 + 'px';
        opst_top_px3 = br_height * Math.random() - 400;
        document.styleSheets[0].rules[5].style.marginTop = opst_top_px3 + 'px';
        opst_move_f4();
    }
    if (opst_left_px3 <= left_px - br_width + 150 && opst_left_px3 >= left_px - br_width - 50 && opst_top_px3 <= top_px + 53 && opst_top_px3 >= top_px - 53) {
        
        air_crash(4);
        
    }
}

function opst_move_f5() {
    document.styleSheets[0].rules[6].style.display = 'block';
    opst_left_px4 = opst_left_px4 - opst_move_d;
    document.styleSheets[0].rules[6].style.marginLeft = opst_left_px4 + 'px';
    opst_movex_time4 = setTimeout(opst_move_f5, 1);
    if (opst_left_px4 <= -br_width) {
        //game_count=game_count+1;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time4);
        opst_left_px4 = 0;
        document.styleSheets[0].rules[6].style.marginLeft = opst_left_px4 + 'px';
        opst_top_px4 = br_height * Math.random() - 400;
        document.styleSheets[0].rules[6].style.marginTop = opst_top_px4 + 'px';
        opst_move_f5();
    }
    if (opst_left_px4 <= left_px - br_width + 150 && opst_left_px4 >= left_px - br_width - 50 && opst_top_px4 <= top_px + 53 && opst_top_px4 >= top_px - 53) {
        
        air_crash(5);
        
    }
}

function opst_move_f6() {
    document.styleSheets[0].rules[8].style.display = 'block';
    opst_left_px5 = opst_left_px5 - opst_move_s;
    document.styleSheets[0].rules[8].style.marginLeft = opst_left_px5 + 'px';
    opst_movex_time5 = setTimeout(opst_move_f6, 1);
    if (opst_left_px5 <= -br_width) {
        //game_count=game_count+1;//게임 레벨 카운터 증가
        clearTimeout(opst_movex_time5);
        opst_left_px5 = 0;
        document.styleSheets[0].rules[8].style.marginLeft = opst_left_px5 + 'px';
        opst_top_px5 = br_height * Math.random() - 400;
        document.styleSheets[0].rules[8].style.marginTop = opst_top_px5 + 'px';
        opst_move_f6();
    }
    if (opst_left_px5 <= left_px - br_width + 150 && opst_left_px5 >= left_px - br_width - 50 && opst_top_px5 <= top_px + 53 && opst_top_px5 >= top_px - 53) {
        
        air_crash(6);
        
    }
}
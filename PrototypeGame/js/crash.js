function air_crash(a) {
    var img_airp = document.getElementById('img_airp');
    img_airp.src = 'img/game_over_chu.gif';
    clearTimeout(opst_movex_time);
    clearTimeout(opst_movex_time1);
    clearTimeout(opst_movex_time2);
    clearTimeout(opst_movex_time3);
    clearTimeout(opst_movex_time4);
    clearTimeout(opst_movex_time5);
    clearTimeout(game_point_init);
    our_airp = our_airp - 1;
    
    clearInterval(movex_time);
    clearInterval(movey_time);
    x_on = 1;
    y_on = 1;
    if (our_airp == 0) {
        over_game();
    }
    else {
        setTimeout(start_game, 3000, 0);
    }
    
}

function our_airp_inve() {
    if (our_airp == 1) {
        document.styleSheets[0].rules[10].style.display = 'none';
        document.styleSheets[0].rules[11].style.display = 'none';
    }
    else if (our_airp == 2) {
        document.styleSheets[0].rules[10].style.display = 'block';
        document.styleSheets[0].rules[11].style.display = 'none';
    }
    else if (our_airp == 3) {
        document.styleSheets[0].rules[10].style.display = 'block';
        document.styleSheets[0].rules[11].style.display = 'block';
    }
}

function over_game() {
    console.log('no~~');
    div3.style.display = 'block';
}
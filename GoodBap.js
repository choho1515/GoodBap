let bap = [9e3, 7e3, 6e3, 5e3];

function response(e, r, a, t, n, o, i) {
    if (r.startsWith("!국밥 ")) {
        let e = r.substr(4).split(" ");
        isNaN(e) ? n.reply("숫자만 넣어.") : e <= average(bap) ? n.reply("평균 가격인 " + numberWithCommas(average(bap)) + "원보다\n" + numberWithCommas(Math.floor(average(bap) - e)) + "원 부족해, 즉 국밥을 살수 없어.") : e >= 1e12 ? n.reply("정상적인 가격을 넣어.") : n.reply("그걸 살 바에 " + numberWithCommas(Math.floor(e / average(bap))) + "개의 국밥을\n뜨ㅡㅡ끈하고 든ㅡ든하게 먹는게 낫지.")
    }
}

function average(e) {
    let r = 0,
        a = e.length;
    for (var t = 0; t < a; t++) r += e[t];
    return r / a
}

function numberWithCommas(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
//\uC724\uB3D9\uC6D0

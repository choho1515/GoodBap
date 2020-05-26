let bap = [9000, 7000, 6000, 5000]; //국밥 가격들
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg.startsWith("!국밥 ")) {
        let ms = msg.substr(4).split(" ")
        //↓숫자인지 아닌지
        if (!isNaN(ms)) {
            if (ms <= average(bap)) {
                replier.reply("평균 가격인 " + numberWithCommas(average(bap)) + "원보다\n" + numberWithCommas(Math.floor(average(bap) - ms)) + "원 부족해, 즉 국밥을 살수 없어.");
            } else
            if (ms >= 1000000000000) {
                replier.reply("정상적인 가격을 넣어.");
            } else replier.reply("그걸 살 바에 " + numberWithCommas(Math.floor(ms / average(bap))) + "개의 국밥을\n뜨ㅡㅡ끈하고 든ㅡ든하게 먹는게 낫지.");
        } else replier.reply("숫자만 넣어.");
    }
}

function average(array) {
    let result = 0;
    let arrLength = array.length;
    for (var i = 0; i < arrLength; i++) {
        result += array[i];
    }
    return result / arrLength;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

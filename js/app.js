
function judgeBrand(sUserAgent) {
    var isHuawei = sUserAgent.match(/huawei/i) == "huawei";
    var isHonor = sUserAgent.match(/honor/i) == "honor";
    var isOppo = sUserAgent.match(/oppo/i) == "oppo";
    var isOppoR15 = sUserAgent.match(/pacm00/i) == "pacm00";
    var isVivo = sUserAgent.match(/vivo/i) == "vivo";
    var isXiaomi = sUserAgent.match(/mi\s/i) == "mi ";
    var isXiaomi2s = sUserAgent.match(/mix\s/i) == "mix ";
    var isRedmi = sUserAgent.match(/redmi/i) == "redmi";

    var app = "com.xydlm.randomtools"
    if (isHuawei || isHonor) {
        location.href="appmarket://details?id="+app;
    } else if (isOppo || isOppoR15) {
        location.href="oppomarket://details?packagename="+app;
    } else if (isVivo) {
        location.href="vivomarket://details?id="+app;
    } else if (isXiaomi || isRedmi || isXiaomi2s) {
        location.href="mimarket://details?id="+app;
    }
    _hmt.push(['_trackEvent', 'app', 'click', 'android']);
    console.log("okok");
}

function installAndroid(){
    judgeBrand(navigator.userAgent.toLowerCase())
}

// setTimeout(function(){
//     judgeBrand(navigator.userAgent.toLowerCase())
// },1500);

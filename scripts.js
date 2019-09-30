var before = $('.imgx_before');
var after = $('.imgx_after');
var width_before = before.width();
var width_after = after.width();
var ScreenWidth = window.screen.width;
var ScreenHeight = window.screen.height;




$("#vals").keydown(function (event) {
    if (event.which == 13) {
        var inputvalue = $("#vals").val();
        var result = inputvalue / width_after;
        $('#result_value').html(result);
        $('.imgx_before').width(inputvalue);
        ;
        console.log(result);
        //增加值
        $('#add1').on('click', function () {
            var a = ++inputvalue
            var result = a / width_after ;
            $('.imgx_before').width(a);
            $("#vals").val(a);
            $('#result_value').html(result);
            console.log('改變後的比例' + result);
            console.log(a);
        });
        $('#reduce1').on('click', function () {
            var b = --inputvalue
            var result = b / width_after ;
            $('.imgx_before').width(b);
            $('#result_value').html(result);
            $("#vals").val(b);
            console.log('減少後的比例' + result);
            console.log(b);
        });

    };
});


// var i = before.width();
// $('#add1').on('click', function () {
//     var a = ++i;
//     var result = a / width_after;
//     console.log(result);
//     console.log(a);
//     $("#vals").val(a);
//     $('.imgx_before').width(a);
// });


// $('#reduce1').on('click', function () {
//     var b = --i;
//     var result = b / width_after;
//     console.log(result);
//     console.log(b);
//     $("#vals").val(b);
//     $('.imgx_before').width(b);
// });












//  $("#vals").val(width_before);

var result = width_before / width_after;

result = result.toFixed(6);



// function justwidth() {
//     if (ScreenWidth == '2560') {
//         var scrWidth = ww * 0.416517;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '1920') {
//         var scrWidth = ww * 0.27553;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '1344') {
//         var scrWidth = ww * 0.19255;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '1366') {
//         var scrWidth = ww * 0.19680;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '1024') {
//         var scrWidth = ww * 0.15034;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '2048') {
//         var scrWidth = ww * 0.33404;
//         big.css('width', scrWidth);
//     } else if (ScreenWidth == '1600') {
//         var scrWidth = ww * 0.26170;
//         big.css('width', scrWidth);
//     } 
//      else {
//         alert('熒幕不支援1:1');
//     }

// }


// window.onload = justwidth;
// // $(window).resize = justwidth();

// console.log(ww);





console.log('比例值 : ' + result);
console.log(ScreenHeight);
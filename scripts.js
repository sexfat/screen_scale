var before = $('.imgx_change');
var after = $('.imgx_origin');
var width_before = before.width();
var width_after = after.width();
var ScreenWidth = window.screen.width;
var ScreenHeight = window.screen.height;




$("#vals").keydown(function (event) {
    if (event.which == 13) {
        //初始給值
        var inputvalue = $("#vals").val();
        var result = inputvalue / width_after;
        $('#result_value').html(result);
        $('.imgx_change').width(inputvalue);
        console.log(result);
        //增加值
        $('#add1').on('click', function () {
            var a = ++inputvalue
            var result = a / width_after ;
            $('.imgx_change').width(a);
            $("#vals").val(a);
            $('#result_value').html(result);

            console.log('增加後的比例' + result);
            console.log(a);
        });

        //減少值
        $('#reduce1').on('click', function () {
            var b = --inputvalue
            var result = b / width_after ;
            $('.imgx_change').width(b);
            $('#result_value').html(result);
            $("#vals").val(b);
            
            console.log('減少後的比例' + result);
            console.log(b);
        });

    };
});
console.log('螢幕寬:' + ScreenWidth + '/' +  '螢幕高:' + ScreenHeight);
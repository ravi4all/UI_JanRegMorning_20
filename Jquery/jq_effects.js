$(document).ready(function () {
    // $("#btn_1").click(function (e) { 
    //     e.preventDefault();
    //     $("img").hide(2000);
    // });
    // $("#btn_2").click(function (e) { 
    //     e.preventDefault();
    //     $("img").show(2000);
    // });
    // $("#btn_3").click(function (e) { 
    //     e.preventDefault();
    //     $("img").toggle(2000);
    // });

    // $("#btn_1").click(function (e) { 
    //     e.preventDefault();
    //     $("img").fadeOut(2000);
    // });
    // $("#btn_2").click(function (e) { 
    //     e.preventDefault();
    //     $("img").fadeIn(2000);
    // });
    // $("#btn_3").click(function (e) { 
    //     e.preventDefault();
    //     $("img").fadeToggle(2000);
    // });

    $("#btn_1").click(function (e) { 
        e.preventDefault();
        $("div").slideUp(2000);
    });
    $("#btn_2").click(function (e) { 
        e.preventDefault();
        $("div").slideDown(2000);
    });
    $("#btn_3").click(function (e) { 
        e.preventDefault();
        $("div").slideToggle(2000);
    });

});
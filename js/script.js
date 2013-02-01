/* Author: Ryan Kelly* - ryan.kelly@onapp.com */


$(document).ready(function() {
 
    $(".slidetabs").tabs(".images > div", {
     
        effect: 'fade',
        fadeOutSpeed: "slow",
        //event: 'mouseover',
        rotate: true
 
    }).slideshow({
   
        autoplay: true, 
        clickable: false, 
        interval: 5000  
   
    });

    $("img[rel]").overlay({
        speed: 400,
        mask: {
        color: '#000',
        loadSpeed: 450,
        opacity: 0.75
      },
    });
});


/*
$("#firstnav > ul > li.level_1").hover(function () {
    $(this).css('display', 'block');
    return false;
})

$('#firstnav > ul > li.has_children').hoverIntent(menuConf);
*/




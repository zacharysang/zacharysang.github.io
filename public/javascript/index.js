var navColors = ['#F36F03','darkblue','green', 'teal','crimson','purple'];
var mainColors = ['#F36F03','lightblue','lightgreen','#bef4f1','#ffe0e9','plum'];

$(document).ready(function(){
    $('.sectionContainer').on('mouseover',function(ev){

        //get id of current element
        var currSection = parseInt($(ev.target).attr('itemNum'));

        //get color of current element
        var mainCol = mainColors[currSection];
        var navCol = navColors[currSection];

        $('.gridContainer').css({"transition":"0.3s","background-color":mainCol});
        $('.navbar').css({"transition":"0.3s","background-color":navCol});
        $('*::selection').css({'transition': '0.3s','background-color': mainCol});

    });

    $('.banner').on('mouseover', function(ev){
        $('.gridContainer').css({"transition":"0.3s","background-color":'white'});
        $('.navbar').css({"transition":"0.3s","background-color":'#F36F03'});
    })
});


function resetBaseColor(col){

}
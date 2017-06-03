var navColors = ['#F36F03','darkblue','green', 'teal','crimson','purple'];
var mainColors = ['#F36F03','lightblue','lightgreen','#bef4f1','#ffe0e9','plum'];

$(document).ready(function(){
    //listen for mouseover on sectionContainer to trigger color change
    $('.sectionContainer').on('mouseover touchstart hover scrollstart scrollend',function(ev){

        //get id of current element
        var currSection = parseInt($(ev.target).closest('.sectionContainer').attr('itemNum'));


        //get color of current element
        var mainCol = mainColors[currSection];
        var navCol = navColors[currSection];

        $('.gridContainer').css({"transition":"0.3s","background-color":mainCol});
        $('.navbar').css({"transition":"0.3s","background-color":navCol});

        //alert('changed color to: ' + mainCol);

    });

    //listen for mouseover banner to reset color
    $('.banner').on('mouseover', function(ev){
        $('.gridContainer').css({"transition":"0.3s","background-color":'white'});
        $('.navbar').css({"transition":"0.3s","background-color":'#F36F03'});
    })

    //listen for scroll and check position of top of screen

    slogPos = 0;
    slogans = $('.tagline');
    window.setInterval(rotateSlogan, 5000);

});


function resetBaseColor(col){

}

function rotateSlogan(){
    $(slogans[slogPos]).hide();
    $(slogans[(slogPos+1) % slogans.length]).show();
    
    slogPos = (++slogPos) % slogans.length;



}
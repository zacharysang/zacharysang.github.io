var navColors = ['rgba(243,111,3,0.7)','rgba(0,0,139,0.7)','rgba(0,128,0,0.7)', 'rgba(0,128,128,0.7)','rgba(220,20,60,0.7)','rgba(128,0,128,0.7)'];
var mainColors = ['#F36F03','lightblue','lightgreen','#bef4f1','#ffe0e9','plum'];

$(document).ready(function(){
    //listen for mouseover on sectionContainer to trigger color change
    $('.sectionContainer').on('mouseover touchstart hover scrollstart scrollend',function(ev){

        //get id of current element
        var currSection = parseInt($(ev.target).closest('.sectionContainer').attr('itemNum'));


        //get color of current element
        mainCol = mainColors[currSection];
        navCol = navColors[currSection];

        $('.gridContainer').css({"transition":"0.3s","background-color":mainCol});
        $('.navbar').css({"transition":"0.3s","background-color":navCol});

    });

    //listen for mouseover banner to reset color
    $('.banner').on('mouseover', function(ev){
        $('.gridContainer').css({"transition":"0.3s","background-color":'white'});
        $('.navbar').css({"transition":"0.3s","background-color":navColors[0]});
    })

    //listen for scroll and check position of top of screen, replace the mouseover stuff

    //listen for click on the h1 elements
    $('.sectionHeadings h2').on('click',function(ev){
        
        
        $('.sectionContent .entry').each(function(){$(this).animate({opacity: 0},100)});

        $(`.sectionContent .${$(ev.target).attr('class')}`).animate({opacity: 1},100);

        //highlight the heading
        $('.sectionHeadings h2').each(function(){$(this).css({'background-color':'inherit','color':'inherit','transition':'0.2s'})});
        $(ev.target).css({'background-color': navCol, 'color': 'white', 'transition': '0.2s'});

        //^maybe just apply a class?
        

    });


    //code for rotating tagline. can probably be refactored to remove bad global vars
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
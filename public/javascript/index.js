//var navColors = ['rgba(243,111,3,0.7)','rgba(1,80,151,0.7)','rgba(1,114,215,0.7)', 'rgba(36,149,250,0.7)','rgba(10,135,247,0.7)','rgba(39,145,240,0.7)'];
var navColors = ['rgba(243,111,3,0.7)','rgba(1,114,215,0.7)','rgba(36,149,250,0.7)', 'rgba(1,114,215,0.7)','rgba(36,149,250,0.7)','rgba(1,114,215,0.7)'];
var mainColors = ['#FFA962','#DAF0F8','#DAF0F8','#DAF0F8','#DAF0F8','#DAF0F8'];
//var mainColors = ['#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF'];

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
        var sectionContainer = $(ev.target).closest('.sectionContainer');

        //hide all section content
        $(`.sectionContainer#${$(sectionContainer).attr('id')} .entry`).each(function(){
            $(this).removeClass('show');
        });

        //deselect all selected in this section
        $(`.sectionContainer#${$(sectionContainer).attr('id')} h2`).each(function(){
            $(this).removeClass('selected');
        });

        //show the newly selected section content
        $(`.sectionContent .${$(ev.target).attr('class')}`).addClass('show');

        //add selected class to the h2 el
        $(ev.target).addClass('selected');

    });


    //code for rotating tagline. can probably be refactored to remove bad global vars
    slogPos = 0;
    slogans = $('.tagline');
    window.setInterval(rotateSlogan, 5000);

    //listen for clicks on slogan thing
    $('.inspiration.bannerItem').on('click',rotateSlogan);

});


function setMainCol(){

}

function rotateSlogan(){
    $(slogans[slogPos]).addClass('hide');
    $(slogans[(slogPos+1) % slogans.length]).removeClass('hide');
    
    slogPos = (++slogPos) % slogans.length;

}
$(document).ready(function () {
    // menu toggle script
    
    $('.menu-bar').click(function () {
        // console.log("Hello world!");
        $('.navbar .menu').toggleClass('active');
        $('.blur-filter').toggleClass('active');
        $('body').toggleClass('hide-overflow');
    })

    // experience tabs

    $('#tab-btn-0').click(function () {
        
        $('#tab-btn-0').addClass('active-color');
        $('#tab-btn-1').removeClass('active-color');
        $('#tab0').addClass('hidden-tab');
        $('#tab1').addClass('hidden-tab');
        $('#tab0').removeClass('hidden-tab');
        
    })
    $('#tab-btn-1').click(function () {
        
        $('#tab-btn-1').addClass('active-color');
        $('#tab-btn-0').removeClass('active-color');
        $('#tab0').addClass('hidden-tab');
        $('#tab1').addClass('hidden-tab');
        $('#tab1').removeClass('hidden-tab');
    })

})
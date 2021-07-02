var preload = document.querySelector(".preloader");

function hidePreloader() {
    preload.classList.add("hide-preloader");
    document.querySelector('html').classList.remove("hide-scroll");
    
}

document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

$(document).ready(function () {

    // animate landing page
    

    for (let i = 1; i < 5; i++) {

        var styles = {
            "animation-name": "menu-appear",
            "animation-duration": "0.5s",
            "animation-delay": `${1+i*0.2}s`,
            "animation-fill-mode":"backwards"
          }

        Object.assign(document.querySelector(`.navbar .menu li:nth-child(${i})`).style, styles);
        // document.querySelector(`.navbar .menu li:nth-child(${i})`).style.animationName="logo-appear";
        
    }

    for (let i = 1; i < 5; i++) {
        var styles = {
            "animation-name": "text-appear",
            "animation-duration": "0.5s",
            "animation-delay": `${1+0.8+i*0.2}s`,
            "animation-fill-mode": "backwards"
        }

        Object.assign(document.querySelector(`#intro div div:nth-of-type(${i})`).style, styles);
    }

    var styles = {
        "animation-name": "logo-appear",
        "animation-duration": "0.5s",
        "animation-delay": "3s",
        "animation-fill-mode": "backwards"
    }
    Object.assign(document.querySelector(".sm-icons").style, styles);
    Object.assign(document.querySelector(`#intro div div:nth-of-type(${5})`).style, styles);

   

    // burger menu script 

    const btn = document.querySelector('.fancy-burger');
    
    // menu toggle script
    
    $('.menu-bar').click(function () {
        // console.log("Hello world!");
        $('.navbar .menu').toggleClass('active');
        $('.blur-filter').toggleClass('active');
        $('html').toggleClass('hide-overflow');
        btn.querySelectorAll("span").forEach(
            (span)=> span.classList.toggle("open")
        );

        
    });

    $('main').click(function(){
        $('.navbar .menu').removeClass('active');
        $('.blur-filter').removeClass('active');
        $('html').removeClass('hide-overflow');
        btn.querySelectorAll("span").forEach(
            (span)=> span.classList.remove("open")
        );
    });

    $('.menu-buttons').click(function(){
        console.log("clicked");
        var reveals = document.querySelectorAll('.reveal');
        reveals.forEach(element => {
            element.classList.add('active');
        });
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

    // navbar

    var scroll1 = window.pageYOffset;
    window.onscroll = function(){
        var scroll2 = window.pageYOffset;
        if (scroll2>100)
        {
            $('nav').addClass('on-scroll');
            if (scroll1 > scroll2) {
            document.querySelector('nav').style.top = "0";
            }
            else{
                document.querySelector('nav').style.top = "-120px";
        }
        scroll1=scroll2;}
        else{
            $('nav').removeClass('on-scroll');
        }
    }

    // reveal on scroll

    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            const revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
            }
            // else{
            //     reveals[i].classList.remove('active');
            // }
            
        }
    }

    



})
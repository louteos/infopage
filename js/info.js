$(document).ready(function(){
    const nvDB = [
        ['안녕하세요', '#intro'],
        ['작업물', '#portfolio'],
        ['사전인터뷰', '#preInterview'],
        ['디자인', '#design']
    ]

    let nvli = '';
    for(let i in nvDB){
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    }
    $('.d1').html(nvli);

    $('#allMenu').click(function(){
        $(this).toggleClass('open');
    });

    $(window).scroll(function(){
        if( $(window).scrollTop() > 0){
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        }
    });


    $('.slideSection:not(#intro)').each(function(){
        $(this).find('h2').html(nvDB[$(this).index()][0])
    })

    $('.d1 a').click(function(e){
        e.preventDefault();
        var targetPos = $($(this).attr('href')).offset().top;
        $('body, html').animate({'scrollTop':targetPos});

        $('.depth1 li').removeClass('active')
        $(this).parent().addClass('active')
    });

    $('#preInterview dt').click(function(){
        $(this).toggleClass('act')
        $(this).removeClass('act')
    })

    $('#qm').click(function (){
        $(this).addClass('more')
    })

});
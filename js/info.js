$(document).ready(function(){
    $('#allMenu').click(function(){
        $(this).toggleClass('open');
        
    });

    document.getElementsByClassName('open').innerHTML = '<i class="fa-solid fa-xmark"></i>';

    $(window).scroll(function(){
        if( $(window).scrollTop() > 0){
            $('body').addClass('scroll');
        }else{
            $('body').removeClass('scroll');
        }
    });

    const nvDB = [
        ['Intro', '#intro'],
        ['About me', '#about'],
        ['Portfolio', '#portfolio'],
        ['Form', '#form']
    ]

    let nvli = '';
    for(let i in nvDB){
        nvli += `<li><a href="${nvDB[i][1]}">${nvDB[i][0]}</a></li>`
    }
    $('.d1').html(nvli);

    $('.slideSection').each(function(){
        $(this).find('h2').html(nvDB[$(this).index()][0])
    })

    $('.d1 a').click(function(e){
        e.preventDefault();
        var targetPos = $($(this).attr('href')).offset().top;
        $('body, html').animate({'scrollTop':targetPos});
    });
});
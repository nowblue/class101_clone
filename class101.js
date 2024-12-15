//  // a클릭시 부드럽게 이동
//  $('a').click(function() {
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
//     return false;
// });
// 적용이 안 됨,,,ㅠ

// 퀵메뉴
$('.quick_menu li a').click(function() {
    // 버튼 hover 이벤트
    return false
    $(this).parent().addClass('topnav-li');
    $(this).parent().siblings().removeClass('topnav-li');
});
// target 위치 표시와, 이동  
var sections = $('.target'),
    nav = $('.topnav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').parent().removeClass('topnav-li');
            sections.removeClass('active');

            $(this).parent().addClass('topnav-li');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('topnav-li');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top 
    }, 500);

    return false;
});


// 원하는 위치에서 스크롤 이벤트
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 520) {
        $('.topnav-li').addClass("fixed");
    } else {
        $('.topnav').removeClass("fixed");
    }
})




// 클릭으로 네비게이션 바 움직이기
// 1. 일단 document에 있는 li들 가져오기
// ex) $(".topnav-li") 를 변수에 저장

// 2. addClass removeClass 사용
// if ( topnav- li click) {
//     $('.topnav-li').addClass(".white");
// } else {
//     $('.topnav').removeClass(".white");
// }




// 2. 기존 css 에서 애들이 불켜져있는거 display none이든 뭐,, 아무튼 색깔을 좀 죽이든 그렇게 해놓고
// 3.. 
$(".topnav-li").addeventListner("click",function(){
    this.css('color','white')
    this.css('border-bottom','1px solid white')
})
// 4. 클릭을 다른걸 했다 ->  3번에서 해놓은 것들이 삭제 되도록
// addclass removeclass
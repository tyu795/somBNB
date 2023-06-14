$(document).ready(function() {
    var nav = $("nav");
    var navHeight = nav.outerHeight();
    var lastScrollTop = 0;

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        // 스크롤 방향 체크
        if (scrollTop > lastScrollTop) {
            // 아래로 스크롤 시 nav 숨기기
            nav.addClass("down");
        } else {
            // 위로 스크롤 시 nav 보이기
            nav.removeClass("down");
        }

        lastScrollTop = scrollTop;
    });

});


// 메인 슬라이드

$(function() {
    // 첫번째 이미지가 보여지는 상태로 세팅
    $("#main_slide ul li").hide();
    $("#main_slide ul li").first().show();
  
    // setInterval(함수, 반복 실행 간격 밀리초);
    setInterval(function() {
      $("#main_slide ul").append($("#main_slide ul li").first());
      // #main_slide ul 내부에 첫번째 li을 가져가 맨 뒤에 삽입한다. (밀어내면서 순서가 바뀌게 된다.)
  
      $("#main_slide ul li").last().hide();
      // #main_slide ul li 중 마지막 요소를 가려줌
  
      $("#main_slide ul li").first().fadeIn();
      // #main_slide ul li 중 첫번째 요소를 서서히 나타낸다.
      // 첫번째 요소가 계속해서 바뀌기 때문에 보여질 때 순서가 바뀌면서 보여지는 원리
    }, 4000);

  });

  
$(document).ready(function() {
    var currentPosition = parseInt($("#wrap_right").css("top")); // 현재 wrap_right 요소의 초기 top 위치를 가져옵니다.
    var mdBoxOffset = $("#footer").offset().top; // #footer 요소의 페이지 맨 위로부터의 거리를 가져옵니다.
    var mdBoxHeight = $("#footer").height(); // #footer 요소의 높이를 가져옵니다.
    var windowHeight = $(window).height(); // 브라우저 창의 높이를 가져옵니다.
  
    $(window).scroll(function() {
      var position = $(window).scrollTop(); // 스크롤 위치를 가져옵니다.
  
      // #md_box 컨테이너 내에서의 최대 스크롤 위치를 계산합니다.
      var maxScrollPosition = mdBoxOffset + mdBoxHeight - windowHeight;
  
      // 스크롤 위치가 #md_box 컨테이너 내에 있는지 확인합니다.
      if (position >= mdBoxOffset && position <= maxScrollPosition) {
        // wrap_right 요소를 애니메이션으로 이동시킵니다.
        // 이동 거리는 현재 스크롤 위치와 초기 top 위치의 차이입니다.
        $("#wrap_right").stop().animate({ "top": position - mdBoxOffset + currentPosition + "px" }, 700);
      }
    });
  });
  
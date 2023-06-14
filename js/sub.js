$(document).ready(function() {
    var currentPosition = parseInt($(".pay_box").css("top"));
    var mdBoxOffset = $("#md_box").offset().top;
    var mdBoxHeight = $("#md_box").height();
    var windowHeight = $(window).height();
  
    $(window).scroll(function() {
      var position = $(window).scrollTop();
  
      // Calculate the maximum scroll position within the #md_box container
      var maxScrollPosition = mdBoxOffset + mdBoxHeight - windowHeight;
  
      // Check if the scroll position is within the #md_box container
      if (position >= mdBoxOffset && position <= maxScrollPosition) {
        $(".pay_box").stop().animate({ "top": position - mdBoxOffset + currentPosition + "px" }, 700);
      }
    });


    //데이트 피커

    
    $(function(){
      $('.datepicker').datepicker();
    })

    $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년'
    });
  
 

  });
  
  


  

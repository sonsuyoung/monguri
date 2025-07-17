//QNA 지금 오류 생겨서 동작안함
$(function () {
			$("#aco li").click(function () {
				$(this).children("div").slideToggle()
				$(this).siblings().children("div").slideUp();
				$(this).toggleClass("on").siblings().removeClass("on")
			});
		});
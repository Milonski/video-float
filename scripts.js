$(function() {

  //Закрытие видео
  $(".float-video__close").on("click", function() {
    console.log("test");
    $(this).parent().parent().hide();
  });

  //Задержка выезда видео после загрузки страницы
  $(".float-video").delay(2000).queue(function(next) {
    $(this).addClass("float-video--open");
    next();
  });
});
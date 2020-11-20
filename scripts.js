$(function () {
  //Закрытие видео
  $(".float-video__close").on("click", function () {
    $(this).parent().parent().hide();
  });

  //Задержка выезда видео после загрузки страницы
  $(".float-video")
    .delay(2000)
    .queue(function (next) {
      $(this).addClass("float-video--open");
      next();
    });

  $(".float-video:not(.float-video__container--open)").on("click", function () {
    $(".float-video__container").addClass("float-video__container--open");
    $("#float-video").prop("muted", false);
    $("#float-video")[0].currentTime = 0;
  });

  $(".float-video__minimize").on("click", function (event) {
    $(".float-video__container").removeClass("float-video__container--open");
    $("#float-video").prop("muted", true);
    event.stopPropagation();
  });

  // if($(".float-video__container").hasClass("float-video__container--open")) {
  //   $("#float-video").hover(function(){
  //     $(this).attr('controls',true);
  //   }, function(){
  //     $(this).attr('controls',false);
  //   });
  // } else $("#float-video").attr('controls',false);

  $("#float-video").hover(
    function () {
      if (
        $(".float-video__container").hasClass("float-video__container--open")
      ) {
        $(this).attr("controls", true);
      }
    },
    function () {
      $(this).attr("controls", false);
    }
  );
});

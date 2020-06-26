$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger, .header__menu').toggleClass('activ');
    $('body').toggleClass('lock');
  });
});

$(document).ready(function() {
  $('.gist').hide().before($('<a class="answer"><i class="fa fa-terminal"></i> Catch Up</a>'));

  $('.answer').click(function() {
    $(this).next('.gist').slideToggle('slow');
  });
});

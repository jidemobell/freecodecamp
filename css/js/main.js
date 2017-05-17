//var skillset = document.getElementsByClassName('skillset');
 //alert(skillset);

function main(){
 // var $skillset = $('.skillset');
 // alert($skillset);
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects viewed');
  });
}
$(document).ready(main);

$(document).ready(function () {
   $(".error").after("<h5 style='color: red;'>You can not listen to this radio station at the moment. Sorry for the inconvenience.</h5>");
   $(".error").remove();

   $(".outofchrome").after("<h5 style='color: red;'>If you are using Google Chrome, you may have issues with loading the data.</h5>");
});

$(document).ready(function() {
  $("td").click(function() {
    $(this).toggleClass("selected");
    $(this).css("cursor", "pointer");

  });

    $("#not").not(".available").click(function() {
        $(this).removeClass("selected");
        $(this).css("cursor", "default");
        });

    $("#not-available").not(".available").click(function() {
        $(this).removeClass("selected");
        $(this).css("cursor", "default");
        }
    );

    
      // var content = $(this).text();

      // if (content != "not-available"){
      //   $(this).toggleClass('tdhighlight');
      // }

      // if ($(this).hasClass('tdhighlight')) {
      //   $('#displaySelected').css('visibility', 'visible');
      //   $('#displaySelected').css(margin-top, '2em');
      //   $('#result').append("<p>" + content + "</p>");
      // } else {
      //   $('#result p:contains(' + content + ')').remove();

      //   if($('#result').has('p').length == 0) {
      //     $('#displaySelected').css('visibility', 'hidden');
      //     $('#displaySelected').css(margin-top, '0em');
      //   }



      // }  


});



$(document).ready(function() {
  var selectedActivities = [];
  var displaySelected = $("#displaySelected");
  displaySelected.hide();


  $("td").click(function() {
    var activity = $(this).closest("tr").find("td:first").text();


  // if (activity != "not-available"){
  //   $(this).toggleClass('tdhighlight');
  // }




    if (selectedActivities.includes(activity)) {
      selectedActivities.splice(selectedActivities.indexOf(activity), 1);
    } else {
      selectedActivities.push(activity);
    }

    


    if (selectedActivities.length === 0) {
      displaySelected.hide();
    } else {
      displaySelected.show();
    }

    $("#result").html("<h4>My selected activities to enquire: </h4>" + selectedActivities.join(", "));

  });
});

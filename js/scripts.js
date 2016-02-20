$(document).ready(function() {
  $("#vacation-options form").submit(function(event) {
    var age = parseInt($("input#age").val());
    var options = ["activity-level", "socialness", "environment", "climate"];

    options.forEach(function(option) {
      var selection = $("select#").val();
    });
    // var xx = $("select#xx").val();
    // var xx = $("select#xx").val();

//Need help figuring this part out
    if (age >=xx && activity-level === 'xx' && socialness="xx" ** environment === "xx" && climate ==="xx" {
      $(#vacation1).show();
      $(#vacation-options).hide();
    }

    else if (age >=xx && activity-level === 'xx' && socialness="xx" ** environment === "xx" && climate ==="xx" {
      $(#vacation2).show();
      $(#vacation-options).hide();
    }

    else (age >=xx && activity-level === 'xx' && socialness="xx" ** environment === "xx" && climate ==="xx" {
      $(#vacation3).show();
      $(#vacation-options).hide();
    }


    //   $("#style").empty().append(profile);
      $("#vacation1").show();
      $("#vacation2").show();
      $("#vacation3").show();
    // else {
    //   alert('Please enter your age.');
    // }
    //
    // event.preventDefault();
  });
});

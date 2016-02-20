$(document).ready(function() {
  $('div#vacation-options').submit(function(event) {
    var age = parseInt($('input#age').val());
    var activitylevel = $('select#activity-level').val();
    var socialness = $('select#socialness').val();
    var environment = $('select#environment').val();
    var climate = $('select#climate').val();
//Need help figuring this part out
    if (age < 18) {
      $('#under-18').show();
      $('#vacation-options').hide();
    }
    alert("I got this far!");

    // else if (activitylevel === 'active' && socialness='introvert' && environment === 'natural' && climate === 'cool') {
    //   $('#vacation1-pct').show();
    //   $('#vacation-options').hide();
    // }
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('div#vacation-options').submit(function(event) {
    var age = parseInt($('input#age').val());
    var activitylevel = $('select#activity-level').val();
    var socialness = $('select#socialness').val();
    var environment = $('select#environment').val();
    var climate = $('select#climate').val();
//Need help figuring this part out
    if (age < 18) {
      $('#vacation-options').hide();
      $('#under-18').show();
    }
    if (activitylevel === 'active' && socialness === 'introvert' && environment === 'natural' && climate === 'cool') {
      $('#vacation-options').hide();
      $('#vacation1-pct').show();
    }

    event.preventDefault();
  });
});

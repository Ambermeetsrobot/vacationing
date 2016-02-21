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
      $('#vacation-pct').show();
    }
    alert("I got to PCT");

    if (age > 50 && activitylevel === 'relaxed' && climate === 'hot') {
      $('vacation-options').hide();
      $('vacation-palmsprings').show();
    }

    alert("I got to Palm Springs");

    if (environment === 'urban' && climate === 'cool') {
      $('vacation-options').hide();
      $('vacation-sanfrancisco').show();
    }
    alert("I got to SF");

    if (environment === 'urban' && climate === 'hot') {
      $('vacation-options').hide();
      $('vacation-losangeles').show();
    }
    alert("I got to LA");

    else {
      $('vacation-options').hide();
      $('vacation-portland').show();
    }
    alert("I got to pdx");

    event.preventDefault();
  });
});

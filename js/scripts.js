$(document).ready(function() {
  $('div#vacation-options').submit(function(event) {
    var age = parseInt($('input#age').val());
    var gender = $('select#gender').val();
    var activitylevel = $('select#activity-level').val();
    var environment = $('select#environment').val();
    var climate = $('select#climate').val();

//unsuccessful looping effort; not sure what should go after select

    // var options = ["gender", "activity-level", "environment", "climate"];
    // options.forEach(function(option) {
    //   var selection = $("select#" + option).val();
    // )};

    if (age < 18) {
      $('#vacation-options').hide();
      $('#under-18').show();
    }

    if (age > 18 && activitylevel === 'active' && environment === 'natural') {
      $('#vacation-options').hide();
      $('#vacation-pct').show();
    }

    if (age > 18 && activitylevel === 'relaxed' && environment === 'natural' && climate === 'hot') {
      $('#vacation-options').hide();
      $('#vacation-palmsprings').show();
    }

    if (age > 18 && activitylevel === 'relaxed' && environment === 'natural' && climate === 'cool') {
      $('#vacation-options').hide();
      $('#vacation-bigsur').show();
    }

    if (age > 18 && climate === 'cool' &&  environment === 'urban') {
      $('#vacation-options').hide();
      $('#vacation-portland').show();
    }

    if (age > 18 && climate === 'hot' && environment === 'urban') {
      $('#vacation-options').hide();
      $('#vacation-losangeles').show();
    }

    event.preventDefault();
  });
});

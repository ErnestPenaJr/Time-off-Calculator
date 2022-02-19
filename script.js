//business hours difference between two times
function businessHoursDiff(data) {
    var start = new Date(data.startDate + ' ' + data.startTime);
    var end = new Date(data.endDate + ' ' + data.endTime);
    var diff = end - start 
    console.log( 'Calculated work hours ' +diff / 36e5 - data.workdays);
  //this calculates the hours from the date
  //I added the -1 to accomadate lunch which is mandatory
    var hours = Math.floor(diff / 1000 / 60 / 60) % 24 - data.workdays;
  //this calcultes the minutes from the time
    var minutes = Math.floor(diff / 1000 / 60) % 60;

  //this poplulates the form fields 
    $('#totalHours').val(hours);
    $('#totalMinutes').val(minutes);
}
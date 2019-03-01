export const formatDate = (dateObject) => {
  /*
  param:date, JS date object
  returns string format '<year>-<month>-<date>'

  */
  // getMonth() returns month from 0 to 11
  let month = (dateObject.getMonth() + 1).toString();
  let date = (dateObject.getDate()).toString();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (date.length < 2) {
    date = '0' + date;
  }
  return `${date}.${month}.${dateObject.getFullYear()}`;
};

export const convertToHoursMinutes = (dateObject) => {
  /*
  param:date, JS date object
  */
  //returns time in HOURS:MINUTES format
  // 00:59 for example

  var formattedMinutes = '';
  if (dateObject.getMinutes() < 10) {
    formattedMinutes = `0${dateObject.getMinutes()}`;
  } else {
    formattedMinutes = `${dateObject.getMinutes()}`;
  }

  var formattedHours = '';
  if (dateObject.getHours() < 10) {
    formattedHours = `0${dateObject.getHours()}`;
  } else {
    formattedHours = `${dateObject.getHours()}`;
  }

  return `${formattedHours}:${formattedMinutes}`;
};
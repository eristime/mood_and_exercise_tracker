/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
export const presentDate = (dateString) => {
  /*
  param:
    dateString (string): <year>-<month>-<date>
  returns string format ''
  if dateObject is today, then return 'Today'
  if dateObject was yesterday, then return 'Yesterday'
  */

  // getMonth() returns month from 0 to 11
  const dateObject = new Date(dateString);
  let year = dateObject.getFullYear().toString();
  let month = (dateObject.getMonth() + 1).toString();
  let date = dateObject.getDate().toString();
  let today = new Date()

  // check if date today
  if (dateObject.toDateString() === today.toDateString()) {
    return 'Today'
  }
  // check if date yesterday, == to avoid string conversion
  if (year == today.getFullYear() &&
      month == (today.getMonth() + 1) &&
      date == today.getDate() - 1
  ) {
    return 'Yesterday'
  }
  if (month.length < 2) {
    month = '0' + month;
  }
  if (date.length < 2) {
    date = '0' + date;
  }
  return `${date}.${month}.${dateObject.getFullYear()}`;
};

export const dateIsToday = (dateObject) => {
  /*
  param:date, dateObject
  returns true if dateObject is today, otherwise false

  */
  if (dateObject.toDateString() === (new Date()).toDateString()) {
    return true;
  }
  return false;
};

export const formatDate = (dateObject) => {
  /*
  param:date, JS date object
  returns string format '<year>-<month>-<date>'

  */
  // getMonth() returns month from 0 to 11
  let year = dateObject.getFullYear().toString();
  let month = (dateObject.getMonth() + 1).toString();
  let date = dateObject.getDate().toString();


  if (month.length < 2) {
    month = '0' + month;
  }
  if (date.length < 2) {
    date = '0' + date;
  }
  return `${dateObject.getFullYear()}-${month}-${date}`;
};


export const convertToHoursMinutes = (dateObject) => {
  /*
  param:date, JS date object
  */
  // returns time in HOURS:MINUTES format
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


export const stepsToKM = steps => {
  /*
  Formula approximated from Google Fit.
  */
  return Number((steps * 0.66) / 1000).toFixed(3) || 0;
};
const formatDate = (dateObject) => {
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

export default formatDate

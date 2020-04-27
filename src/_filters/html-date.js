const {
  DateTime
} = require("luxon");
module.exports = htmlDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc'
  }).toFormat('dd/MM/yyyy');
};

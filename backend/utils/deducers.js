const moment = require('moment');

const LAST_90_DAYS = 'last_90_days'; 
const LAST_MONTH = 'last_month';
const THIS_MONTH = 'this_month';
const LAST_YEAR = 'last_year';
const THIS_YEAR = 'this_year';

exports.getDateRange = (period) => {
  let startDate;
  let endDate = moment().endOf('day'); // Default end date is today

  switch (period) {
    case LAST_90_DAYS:
      startDate = moment().subtract(90, 'days').startOf('day');
      break;

    case LAST_MONTH:
      startDate = moment().subtract(1, 'month').startOf('month');
      endDate = moment().subtract(1, 'month').endOf('month');
      break;

    case THIS_MONTH:
      startDate = moment().startOf('month');
      endDate = moment().endOf('month');
      break;

    case LAST_YEAR:
      startDate = moment().subtract(1, 'year').startOf('year');
      endDate = moment().subtract(1, 'year').endOf('year');
      break;

    case THIS_YEAR:
      startDate = moment().startOf('year');
      endDate = moment().endOf('year');
      break;

    default:
      // If no valid date range is provided, return null
      return null;
  }

  return [startDate.toDate(), endDate.toDate()];
};

exports.invoiceTotalFromItems = items => {
  return items.reduce((total, item) => total + item.quantity * item.unit_price, 0);
};

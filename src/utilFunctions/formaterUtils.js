export const formatDate = date => {
  const seconds = Math.floor((new Date() - date) / 1000);

  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_SECONDS = 3600;
  const DAY_IN_SECONDS = 86400;
  const WEEK_IN_SECONDS = 604800;

  var interval = Math.floor(seconds / WEEK_IN_SECONDS);
  if (interval >= 1) {
    //in case interval is more than a week, we return date as e.g. "2019-09-04"
    const formatedDate = new Date(date).toISOString().split('T')[0];
    return formatedDate;
  }
  interval = Math.floor(seconds / DAY_IN_SECONDS);
  if (interval >= 1) {
    let str = interval === 1 ? ' day ago' : ' days ago';
    return interval + str;
  }
  interval = Math.floor(seconds / HOUR_IN_SECONDS);
  if (interval >= 1) {
    let str = interval === 1 ? ' hour ago' : ' hours ago';
    return interval + str;
  }
  interval = Math.floor(seconds / MINUTE_IN_SECONDS);
  if (interval >= 1) {
    let str = interval === 1 ? ' minute ago' : ' minutes ago';
    return interval + ' minutes';
  }
  return 'Just now';
};

export const formatCentsToDollars = function(cents) {
  const dollars = cents / 100;
  const dollarString = dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return dollarString;
};

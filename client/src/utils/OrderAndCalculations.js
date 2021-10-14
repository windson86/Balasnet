//order and calculations

function findDayDifference(date1, date2) {
  // always round down
  let minutes = Math.floor(Math.abs(date2 - date1) / (1000 * 60));
  if (minutes < 60) {
    return minutes.toFixed(0) + "min";
  }
  if (minutes > 59 && minutes < 1440) {
    return (minutes / 60).toFixed(0) + "h";
  }
  if (minutes > 1440) {
    return (minutes / 60 / 24).toFixed(0) + "d";
  }
}

function sortByLikes(array) {
  return array.sort((a, b) => (a.likes.length < b.likes.length ? 1 : -1));
}
function sortByDate(array) {
  return array.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export { findDayDifference, sortByLikes, sortByDate };

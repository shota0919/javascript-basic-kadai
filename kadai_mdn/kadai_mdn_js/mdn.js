// const date = new Date();
// const [month, day, year] = [
//   date.getMonth(8),
//   date.getDate(22),
//   date.getFullYear(2023),
// ];

// console.log(date)

const event = new Date(Date.UTC(2023, 7, 22,));
const options = { year: 'numeric', month: 'long', day: 'numeric' };



console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012

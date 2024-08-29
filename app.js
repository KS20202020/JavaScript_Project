function getdata(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("New data obtained", data);
      resolve("success");
      // reject("Some error happend");
    }, 3000);
  });
}

(async function () {
  console.log("Getting new data 1....");
  await getdata(1);
  console.log("Getting new data 2....");
  await getdata(2);
  console.log("Getting new data 3....");
  await getdata(3);
})();

//Promise Chain

// console.log("Getting new data 1....");
// getdata(1)
//   .then((res) => {
//     console.log("Getting new data 2....");
//     return getdata(2);
//   })
//   .then(() => {
//     console.log("Getting new data 3....");
//     return getdata(3);
//   })
//   .then(() => {
//     console.log("All data obtained");
//   });

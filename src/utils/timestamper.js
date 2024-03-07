export const timestamper = (signatureHex, callback, fail) => {
  console.log("signatureHex", signatureHex);
  fetch(
    `https://new.soliqservis.uz/api/provider/api/utils/timestamp?signatureHex=${signatureHex}`,
    {
      method: "GET",
    }
    // ).then((res) => {
    //   console.log("res", res);
    //   callback(res.data);
    // });
  ).then((r) => {
    r.json().then((data) => {
      console.log("data", data);
      callback(data.data);
    });
  });
};

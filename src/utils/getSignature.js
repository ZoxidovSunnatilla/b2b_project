import { timestamper } from "./timestamper.js";

const getSignature = (data, key) => {
  return new Promise((resolve, reject) => {
    window.EIMZOClient.loadKey(
      key,
      (keyId) => {
        window.EIMZOClient.createPkcs7(
          keyId,
          JSON.stringify(data),
          timestamper,
          (pkcs7) => {
            resolve(pkcs7);
          },
          () => {
            // store.dispatch(showAlert("Вы ввели неправильный пароль ключа"));
            console.log("Вы ввели неправильный пароль ключа");
            reject("error");
          }
        );
      },
      () => {
        // store.dispatch(showAlert("Error"));
        console.log("Error");
        reject("error");
      }
    );
  });
};

export default getSignature;

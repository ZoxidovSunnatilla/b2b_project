import { timestamper } from "./timestamper.js";

const putSignatureNew = (data, key) => {
  return new Promise((resolve, reject) => {
    typeof window !== "undefined" &&
      window?.EIMZOClient.loadKey(
        JSON.parse(key),
        (keyId) => {
          window?.EIMZOClient.createPkcs7(
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
        (error) => {
          // store.dispatch(showAlert("Error"));
          console.log("Error", error);
          reject("error");
        }
      );
  });
};

export default putSignatureNew;

import { timestamper } from "./timestamper";

const putAttachedSignature = (signHash, key, type) => {
  return new Promise((resolve, reject) => {
    window.EIMZOClient.loadKey(
      key,
      (keyId) => {
        console.log("keyId", keyId);

        window.EIMZOClient.appendPkcs7Attached(
          keyId,
          signHash,
          timestamper,
          (pkcs7) => {
            console.log(pkcs7);
            resolve(pkcs7);
          },
          () => {
            // store.dispatch(showAlert("Вы ввели неправильный пароль ключа"));
            reject("error");
          }
        );
      },
      () => {
        // store.dispatch(showAlert("Error"));
        reject("error");
      }
    );
  });
};

export default putAttachedSignature;

import { createCorpUser } from "@/lib/corpService";

const putSignature = (
  data,
  key,
  router,
  setToken,
  setEcpUserId,
  setTin,
  confirmOferta
) => {
  return new Promise((resolve, reject) => {
    typeof window !== "undefined" &&
      window.EIMZOClient.loadKey(
        key,
        (keyId) => {
          window.EIMZOClient.createPkcs7(
            keyId,
            JSON.stringify(data),
            // timestamper,
            (pkcs7) => {
              resolve(pkcs7);
              if (confirmOferta) {
                createCorpUser(key, router, setToken, setEcpUserId, setTin);
              } else {
                router.push("/oferta");
              }
            },
            (error) => {
              console.log("Вы ввели неправильный пароль ключа, ", error);
              reject("error ", error);
            }
          );
        },
        (error) => {
          console.log("Error: ", error);
          reject("error ", error);
        }
      );
  });
};

export default putSignature;

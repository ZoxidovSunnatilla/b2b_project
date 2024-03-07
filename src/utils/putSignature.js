const putSignature = (key) => {
  return new Promise((resolve, reject) => {
    typeof window !== "undefined" &&
      window.EIMZOClient.loadKey(
        key,
        (keyId) => {
          window.EIMZOClient.createPkcs7(
            keyId,
            JSON.stringify(key),
            // timestamper,
            (pkcs7) => {
              resolve(pkcs7)
              console.log("done")
            },
            (error) => {
              console.log("Вы ввели неправильный пароль ключа, ", error)
              reject("error ", error)
            }
          )
        },
        (error) => {
          console.log("Error: ", error)
          reject("error ", error)
        }
      )
  })
}

export default putSignature

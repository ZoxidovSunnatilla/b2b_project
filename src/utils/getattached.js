const getattached = (sign) => {
  return new Promise((resolve, reject) => {
    window.EIMZOClient.get_pkcs7_attached_info(
      sign,
      (pkcs7) => {
        console.log(pkcs7)
        resolve(pkcs7)
      },
      () => {
        // store.dispatch(howAlert("Вы ввели неправильный пароль ключа"));
        reject("error")
      }
    )
  })
}

export default getattached

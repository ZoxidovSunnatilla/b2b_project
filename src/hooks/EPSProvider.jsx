import { useRouter } from "next/router"
import { memo, useEffect, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

const EIMZO_MAJOR = 3
const EIMZO_MINOR = 27

const ESPProvider = () => {
  //console.log("typeof window !", typeof window !== "undefined");
  const [EIMZOClient, setEIMZOClient] = useState(null)
  const rendered = typeof window !== "undefined"
  // const EIMZOClient = typeof window !== "undefined" ? window?.EIMZOClient : "";
  const [ecpKeys, setEcpKeys] = useLocalStorageState("ecpKeys", {
    defaultValue: [],
  })

  // console.log("EIMZOClient", typeof window);
  // console.log("window", window);

  useEffect(() => {
    setTimeout(() => {
      setEIMZOClient(window?.EIMZOClient)
    }, 500)
  }, [rendered])

  const router = useRouter()

  // if (EIMZOClient && typeof window !== "undefined") {
  //   console.log("EIMZOClient", EIMZOClient);
  //   EIMZOClient.API_KEYS = [
  //     "localhost",
  //     "96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B",
  //     "127.0.0.1",
  //     "A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F",
  //     "null",
  //     "E0A205EC4E7B78BBB56AFF83A733A1BB9FD39D562E67978CC5E7D73B0951DB1954595A20672A63332535E13CC6EC1E1FC8857BB09E0855D7E76E411B6FA16E9D",
  //     "corp.mediapark.uz",
  //     "7E52446265E77FD7228FDD1687AE33B454A1D2E20874CB098C700C847C295095FF6CD3DE4CC17603C3038299F8DECAB08A74A61EF7C35A2969E159AD0056D7A8",
  //     "dls.yt.uz",
  //     "EDC1D4AB5B02066FB3FEB9382DE6A7F8CBD095E46474B07568BC44C8DAE27B3893E75B79280EA82A38AD42D10EA0D600E6CE7E89D1629221E4363E2D78650516",
  //     "kiber.uz",
  //     "84D9272FBB273C57229DA2222970D4770B11FA69657FCCDC70336544991DC1500A89AC9243C03EC3C332F3C9A4B9D12CF22218F74652854B337520FD33D6FF53",
  //   ];
  // }

  // ================CHECK VERSION==========================
  const checkVersion = () => {
    EIMZOClient?.checkVersion(
      function (major, minor) {
        const newVersion = EIMZO_MAJOR * 100 + EIMZO_MINOR
        const installedVersion = parseInt(major) * 100 + parseInt(minor)

        if (installedVersion < newVersion) {
          // return dispatch(showAlert("Sizning E-IMZO dasturingiz versiyasi eskirgan, iltimos E-IMZO dasturini yangilang", 'error'))
        }

        EIMZOClient?.installApiKeys(
          function () {
            loadKeys()
          },
          function (e, r) {
            if (r) {
              // dispatch(showAlert(r))
            } else {
              alert("ERROR")
            }
          }
        )
      },

      function (e, r) {
        if (r) {
          // dispatch(showAlert(r))
        } else {
          // dispatch(
          //   showAlert(
          //     "Sizda E-IMZO dasturi yoqilmagan, iltimos dasturni ishga tushiring"
          //   )
          // )
        }
      }
    )
  }

  // ==================LOAD KEYS=======================
  const loadKeys = () => {
    EIMZOClient?.listAllUserKeys(
      function (o, i) {
        const itemId = "itm-" + o.serialNumber + "-" + i
        return itemId
      },

      function (itemId, keyData) {
        const newItem = checkExpire(itemId, keyData)
        return newItem
      },

      function (items, firstId) {
        // dispatch(espActions.setKeys(items));
        // localStorage.setItem("keys", items);
        console.log("items", items)
        setEcpKeys(items)
      },

      function (e, r) {
        // dispatch(showAlert("E-IMZO dasturi topilmadi yoki ishga tushmagan"))
      }
    )
  }

  // ==================CHECK EXPIRE=================
  const checkExpire = (itemId, keyData) => {
    const now = new Date()
    keyData.expired = window.dates.compare(now, keyData.validTo) > 0
    keyData.itemId = itemId
    return keyData
  }

  useEffect(() => {
    if (EIMZOClient) {
      checkVersion()
    }
  }, [EIMZOClient])

  useEffect(() => {
    if (router.pathname === "/login" && EIMZOClient) {
      loadKeys()
    }
  }, [EIMZOClient])
  return null
}

export default memo(ESPProvider)

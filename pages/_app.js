import "@/styles/globals.css"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import { MantineProvider } from "@mantine/core"
import Footer from "../src/components/footer"
import Header from "../src/components/header"
import "@mantine/carousel/styles.css"
import { appWithTranslation } from "next-i18next"
import localFont from "next/font/local"
import Script from "next/script"
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReduxProvider } from "@/src/redux/provider"

// import "./index.css"

const AcidGrotesk = localFont({
  src: [
    {
      path: "../public/font/BasierCircle-Bold.eot",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/BasierCircle-Medium.eot",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/BasierCircle-Regular.eot",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/font/BasierSquare-Medium.eot",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/BasierSquare-Regular.eot",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/BasierSquare-Bold.eot",
      weight: "bold",
      style: "normal",
    },
  ],
})

function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Script src="/eimzo/e-imzo.js" />
      <Script src="/eimzo/e-imzo-client.js" />
      <ReduxProvider>
        <MantineProvider
          theme={{
            primaryColor: "bright-pink",
            colors: {
              "bright-pink": [
                "#629CFF",
                "#629CFF",
                "#2580FF",
                "#2580FF",
                "#2580FF",
                "#1071FF",
                "#1071FF",
                "#1071FF",
                "#1071FF",
                "#1071FF",
              ],
            },
          }}
        >
          <div className={AcidGrotesk.className}>
            <div className="mx-auto min-h-screen ">
              {router.pathname === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <>
                  <Header />
                  <Component {...pageProps} />
                  <Footer />
                </>
              )}
            </div>
          </div>
        </MantineProvider>
      </ReduxProvider>
    </>
  )
}
export default appWithTranslation(App)

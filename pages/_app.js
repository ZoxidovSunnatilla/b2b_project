import "@/styles/globals.css"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import { MantineProvider } from "@mantine/core"
import Footer from "../components/footer"

import Header from "../components/header"
import "@mantine/carousel/styles.css"

export default function App({ Component, pageProps }) {
  return (
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
      <div className="mx-auto min-h-screen">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </MantineProvider>
  )
}

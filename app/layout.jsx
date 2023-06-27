import { Inter, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: "400" });
const varent = localFont({ src: "./fonts/varentGrotesk-Bold.woff", variable: "--font-varent" });
import localFont from "next/font/local";
import StyledComponentsRegistry from "./utils/registry";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { StateContext } from "./utils/StateContext";
import AppBar from "./components/AppBar";

export const metadata = {
  title: "dear: clothing",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <StateContext>
        <StyledComponentsRegistry>
          <body className={`${varent.variable} ${poppins.variable}`}>
            <Cart />
            {/* <NavBar /> */}
            <AppBar />
            <div style={{ height: "65px" }}></div>
            {children}
          </body>
        </StyledComponentsRegistry>
      </StateContext>
    </html>
  );
}

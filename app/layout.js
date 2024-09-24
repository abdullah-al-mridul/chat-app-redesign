"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import styles from "@/app/globals.module.css";
import Navbar from "./components/Navbar";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth, realtime__db } from "./firebase/firebase.config";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { redirect, usePathname } from "next/navigation";
import AuthGuard from "./components/AuthGuard";
import { useDispatch } from "react-redux";
import { setAuth } from "./slices/userSlice";
const poppinsFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: "normal",
});
export default function RootLayout({ children }) {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // const currentUser = auth.currentUser;
      if (user) {
        const user__local = JSON.stringify(user);
        localStorage.setItem("user", user__local);
        console.log("user");
      } else {
        localStorage.removeItem("user");
      }
      console.log(user);
    });
  }, []);
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={` ${poppinsFont.className} antialiased`}>
          <AuthGuard>
            <div>
              <div className={`${styles.backwrap} gradient`}>
                <div className="back-shapes">
                  <span
                    className="floating circle"
                    style={{
                      top: "66.59856996935649%",
                      left: "13.020833333333334%",
                      animationDelay: "-0.9s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "31.46067415730337%",
                      left: "33.59375%",
                      animationDelay: "-4.8s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "76.50663942798774%",
                      left: "38.020833333333336%",
                      animationDelay: "-4s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "21.450459652706844%",
                      left: "14.0625%",
                      animationDelay: "-2.8s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "58.12053115423902%",
                      left: "56.770833333333336%",
                      animationDelay: "-2.15s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "8.682328907048008%",
                      left: "72.70833333333333%",
                      animationDelay: "-1.9s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "31.3585291113381%",
                      left: "58.541666666666664%",
                      animationDelay: "-0.65s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "69.96935648621042%",
                      left: "81.45833333333333%",
                      animationDelay: "-0.4s",
                    }}
                  />
                  <span
                    className="floating circle"
                    style={{
                      top: "15.117466802860061%",
                      left: "32.34375%",
                      animationDelay: "-4.1s",
                    }}
                  />
                  <span
                    className="floating circle"
                    style={{
                      top: "13.074565883554648%",
                      left: "45.989583333333336%",
                      animationDelay: "-3.65s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "55.87334014300306%",
                      left: "27.135416666666668%",
                      animationDelay: "-2.25s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "49.54034729315628%",
                      left: "53.75%",
                      animationDelay: "-2s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "34.62717058222676%",
                      left: "49.635416666666664%",
                      animationDelay: "-1.55s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "33.19713993871297%",
                      left: "86.14583333333333%",
                      animationDelay: "-0.95s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "28.19203268641471%",
                      left: "25.208333333333332%",
                      animationDelay: "-4.45s",
                    }}
                  />
                  <span
                    className="floating circle"
                    style={{
                      top: "39.7344228804903%",
                      left: "10.833333333333334%",
                      animationDelay: "-3.35s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "77.83452502553627%",
                      left: "24.427083333333332%",
                      animationDelay: "-2.3s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "2.860061287027579%",
                      left: "47.864583333333336%",
                      animationDelay: "-1.75s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "71.3993871297242%",
                      left: "66.45833333333333%",
                      animationDelay: "-1.25s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "31.256384065372828%",
                      left: "76.92708333333333%",
                      animationDelay: "-0.65s",
                    }}
                  />
                  <span
                    className="floating triangle"
                    style={{
                      top: "46.47599591419816%",
                      left: "38.90625%",
                      animationDelay: "-0.35s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "3.4729315628192032%",
                      left: "19.635416666666668%",
                      animationDelay: "-4.3s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "3.575076608784474%",
                      left: "6.25%",
                      animationDelay: "-4.05s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "77.3237997957099%",
                      left: "4.583333333333333%",
                      animationDelay: "-3.75s",
                    }}
                  />
                  <span
                    className="floating cross"
                    style={{
                      top: "0.9193054136874361%",
                      left: "71.14583333333333%",
                      animationDelay: "-3.3s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "23.6976506639428%",
                      left: "63.28125%",
                      animationDelay: "-2.1s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "81.30745658835546%",
                      left: "45.15625%",
                      animationDelay: "-1.75s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "60.9805924412666%",
                      left: "42.239583333333336%",
                      animationDelay: "-1.45s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "29.009193054136876%",
                      left: "93.90625%",
                      animationDelay: "-1.05s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "52.093973442288046%",
                      left: "68.90625%",
                      animationDelay: "-0.7s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "81.51174668028601%",
                      left: "83.59375%",
                      animationDelay: "-0.35s",
                    }}
                  />
                  <span
                    className="floating square"
                    style={{
                      top: "11.542390194075587%",
                      left: "91.51041666666667%",
                      animationDelay: "-0.1s",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className=" z-10 relative h-screen w-screen">
              <div className=" w-full h-full flex justify-center items-center">
                <div
                  style={{
                    height: `${pathname === "/auth" ? "100%" : "80%"}`,
                    width: `${pathname === "/auth" ? "100%" : "80%"}`,
                  }}
                  className={`  flex gap-[40px] hidden__on__auth`}
                >
                  <Navbar />
                  {children}
                </div>
              </div>
            </div>
          </AuthGuard>
        </body>
      </html>
    </Provider>
  );
}

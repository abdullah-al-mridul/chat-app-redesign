"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "@/app/globals.module.css";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, realtime__db } from "../firebase/firebase.config";
import { ref, set } from "firebase/database";

const Auth = () => {
  const [signUpformData, setSignUpformData] = useState({
    full__name: "",
    email__address: "",
    password: "",
  });
  const [logInformData, setLogInformData] = useState({
    email__address: "",
    password: "",
  });
  const [isRender, setIsRender] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const signUp = async () => {
    try {
      setIsLoading(true);
      const userTm = await createUserWithEmailAndPassword(
        auth,
        signUpformData.email__address,
        signUpformData.password
      );
      await sendEmailVerification(userTm.user);
      const { user } = userTm;
      const { uid } = user;
      const user__db__ref = ref(realtime__db, `users/${uid}`);
      await set(user__db__ref, {
        name: signUpformData.full__name,
        email: signUpformData.email__address,
        createdAt: new Date().toISOString(),
        photoURL: user.photoURL,
        uid,
      });
      updateProfile(user, {
        displayName: signUpformData.full__name,
      });
      console.log(user);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  const logIn = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(
        auth,
        logInformData.email__address,
        logInformData.password
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
    console.log(logInformData);
  };
  const googleSignIn = async () => {
    if (isGoogleLogin) return;
    try {
      setIsGoogleLogin(true);
      const provider = new GoogleAuthProvider();
      const TM = await signInWithPopup(auth, provider);
      const { user } = TM;
      const user__db__ref = ref(realtime__db, `users/${user.uid}`);
      await set(user__db__ref, {
        name: user.displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
        photoURL: user.photoURL,
        uid: user.uid,
      });
      setIsGoogleLogin(false);
    } catch (err) {
      setIsGoogleLogin(false);
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    const elem = document.getElementsByClassName("hidden__on__auth")[0];
    // elem.style.height = "100vh";
    // elem.style.weight = "100vh";
    setIsRender(!isRender);
  }, []);

  if (!isRender) return null;
  return (
    <div className="z-[10] relative h-screen w-screen bg-transparent">
      <div className=" w-full h-full flex items-center justify-center">
        <div
          style={{
            flexDirection: `${!isSignUp ? "row-reverse" : "row"}`,
          }}
          className={`min-h-[500px] transition-all min-w-[800px] ${styles.login__containeer} shadow-md flex gap-[50px]`}
        >
          <div className=" flex-1">
            <div className=" max-w-[400px] box-border p-[30px]">
              <h1 className=" text-[#8698a5] text-[24px] mb-[50px] text-center font-[600]">
                {isSignUp ? "Sign Up" : "Log in"}
              </h1>
              <div className=" flex flex-col">
                {isSignUp ? (
                  <input
                    className=" bg-[#ffffff0a] outline-none mb-[15px] rounded-md text-[#8698a5] shadow-sm text-[18px] p-[10px] px-[20px]"
                    type="text"
                    name="name"
                    id="#name"
                    value={signUpformData.full__name}
                    onChange={(e) => {
                      setSignUpformData({
                        ...signUpformData,
                        full__name: e.target.value,
                      });
                    }}
                    placeholder="Ex. Casey Harper"
                  />
                ) : (
                  <button
                    onClick={googleSignIn}
                    className=" bg-[#ffffff0a] gap-[8px] flex items-center outline-none mb-[15px] rounded-md text-[#8698a5] shadow-sm text-[18px] p-[10px] px-[20px]"
                  >
                    <span>
                      <FaGoogle />
                    </span>
                    <span> Sign in with Google</span>
                  </button>
                )}
                <input
                  type="email"
                  className=" bg-[#ffffff0a] outline-none mb-[15px] rounded-md text-[#8698a5] shadow-sm text-[18px] p-[10px] px-[20px]"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    isSignUp
                      ? setSignUpformData({
                          ...signUpformData,
                          email__address: e.target.value,
                        })
                      : setLogInformData({
                          ...logInformData,
                          email__address: e.target.value,
                        });
                  }}
                  value={
                    isSignUp
                      ? signUpformData.email__address
                      : logInformData.email__address
                  }
                  placeholder="Ex. user@example.com"
                />{" "}
                <input
                  type="password"
                  className=" bg-[#ffffff0a]  outline-none mb-[45px] rounded-md text-[#8698a5] shadow-sm text-[18px] p-[10px] px-[20px]"
                  name="pass"
                  id="#pass"
                  onChange={(e) => {
                    isSignUp
                      ? setSignUpformData({
                          ...signUpformData,
                          password: e.target.value,
                        })
                      : setLogInformData({
                          ...logInformData,
                          password: e.target.value,
                        });
                  }}
                  value={
                    isSignUp ? signUpformData.password : logInformData.password
                  }
                  placeholder="Ex. K8v#1zLp@9Wq"
                />
                <div className=" w-full  flex justify-center mb-[30px]">
                  <button
                    className=" bg-[#ffffff09]  transition-all cursor-pointer w-[max-content] outline-none rounded-md flex items-center shadow-sm text-[18px] p-[10px] px-[20px]"
                    style={{
                      gap: `${isLoading ? "10px" : "0"}`,
                      background: `${
                        isLoading ? "bg-[#ffffff0e]" : "bg-[#ffffff0a]"
                      }`,
                      color: `${isLoading ? "#8698a585" : "#8698a5"}`,
                    }}
                    onClick={() => {
                      isSignUp ? signUp() : logIn();
                    }}
                  >
                    Submit {isLoading && <span className="loader"></span>}
                  </button>
                </div>
              </div>
              <footer className=" text-[#8698a5] text-[15px] text-center">
                {isSignUp ? "Already" : "Don't"} have an account?{" "}
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                  }}
                  className=" font-[500]"
                >
                  {isSignUp ? "Log in" : "Sign Up"}
                </button>
              </footer>
            </div>
          </div>
          <div
            className={` flex-1 ${
              isSignUp ? styles.side__blur__left : styles.side__blur__right
            } shadow-sm`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

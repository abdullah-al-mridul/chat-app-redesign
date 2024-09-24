"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase.config";
import { setAuth } from "../slices/userSlice";
const AuthGuard = ({ children }) => {
  const user = useSelector((s) => s.user.auth);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = user;
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    } else {
      router.push("/");
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  }, [isAuthenticated, router]);
  const dispath = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispath(setAuth(user));
    });
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <>{children}</>;
};

export default AuthGuard;

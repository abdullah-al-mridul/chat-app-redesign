// "use client";
// import React, { useEffect, useState } from "react";
// import styles from "@/app/globals.module.css";
// import { FiPlus } from "react-icons/fi";
// import { realtime__db } from "./firebase/firebase.config";
// import { onValue, ref, remove, set } from "firebase/database";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import moment from "moment";
// // export const metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };
import HomePage from "@/app/components/HomePage";
const page = () => {
  return <HomePage />;
};
export default page;

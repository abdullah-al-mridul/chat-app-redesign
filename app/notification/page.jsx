import React from "react";
import styles from "@/app/globals.module.css";
const page = () => {
  const dummy = [
    "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.",
    "How a visual artist redefines success in graphic design",
    "For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.",
    "consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue",
    "In fermentum posuere urna nec",
    "ID: 22739",
    "How We Keep Brand Consistency in Our Visual Language — A Design System for Illustrations",
  ];
  return (
    <div
      className={`flex-1 ${styles.login__containeer} overflow-y-auto p-[20px]`}
    >
      {dummy.map((val) => {
        return (
          <div
            key={val}
            className="bg-[#ffffff0a] mb-[10px] p-[10px] rounded-md text-[#8698a599]"
          >
            {val}
          </div>
        );
      })}
      {dummy.map((val) => {
        return (
          <div
            key={val}
            className="bg-[#ffffff0a] mb-[10px] p-[10px] rounded-md text-[#8698a599]"
          >
            {val}
          </div>
        );
      })}
      {dummy.map((val) => {
        return (
          <div
            key={val}
            className="bg-[#ffffff0a] mb-[10px] p-[10px] rounded-md text-[#8698a599]"
          >
            {val}
          </div>
        );
      })}
      {dummy.map((val) => {
        return (
          <div
            key={val}
            className="bg-[#ffffff0a] mb-[10px] p-[10px] rounded-md text-[#8698a599]"
          >
            {val}
          </div>
        );
      })}
    </div>
  );
};

export default page;

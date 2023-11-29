import React from "react";
import { Back } from "../../common/back/Back";
import { AboutCard } from "./AboutCard";
import "./about.css";
import { AboutWrapper } from "./AboutWrapper";

export const About = () => {
  return (
    <>
      <Back title="About Us" />
      <AboutCard />
      <AboutWrapper />
    </>
  );
};

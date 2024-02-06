"use client";
import Blog from "@/src/components/home/blog/Blog";
import Count from "@/src/components/home/cards/Count";
import Testimonial from "@/src/components/home/testimonial/Testimonial";
import Welcome from "@/src/components/Common/Welcome";
import ProgramsContainer from "@/src/components/contents/ProgramsContainer";
import { useEffect, useState } from "react";
import axios from "axios";

const UniversityPage = () => {
  const [Unive, SetUniv] = useState({});
  useEffect(() => {
    const id =
      typeof window !== "undefined"
        ? localStorage.getItem("universityId")
        : null;

    if (id) {
      const university = async () => {
        try {
          const university = await axios.get(
            `https://univease.onrender.com/api/v1/university/read/${id}`
          );
          const response = await university.data.data;
          console.log("Single university page Data", response);
          if (response) {
            SetUniv(response);
          }
        } catch (error) {
          console.log(error);
        }
      };
      university();
    }
  }, []);

  return (
    <div className="flex flex-col gap-3 py-20 pt-[25vh]">
      <Welcome
        badge={`${Unive?.universityName} is a ${Unive?.universityType} collegiate`}
        title={Unive?.universityName}
      />

      <ProgramsContainer />
      <Count />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default UniversityPage;

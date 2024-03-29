"use client";
import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "@/src/app/loading";
const Carousel = () => {
  const [cardData, setcardData] = useState([]);
  useEffect(() => {
    const getUniversity = async () => {
      try {
        const university = await axios.get(
          "https://univease.onrender.com/api/v1/university/read"
        );
        const response = await university.data.data;
        console.log("Crousel Data", response);
        if (response) {
          setcardData(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUniversity();
  }, []);

  return (
    <div className="overflow-hidden text-nowrap absolute bottom-0 mb-6 duration-100 w-screen">
      <div className=" flex gap-3 mt-14 animate-scroll w-full">
        {cardData.length > 0 ? (
          cardData.map((data, index) => <Card key={index} data={data} />)
        ) : (
          <div className="flex justify-center items-center w-full">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;

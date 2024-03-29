"use client";
import React from "react";
import Link from "next/link";
import Image from  "next/image"
const Card = ({ data }) => {
  const handleUniversityClick = (id) => {
    localStorage.setItem("universityId", id);
  };
  return (
    <Link href="/university" onClick={() => handleUniversityClick(data._id)}>
      <div className="rounded-3xl relative shadow-2xl min-w-[30vh] h-[30vh] duration-150 hover:-translate-y-4 cursor-pointer">
        <Image
          src={data?.universityLogo}
          layout="fill"
          objectfit="cover"
          alt="Image Card"
          className="rounded-3xl h-full w-full"
        />
        <div className="absolute w-full h-full flex flex-col justify-between right-0 top-0 rounded-3xl p-2 pb-4 pl-4 bg-gradient-to-t from-dark to-dark/10">
          <div className="w-full flex justify-end items-center">
            <Link
              href="/university"
              onClick={() => handleUniversityClick(data._id)}
            >
              <button className="py-2 px-4 bg-btn rounded-3xl text-bgColor text-sm ">
                Open
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-sm text-bgColor text-wrap ">
              {data?.universityName}
            </h2>
            <div className="flex items-center text-bgColor  gap-4">
              {data?.program[0]?.tags?.map((type, index) => (
                <span
                  key={index}
                  className="border border-white px-3 py-2 text-xs font-medium rounded-full hover:bg-white hover:text-dark cursor-pointer scale-105 duration-150 active:scale-95"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

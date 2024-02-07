"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Projet() {
  const links = [
    {
      link: "#item1",
      num: 1,
    },

    {
      link: "#item2",
      num: 2,
    },

    {
      link: "#item3",
      num: 3,
    },

    {
      link: "#item4",
      num: 4,
    },

    {
      link: "#item5",
      num: 5,
    },
  ];

  const images = [
    {
      src: "pro1",
      item: "item1",
    },

    {
      src: "pro2",
      item: "item2",
    },

    {
      src: "cow",
      item: "item3",
    },

    {
      src: "jardin",
      item: "item4",
    },

    {
      src: "vegetable",
      item: "item5",
    },

    {
      src: "pro3",
      item: "item6",
    },

    {
      src: "banner2",
      item: "item7",
    },
  ];

  return (
    <div className={`mb-32 block ${styles.top}`}>
      <div className="m-auto">
        <div className="flex">
          {/* <CldImage
            className={`m-auto mt-32 cursor-pointer`}
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={877}
            height={614}
            alt="rnglogo"
          /> */}

          <Image
            className="m-auto mt-24"
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
        </div>

        <div className="flex mt-3">
          <h2 style={{ color: "#687469" }} className="m-auto ">
            TRAVAUX RÉCEMMENT TERMINÉS
          </h2>
        </div>

        <div className="flex my-4 mb-16">
          <h1
            style={{ color: "#334b35" }}
            className="m-auto font-bold lg:text-6xl text-3xl text-center"
          >
            Explorez nos projets
          </h1>
        </div>
      </div>
      <div className="carousel carousel-center space-x-8 rounded-box lg:mx-20 mx-5">
        {images?.map(({ src, item }) => (
          <div className="carousel-item" key={item} id={item}>
            <Image
              width={488}
              height={48}
              style={{ width: "450px", height: "450px" }}
              src={`/${src}.jpg`}
              alt="projets"
            />
            {/* <CldImage
              style={{ width: "450px", height: "450px" }}
              src={src}
              width={1072}
              height={3648}
              alt="cow"
            /> */}
          </div>
        ))}
      </div>
      {/* <div className="flex lien justify-center w-full py-2 gap-2 mt-6">
        {links.map(({ link, num }) => {
          const isActive = pathname === link;

          return (
            <a
              key={num}
              href={link}
              className={`btn btn-xs hover:text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-600`}
            >
              {num}
            </a>
          );
        })}
      </div> */}
    </div>
  );
}

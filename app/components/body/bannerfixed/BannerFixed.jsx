"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "./fixes.module.css";
import Image from "next/image";

export default function BannerFixed() {
  const card = [
    {
      num: 860,
      desc: "Projet termiés",
    },
    {
      num: 755,
      desc: "Produits bio",
    },

    {
      num: 683,
      desc: "Clients Satisfais",
    },
  ];
  return (
    <div className={`${styles.testi}`}>
      <div className={`lg:w-1/2 md:w-full relative  ${styles.colo}`}>
        {/* <CldImage
          src="rng/ymeeh4l6gy709mbbctqr"
          width={1831}
          height={2831}
          alt="jardin"
          overlays={[
            {
              text: {
                color: "white",
                fontFamily: "Source Sans Pro",
                fontSize: 130,
                TextDecoder: "center",
                fontWeight: "bold",
                text: `L' Agriculture ça compte`,
              },
            },
          ]}
        /> */}

        <Image
          src="/fixed.jpg"
          width={1831}
          height={2831}
          alt="fixed"
          style={{ height: "auto" }}
        />
        <div className={`${styles.frameYellow}`}></div>
      </div>
      <div
        style={{ background: "#6d8c54" }}
        className={`lg:w-1/2 md:w-full ${styles.colo2}`}
      >
        <div className="lg:mx-16 lg:mt-40 mx-8 my-10">
          {/* <CldImage
            className={``}
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={999}
            height={614}
            alt="rnglogo"
          /> */}

          <Image
            className=""
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
          <h3 style={{ color: "white" }} className="my-4 lg:text-xl text-md">
            RNG DEPUIS 2022
          </h3>
          <h1
            style={{ color: "white" }}
            className="lg:text-5xl text-2xl font-bold"
          >
            Petite histoire agricole
          </h1>
          <p style={{ color: "#dbe6d2" }} className="my-10 font-bold">
            Nous nous engageons à offrir à nos clients un service exceptionnel
            tout en offrant à nos employés la meilleure formation. lo
          </p>
          <div className="flex flex-wrap lg:space-x-4 space-x-2">
            {card?.map(({ num, desc }) => (
              <div
                key={num}
                className={`flex lg:p-6 p-5 mb-4 ${styles.number}`}
              >
                <div className="m-auto">
                  <h1
                    style={{ color: "#334b35" }}
                    className="lg:text-5xl text-2xl flex"
                  >
                    <p className="m-auto">{num}</p>
                  </h1>
                  <p
                    style={{ color: "#687469", textAlign: "center" }}
                    className="mt-4"
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

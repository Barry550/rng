"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "./why.module.css";

export default function BannerWhy() {
  return (
    <div className={`lg:flex flex-wrap ${styles.card}`}>
      <div className={`lg:w-1/2 w-full relative ${styles.colo}`}>
        {/* <CldImage
          src="rng/z7zpexa8qxkf0wlbnars"
          width={2831}
          height={4288}
          alt="jardin"
        /> */}
        <Image src="/why.jpg" width={2831} height={4288} alt="why" />
      </div>
      <div className={`lg:w-1/2 w-full relative ${styles.colo}`}>
        <div className={styles.frameYellow}></div>
        <div className={`lg:mx-16 mx-5 ${styles.img}`}>
          <Image
            className={`mt-5 lg:m-0 m-auto `}
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
          {/* <CldImage
            className={``}
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="rng/va5oxgmmwb2qrgloonz8"
            width={877}
            height={614}
            alt="rnglogo"
          /> */}
          <h3
            style={{ color: "#687469" }}
            className="my-4 lg:text-xl text-md text-center lg:text-left"
          >
            AVANTAGES POUR L'ENTREPRISE
          </h3>
          <h1
            style={{ color: "#334b35" }}
            className="lg:text-5xl text-3xl font-bold "
          >
            Pourquoi choisir RNG <br /> Marché ?
          </h1>
          <div className={`mt-10 `}>
            <div className="">
              <FontAwesomeIcon
                // style={{ color: "#334b35" }}
                className={`text-green-600 lg:text-4xl text-2xl ${styles.iconSize}`}
                icon={faCircleCheck}
              />
              <span
                style={{ color: "#334b35" }}
                className="text-green-600 lg:text-2xl text-xl ml-4"
              >
                {" "}
                Aliments bio de qualité
              </span>
            </div>

            <div className="my-8">
              <FontAwesomeIcon
                // style={{ color: "#334b35" }}
                className={`text-green-600 lg:text-4xl text-2xl ${styles.iconSize}`}
                icon={faCircleCheck}
              />
              <span
                style={{ color: "#334b35" }}
                className={`text-green-600 lg:text-2xl text-xl ml-4"
                `}
              >
                {" "}
                100% de satisfaction
              </span>
            </div>

            <div className="">
              <FontAwesomeIcon
                // style={{ color: "#334b35" }}
                className={`text-green-600 lg:text-4xl text-2xl ${styles.iconSize}`}
                icon={faCircleCheck}
              />
              <span
                style={{ color: "#334b35" }}
                className="text-green-600 lg:text-2xl text-xl ml-4"
              >
                {" "}
                Personnel professionnel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

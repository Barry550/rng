"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="lg:mt-20 mt-0">
      <footer
        // style={{ backgroundColor: "#f1cf69" }}
        className={`lg:p-14 p-5 ${styles.footerbanner}`}
      >
        <div
          className={`lg:my-16 my-8 flex flex-row lg:justify-around ${styles.center}`}
        >
          <div className="">
            {/* <CldImage
              className="m-auto"
              style={{ width: "95px", height: "90px", borderRadius: "50%" }}
              src="rng/ro7gisg1wjythxt7uh2t"
              width={177}
              height={614}
              alt="rnglogo"
            /> */}
            <Image
              className="m-auto"
              style={{ width: "75px", height: "70px", borderRadius: "50%" }}
              src="/rng.jpeg"
              width={85}
              height={85}
              alt="rnglogo"
            />
          </div>
          <div className="lg:text-5xl text-3xl text-center  text-green-600 md:py-5">
            We're Leader in Agriculture Market
          </div>
          <button
            className="text-yellow-300 hover:text-green-600 p-5 hover:bg-white bg-green-600"
            style={{
              // backgroundColor: "#f1cf69",
              // color: "#6d8c54",
              fontWeight: "bold",
              // padding: "25px",
              borderRadius: "10px",
            }}
          >
            DÉCOUVRIR PLUS
          </button>
        </div>
      </footer>
      <footer
        className={`${styles.footer2banner} footer lg:p-20 p-5 flex flex-wrap justify-between`}
      >
        <div>
          <Image
            className=""
            style={{ width: "75px", height: "70px", borderRadius: "50%" }}
            src="/rng.jpeg"
            width={85}
            height={85}
            alt="rnglogo"
          />
          <p style={{ color: "#b3c5b5" }} className="mt-4 text-xl">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="mt-5">
            <div className="">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ml-4 ">+620520675</span>
            </div>
            <div className="my-4">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-4">mamadoubarry@gmail.com</span>
            </div>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot} />
              <span className="ml-4 ">Nongo conteya</span>
            </div>
          </div>
        </div>
        <div className=" mr-8">
          <span className="text-3xl font-bold ">Nouvelles</span>
          <div className="flex mt-10">
            <div className="">
              {/* <CldImage
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                src="rng/ac8frs7llyc0v8pzwwec"
                width={177}
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
            </div>
            <div className="ml-4">
              <h1 className="text-yellow-300 text-xl font-bold">
                31 Octobre 2021
              </h1>
              <p className="mt-6 text-md font-bold">
                L'agriculture compte pour <br /> l'avenir du prochain
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <div className="">
              {/* <CldImage
                style={{ width: "95px", height: "90px", borderRadius: "50%" }}
                src="rng/ik9ujewwkjeyxrbay93r"
                width={177}
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
            </div>
            <div className="ml-4">
              <h1 className="text-yellow-300 text-xl font-bold">
                31 Octobre 2021
              </h1>
              <p className="mt-6 text-md font-bold">
                Remedy for numerical fracture <br /> by supplementary
                measurements
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <span className="text-3xl font-bold">Explorer</span>
          <a
            className="link link-hover text-xl mt-4"
            style={{ color: "#b3c5b5" }}
          >
            About us
          </a>
          <a className="link link-hover text-xl" style={{ color: "#b3c5b5" }}>
            Contact
          </a>
          <a className="link link-hover text-xl" style={{ color: "#b3c5b5" }}>
            services
          </a>
          <a className="link link-hover text-xl" style={{ color: "#b3c5b5" }}>
            store
          </a>
          <a className="link link-hover text-xl" style={{ color: "#b3c5b5" }}>
            blog
          </a>
          <a className="link link-hover text-xl" style={{ color: "#b3c5b5" }}>
            projet
          </a>
        </div>
        <div className="md:ml-auto lg:ml-0">
          <span className="text-3xl font-bold">New letter</span>
          <p style={{ color: "#b3c5b5" }} className="text-xl  my-4">
            Inscrivez-vous maintenant pour recevoir <br /> quotidiennement les
            dernières <br /> nouvelles et mises à jour de nore part
          </p>
          <form action="" className="relative ">
            <input
              type="email"
              className={`input p-7 mt-4 w-auto text-black ${styles.form}`}
              placeholder="Email address "
            />
            <button
              style={{
                position: "absolute",
                bottom: "3px",
                right: "10px",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                background: "#334b35",
              }}
              className=""
            >
              Aller
            </button>
          </form>
        </div>
      </footer>
      <footer
        style={{ backgroundColor: "#61CE70" }}
        className="footer flex justify-between lg:px-20 px-10 flex-wrap py-10 text-base-content"
      >
        <div className="">
          <p className="text-xl lg:text-right text-center  text-white">
            Copyright © 2023 - All right reserved by RNG
          </p>
        </div>
        <div className="flex m-auto lg:m-0">
          <FontAwesomeIcon
            className="text-white text-xl ml-4"
            icon={faTwitter}
          />
          <FontAwesomeIcon
            className="text-white text-xl ml-4"
            icon={faFacebook}
          />
          <FontAwesomeIcon
            className="text-white text-xl ml-4"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="text-white text-xl ml-4"
            icon={faLinkedin}
          />
        </div>
      </footer>
    </div>
  );
}

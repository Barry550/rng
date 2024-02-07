"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={`lg:mb-40 mb-20 ${styles.top}`}>
      {/* <CldImage
        className="m-auto mt-16"
        style={{ width: "75px", height: "70px", borderRadius: "50%" }}
        src="rng/va5oxgmmwb2qrgloonz8"
        width={877}
        height={614}
        alt="rnglogo"
      /> */}

      <Image
        className="m-auto mt-16"
        style={{ width: "75px", height: "70px", borderRadius: "50%" }}
        src="/rng.jpeg"
        width={85}
        height={85}
        alt="rnglogo"
      />
      <div className="flex mt-3">
        <h2 style={{ color: "#687469" }} className="m-auto">
          CONTACTEZ-NOUS
        </h2>
      </div>
      <div className="flex mb-4">
        <h1
          style={{ color: "#334b35" }}
          className="m-auto font-bold lg:text-5xl text-3xl text-center "
        >
          Vous recherchez des services écologiques <br /> agricoles et
          biologiques?
        </h1>
      </div>
      <div className={`lg:px-40 px-2 lg:mt-20 mt-8 ${styles.contact}`}>
        <div className={`lg:w-1/2 relative lg:mb-0 mb-10 ${styles.colo}`}>
          <h1 className="text-3xl text-green-600 font-bold">
            Contacter maintenant
          </h1>
          <h2 className="lg:text-2lg text-lg my-4" style={{ color: "#687469" }}>
            CONTACTEZ-NOUS MAINTENANT
          </h2>
          <p className="lg:text-2xl text-xl" style={{ color: "#687469" }}>
            There are many variations of passages available but the majority
            have suffered alteration in some form, by injected humou or
            randomized words even believable.
          </p>
          <div className="flex my-4">
            <FontAwesomeIcon
              icon={faPhone}
              className="mt-4 text-2xl  text-green-600"
            />
            <div style={{ color: "#687469" }} className="flex_flex-col ml-4">
              <div>whatsApp</div> <div>+224620520675</div>
            </div>
          </div>

          <div className="flex mt-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mt-4 text-2xl text-green-600"
            />
            <div style={{ color: "#687469" }} className="flex_flex-col ml-4">
              <div>Email</div> <div>mamadouBarry6059@gmail.com</div>
            </div>
          </div>

          <div className="flex mt-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mt-4 text-2xl text-green-600"
            />
            <div style={{ color: "#687469" }} className="flex_flex-col ml-4">
              <div>Location</div> <div>Nongo</div>
            </div>
          </div>

          <div className="mt-10 relative lg:flex hidden">
            <CldImage
              style={{ width: "180px", height: "200px", zIndex: "1" }}
              className="rounded-xl"
              src="rng/tflp9n1nu9xmh9wpdtql"
              width={1056}
              height={3166}
              alt="piquetage"
            />

            <CldImage
              style={{
                position: "absolute",
                bottom: "35px",
                left: "150px",
                width: "300px",
                height: "230px",
              }}
              // style={{ zIndex: "2" }}
              className="rounded-xl"
              src="rng/pvbfo4rzgskmriyackqi"
              width={628}
              height={3264}
              alt="semer"
            />
          </div>
          <div className={styles.frameGreen}></div>
        </div>

        <div className={`lg:w-1/2 bg-base-100 ${styles.form}`}>
          <form className="flex flex-col" action="">
            <input
              type="email"
              placeholder="Adress Email"
              className="input lg:p-10 p-7 "
            />
            <input
              type="text"
              placeholder="Your name"
              className="input my-4 lg:p-10 p-7"
            />
            <textarea
              type="text"
              placeholder="Ecrire votre message"
              className="textarea px-7 py-5"
              name=""
              id=""
              cols="70"
              rows="5"
            ></textarea>
          </form>
          <button
            className="mt-10 hover:text-white text-green-600 bg-yellow-300 hover:bg-green-600"
            style={{
              // backgroundColor: "#f1cf69",
              // color: "#6d8c54",
              fontWeight: "bold",
              padding: "25px",
              borderRadius: "10px",
            }}
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./funder.module.css";
import { CldImage, CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Founder() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="lg:mx-20  md:mx-14 mx-5 mb-32">
      <div
        className={`lg:flex lg:justify-center mt-20 ${styles.card}`}
        style={{ gap: "70px" }}
      >
        <div className={`lg:w-1/2 md:w-full w-full ${styles.colo}`}>
          <h2
            className="card-title lg:text-4xl text-3xl uppercase font-bold"
            style={{ color: "#334b35" }}
          >
            Le fondateur
          </h2>
          <h3 style={{ color: "#687469" }} className="text-xl">
            <span className="lg:mr-8 lg:inline block my-4">
              Fermier/Commerçant
            </span>
            <span className="lg:space-x-6 space-x-4">
              <FontAwesomeIcon
                style={{ color: "#6d8c54", fontSize: "30px" }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{ color: "#6d8c54", fontSize: "30px" }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ color: "#6d8c54", fontSize: "30px" }}
                icon={faInstagram}
              />
              <FontAwesomeIcon
                style={{ color: "#6d8c54", fontSize: "30px" }}
                icon={faLinkedin}
              />
            </span>
          </h3>

          <h2 style={{ color: "#6d8c54" }} className="text-2xl font-bold  my-4">
            J'aide mes clients à se démarquer en consommant <br /> des produits
            bio et ils m'aident à grandir.
          </h2>
          <div
            className="text-md text-xl text-justify"
            style={{ color: "#687469" }}
          >
            <div className="mb-4">
              Passionné d'agriculture et d'élevage, il investit une grande
              partie de son business commerciale dans ces secteurs.
            </div>
            <div className="ml-6">
              <div className="">
                <h1 className="font-bold">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#f1cf69" }}
                  />
                  <span style={{ color: "#6d8c54" }} className="ml-4">
                    Ma vision
                  </span>
                </h1>
                est de pousser les jeunes a également s'investir dans ces
                domaines pour lutter contre la malnutrition, le chomage et
                préserver un environnement écologique
              </div>
              <div className="mt-4">
                <h1 className="font-bold">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#f1cf69" }}
                  />
                  <span style={{ color: "#6d8c54" }} className="ml-4">
                    Mon objectif
                  </span>{" "}
                </h1>
                est celui de créer un écosystème agricole durable où les
                ressources sont utilisées efficacement, les déchets sont
                minimisés et la biodiversité reste intacte. Il mène la charge
                vers un avenir plus vert et plus fructueux.
              </div>
            </div>
            <button
              className="mt-8 hover:text-white text-green-600 bg-yellow-300 hover:bg-green-600"
              style={{
                // backgroundColor: "#f1cf69",
                // color: "#6d8c54",
                fontWeight: "bold",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              DÉCOUVRIR PLUS
            </button>
          </div>
        </div>
        <div
          className={`lg:w-1/2 md:w-full w-full flex relative lg:mt-0 mt-10 `}
        >
          <div className={`lg:mr-40 ${styles.mr}`}>
            <CldImage
              style={{
                display: "none",
                position: "absolute",
                left: "-10px",
                bottom: "0px",
                zIndex: 2,
                borderRadius: "10px",
                height: "300px",
                width: "300px",
              }}
              src="rng/ro7gisg1wjythxt7uh2t"
              width="300"
              height="300"
              alt="fermier"
            />
          </div>
          <div className="relative">
            <div>
              <FontAwesomeIcon
                onClick={() => {
                  setToggle(true);
                  document.getElementById("my_modal_1")?.showModal();
                }}
                icon={faCirclePlay}
                beat
                className={`text-yellow-300 hover:text-green-600 z-10 bg-green-600 hover:bg-white  ${styles.play}`}
                style={
                  {
                    // color: "#F1CF69",
                    // background: "#6d8c54",
                    // borderRadius: "50%",
                    // cursor: "pointer",
                    // fontSize: "90px",
                    // position: "absolute",
                    // right: "388px",
                    // top: "100px",
                  }
                }
              />
            </div>

            <Image
              className={`${styles.img}`}
              src="/papa.jpeg"
              style={{
                zIndex: 1,
                borderRadius: "10px",
              }}
              width={430}
              height={200}
              alt="papa"
            />
            {/* <CldImage
              style={{
                zIndex: 1,
                borderRadius: "10px",
                height: "590px",
                width: "430px",
              }}
              src="rng/wjfoeraiuin3ouz6cj4v"
              width="1500"
              height="1333"
              alt="papa"
            /> */}
            {/* <div className={styles.frameYellow}></div> */}
            {toggle && (
              <dialog id="my_modal_1" className="modal">
                <div className="" style={{ width: "1000px" }}>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        onClick={() => setToggle(false)}
                        className="text-white font-bold text-4xl"
                      >
                        X
                      </button>
                    </form>
                  </div>
                  <div className="py-4">
                    {/* <CldVideoPlayer
                      style={{ with: "3px", height: "5px" }}
                      id="papa"
                      width="1080"
                      height="607"
                      src="videos/zbyokvg3qyd4qdujrjk9"
                    /> */}
                  </div>
                </div>
              </dialog>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

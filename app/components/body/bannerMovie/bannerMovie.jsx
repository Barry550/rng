"use client";

import React, { useState } from "react";
import style from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function BannerMovie() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={`lg:w-full w-96 ${style.headerImage}`}>
      <div className="lg:m-auto ">
        <div className={`flex ${style.popup}`}>
          <FontAwesomeIcon
            onClick={() => {
              setToggle(true);
              document.getElementById("my_modal_1")?.showModal();
            }}
            className="text-8xl text-white hover:text-yellow-300 bg-green-600 hover:bg-white  m-auto "
            icon={faCirclePlay}
            beatFade
            style={{
              cursor: "pointer",

              borderRadius: "50%",
            }}
          />
        </div>

        <div className="flex my-10">
          <div className="m-auto">
            <FontAwesomeIcon
              className="text-xl text-yellow-300"
              icon={faLeaf}
            />

            <FontAwesomeIcon
              className="text-xl text-yellow-300"
              icon={faLeaf}
            />

            <FontAwesomeIcon
              className="text-xl text-yellow-300"
              icon={faLeaf}
            />
          </div>
        </div>
        <div className="lg:text-6xl text-2xl font-bold text-center">
          <div>
            Soyez en bonne santé et ne mangez que des légumes frais biologiques
          </div>
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
                    style={{ with: "30px", height: "50px" }}
                    id="ferme"
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
  );
}

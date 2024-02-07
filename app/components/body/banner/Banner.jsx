import React from "react";
import styles from "./styles.module.css";

export default function Banner() {
  return (
    <>
      <div className={`${styles.headerImage}`}>
        <div className="md:w-2/3  md:ml-10 ">
          <div className="relative">
            <div
              className={`md:text-2xl text-2sm uppercase inline-block md:mb-1`}
            >
              Nous produisons des biens naturels
            </div>
            <div className={`${styles.line}`}></div>
          </div>
          <h1 className="md:mb-8 mb-4 md:mt-16 mt-8  capitalize md:text-8xl text-4xl">
            Bienvenue a la ferme RNG
          </h1>
          <h4 className="md:text-xl text-sm">
            Notre mission chez RNG Agriculture est de vous fournir des légumes
            verts, des légumes et des produits laitiers riches, tous cultivés
            avec soin. Nous avons 87 500 projets à notre actif, nous sommes
            également résilients pour fournir à nos clients des produits
            agricoles de la meilleure qualité en Afrique de l'Ouest.
          </h4>
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
            DÉCOUVRIR PLUS
          </button>
        </div>
      </div>
    </>
  );
}

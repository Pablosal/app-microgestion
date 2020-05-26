import React from "react";
import firebase from "../firebase";
const MiniLogin = () => {
  return (
    <div
      className="profile_mini_card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      <img
        heigth="50px"
        className=" m-1"
        width="50px"
        src={firebase.auth().currentUser.photoURL}
        alt=""
      />
      <h5>Bienvenid@ {firebase.auth().currentUser.displayName}</h5>
      <button className="btn  m-1" onClick={() => firebase.auth().signOut()}>
        Salir de la Sesion
      </button>
    </div>
  );
};

export default MiniLogin;

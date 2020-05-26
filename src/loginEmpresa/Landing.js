import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch } from "react-redux";
import { logearse, getLog, insertData } from "../clientesempresa/EmpresaAction";
const Landing = () => {
  const dispatch = useDispatch();
  const [signed, setSigned] = useState(false);
  const uiConfig = {
    signInFLow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user.refreshToken === null) return;
      setSigned(!!user);
      dispatch(logearse(user.refreshToken));
      dispatch(insertData(firebase.auth().currentUser.displayName));
      dispatch(getLog());
    });
  }, []);
  return (
    <>
      <section
        style={{
          backgroundColor: "#DCEFF5",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          {signed ? (
            <>
              <div
                className="profile_mini_card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  heigth="50px"
                  width="50px"
                  src={firebase.auth().currentUser.photoURL}
                  alt=""
                />
                <h5>Bienvenid@ {firebase.auth().currentUser.displayName}</h5>
                <button onClick={() => firebase.auth().signOut()}>
                  Salir de la Sesion
                </button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <h1 style={{ color: "#1E3264" }}>
                Ordenador de ordenes para Delivery
              </h1>
              <p style={{ color: "#1E3264" }}>
                Ordena tus pedidos de manera sencilla y ordenada, inicia sesion
                con tu cuenta google para iniciar
              </p>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Landing;

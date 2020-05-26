import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useDispatch } from "react-redux";
import { logearse, getLog, insertData } from "../clientesempresa/EmpresaAction";
import MiniLogin from "./MiniLogin";
import Orden from "../formsempresa/Orden";
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
    const unsubscribre = onAuthStateChange();
    return () => {
      unsubscribre();
    };
  }, []);
  function onAuthStateChange() {
    firebase.auth().onAuthStateChanged((user) => {
      setSigned(!!user);
      console.log(user.refreshToken);
      if (!user.refreshToken) return;
      dispatch(logearse(user.refreshToken));
      dispatch(
        insertData({
          nombre: firebase.auth().currentUser.displayName,
          image: firebase.auth().currentUser.photoURL,
        })
      );
      console.log(user);
    });
  }
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
            <Orden />
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

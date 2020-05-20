import React from "react";
import firebase from "../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
class Landing extends React.Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFLow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log(user);
    });
  }
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <>
            <p>Signed In</p>

            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <h1>Welcome {firebase.auth().currentUser.email}</h1>
            <img src={firebase.auth().currentUser.photoURL} alt="" />
          </>
        ) : (
          <>
            Hola
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </>
        )}
      </div>
    );
  }
}

export default Landing;

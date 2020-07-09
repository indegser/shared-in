import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

if (firebase.apps.length === 0) {
  if (process.env.NODE_ENV !== "test") {
    const { NEXT_PUBLIC_FIREBASE_CONFIG } = process.env;
    const config = NEXT_PUBLIC_FIREBASE_CONFIG
      ? JSON.parse(NEXT_PUBLIC_FIREBASE_CONFIG)
      : {};

    firebase.initializeApp(config);
  }
}

export const db = firebase.firestore();
export const auth = firebase.auth;

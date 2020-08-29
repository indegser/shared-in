import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

if (firebase.apps.length === 0) {
  const isTest = process.env.NODE_ENV === "test";

  if (isTest) {
    firebase.initializeApp({
      projectId: "Hello",
    });
  } else {
    const { NEXT_PUBLIC_FIREBASE_CONFIG } = process.env;
    const config = JSON.parse(NEXT_PUBLIC_FIREBASE_CONFIG);
    firebase.initializeApp(config);
    process.browser && firebase.analytics();
  }
}

export default firebase;

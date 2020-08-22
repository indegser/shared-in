import firebase from "firebase/app";
const db = firebase.firestore();
import { authStoreApi } from "./store";

const converQuerySnapshotToArrayOfDocs = <T>(
  querySnapshot: firebase.firestore.QuerySnapshot
) => {
  return querySnapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as T),
  }));
};

const fetchShares = async () =>
  firebase
    .firestore()
    .collection("shares")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => converQuerySnapshotToArrayOfDocs<IShare>(snapshot));

const fetchOpenGraph = async (url: string) => {
  const response = await fetch("/api/og", {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "content-type": "application/json",
    },
  });

  const json = await response.json();
  return json;
};

const shareApis = {
  createShare: (share: IShare) => {
    return db.collection("shares").add(share);
  },
};

const userApis = {
  connectGithub: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  createUser: (user: IUser) => {
    return db.collection("users").doc(user.uid).set(user);
  },
  updateUserBio: ({ team, company }) => {
    const { user } = authStoreApi.getState();
    if (user.team === team && user.company === company) {
      return;
    }

    return db
      .collection("users")
      .doc(user.uid)
      .set({ team, company }, { merge: true });
  },
};

export default {
  fetchOpenGraph,
  fetchShares,
  ...shareApis,
  ...userApis,
};

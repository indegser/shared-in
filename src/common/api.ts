import firebase from "./firebase";
import { useAuthStore } from "./store";

const db = firebase.firestore();

const snapshotToDocs = <T>(querySnapshot: firebase.firestore.QuerySnapshot) => {
  return querySnapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as T),
  }));
};

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
  subscribeShares: (callback) => {
    return db
      .collection("shares")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        callback(snapshotToDocs<IShare>(snapshot));
      });
  },
  fetchShares: () =>
    db
      .collection("shares")
      .orderBy("createdAt", "desc")
      .get()
      .then(snapshotToDocs) as Promise<IShare[]>,
  createShare: (share: IShare) => {
    return db.collection("shares").add(share);
  },
  updateShare: (share: IShare) => {
    return db.collection("shares").doc(share.id).update(share);
  },
  deleteShare: (shareId: IShare["id"]) =>
    db.collection("shares").doc(shareId).delete(),
  reportContent: (shareId: IShare["id"]) =>
    db.collection("shares").doc(shareId).update({ reported: true }),
};

const userApis = {
  connectGithub: () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },
  getUserByUid: (uid: IUser["uid"]) => db.collection("users").doc(uid).get(),
  createUser: (user: IUser) => {
    return db.collection("users").doc(user.uid).set(user);
  },
  updateUserBio: ({ team, company }) => {
    const { user } = useAuthStore.getState();
    if (user.team === team && user.company === company) {
      return;
    }

    return db
      .collection("users")
      .doc(user.uid)
      .set({ team, company }, { merge: true });
  },
  signOut: () => {
    return firebase.auth().signOut();
  },
};

export default {
  fetchOpenGraph,
  ...shareApis,
  ...userApis,
};

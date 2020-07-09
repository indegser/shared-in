import { db } from "./modules/firebase";

const converQuerySnapshotToArrayOfDocs = <T>(
  querySnapshot: firebase.firestore.QuerySnapshot
) => {
  return querySnapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as T),
  }));
};

const fetchShares = async () =>
  db
    .collection("shares")
    .orderBy("createdAt", "desc")
    .get()
    .then((snapshot) => converQuerySnapshotToArrayOfDocs<IShare>(snapshot));

export default {
  fetchShares,
};

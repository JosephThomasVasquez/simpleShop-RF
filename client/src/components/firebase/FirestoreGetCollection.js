import { useState, useEffect } from "react";
import { appFirestore } from "../../firebase/config";

const FirestoreGetCollection = (collection, docId) => {
  const [firestoreDocs, setFirestoreDocs] = useState([]);

  useEffect(() => {
    const unSubscribe = appFirestore
      .collection(collection)
      .onSnapshot((snap) => {
        console.log('snap', snap);
        let documents = [];
        snap.forEach((doc) => {
          // documents.push({ ...doc.data(), id: doc.id });
          console.log({ ...doc.data()});
        });

        setFirestoreDocs(documents);
        console.log("firestore documents >", documents);
      });

    return () => unSubscribe();
  }, [collection]);

  return { firestoreDocs };
};

export default FirestoreGetCollection;

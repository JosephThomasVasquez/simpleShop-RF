import { useState, useEffect } from "react";
import appFirestore from "../../firebase/config";

const FirestoreGetCollection = (collection) => {
  const [firestoreDocs, setFirestoreDocs] = useState([]);

  useEffect(() => {
    const unSubscribe = appFirestore
      .collection(collection)
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setFirestoreDocs(documents);
        console.log('firestore documents >', documents);
      });

      return () => unSubscribe();
  }, [collection]);

  return { firestoreDocs };
};

export default FirestoreGetCollection;

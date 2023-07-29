import { firestore, auth } from "../firebaseConfig";

import {
  addDoc,
  collection,
  doc,
  updateDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";

let docs = collection(firestore, "docs");

type payloadType = {
  value: string;
  title: string;
};

export const createDoc = (payload: payloadType) => {
  addDoc(docs, { ...payload, userName: auth.currentUser?.displayName });
};

export const getDocuments = (setDocs: any) => {
  getDocs(docs)
    .then((response) => {
      setDocs(
        response.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editDoc = (payload: any, id: string) => {
  let docToEdit = doc(docs, id);
  updateDoc(docToEdit, payload, id);
};

export const getCurrentDoc = (id: string, setCurrentDocument: any) => {
  let docToGet = doc(docs, id);

  getDoc(docToGet)
    .then((response) => {
      setCurrentDocument(response.data());
    })
    .catch((err) => {
      console.log(err);
    });
};

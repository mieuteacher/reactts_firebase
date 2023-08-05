import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

// thay config thành config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyCkOXZTDo_P19mz1wLZNxBsXP1XyYEmdTs",
  authDomain: "learnfirebase-2c8f7.firebaseapp.com",
  projectId: "learnfirebase-2c8f7",
  storageBucket: "learnfirebase-2c8f7.appspot.com",
  messagingSenderId: "451464425810",
  appId: "1:451464425810:web:871e768d992e677833ca8b",
  measurementId: "G-03972S4PEP"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToStorage(file: File, folderName: string) { 

  if (!file) { 
    return false
  }
  const fileRef = ref(storage, `${folderName}/` + file.name);

  let url = await uploadBytes(fileRef, file).then( async res => {
    return await getDownloadURL(res.ref)
    .then(url => url)
    .catch(er => false)
  })

  return url
}
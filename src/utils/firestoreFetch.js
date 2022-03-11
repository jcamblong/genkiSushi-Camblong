import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

export const firestoreFetch = async (category) => {
  let products;
  console.log(category);
  if (category) {
    products = query(
      collection(db, "products"),
      where("category", "==", category)
    )
  } else {
    products = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(products);
  const dataFromFirestore = querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  }));
  return dataFromFirestore;
}

export const firestoreFetchProduct = async (itemId) => {
  const docRef = doc(db, "products", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let result = {
      id: itemId,
      ...docSnap.data()
    }
    return result;
  } else {
    console.log("Producto no encontrado");
  }
}
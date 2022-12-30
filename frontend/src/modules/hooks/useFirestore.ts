import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';
import { db } from 'firebaseInit';
import { useSetRecoilState } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

export function useFirestore() {
  const setRoutes = useSetRecoilState(gymAtom);

  const onAddRoute = async (data: any) => {
    var date = new Date();

    data.date =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    try {
      await addDoc(collection(db, 'routes'), data);
    } catch (error) {}
  };
  const fetchRoutes = async () => {
    const routesRef = collection(db, 'routes');
    const q = await query(routesRef);
    const querySnapshot = await getDocs(q);
    var res: Array<any> = [];
    querySnapshot.forEach((doc) => {
      let obj = doc.data();
      obj.id = doc.id;
      res.push(obj);
    });
    setRoutes(res);
  };
  const fetchRouteByID = async (id: string) => {
    const docRef = doc(db, 'routes', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return await docSnap.data();
    } else {
      alert('No such document!');
    }
  };
  return { onAddRoute, fetchRoutes, fetchRouteByID };
}

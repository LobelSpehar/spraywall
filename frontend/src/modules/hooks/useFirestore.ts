import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from 'firebase/firestore/lite';
import { db } from 'firebaseInit';

import { useSetRecoilState } from 'recoil';
import { gymAtom } from 'recoil/atoms/gymAtom';

import { useNotifications } from 'modules/hooks';

import { HoldType, RouteType } from 'modules/types';

export function useFirestore() {
  const setRoutes = useSetRecoilState(gymAtom);
  const { errorMsg, infoMsg } = useNotifications();
  const clearRoutes = () => {
    setRoutes([]);
  };

  const onAddRoute = async (data: Omit<RouteType, 'id'>) => {
    var date = new Date();

    data.date =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    try {
      await addDoc(collection(db, 'routes'), data);
      infoMsg(data.name + ' created!');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };
  const onUpdateRoute = async (
    id: string,
    data: {
      route: Array<HoldType>;
      name: string;
      grade: number;
    }
  ) => {
    try {
      const docRef = doc(db, 'routes', id);
      await updateDoc(docRef, data);
      infoMsg(data.name + '  updated!');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };
  const fetchRoutes = async (
    minGrade: number,
    maxGrade: number,
    page: number
  ) => {
    try {
      const routesRef = collection(db, 'routes');

      const q = await query(
        routesRef,
        orderBy('grade'),
        where('grade', '>=', minGrade),
        where('grade', '<=', maxGrade),
        startAfter(page * 10),
        limit(10)
      );
      const querySnapshot = await getDocs(q);
      var res: Array<RouteType> = [];
      querySnapshot.forEach((doc) => {
        let obj: RouteType = {
          name: doc.data().name,
          setter: doc.data().setter,
          date: doc.data().date,
          grade: doc.data().grade,
          route: doc.data().route,
          user_uid: doc.data().user_uid,
          id: doc.id,
        };

        res.push(obj);
      });
      setRoutes(res);
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  const fetchRouteByID = async (id: string) => {
    try {
      const docRef = doc(db, 'routes', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return await docSnap.data();
      } else {
        errorMsg('No such document');
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
  };

  const deleteRoute = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'routes', id));

      infoMsg('Route deleted!');
    } catch (error) {
      if (error instanceof Error) {
        errorMsg(error.message);
      }
    }
    return null;
  };
  return {
    onAddRoute,
    fetchRoutes,
    fetchRouteByID,
    clearRoutes,
    deleteRoute,
    onUpdateRoute,
  };
}

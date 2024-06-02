// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirestoreService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  updateDoc,
  doc,
  collectionData,
  deleteDoc,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import IRepartidor from '../interfaces/repartidor';
import { Observable } from 'rxjs';
import IHelado from '../interfaces/helado';
import Usarios from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {

  }
  addUsuarios(user: Usarios) {
    const docRef = doc(this.firestore, 'usuarios', user.email);
    return setDoc(docRef,user);
  }

  addActor(actor: IRepartidor) {
    const aCollection = collection(this.firestore, 'repatidor');
    return addDoc(aCollection, actor);
  }
  getRepartidor(): Observable<IRepartidor[]> {
    const actorRef = collection(this.firestore, 'repatidor');
    return collectionData(actorRef, { idField: 'id' }) as Observable<
      IRepartidor[]
    >;
  }
  addHelado(helado: IHelado) {
    const aCollection = collection(this.firestore, 'helados');
    return addDoc(aCollection, helado);
  }
  getHelados(): Observable<IHelado[]> {
    const actorRef = collection(this.firestore, 'helados');
    return collectionData(actorRef, { idField: 'id' }) as Observable<IHelado[]>;
  }
  updateHelado(id: string, data: any) {
    const col = collection(this.firestore, 'helados');
    const heladoRef = doc(col, id);
    return updateDoc(heladoRef, data);
  }
  delete(id: string) {
    const col = collection(this.firestore, 'helados');
    const documento = doc(col, id);
    deleteDoc(documento);
  }
  async getRol(email: string) {
    const dEmployee = doc(this.firestore, 'usuarios', email);
    let snapshot = await getDoc(dEmployee);
    if (!snapshot.exists()) {
      return null;
    }
    return snapshot.data()['rol'];
  }
}
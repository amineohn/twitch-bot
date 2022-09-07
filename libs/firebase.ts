import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";
export class Firebase {
    constructor() {
        firebase.initializeApp({
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: process.env.PROJECT_ID,
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID,
        });
        console.log("Initialize Firebase app(s): %d", firebase.apps.length);
    }

    collection(collection: string) {
        return firebase.firestore().collection(collection);
    }

    async update(collection: string, documentPath: string, data: any): Promise<void> {
        const collectionRef = this.collection(collection);
        const documentRef = collectionRef.doc(documentPath);
        await documentRef.update(data);
    }

    async create(collection: string, data: any): Promise<void> {
        const collectionRef = this.collection(collection);
        await collectionRef.add(data);
    }

    async delete(collection: string, documentPath: string): Promise<void> {
        const collectionRef = this.collection(collection);

        const documentRef = collectionRef.doc(documentPath);
        await documentRef.delete();
    }
}
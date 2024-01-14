import admin from 'firebase-admin'

interface FirebaseAdminAppParams {
    projectId: string
    privateKey: string
    clientEmail: string
    databaseURL: string
}

function formatPrivateKey(privateKey: string): string {
    return privateKey.replace(/\\n/g, '\n')
}

export function firebaseAdminApp(params: FirebaseAdminAppParams): admin.app.App {
    const privateKey = formatPrivateKey(params.privateKey)
    if (admin.apps.length > 0) {
        return admin.app()
    }
    const cert = admin.credential.cert({
        projectId: params.projectId,
        privateKey: privateKey,
        clientEmail: params.clientEmail
    })
    return admin.initializeApp({
        credential: cert,
        projectId: params.projectId,
        databaseURL: params.databaseURL
    })
}

export async function initAdmin() {
    const params = {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
        privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
        databaseURL: process.env.FIREBASE_DATABASE_URL as string
    }
    return firebaseAdminApp(params)
}
import { FIRBASE_CONFIG } from "env";

export const environment = {
    production: false,
    firebaseConfig : {
      apiKey: FIRBASE_CONFIG.apiKey,
      authDomain: FIRBASE_CONFIG.authDomain,
      databaseURL: FIRBASE_CONFIG.databaseURL,
      projectId: FIRBASE_CONFIG.projectId,
      storageBucket: FIRBASE_CONFIG.storageBucket,
      messagingSenderId: FIRBASE_CONFIG.messagingSenderId,
      appId: FIRBASE_CONFIG.appId,
      measurementId: FIRBASE_CONFIG.measurementId,
    }
  };
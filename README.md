# facebook-clone

Facebook clone made with react js and next js for study purpose.

# test it

- create new project in firebase
- get the config
- create firebase.js file with the following contents:

```
import firebase from "firebase";
import "firebase/storage"; // for adding photos

const firebaseConfig = {
  ***
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
```

- go to developers.facebook.com/apps
- create a new project
- create an .env.local file and add:

```
FACEBOOK_CLIENT_ID= [App ID from facebook project]
FACEBOOK_CLIENT_SECRET= [App Secret from facebook project]
NEXTAUTH_URL=http://localhost:3000

```

- yarn run dev

- test on http://localhost:3000

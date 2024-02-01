import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCOm7F-Fjy1g-RZk6xQ_uh9eniRwtzub2A",
  authDomain: "grobel-34fa7.firebaseapp.com",
  projectId: "grobel-34fa7",
  storageBucket: "grobel-34fa7.appspot.com",
  messagingSenderId: "47682726845",
  appId: "1:47682726845:web:1f058a3f0a9ff2b79dc0d4",
  measurementId: "G-W5VP65L373"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BED5drAmisjnky63EQCPSHv3X-xLgJ0VtWQonedmRmZKrNq_NuipJFbFK2DcM9N60-RyqgIvrqshtRN6AEHz5U0",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();

import { app } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const form = document.querySelector("#form");
const form1 = document.querySelector("#form1");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const getEmail = document.querySelector("#getEmail");
const getPassword = document.querySelector("#getPassword");
const getUser = document.querySelector("#getUser");

const emailReady = document.querySelector("#emailReady");

const auth = getAuth();

//funckja do rejestracji
const register = async (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const passValue = password.value;

  if (passValue.length >= 6) {
    // metoda 1
    // createUserWithEmailAndPassword(auth, emailValue, passValue)
    //   .then((userCredental) => {
    //     console.log(userCredental);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     const { message } = error;
    //     if (message.includes("email-already-in-use"))
    //       alert("Podany email istnieje w bazie");
    //   });
    //metoda 2
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passValue
      );
      if (!response) return alert("response is not ok");
      console.log(response);
    } catch (error) {
      console.error();
    }
  } else alert("Hasło musi mieć minimum 6 znaków");

  // console.log(`Email: ${emailValue}`);
  // console.log(`Hasło: ${passValue}`);
};

form.addEventListener("submit", register);

const signIn = async (event) => {
  event.preventDefault();
  emailReady.innerText = "";
  const emailValue = getEmail.value;
  const passwordValue = getPassword.value;

  try {
    const response = await signInWithEmailAndPassword(
      auth,
      emailValue,
      passwordValue
    );
    if (!response) alert("Undefined response");
    const { user } = response;
    console.log(user.email);
    emailReady.innerText = `Zalogowany jest użytkownik: ${user.email}`;
  } catch (error) {
    console.log(error);
    const { message } = error;
    if (message.includes("user-not-found")) alert("Nie ma takiego użytkownika");
    if (message.includes("wrong-password")) alert("Błędne hasło");
  }
};

form1.addEventListener("submit", signIn);

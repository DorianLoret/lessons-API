// XMLHttpRequest

function reqListener() {
  // console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//---------------
// FETCH
//---------------

// fetch("mon lien", "object d'options")
//   .then((response) => {
//     // console.log(response)
//   })
//   .catch((error) => console.log(error));

fetch("data.txt").then((res) => res.text());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//----------------------------------------------------------------
// CRUD => Create (POST), read (GET),update (PUT), delete (DELETE)
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Ajani",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts", init2).then(() =>
    console.log("data envoyée")
  );
});

//-----------
// Asynchrone
//-----------

setTimeout(() => {
  // console.log("test")
}, 2000);

// Promise
// fetch("monlien").then((res) => res);

// async/await
async function fetchData() {
  await fetch("monlien");
  // attend que le await soit exécuté avant de faire la suite

  executeFonction();
}

const fetchData2 = async () => {
  await fetch("monlien");
  // attend que le await soit exécuté avant de faire la suite

  executeFonction();
};

//--------
// LE JSON
//--------

// Méthode .json() => méthode qui s'auto-résout en royant le Body de la requête.

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // Stringify => convertit en JSON
    let settings = JSON.stringify(data);
    // parse => Transforme JSON en object JS
    // console.log(JSON.parse(settings));
  });

//--------
// Web API
//--------

// CLIENT STORAGE
//---------------

// Local Storage
localStorage.data = "Je stocke la data";
// document.body.Textcontent = localStorage.data;
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};

// Il faut passer des chaînes de caractères
localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

//----------------
// Session Storage
sessionStorage.dataSettings = "55px";
sessionStorage.clear();

//--------
// Cookies
document.cookie = "username=Ajani";

// Bonne pratique

document.cookie = "pseudo=AJ;path=/;max-age=450000;secure;samesite";

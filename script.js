import { cats } from "./catsList.js";

const h1Text = document.createElement("h1");
h1Text.innerText = "Котики в нашем приюте";
document.body.append(h1Text);
const container = document.createElement("main");
document.body.append(container);
for (const listCats of cats) {
  const article = document.createElement("article");
  container.append(article);

  const catName = document.createElement("h2");
  catName.innerText = listCats.name;

  const catPhoto = document.createElement("img");
  catPhoto.src = listCats.img_link;
  catPhoto.style.height = "250px";

  const age = document.createElement("p");
  if (listCats.age === 1) {
    age.innerText = "1 год";
  } else if (listCats.age < 5) {
    age.innerText = `${listCats.age} года`;
  } else {
    age.innerText = `${listCats.age} лет`;
  }

  const rateCat = document.createElement("p");
  rateCat.innerText = "💫".repeat(listCats.rate) + ` ${listCats.rate}/10`;

  const status = document.createElement("p");
  if (listCats.favourite) {
    status.innerText = "Лучший";
    status.style.backgroundColor = "rgb(36, 164, 0)";
  } else {
    status.innerText = "Не лучший";
    status.style.backgroundColor = "red";
  }
  status.style.padding = "5px";
  status.style.borderRadius = "10px";

  const descriptionCat = document.createElement("p");
  descriptionCat.innerText = listCats.description;
  descriptionCat.style.display = "flex";
  descriptionCat.style.textAlign = "center";

  article.append(catName, catPhoto, age, rateCat, status, descriptionCat);
}

const list = document.querySelector("ul");
const form = document.querySelector("form");

const addData = (recipe, id) => {
  let time = recipe.date.toDate();

  let html = `
    <li data-id ="${id}">
    <div> ${recipe.title} </div>
    <div> ${time} </div>
    <button class="btn-danger btn btn-sm my-2">Delete</button>
    </li>
    `;

  list.innerHTML += html;
};

db.collection("recipes")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((element) => {
      addData(element.data(),element.id);
    });
  })
  .catch((err) => {
    console.log(err);
  });






form.addEventListener("submit", (e) => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    date: firebase.firestore.Timestamp.fromDate(now),
  };
  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("added");
    });
});





//Delete

list.addEventListener("click", (e) => {
  if (e.target.tagname === "BUTTON") {
  }
});

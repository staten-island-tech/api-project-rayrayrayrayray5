import "./style.css";
function inject(item) {
  const container = document.querySelector("section");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="bg-white rounded-xl overflow-hidden">
      <img class="w-full h-72 object-cover" src="${item.image}"> 
      <div class="text-base p-4 space-y-1">
        <h2 class="font-semibold">${item.name} </h2>
        <h3>Status: ${item.status} </h3>
        <h4>Species: ${item.species}</h4>
        <h5>Last Location: ${item.location.name}</h5>
        </div>
      </div>`
  );
}
async function getData() {
  try {
    //get data from API
    for (let page = 1; page <= 10; page++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      if (response.status != 200) {
        throw new Error(response);
      } else {
        //converts response into json we can use
        const data = await response.json();
        data.results.forEach((item) => {
          inject(item);
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getData();

function clear() {
  document.querySelector("section").innerHTML = "";
}
async function search(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.status != 200) {
      throw new Error("No Character");
    } else {
      const data = await response.json();
      clear();
      inject(data);
    }
  } catch (error) {
    clear();
    document.querySelector("section").innerHTML =
      "<h1 class=text-3xl>Available IDs are 1-826</h1>";
  }
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const id = document.getElementById("search").value;
  if (id) search(id);
});

/* function getData(item) {
  const container = document.querySelector(".app");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" genre-id="${item.genre}" song-id="${item.title}">
        <img class="png" src="${item.cover}"> 
        <h2>${item.title}</h2>
        <h2 class="artist">${item.artist}</h2>
        <h3 class="length">${item.length}</h3>
      </div>`
  );
} */

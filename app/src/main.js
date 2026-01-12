async function getData() {
  function inject(item) {
    const container = document.querySelector(".flex");
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="bg-white rounded-xl overflow-hidden">
      <img class="w-full h-75 object-cover" src="${item.image}"> 
      <div class="text-base p-4 space-y-1">
        <h2 class="font-semibold">${item.name} </h2>
        <h3 class=>Status: ${item.status} </h3>
        <h4>Species: ${item.species}</h4>
        </div>
      </div>`
    );
  }
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

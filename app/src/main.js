let realData = [];

async function getData(number) {
  try {
    //get data from API
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converts response into json we can use
      const data = await response.json();
      realData.push(data);
      console.log(realData);
    }
  } catch (error) {
    console.log(error);
  }
}
getData("36");

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

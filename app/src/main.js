async function getData(poke) {
  try {
    //get data from API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converts response into json we can use
      const data = await response.json();
      console.log(data.name);
      console.log(data.id);
    }
  } catch (error) {
    console.log(error);
  }
}

getData("Squirtle");

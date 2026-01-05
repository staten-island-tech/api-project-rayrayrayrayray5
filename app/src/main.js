async function getData(number) {
  try {
    //get data from API
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${number}`
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //converts response into json we can use
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

getData("36");

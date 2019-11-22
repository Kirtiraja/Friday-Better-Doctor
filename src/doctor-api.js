export class PracticeSearch {
  async getPracticeByName() {
    try {
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/practices?name=william&location=45.5051,-122.67,100&user_location=45.5051,-122.67&sort=distance-asc&skip=0&limit=10&user_key=7aa6436640c1de393b182e29566ace65`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // alert("sorry, no doctors match your search criteria");
      console.error("There was an error handling your request: " + error.message);
      console.log(jsonifiedResponse);
    }
  }
}

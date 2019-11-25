export class PracticeSearch {
  async getPracticeByName(userInputtedName) {
    try {
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/practices?name=${userInputtedName}&location=45.5051,-122.67,100&user_location=45.5051,-122.67&sort=distance-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // alert("sorry, no doctors match your search criteria");
      console.error("There was an error handling your request: " + error.message);


    }
  }
}
export class ConditionSearch {
  async getPracticeByCondition(userInputtedCondtion) {
    try {
      let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userInputtedCondition}&location=45.5051,-122.67,100&user_location=45.5051,-122.67&sort=distance-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // alert("sorry, no doctors match your search criteria");
      console.error("There was an error handling your request: " + error.message);


    }
  }
}

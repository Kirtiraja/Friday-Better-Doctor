import { PracticeSearch } from './../src/doctor-api.js';
// import { CondtionSearch } from './../src/doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {
  $('#userSearch').click(function(event) {
    event.preventDefault();
    const userInputtedName = $('#nameInput').val();
    (async () => {
      let practiceSearch = new PracticeSearch();
      const response = await practiceSearch.getPracticeByName(userInputtedName);
      getElements(response);
    })();


    // $('#userConditionSearch').click(function(event) {
    //   event.preventDefault();
    //   const userInputtedCondtion = $('#ConditionInput').val();
    //   (async () => {
    //     let conditionSearch = new ConditionSearch();
    //     const conditionResponse = await conditionSearch.getPracticeByCondition(userInputtedCondition);
    //     getElements2(conditionResponse);
    //     console.log("condition" conditionResponse);
    //   })();


      // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
      function getElements(response) {
        $("#doctor1").text(`${response.data[0].name}  ${response.data[0].phones[0].number} ${response.data[0].visit_address.street}  ${response.data[0].visit_address.city} ${response.data[0].visit_address.state} ${response.data[0].visit_address.zip} ${response.data[0].accepts_new_patients}${response.data[0].website}`);
        $("#doctor2").text(`${response.data[1].name} ${response.data[1].phones[0].number} ${response.data[1].visit_address.street}  ${response.data[1].visit_address.city} ${response.data[1].visit_address.state} ${response.data[1].visit_address.zip} ${response.data[1].accepts_new_patients}${response.data[1].website}`);
        $("#doctor3").text(`${response.data[2].name} ${response.data[2].phones[0].number} ${response.data[2].visit_address.street}  ${response.data[2].visit_address.city} ${response.data[2].visit_address.state} ${response.data[2].visit_address.zip} ${response.data[2].accepts_new_patients}${response.data[2].website}`);
        $("#doctor4").text(`${response.data[3].name} ${response.data[3].phones[0].number} ${response.data[3].visit_address.street}  ${response.data[3].visit_address.city} ${response.data[3].visit_address.state} ${response.data[3].visit_address.zip} ${response.data[3].accepts_new_patients}${response.data[3].website}`);

      }

      // function getElements2(conditionResponse) {
      //   $("#condition1").text(`${conditionResponse.data[0].name}  ${conditionResponse.data[0].phones[0].number} ${conditionResponse.data[0].visit_address.street}  ${conditionResponse.data[0].visit_address.city} ${conditionResponse.data[0].visit_address.state} ${conditionResponse.data[0].visit_address.zip} ${conditionResponse.data[0].accepts_new_patients}${conditionResponse.data[0].website}`);
      // }
    });
  });
// });

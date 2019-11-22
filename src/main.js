import { PracticeSearch } from './../src/doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {

  // TAKES USER INPUT SYMPTOM SEARCH AND HOLD TO VARIABLE
  $('#name').click(function() {
    const userInputtedName = $('#nameInput').val();



    // THIS WILL CALL THE PracticeSearch API FUNCTION
    (async () => {
      let practiceSearch = new PracticeSearch();
      const response = await practiceSearch.getPracticeByName(userInputtedName);

      getElements(response);
    })();



    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $(".showDoctorList").append(`${response.data[0].name}`);
      // $('.showAddress').text(`who lives at ${response.current_addresses[0].street_line_1} ${response.current_addresses[0].city}`);
      // $('.showYourPeeps').text(`your peeps be: ${response.associated_people[0].name}, ${response.associated_people[1].name}, ;
    }
  });
});

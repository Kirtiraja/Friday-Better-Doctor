import { PracticeSearch } from './../src/doctor-api.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {

  // TAKES USER INPUT SYMPTOM SEARCH AND HOLD TO VARIABLE
  $('#name').click(function() {
    // const userInputtedName = $('#nameInput').val();


    // THIS WILL CALL THE PracticeSearch API FUNCTION
    (async () => {
      let practiceSearch = new PracticeSearch();
      const response = await practiceSearch.getPracticeByName();
      console.log(response);
      getElements(response);
    })();



    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $(".showDoctorList").text(`${response.data}`);
    console.log(jsonifiedResponse);
    }
  });
});

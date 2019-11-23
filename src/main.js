import { PracticeSearch } from './../src/doctor-api.js';
import { setIntervalAsync } from 'set-interval-async/dynamic';
import { clearIntervalAsync } from 'set-interval-async';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {

  // TAKES USER INPUT SYMPTOM SEARCH AND HOLD TO VARIABLE
  $('#name').submit(function() {
    const userInputtedName = $('#nameInput').val();


    // THIS WILL CALL THE PracticeSearch API FUNCTION
    (async () => {
      let practiceSearch = new PracticeSearch();
      const response = await practiceSearch.getPracticeByName();
      getElements(response);
    })();


    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $("#showDoctorList").text(`your search results: ${response.data[0].name}`);

    }
  });
  console.log("here is your object");
});

import { PracticeSearch } from './../src/doctor-api.js';
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


    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $("#showDoctorList").append(`<li>${response.data[0].name} ${response.data[0].accepts_new_patients} <li>${response.data[1].name}<li>`);

    }
  });
});

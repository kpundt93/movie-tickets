import Ticket from './ticket';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("form#movie-choice").submit(function(event) {
  event.preventDefault();
  const age = $("select#age option:selected").val();
  const time = $("select#time option:selected").val();
  const movie = $("select#movie option:selected").val();
  let ticket = new Ticket(age, time, movie);
  console.log(ticket);
  $("#ticket-total").html("$" + ticket.cost())
  $("#show-results").show();
});

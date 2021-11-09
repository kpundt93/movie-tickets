export default function Ticket(age, time, movie) {

}

Ticket.prototype.cost = function() {
  let ticketTotal = 0;
  let ageIncrement = 0;
  let timeIncrement = 0;
  let movieIncrement = 0;

  if(this.age === "adult") {
    ageIncrement += 13;
  } else if(this.age === "senior") {
    ageIncrement += 8;
  } else if(this.age === "minor") {
    ageIncrement += 10;
  }
  
  if(this.time === "matinee") {
    timeIncrement -= 4;
  } else if(this.age === "evening") {
    timeIncrement += 2;
  }

  if(this.movie === "dune") {
    movieIncrement += 4;
  } else if(this.movie === "eternals") {
    movieIncrement += 4;
  } else if(this.movie === "bond") {
    movieIncrement += 2;
  }

  ticketTotal = ageIncrement + timeIncrement + movieIncrement;
  return ticketTotal;
}


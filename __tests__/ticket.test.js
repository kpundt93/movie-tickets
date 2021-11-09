import { exportAllDeclaration } from "@babel/types";
import { TestScheduler } from "jest";
import Ticket from "./../src/ticket";

describe('Ticket', () => {

  test('should correctly create a ticket object with an age group, time of day, and movie', () => {
    const ticket = new Ticket("adult", "evening", "dune");
    expect(ticket.age).toEqual("adult");
    expect(ticket.time).toEqual("evening");
    expect(ticket.movie).toEqual("dune");
  });
});
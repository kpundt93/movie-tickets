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

  test('should correctly display the base cost of an adult ticket', () => {
    const adultTicket = new Ticket("adult", "", "");
    expect(adultTicket.cost()).toEqual(13);
  });

  test('should correctly display the base cost of a senior ticket', () => {
    const seniorTicket = new Ticket("senior", "", "");
    expect(seniorTicket.cost()).toEqual(8);
  });

  test('should correctly display the base cost of a minor ticket', () => {
    const minorTicket = new Ticket("minor", "", "");
    expect(minorTicket.cost()).toEqual(10);
  });

  test('should correctly display cost of an adult matinee ticket', () => {
    const adultMatineeTicket = new Ticket("adult", "matinee", "");
    expect(adultMatineeTicket.cost()).toEqual(9);
  });

  test('should correctly display cost of a senior matinee ticket', () => {
    const seniorMatineeTicket = new Ticket("senior", "matinee", "");
    expect(seniorMatineeTicket.cost()).toEqual(4);
  });

  test('should correctly display cost of a minor matinee ticket', () => {
    const minorMatineeTicket = new Ticket("minor", "matinee", "");
    expect(minorMatineeTicket.cost()).toEqual(6);
  });
});
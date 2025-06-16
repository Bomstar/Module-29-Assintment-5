import {
  getId,
  changeBackgroundColor,
  removeBackgroundColor,
} from "./utiliti/documentCall.js";
const seatIds = [
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C1",
  "C2",
  "C3",
  "C4",
  "D1",
  "D2",
  "D3",
  "D4",
  "E1",
  "E2",
  "E3",
  "E4",
  "F1",
  "F2",
  "F3",
  "F4",
  "G1",
  "G2",
  "G3",
  "G4",
  "H1",
  "H2",
  "H3",
  "H4",
  "I1",
  "I2",
  "I3",
  "I4",
  "J1",
  "J2",
  "J3",
  "J4",
];

const seatContainer = getId("seatSelection");
const ticketPrice = 550;
const totalPrice = getId("totalPrice");
let totalPrices = (totalPrice.innerText = 0);
const stockTickets = getId("stockTickets");
const addSeats = getId("addSeats");
let seatleft = (stockTickets.innerText = 40);
let selectedSead = (addSeats.innerText = 0);

seatContainer.addEventListener("click", (e) => {
  const seatId = e.target.id;
  const arrID = seatIds.includes(seatId);
  if (!arrID) {
    console.log("not match");
    return;
  }

  const bgClrCheck = getId(seatId).classList.contains("!bg-primary");
  if (bgClrCheck) {
    removeBackgroundColor(seatId);
    seatleft++;
    selectedSead--;
    totalPrices -= ticketPrice;
  } else {
    changeBackgroundColor(seatId);
    seatleft--;
    selectedSead++;
    totalPrices += ticketPrice;
  }
  stockTickets.innerText = seatleft;
  addSeats.innerText = selectedSead;
  totalPrice.innerText = totalPrices;
});

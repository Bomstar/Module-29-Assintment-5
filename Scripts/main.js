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

const ticketPrice = 550;
const seatContainer = getId("seatSelection");
const totalPrice = getId("totalPrice");
const grandTotal = getId("grandTotal");
const stockTickets = getId("stockTickets");
const seatItems = getId("seatItems");
const addSeats = getId("addSeats");
const couponBtn = getId("couponBtn");
const couponValue = getId("couponValue");
const couponCont = getId("couponCont");
let totalPrices = 0;
let selectedSead = 0;
let seatleft = (stockTickets.innerText = 40);

let newSeatIds = [];
seatContainer.addEventListener("click", (e) => {
  const seatId = e.target.id;
  const arrID = seatIds.includes(seatId);
  if (!arrID) {
    console.log("not match");
    return;
  }

  if (4 <= selectedSead) {
    alert("Your Already Selecte 4 Sead");
    return;
  }

  const bgClrCheck = getId(seatId).classList.contains(
    "!bg-primary",
    "text-white"
  );
  if (!bgClrCheck) {
    seatItems.innerHTML = " ";
    changeBackgroundColor(seatId);
    seatleft--;
    selectedSead++;
    totalPrices += ticketPrice;
    newSeatIds.push(seatId);
  } else {
    seatItems.innerHTML = " ";
    removeBackgroundColor(seatId);
    seatleft++;
    selectedSead--;
    totalPrices -= ticketPrice;
    let newArr = newSeatIds.filter((id) => id != seatId);
    newSeatIds = newArr;
  }
  stockTickets.innerText = seatleft;
  addSeats.innerText = selectedSead;
  totalPrice.innerText = totalPrices;
  grandTotal.innerText = totalPrices;
  newSeatIds.forEach((id) => {
    seatItems.innerHTML += `<div class="flex justify-between py-3">
                  <div>${id}</div>
                  <div>Economoy</div>
                  <div>550</div>
                </div>`;
  });
});

let couponValid = true;
const newCoup = "NEW15";
const coupleCoup = "Couple20";

couponBtn.addEventListener("click", (e) => {
  if (!couponValid) {
    alert(`You Are Already Used One Coupon`);
    return;
  }

  const userCoup = couponValue.value.trim();

  if (userCoup === "") {
    alert("Please Enter Your Coupon Code");
    return;
  }

  if (newCoup === userCoup) {
    const discount = (parseInt(totalPrice.innerText) * 15) / 100;
    const grantPrice = parseInt(totalPrice.innerText) - discount;
    grandTotal.innerText = grantPrice;
    couponValid = false;
  } else if (coupleCoup === userCoup) {
    const discount = (parseInt(totalPrice.innerText) * 20) / 100;
    const grantPrice = parseInt(totalPrice.innerText) - discount;
    grandTotal.innerText = grantPrice;
    couponValid = false;
  } else {
    alert("This Coupon Code Is Not Valid");
  }
});

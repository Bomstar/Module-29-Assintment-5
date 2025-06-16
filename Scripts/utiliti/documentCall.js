export function getId(id) {
  const idElement = document.getElementById(id);
  return idElement;
}

export function changeBackgroundColor(seatId) {
  const bgChange = getId(seatId);
  bgChange.classList.add("!bg-primary");
  return bgChange;
}

// function to remove the background color
export function removeBackgroundColor(seatId) {
  const bgChange = getId(seatId);
  bgChange.classList.remove("!bg-primary");
  return bgChange;
}

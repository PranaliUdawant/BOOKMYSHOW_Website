gsap.from(".seat-wrapper", {
  scale: 3,
  duration: 1,
});

const price = 500;

const seat = document.querySelectorAll(".seat");
const handleSeats = (i) => {
  const classAheka = document
    .querySelector(`#${seat[i].id}`)
    .classList.contains("bg-booked");
  if (!classAheka) {
    const toggle = document
      .querySelector(`#${seat[i].id}`)
      .classList.contains("bg-selected");
    if (toggle) {
      document.querySelector(`#${seat[i].id}`).classList.remove("bg-selected");
    } else {
      document.querySelector(`#${seat[i].id}`).classList.add("bg-selected");
    }

    const selectedSeats = document.querySelectorAll(".bg-selected").length;

    document.querySelector(".output").innerHTML = `
  <h1> You have selected  ${selectedSeats}  Seats</h1>
  <h1> Total Bill  ${selectedSeats * price} Rs</h1>
  `;
  }
};
for (let i = 0; i < seat.length; i++) {
  document
    .querySelector("#" + seat[i].id)
    .addEventListener("click", () => handleSeats(i));
}

document.querySelector(".btn").addEventListener("click", () => {
  const allSeats = document.querySelectorAll(`.bg-selected`);

  for (let i = 0; i < allSeats.length; i++) {
    document
      .querySelector(`#${allSeats[i].id}`)
      .classList.remove("bg-selected");
    document.querySelector(`#${allSeats[i].id}`).classList.add("bg-booked");
  }
});

const container = document.getElementById("container");
let isDragging = false;
let previousX = 0;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  previousX = e.clientX;
});

container.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const deltaX = e.clientX - previousX;
    container.style.transform = `rotateY(${deltaX}deg)`;
    previousX = e.clientX;
  }
});

container.addEventListener("mouseup", () => {
  isDragging = false;
});

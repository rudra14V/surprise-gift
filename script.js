document.addEventListener("DOMContentLoaded", () => {
    const balloons = document.querySelectorAll(".balloon");
    balloons.forEach((balloon, index) => {
      setTimeout(() => {
        balloon.style.transform = "scale(0)";
      }, 1000 * (index + 1));
    });
  });
// JavaScript for page flipping functionality
document.getElementById('toPage5').addEventListener('click', () => {
  const page4 = document.getElementById('page4');
  const page5 = document.getElementById('page5');

  // Flip Page 4 out of view
  page4.style.transform = 'rotateY(-180deg)';

  // Ensure Page 5 is visible when flipped
  page5.style.transform = 'rotateY(0deg)';
});



  
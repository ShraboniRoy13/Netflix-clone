let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); 
}

// Function to toggle the visibility of the answer of frequently asked question
function toggleAnswer(button) {
  const answer = button.nextElementSibling; 
  if (answer.style.display === 'block') {
    answer.style.display = 'none'; 
  } else {
    answer.style.display = 'block'; 
  }
}


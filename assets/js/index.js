function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
  // Ẩn nội dung mobile và hiển thị cảnh báo trên PC
  document.getElementById("mobile-content").style.display = "none";
  document.getElementById("pc-warning").style.display = "block";
} else {
  // Slide logic for mobile users
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  document.addEventListener("click", showNextSlide);
}

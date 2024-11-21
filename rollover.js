document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll("#image_rollovers img");

  let currentIndex =0;
  let id = null;

  // Initially show only the first image
  images.forEach((image,index) => {
    image.style.display = index === 0 ? "block" : "none";
  })

  // Function to start cycling through images
  const startFlipping = () => {
    id = setInterval(() =>{
      images[currentIndex].style.display = "none";
      currentIndex = (currentIndex + 1) % 2;
      images[currentIndex].style.display ="block";
    })
  };

  // Function to stop cycling through images
  const stopFlipping = () => {
    clearInterval(id);
    id = null;
  };

  const startbutton = document.getElementById("start");
  const stopbutton = document.getElementById("stop");
  startbutton.addEventListener("click", () => {
    startFlipping()
    startbutton.disabled = true;
    stopbutton.disabled = false;
  });

  stopbutton.addEventListener("click", () => {
    stopFlipping();
    startbutton.disabled = false;
    stopbutton.disabled = true;
  }); 
});

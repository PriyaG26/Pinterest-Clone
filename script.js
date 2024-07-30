const changetext = document.getElementById("changetext");
const textArray = [
    { text: "outfit Idea", color: "rgb(17,95,48)" },
    { text: "DIY Idea", color: "#107620" },
    { text: "Home Decor Idea", color: "#11c6e0" },
    { text: "chai time Snacks idea", color: "#e7d932" }
  ];
  
  let currentIndex = 0;

  function changeText() {
    const currentText = textArray[currentIndex].text;
    const currentColor = textArray[currentIndex].color;
  
    changetext.textContent = currentText;
    changetext.style.color = currentColor;
  
    currentIndex = (currentIndex + 1) % textArray.length;
  }
  
  // Call the changeText function initially to set the initial text
  changeText();
  
  setInterval(changeText, 2000); // Change text every 2 seconds (2000 milliseconds)
  
document.addEventListener("DOMContentLoaded", () => {
    const sliderboxes = document.querySelectorAll(".box");
  
    sliderboxes.forEach((box) => {
      box.addEventListener("click", () => {
        box.style.backgroundImage = "none";
        console.log("error");
      });
    });
  });
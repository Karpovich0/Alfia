let sections = document.querySelectorAll(".section");

function revealSection() {    
  
    for (let i = 0; i < sections.length; i++) {
      let windowHeight = window.innerHeight;
      
      let elementTop = sections[i].getBoundingClientRect().top;
      
      let elementVisible = windowHeight*0.2;
  
      if (elementTop < windowHeight - elementVisible) {
        sections[i].classList.add("section--active");
      } else {
        sections[i].classList.remove("section--active");
      }
    }
  }
  
  window.addEventListener("scroll", revealSection);
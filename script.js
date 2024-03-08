document.addEventListener("DOMContentLoaded", function() {
    const images = ['backimg1.jpg', 'backimg2.jpg' , 'backimg3.jpg']; // Add more image paths as needed
    let index = 0;

    const frontPageHeading = document.getElementById('front-page-heading');
    const frontPageText = document.getElementById('front-page-text');

    setInterval(() => {
        document.querySelector('.front-page').style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;

//         // Change front page content
//         if (frontPageHeading.textContent === "Welcome to Our Skincare Website") {
//             frontPageHeading.textContent = "Discover your skin with AI expertise";
//             frontPageText.textContent = "Say goodbye to skin worries with Skin Sight";
//         } 
//         else if(frontPageHeading.textContent === "Discover your skin with AI expertise"){
//             frontPageHeading.textContent = "Book an appointment with a best dermatologist ";
//             frontPageText.textContent = "Find the best skincare products for your skin type and concerns.";
//         }
//         else {
//             // Use comparison operator instead of assignment
     
//                 frontPageHeading.textContent = "Welcome to Our SkinSight Website";
//                 frontPageText.textContent = "Let AI uncover your skin's secrets!";
            
//         }
        
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-answer");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const answer = this.previousElementSibling;
            answer.style.display = answer.style.display === "none" ? "block" : "none";
            this.textContent = this.textContent === "+" ? "-" : "+";
        });
    });
});


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function openNewPage() {
    window.open('loginSignup/login.html', '_self');
}








  
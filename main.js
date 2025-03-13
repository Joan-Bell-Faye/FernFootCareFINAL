

/*=============== SHOW NAV MENU ===============*/

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    // add show menu class to nav menu
    nav.classList.toggle('show-menu')
    // add show-icon to show and hide menu icon
    toggle.classList.toggle('show-icon')
  })    
}

showMenu('nav-toggle', 'nav-menu', 'subNav-menu')



/*===BLUR BODY WHEN DROPDOWN MENU IS OPEN ====*/
const navToggle = document.getElementById('nav-toggle');
const main = document.getElementById('main');
navToggle.addEventListener('mouseover', function() {
  main.classList.add('blurred');
});
navToggle.addEventListener('mouseout', function() {
  setTimeout(() => main.classList.remove('blurred'), 2000);
});



/*======/REVIEWS/--- REVIEWS CAROUSEL=====*/
let rev = 0;
        
        function previousReview() {
            rev = rev - 1;
            carousel(rev);
        }
        
        function nextReview() {
            rev = rev + 1;
            carousel(rev);
        }
        
        function carousel(review) {
            let reviews = document
                .getElementsByClassName("ca-card");
        
            if (review >= reviews.length) {
                review = 0;
                rev = 0;
            }
            if (review < 0) {
                review = reviews.length - 1;
                rev = reviews.length - 1;
            }
            for (let i = 0; i < reviews.length; i++) {
                reviews[i].style.display = "none";
            }
            reviews[review].style.display = "block";
        }

        /*_______End of REVIEWS Carousel_______*/


        /*--===/NEWS/ Responsive Blog Section ====*/

var selectedBlog=1;
        function handleClick(direction) {
          const list = document.querySelector(".article-list");
          const item = document.querySelector(".news-item");
          const itemWidth = item.offsetWidth;
          if(direction === "previous") {
            if (selectedBlog>1) {
              selectedBlog--;  
            }
            list.scrollBy({ left: -itemWidth, behavior: "smooth"});
          }
          else {
            if (list.children.length  == selectedBlog) {
              list.scrollBy({ left: (selectedBlog * -itemWidth), behavior: "smooth"});
              selectedBlog=1;
            }else{
              if (selectedBlog<list.children.length) {
                selectedBlog++;
              }
              list.scrollBy({ left: itemWidth, behavior: "smooth"});
            }
          }
        }
        
        /*_______End of responsive blog section_____*/



/*---/CONTACT/===PATIENT REVIEW INPUT FORM===*/
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("imageBox").innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
    };
    reader.readAsDataURL(file);
  }
}

// Ensure messages are hidden on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("feedback_message").style.display = "none";
  document.getElementById("error_message").style.display = "none";
});

function submitFeedback() {
  const name = document.getElementById("name").value.trim();
  const location = document.getElementById("location").value.trim();
  const comment = document.getElementById("comment").value.trim();
  const rating = document.querySelector(".stars input:checked");

  // Hide both messages initially
  document.getElementById("feedback_message").style.display = "none";
  document.getElementById("error_message").style.display = "none";

  // Validate form (image is optional)
  if (!name || !location || !comment || !rating) {
    document.getElementById("error_message").style.display = "block";
    return;
  }

  document.getElementById("feedback_message").style.display = "block";
}

/*_______End of PATIENT REVIEW INPUT FORM_______*/





/*--===GIFT VOUCHER FORM VALIDATION===--*/
function validateGiftForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form fields
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let telephone = document.getElementById("telephone").value.trim();

  // Error messages container
  let errorMessages = [];
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  let phonePattern = /^[0-9\-+\s()]+$/; // Allows numbers, spaces, and basic symbols

  // Validation checks
  if (name === "") {
      errorMessages.push("Your name is required.");
  }
  if (!emailPattern.test(email)) {
      errorMessages.push("Enter a valid email address.");
  }
  if (!phonePattern.test(telephone) || telephone.length < 11) {
      errorMessages.push("Enter a valid telephone number.");
  }

  // Get message containers or create them if they don't exist
  let successDiv = document.getElementById("voucher_success");
  let errorDiv = document.getElementById("voucher_error");

  if (!successDiv) {
      successDiv = document.createElement("div");
      successDiv.id = "voucher_success";
      successDiv.innerHTML = `<i class="fas fa-check-circle"></i> <span></span>`;
      document.querySelector(".mini-form").appendChild(successDiv);
  }
  
  if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.id = "voucher_error";
      errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> <span></span>`;
      document.querySelector(".mini-form").appendChild(errorDiv);
  }

  if (errorMessages.length > 0) {
      errorDiv.querySelector("span").innerHTML = errorMessages.join("<br>");
      errorDiv.style.display = "block";
      successDiv.style.display = "none"; // Hide success message
  } else {
      successDiv.querySelector("span").innerHTML = "Your gift voucher request has been submitted successfully! We will contact you within 48 hours.";
      successDiv.style.display = "block";
      errorDiv.style.display = "none"; // Hide error message
      document.querySelector(".mini-form").reset(); // Clear form after success
  }
}

/*_______End GIFT VOUCHER FORM _______*/









/*--FORM VALIDATION--*/
/*--/CONTACT_US PAGE/---*/
function validateSurveyForm() {
  let name = document.forms["survey-form"]["name-label"].value;
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }

  let telephone = document.forms["survey-form"]["number-label"].value;
  if (telephone == "") {
    alert("Please enter your telephone number.");
    return false;
  }

  let dropdown = document.forms["survey-form"]["dropdown"].value;
  if (dropdown == "") {
    alert("Please select an option.");
    return false;
  }

  let existing = document.getElementById("radio-btn-existing");
  let newCustomer = document.getElementById("radio-btn-new");
  if (!existing.checked && !newCustomer.checked) {
    return false;
  }

  let forSelf = document.getElementById("radio-btn-self");
  let forAnother = document.getElementById("radio-btn-another");
  if (!forSelf.checked && !forAnother.checked) {
    return false;
  }

  let byTelephone = document.getElementById("radio-btn-tel");
  let byEmail = document.getElementById("radio-btn-email");
  let byText = document.getElementById("radio-btn-text");
  let byWhatApp = document.getElementById("radio-btn-whatsapp");

  if (!byTelephone.checked && !byEmail.checked && !byText.checked && !byWhatApp.checked) {
    return false;
  }

  let textbox = document.getElementById("textarea").value;
  if (textbox == "") {
    alert("Please enter your enquiry.");
    return false;
  }

  let checkbox = document.getElementById("check-box").checked;
  if (!checkbox) {
    alert("Please agree to the terms and conditions.");
    return false;
  }

    const successShow = document.getElementById("success_blur");
    successShow.classList.remove("hide");
    const successTxtShow = document.getElementById("successMsgDiv");
    successTxtShow.classList.remove("hide");

    return true;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

 
document.getElementById("survey-form").addEventListener("submit", function(event) {

  event.preventDefault(); // Prevent default form submission


}); 




function closeMessage() {

  // Add class 'hide' to success blur div and success message div 

  document.getElementById("success_blur").classList.add("hide");
  document.getElementById("successMsgDiv").setAttribute("style","display:none !important");

  document.getElementById("success_blur").removeAttribute("style");
}




















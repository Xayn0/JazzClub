//Check if there is local storage color option

let mainColors = localStorage.getItem("color_option");
console.log(mainColors);

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );

  //Remove Active Class From All Color List Items
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add active class on elemeny with Data-Color === local storage Item
    if (element.dataset.color === mainColors) {
      //Add acitve class
      element.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// Variable to Control the Background Interval
let backgroundInterval;

// Check if there is local storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

//Check if random background Local storage is not empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  //Remove Active Class From All spans

  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

//Toggle Spin Class on Icon
document.querySelector(".toggle-settings .cog").onclick = function () {
  // toggles spin on icon
  this.classList.toggle("fa-spin");
  // Toggles open on settings box
  document.querySelector(".settings-box").classList.toggle("open");
};

//the following is an array of queries
const colorsLi = document.querySelectorAll(".colors-list li");

//Loop on All List Items
colorsLi.forEach((li) => {
  // li is every li element
  //Click on Every List Item
  li.addEventListener("click", (e) => {
    // e here is the last clicked li
    console.log(e.target.dataset.color);
    //Set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    handleActive(e);
  });
});

//Switch Background Options
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

//Loop on all spans
randomBackEl.forEach((span) => {
  //click on every span
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    // add active class on Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      localStorage.setItem("background_option", true);
      randomizeImgs();
    } else {
      backgroundOption = false;
      localStorage.setItem("background_option", false);
      clearInterval(backgroundInterval);
    }
  });
});

//Landing Page element
let landingPage = document.querySelector(".landing-page");
//get array of images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function to randomize images
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      let randomNum = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage =
        'url("images/' + imgsArray[randomNum] + '")';
    }, 1000);
  }
}
randomizeImgs();
//! Study This
// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills offset top

  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Create Popup with the Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //Create overlay elemnt
    let overlay = document.createElement("div");

    // Add Class to overlay
    overlay.className = "popup-overlay";

    // Append overlay to the body
    document.body.appendChild(overlay);

    //Create the Popup
    let popupBox = document.createElement("div");

    // Add class to the Popup box
    popupBox.className = "popup-box";

    // Adding alt Text as a Heading
    if (img.alt !== null) {
      //Create Heading
      let imgHeading = document.createElement("h3");

      // Create Text for Heading
      let imgText = document.createTextNode(img.alt);

      // Append Text to heading
      imgHeading.appendChild(imgText);

      // Append heading to popup box
      popupBox.appendChild(imgHeading);
    }

    // Create the Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To popup box
    popupBox.appendChild(popupImage);

    // Append The popup Box to Body
    document.body.appendChild(popupBox);

    //! Create the closing button
    let closeButton = document.createElement("span");

    //! Create the Close Button Text
    let closeButtonText = document.createTextNode("X");

    //! Append Text to Close Button
    closeButton.appendChild(closeButtonText);

    //! Add Class to Close Button
    closeButton.className = "close-button";

    //! Add Close Button to Popup Box
    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // Remove the Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");
const allLinks = document.querySelectorAll(".links a");

function scrollTo(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollTo(allLinks);
scrollTo(allBullets);
// Handle Active State
function handleActive(ev) {
  //Remove Active Class From All Children
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ev.target.classList.add("active");
}
let bulletsSpan = document.querySelectorAll(".bullets-options span");
let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-options .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-options .no").classList.add("active");
  }
}
bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
    handleActive(e);
  });
});

// Reset Button
document.querySelector(".reset-options").onclick = function () {
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  window.location.reload();
};

//Toggle Menu

let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  //Stop Propagation
  e.stopPropagation();

  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");
};
// Click Anywhere Outside Menu And Toggle Button

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    // Check if menu is open

    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");
    }
  }
});
// Stop propagation on menu
tLinks.onclick = function (e) {
  e.stopPropagation();
};

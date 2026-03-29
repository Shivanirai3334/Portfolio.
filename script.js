// /----------------mode-----------------

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // change icon
    if(document.body.classList.contains("light-mode")){
        toggle.classList.remove("fa-moon");
        toggle.classList.add("fa-sun");
    } else {
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
    }
});


// --------------------------------typing animation ---------------------------------------
const roles = [
    "Frontend Developer",
    "Programmer",
    "Photographer",
    "Web Designer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");

    currentText = roles[index];

    if (!isDeleting) {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        // when full word typed
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // pause
            return;
        }
    } else {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        // when fully deleted
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

// start
typeEffect();
// -------------------navbar----------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        // remove active from all
        navLinks.forEach(nav => nav.classList.remove("active"));

        // add active to clicked
        this.classList.add("active");
    });
});

// -----------about------------------------
const tabcontents = document.getElementsByClassName("tab-contents");
const tablinks = document.getElementsByClassName("tab-links");

function opentab(evt, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // hide all content
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // activate clicked
    evt.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// -----------------skills-----------------
const cards = document.querySelectorAll(".skill-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// -------------------------gallery---------------------
const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenImages = document.querySelectorAll(".gallery-item.hidden");

let show = false;

seeMoreBtn.addEventListener("click", (e) => {
    e.preventDefault(); // important

    show = !show;

    hiddenImages.forEach(img => {
        img.style.display = show ? "block" : "none";
    });

    seeMoreBtn.textContent = show ? "Show Less" : "See More";
});

// --------------------------contact------------------------
 const scriptURL = "https://script.google.com/macros/s/AKfycbxzds6oWocZcfuZAW8tCgWxCJUJQ0cfqQWqIgnmuOvHELlWrwsDwGZZEsDHTZe44n8N/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
 const btn = form.querySelector("button");

    // 🔵 Loading state
    btn.innerText = "Sending...";
    btn.disabled = true;


    fetch(scriptURL, {
        method: "POST",
        body: formData
    })
        .then(response => {

        // 🟢 Success message (page pe show hoga)
        const msg = document.createElement("p");
        msg.textContent = "Message sent successfully ✅";
        msg.style.color = "lightgreen";
        msg.style.marginTop = "10px";

        form.appendChild(msg);

        setTimeout(() => msg.remove(), 3000);

        // reset form
        form.reset();
        // button normal
        btn.innerText = "Submit";
        btn.disabled = false;
    })
    .catch(error => {
        alert("Error! Try again ❌");

        btn.innerText = "Submit";
        btn.disabled = false;
    });
});

// ---------------scroll animation---------------
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

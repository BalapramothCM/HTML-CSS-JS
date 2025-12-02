
// Enable Bootstrap validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

async function sendForm(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  if (!form.checkValidity()) return;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  try {
    const response = await fetch("https://bdgt83z2dj.execute-api.us-east-1.amazonaws.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = "thankyou.html";  // SUCCESS PAGE
      return;
    } else {
      alert("Failed to send message!");
    }
  } catch (error) {
    alert("Something went wrong. Try again.");
  }

  submitBtn.disabled = false;
  submitBtn.innerText = "SEND MESSAGE";
}


document.querySelectorAll('.input-group-custom input, .input-group-custom textarea')
.forEach(field => {
  field.addEventListener('blur', () => {
    if (field.value !== "") {
        field.classList.add("filled");
    } else {
        field.classList.remove("filled");
    }
  });
});
// === Experience Auto-Calculation + Animation === //
function calculateExperience(start, end) {
  const diffMs = end - start;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const years = Math.floor(diffDays / 365.25);
  const months = Math.floor((diffDays % 365.25) / 30.44);
  return { years, months };
}

function animateValue(element, start, end, duration) {
  let startTime = null;
  
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = start + (end - start) * progress;
    
    // Split decimal to years + months visually
    const years = Math.floor(value);
    const months = Math.floor((value - years) * 12);
    
    element.textContent = `${years}.${months} yrs`;
    
    if (progress < 1) requestAnimationFrame(step);
  }
  
  requestAnimationFrame(step);
}

function updateExperienceUI() {
  const today = new Date();

  const azureStart = new Date("2022-07-14");
  const azureEnd = new Date("2024-07-14");

  const awsStart = new Date("2024-07-14");

  // Calculate all
  const total = calculateExperience(azureStart, today);
  const azure = calculateExperience(azureStart, azureEnd);
  const aws = calculateExperience(awsStart, today);

  animateValue(
    document.getElementById("totalExperience"),
    0,
    total.years + total.months / 12,
    1800
  );
  animateValue(
    document.getElementById("azureExperience"),
    0,
    azure.years + azure.months / 12,
    1800
  );
  animateValue(
    document.getElementById("awsExperience"),
    0,
    aws.years + aws.months / 12,
    1800
  );
}

document.addEventListener("DOMContentLoaded", updateExperienceUI);

// === Scroll To Top Button === //
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ========================
// 1. Light/Dark Mode Toggle
// ========================
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ========================
// 2. Interactive Counter
// ========================
let count = 0;
const countBtn = document.getElementById("countBtn");
const clickCount = document.getElementById("clickCount");

countBtn.addEventListener("click", () => {
  count++;
  clickCount.textContent = count;
});

// ========================
// 3. Collapsible FAQ Section
// ========================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ========================
// 4. Form Validation
// ========================
const form = document.getElementById("assignmentForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const password = document.getElementById("password").value;

  // Validation rules
  if (name.length < 3) {
    message.textContent = "❌ Name must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  if (title === "") {
    message.textContent = "❌ Assignment title cannot be empty.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Success
  message.textContent = "✅ Assignment submitted successfully!";
  message.style.color = "green";

  // Reset form
  form.reset();
});

import africanCountries from "../Utils/countries.js";

//handle register user
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const passwordInput = document.getElementById("password");
  const countrySelect = document.getElementById("country");

  // --- Populate countries dynamically ---
  africanCountries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  // --- Password Validation ---
  const lengthReq = document.getElementById("length");
  const specialReq = document.getElementById("special");
  const numberReq = document.getElementById("number");

  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    // Length
    if (value.length >= 8) {
      lengthReq.textContent = "✅ At least 8 characters";
      lengthReq.classList.replace("text-red-500", "text-green-600");
    } else {
      lengthReq.textContent = "❌ At least 8 characters";
      lengthReq.classList.replace("text-green-600", "text-red-500");
    }

    // Special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      specialReq.textContent = "✅ At least 1 special character";
      specialReq.classList.replace("text-red-500", "text-green-600");
    } else {
      specialReq.textContent = "❌ At least 1 special character";
      specialReq.classList.replace("text-green-600", "text-red-500");
    }

    // Number
    if (/\d/.test(value)) {
      numberReq.textContent = "✅ At least 1 number";
      numberReq.classList.replace("text-red-500", "text-green-600");
    } else {
      numberReq.textContent = "❌ At least 1 number";
      numberReq.classList.replace("text-green-600", "text-red-500");
    }
  });

  // --- Handle form submission ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);
    return

    // Example API request
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log("API Response:", response);
        alert("Registration successful!");
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Registration failed. Try again.");
      });
  });
});

//handle login user
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  // --- Handle form submission ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Data:", data);
    window.location.href = '../dashboard.html'
    return

    // Example API request
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log("API Response:", response);
        alert("Login successful!");
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Login failed. Try again.");
      });
  });
});
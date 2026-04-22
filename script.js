const themeBtn = document.getElementById("themeBtn");
const toggleBtn = document.getElementById("toggleBtn");
const projekty = document.getElementById("projekty");
const themeStyle = document.getElementById("themeStyle");

// zmiana motywu
themeBtn.addEventListener("click", () => {
    if (themeStyle.getAttribute("href") === "red.css") {
        themeStyle.setAttribute("href", "green.css");
    } else {
        themeStyle.setAttribute("href", "red.css");
    }
});

// ukrywanie sekcji
toggleBtn.addEventListener("click", () => {
    projekty.classList.toggle("hidden");
});

// ==================
// ZADANIE 5
// ==================

const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const email = document.getElementById("email").value;
    const wiadomosc = document.getElementById("wiadomosc").value;

    errorMsg.textContent = "";

    if (!imie || !nazwisko || !email || !wiadomosc) {
        errorMsg.textContent = "Wszystkie pola są wymagane!";
        return;
    }

    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(imie) || !nameRegex.test(nazwisko)) {
        errorMsg.textContent = "Imię i nazwisko bez cyfr!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg.textContent = "Zły email!";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "OK!";
});

// ==================
// ZADANIE 6
// ==================

fetch("data.json")
    .then(res => res.json())
    .then(data => {

        const skills = document.querySelector(".skills");
        data.skills.forEach(s => {
            const li = document.createElement("li");
            li.textContent = s;
            skills.appendChild(li);
        });

        const projektyList = document.getElementById("projektyList");
        data.projekty.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p;
            projektyList.appendChild(li);
        });

    });
// Random floating animation delay for cards
document.querySelectorAll(".card").forEach(card => {
  const delay = Math.random() * 3;
  card.style.animationDelay = `${delay}s`;
});

// Logo glow breathing effect
const logo = document.querySelector(".logo");

if (logo) {
  let grow = true;
  setInterval(() => {
    logo.style.textShadow = grow
      ? "0 0 15px #9b5cff"
      : "0 0 5px #9b5cff";
    grow = !grow;
  }, 1200);
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const site = document.getElementById("site");

  setTimeout(() => {
    splash.classList.add("hide");
    site.classList.add("show");
  }, 1000); // time logo stays visible
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_bv8pfyj",
    "template_ouqfqfz",
    this
  ).then(
    function () {
      alert("Message sent successfully ✅");
    },
    function (error) {
      alert("Failed to send ❌");
      console.error(error);
    }
  );
});
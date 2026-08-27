
const OJC = {
  whatsapp: "573000000000",
  instagram: "#"
};

document.querySelectorAll("[data-wa]").forEach(btn => {
  const message = btn.dataset.wa || "Hola, quisiera solicitar información sobre los servicios de OJC.";
  btn.href = `https://wa.me/${OJC.whatsapp}?text=${encodeURIComponent(message)}`;
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if(menuBtn) menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));

const year = new Date().getFullYear();
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=year);

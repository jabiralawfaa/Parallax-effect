const title = document.querySelector(".title");
const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");
const layer4 = document.querySelector(".layer4");
const layer5 = document.querySelector(".layer5");
const layer6 = document.querySelector(".layer6");
const layer7 = document.querySelector(".layer7");

window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.pageYOffset > 50) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Putih agak transparan
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0)"; // Transparan
  }
};

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log(value);
  title.style.marginTop = value + 1.1 + "px";

  layer2.style.marginBottom = -value * 0.2 + "px";
  layer3.style.marginBottom = -value * 0.3 + "px";
  layer4.style.marginBottom = -value * 0.4 + "px";
  layer5.style.marginBottom = -value * 0.5 + "px";
  layer6.style.marginBottom = -value * 0.6 + "px";
  layer7.style.marginBottom = -value * 0.7 + "px";
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header h1");
  if (window.scrollY > 50) {
    // Angka 50 bisa diubah sesuai dengan kebutuhan kapan warna harus berubah
    header.style.color = "black";
  } else {
    header.style.color = ""; // Mengembalikan ke warna awal jika scroll ke atas
  }
});

// Fungsi untuk mengatur class 'active' berdasarkan klik
function setActiveLink() {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

// Fungsi untuk mengatur class 'active' berdasarkan section yang terlihat
function highlightLinkOnScroll() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}

// Memanggil kedua fungsi saat dokumen dimuat
document.addEventListener("DOMContentLoaded", () => {
  setActiveLink();
  highlightLinkOnScroll();
});

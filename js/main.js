// script.js
document.addEventListener("DOMContentLoaded", function () {
    const cta = document.querySelector(".cta");
  
    if (!cta) {
      console.warn("Elemen dengan class .cta tidak ditemukan.");
      return;
    }
  
    cta.addEventListener("click", function () {
      alert("Selamat belajar Frontend di SMK!");
    });
  });

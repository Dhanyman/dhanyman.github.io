document.addEventListener("DOMContentLoaded", function () {
  // Foto Profil Modal
  const profileImg = document.getElementById("profileImg");
  const modal = document.getElementById("imagePreviewModal");
  const previewImg = document.getElementById("previewImg");

  if (profileImg && modal && previewImg) {
    profileImg.addEventListener("click", function () {
      previewImg.src = profileImg.src;
      modal.style.display = "flex"; // Pastikan modal memiliki display: flex di CSS
    });

    modal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Project Image Modal
  const projectImages = document.querySelectorAll(".project-img");
  const modalTitle = document.getElementById("modalTitle");
  const modalImg = document.getElementById("modalImg");
  const modalDescription = document.getElementById("modalDescription");
  const projectModalEl = document.getElementById("projectModal");

  if (projectImages.length > 0 && projectModalEl) {
    const projectModal = new bootstrap.Modal(projectModalEl);

    projectImages.forEach((img) => {
      img.addEventListener("click", function () {
        modalTitle.innerText = this.getAttribute("data-title");
        modalImg.src = this.src;
        modalDescription.innerText = this.getAttribute("data-description");
        projectModal.show();
      });
    });
  }

  // Accordion Progress Bar Animation
  const accordions = document.querySelectorAll(".accordion-collapse");
  accordions.forEach((accordion) => {
    accordion.addEventListener("show.bs.collapse", function () {
      const progressBars = this.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        bar.style.width = bar.getAttribute("data-width");
        bar.classList.add("progress-bar-animated");
      });
    });

    accordion.addEventListener("hide.bs.collapse", function () {
      const progressBars = this.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        bar.style.width = "0%";
        bar.classList.remove("progress-bar-animated");
      });
    });
  });
});

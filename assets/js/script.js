document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const currentPage = document.body.dataset.page;

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (currentPage) {
    document.querySelectorAll("[data-page-link]").forEach((link) => {
      if (link.dataset.pageLink === currentPage) {
        link.classList.add("active");
      }
    });
  }

  const yearTarget = document.querySelector("[data-current-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const form = document.querySelector("[data-contact-form]");
  const captchaQuestion = document.querySelector("[data-captcha-question]");
  const captchaAnswer = document.querySelector("[data-captcha-answer]");
  const captchaCheck = document.querySelector("[data-captcha-check]");
  const successBox = document.querySelector("[data-form-success]");
  const errorBox = document.querySelector("[data-form-error]");
  const refreshButton = document.querySelector("[data-captcha-refresh]");

  let firstNumber = 0;
  let secondNumber = 0;

  const resetMessages = () => {
    if (successBox) {
      successBox.style.display = "none";
    }
    if (errorBox) {
      errorBox.style.display = "none";
      errorBox.textContent = "";
    }
  };

  const buildCaptcha = () => {
    firstNumber = Math.floor(Math.random() * 6) + 3;
    secondNumber = Math.floor(Math.random() * 6) + 2;
    if (captchaQuestion) {
      captchaQuestion.textContent = `Doğrulama: ${firstNumber} + ${secondNumber} işleminin sonucunu yazın.`;
    }
    if (captchaAnswer) {
      captchaAnswer.value = "";
    }
    if (captchaCheck) {
      captchaCheck.checked = false;
    }
  };

  if (captchaQuestion) {
    buildCaptcha();
  }

  if (refreshButton) {
    refreshButton.addEventListener("click", buildCaptcha);
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      resetMessages();

      const name = form.querySelector("#name")?.value.trim();
      const email = form.querySelector("#email")?.value.trim();
      const message = form.querySelector("#message")?.value.trim();
      const answer = Number(captchaAnswer?.value ?? "");
      const isChecked = Boolean(captchaCheck?.checked);

      if (!name || !email || !message) {
        if (errorBox) {
          errorBox.textContent = "Lütfen ad, e-posta ve mesaj alanlarını eksiksiz doldurun.";
          errorBox.style.display = "block";
        }
        return;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValid) {
        if (errorBox) {
          errorBox.textContent = "Lütfen geçerli bir e-posta adresi girin.";
          errorBox.style.display = "block";
        }
        return;
      }

      if (!isChecked || answer !== firstNumber + secondNumber) {
        if (errorBox) {
          errorBox.textContent = "İnsan doğrulamasını tamamlayın ve işlemi doğru yanıtlayın.";
          errorBox.style.display = "block";
        }
        return;
      }

      if (successBox) {
        successBox.style.display = "block";
      }

      form.reset();
      buildCaptcha();
    });
  }
});

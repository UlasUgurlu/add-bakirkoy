document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const yearTarget = document.querySelector("[data-current-year]");
  const searchInput = document.querySelector("[data-site-search]");
  const searchResults = document.querySelector("[data-search-results]");
  const eventsGrid = document.querySelector("[data-events-grid]");
  const pollForm = document.querySelector("[data-poll-form]");
  const pollResults = document.querySelector("[data-poll-results]");
  const instagramGrid = document.querySelector("[data-instagram-grid]");
  const newsletterButtons = document.querySelectorAll("[data-newsletter-id]");
  const contactForm = document.querySelector("[data-contact-form]");
  const successBox = document.querySelector("[data-form-success]");
  const errorBox = document.querySelector("[data-form-error]");

  const events = [
    {
      month: "mayis",
      title: "19 Mayıs Gençlik ve Cumhuriyet Buluşması",
      date: "19 Mayıs 2026",
      place: "Bakırköy Cem Karaca Kültür Merkezi",
      status: "Yaklaşan Etkinlik",
      description: "Gençlik, bilimsel eğitim ve Cumhuriyetin ikinci yüzyılı üzerine açık katılımlı söyleşi programı.",
    },
    {
      month: "haziran",
      title: "Mahalle Söyleşileri: Laiklik ve Kent Kültürü",
      date: "12 Haziran 2026",
      place: "İncirli Şube Toplantı Salonu",
      status: "Planlandı",
      description: "Bakırköy mahalle ölçeğinde laiklik, kamusal yaşam ve kültürel dayanışma başlıklarını tartışan interaktif oturum.",
    },
    {
      month: "haziran",
      title: "Üyelik Bilgilendirme ve Tanışma Günü",
      date: "28 Haziran 2026",
      place: "Bakırköy Şube Merkezi",
      status: "Kayıt Açık",
      description: "Yeni üyeler ve gönüllüler için şube çalışma alanları, iletişim akışı ve görev paylaşımı tanıtımı.",
    },
    {
      month: "eylul",
      title: "Cumhuriyet Söyleşileri Yeni Dönem Açılışı",
      date: "14 Eylül 2026",
      place: "Bakırköy Belediyesi Tarık Akan Kültür Merkezi",
      status: "Planlandı",
      description: "Cumhuriyet tarihinin toplumsal belleği ve çağdaş yurttaşlık başlıklarıyla yeni dönem açılış buluşması.",
    },
    {
      month: "mayis",
      title: "23 Nisan Sonrası Çocuk ve Aydınlanma Atölyesi",
      date: "27 Nisan 2026",
      place: "Bakırköy Şubesi Etkinlik Odası",
      status: "Tamamlandı",
      description: "Çocuklara yönelik Cumhuriyet değerleri ve yaratıcı düşünce odaklı atölye çalışması.",
    },
  ];

  const searchEntries = [
    { label: "Kurumsal tanıtım", target: "#kurumsal", keywords: ["kurumsal", "hakkımızda", "şube", "faaliyet"] },
    { label: "Atatürk'ün hayatı", target: "#ataturkun-hayati", keywords: ["atatürk", "hayatı", "biyografi", "kronoloji"] },
    { label: "Yönetim kurulu", target: "#yonetim-kurulu", keywords: ["yönetim", "başkan", "erdal", "kurul"] },
    { label: "Etkinlik takvimi", target: "#etkinlikler", keywords: ["etkinlik", "takvim", "söyleşi", "panel"] },
    { label: "Haberler ve duyurular", target: "#haberler", keywords: ["haber", "duyuru", "gündem"] },
    { label: "Burs başvurusu", target: "#burs", keywords: ["burs", "başvuru", "belgeler"] },
    { label: "Üyelik süreci", target: "#uyelik", keywords: ["üyelik", "üye", "form", "aidat"] },
    { label: "Tüzük", target: "#tuzuk", keywords: ["tüzük", "pdf", "dernek"] },
    { label: "Sıkça sorulan sorular", target: "#sss", keywords: ["sss", "soru", "cevap"] },
    { label: "İletişim", target: "#iletisim", keywords: ["iletişim", "adres", "telefon", "harita"] },
  ];

  const pollStateKey = "add-bakirkoy-poll";
  const pollOptions = [
    "Cumhuriyetin ikinci yüzyili",
    "Laiklik ve egitim",
    "Yerel dayanisma aglari",
    "Genclik ve demokrasi",
  ];

  const instagramPosts = [
    { title: "Cumhuriyet Söyleşisi Hazırlığı", date: "08 Nisan 2026", caption: "Bakırköy'de yeni dönem söyleşi takvimi için hazırlık toplantısı yapıldı.", link: "https://www.instagram.com/add_bakirkoy/" },
    { title: "Üye Buluşması", date: "29 Mart 2026", caption: "Yeni katılımcılarla tanışma ve çalışma alanları bilgilendirme oturumu gerçekleştirildi.", link: "https://www.instagram.com/add_bakirkoy/" },
    { title: "Anma Programı", date: "18 Mart 2026", caption: "Cumhuriyet tarihinin dönüm noktaları için yerel katılımlı anma programı düzenlendi.", link: "https://www.instagram.com/add_bakirkoy/" },
    { title: "Gençlik Oturumu", date: "12 Mart 2026", caption: "Gençlik ve bilimsel eğitim başlığında interaktif atölye yapıldı.", link: "https://www.instagram.com/add_bakirkoy/" },
    { title: "Kadın ve Cumhuriyet", date: "05 Mart 2026", caption: "Kadınların eşit yurttaşlığı ve toplumsal katılımı üzerine şube içi değerlendirme toplantısı.", link: "https://www.instagram.com/add_bakirkoy/" },
    { title: "Dayanışma Ağı", date: "21 Şubat 2026", caption: "Mahalle bazlı dayanışma ve iletişim ağlarını güçlendiren saha planı açıklandı.", link: "https://www.instagram.com/add_bakirkoy/" },
  ];

  const newsletters = {
    nisan2026: {
      title: "Nisan 2026 Bülteni",
      subtitle: "ADD Bakırköy Şubesi aylık faaliyet özeti",
      items: [
        "Gençlik buluşması hazırlık toplantıları tamamlandı.",
        "Nisan ayı içinde iki mahalle söyleşisi planlandı.",
        "Burs bilgilendirme dönemine ilişkin içerik güncellendi.",
      ],
    },
    mart2026: {
      title: "Mart 2026 Bülteni",
      subtitle: "ADD Bakırköy Şubesi aylık faaliyet özeti",
      items: [
        "Yerel dayanışma ağı için gönüllü çağrısı yayımlandı.",
        "Kadın ve Cumhuriyet başlıklı değerlendirme toplantısı yapıldı.",
        "Üye iletişim altyapısı için dijital güncelleme tamamlandı.",
      ],
    },
    subat2026: {
      title: "Şubat 2026 Bülteni",
      subtitle: "ADD Bakırköy Şubesi aylık faaliyet özeti",
      items: [
        "Kültür ve kamusal bellek temalı dönem planı açıklandı.",
        "Yeni üyeler için oryantasyon içerikleri hazırlandı.",
        "Şube görünürlüğünü artıracak dijital arşiv çalışması başlatıldı.",
      ],
    },
  };

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

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

  const renderEvents = (month = "all") => {
    if (!eventsGrid) {
      return;
    }

    const filtered = month === "all" ? events : events.filter((event) => event.month === month);
    eventsGrid.innerHTML = filtered
      .map(
        (event) => `
          <article class="event-card">
            <span class="news-tag">${event.status}</span>
            <h3>${event.title}</h3>
            <div class="event-meta">
              <span>${event.date}</span>
              <span>${event.place}</span>
            </div>
            <p>${event.description}</p>
          </article>
        `
      )
      .join("");
  };

  renderEvents();

  document.querySelectorAll("[data-month-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-month-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderEvents(button.dataset.monthFilter);
    });
  });

  const renderInstagram = () => {
    if (!instagramGrid) {
      return;
    }

    instagramGrid.innerHTML = instagramPosts
      .map(
        (post) => `
          <a class="insta-post" href="${post.link}" target="_blank" rel="noreferrer" aria-label="${post.title} Instagram gönderisine git">
            <div class="insta-thumb" aria-hidden="true"></div>
            <strong>${post.title}</strong>
            <span>${post.date}</span>
            <p>${post.caption}</p>
          </a>
        `
      )
      .join("");
  };

  renderInstagram();

  const getPollState = () => {
    const stored = localStorage.getItem(pollStateKey);
    if (stored) {
      return JSON.parse(stored);
    }

    return {
      "Cumhuriyetin ikinci yüzyili": 8,
      "Laiklik ve egitim": 5,
      "Yerel dayanisma aglari": 3,
      "Genclik ve demokrasi": 4,
    };
  };

  const renderPoll = () => {
    if (!pollResults) {
      return;
    }

    const state = getPollState();
    const totalVotes = Object.values(state).reduce((sum, value) => sum + value, 0);

    pollResults.innerHTML = pollOptions
      .map((option) => {
        const votes = state[option] ?? 0;
        const percentage = totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);

        return `
          <div class="poll-result-row">
            <div>${option} · %${percentage}</div>
            <div class="poll-bar"><span style="width:${percentage}%"></span></div>
          </div>
        `;
      })
      .join("");
  };

  renderPoll();

  if (pollForm) {
    pollForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = pollForm.querySelector("input[name='poll']:checked");
      if (!selected) {
        return;
      }

      const state = getPollState();
      state[selected.value] = (state[selected.value] ?? 0) + 1;
      localStorage.setItem(pollStateKey, JSON.stringify(state));
      renderPoll();
    });
  }

  const clearSearchResults = () => {
    if (searchResults) {
      searchResults.innerHTML = "";
      searchResults.classList.remove("show");
    }
  };

  if (searchInput && searchResults) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        clearSearchResults();
        return;
      }

      const matches = searchEntries.filter((entry) => {
        const haystack = `${entry.label} ${entry.keywords.join(" ")}`.toLowerCase();
        return haystack.includes(query);
      });

      if (!matches.length) {
        searchResults.innerHTML = '<li><button type="button" disabled>Sonuç bulunamadı.</button></li>';
        searchResults.classList.add("show");
        return;
      }

      searchResults.innerHTML = matches
        .slice(0, 8)
        .map(
          (entry) => `
            <li>
              <button type="button" data-search-target="${entry.target}">${entry.label}</button>
            </li>
          `
        )
        .join("");
      searchResults.classList.add("show");
    });

    searchResults.addEventListener("click", (event) => {
      const button = event.target.closest("[data-search-target]");
      if (!button) {
        return;
      }

      const target = document.querySelector(button.dataset.searchTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      searchInput.value = "";
      clearSearchResults();
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-shell")) {
        clearSearchResults();
      }
    });
  }

  const createNewsletterPdf = (entry) => {
    const { jsPDF } = window.jspdf;
    const documentPdf = new jsPDF();
    documentPdf.setFont("helvetica", "bold");
    documentPdf.setFontSize(18);
    documentPdf.text(entry.title, 20, 24);
    documentPdf.setFontSize(11);
    documentPdf.setFont("helvetica", "normal");
    documentPdf.text(entry.subtitle, 20, 34);
    documentPdf.text("Atatürkçü Düşünce Derneği Bakırköy Şubesi", 20, 44);
    let currentY = 60;
    entry.items.forEach((item, index) => {
      documentPdf.text(`${index + 1}. ${item}`, 20, currentY, { maxWidth: 170 });
      currentY += 14;
    });
    documentPdf.save(`${entry.title.replace(/\s+/g, "-").toLowerCase()}.pdf`);
  };

  newsletterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const entry = newsletters[button.dataset.newsletterId];
      if (!entry || !window.jspdf) {
        return;
      }
      createNewsletterPdf(entry);
    });
  });

  // ── Animated counters ──────────────────────────────────────
  const counterCards = document.querySelectorAll("[data-counter]");
  if (counterCards.length && "IntersectionObserver" in window) {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || "";
      const valueEl = el.querySelector("[data-counter-value]");
      if (!valueEl) return;
      const steps = 60;
      const duration = 1800;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const current = Math.min(Math.round((target / steps) * step), target);
        valueEl.textContent = current.toLocaleString("tr-TR") + suffix;
        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterCards.forEach((card) => counterObserver.observe(card));
  }

  // ── Donation amount picker ──────────────────────────────────
  const donationBtns = document.querySelectorAll(".donation-btn");
  const donationLink = document.getElementById("donation-link");
  const donationInput = document.querySelector("[data-donation-input]");

  const updateDonationLink = (amount) => {
    if (!donationLink) return;
    const subject = encodeURIComponent("ADD Bakirkoy Burs Fonu Bagisi - " + (amount ? "\u20ba" + amount : "Belirtilmemis"));
    const body = encodeURIComponent("Merhaba,\n\nBurs fonunuza \u20ba" + (amount || "?") + " tutarinda bagis yapmak istiyorum.\n\nLutfen odeme bilgilerini iletiniz.\n\nSaygılarımla.");
    donationLink.href = "mailto:addbakirkoy@gmail.com?subject=" + subject + "&body=" + body;
  };

  donationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      donationBtns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      if (donationInput) donationInput.value = "";
      updateDonationLink(btn.dataset.amount);
    });
  });

  if (donationInput) {
    donationInput.addEventListener("input", () => {
      donationBtns.forEach((b) => b.classList.remove("selected"));
      updateDonationLink(donationInput.value || "?");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (successBox) {
        successBox.style.display = "none";
      }
      if (errorBox) {
        errorBox.style.display = "none";
        errorBox.textContent = "";
      }

      const name = contactForm.querySelector("#contact-name")?.value.trim();
      const email = contactForm.querySelector("#contact-email")?.value.trim();
      const message = contactForm.querySelector("#contact-message")?.value.trim();

      if (!name || !email || !message) {
        if (errorBox) {
          errorBox.textContent = "Lütfen tüm iletişim alanlarını doldurun.";
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

      const subject = encodeURIComponent(`ADD Bakırköy İletişim Formu - ${name}`);
      const body = encodeURIComponent(`Ad Soyad: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`);
      window.location.href = `mailto:addbakirkoy@gmail.com?subject=${subject}&body=${body}`;

      if (successBox) {
        successBox.textContent = "Varsayılan e-posta uygulamanız için bir mesaj taslağı oluşturuldu.";
        successBox.style.display = "block";
      }

      contactForm.reset();
    });
  }
});

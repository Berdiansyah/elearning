/** @format */

(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// Fungsi untuk membangun sidebar
function buildSidebar(data) {
  const sidebarElement = document.getElementById("sidebar");

  data.forEach((item, index) => {
    // Elemen utama (Modul/Test)
    const listItem = document.createElement("li");
    listItem.classList.add(
      "list-group-item",
      "bg-primary",
      "text-white",
      "tree-item"
    );
    listItem.textContent = item.title;

    sidebarElement.appendChild(listItem);

    // Submateri
    const subMateriList = document.createElement("ul");
    subMateriList.id = `subMateri-${index}`;
    subMateriList.classList.add("sub-materi", "list-group", "list-group-flush");

    item.subMateri.forEach((subItem) => {
      const subMateriItem = document.createElement("li");
      subMateriItem.classList.add("list-group-item", "text-white", "sub-item");
      subMateriItem.style.backgroundColor = "transparent";
      subMateriItem.style.cursor = "pointer";
      subMateriItem.style.paddingLeft = "30px";

      // Elemen lingkaran
      const indicator = document.createElement("span");
      indicator.classList.add("indicator");
      subMateriItem.appendChild(indicator);

      // Teks sub bab
      const text = document.createElement("span");
      text.textContent = subItem.title;
      subMateriItem.appendChild(text);
      // subMateriItem.textContent = subItem.title;

      // Event handler klik
      subMateriItem.onclick = (e) => {
        e.stopPropagation(); // Hindari trigger parent
        displayContent(subItem.content);

        subMateriItem.classList.add("activeli");
        // Ubah warna lingkaran menjadi hijau
        indicator.classList.add("clicked");
      };

      subMateriList.appendChild(subMateriItem);
    });

    sidebarElement.appendChild(subMateriList);

    listItem.onclick = () => toggleSubMateri(`subMateri-${index}`);
  });
}

// Fungsi untuk menampilkan konten
function displayContent(content) {
  const contentArea = document.getElementById("contentArea");

  // Simpan data konten untuk memungkinkan reset
  contentArea.dataset.quizData = JSON.stringify(content);

  // Bersihkan area konten
  contentArea.innerHTML = "";

  // Remove 'active' class from all sub-materi
  const subMateriItems = document.querySelectorAll(".sub-materi li");
  subMateriItems.forEach((item) => item.classList.remove("active"));

  // Highlight the selected sub-bab
  const sidebar = document.querySelector(".sidebar");
  const target = event.target;

  // Remove 'active' class from all sub-materi
  const subLiActive = document.querySelectorAll(".activeli");
  subLiActive.forEach((item) => item.classList.remove("activeli"));
  if (target.tagName === "LI") {
    target.classList.add("activeli");
    if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      sidebar.classList.add("inactive");
    }
  }

  // Konten teks HTML biasa
  if (typeof content === "string") {
    contentArea.innerHTML = content;
    return;
  }

  // Konten soal
  if (typeof content === "object" && content.questions) {
    contentArea.innerHTML = ""; // Bersihkan area konten

    const quizForm = document.createElement("form");
    quizForm.id = "quizForm";

    // Render soal
    content.questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("mb-3");

      questionDiv.innerHTML = `<h5>${index + 1}. ${question.question}</h5>`;

      question.options.forEach((option) => {
        questionDiv.innerHTML += `
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="question${index}"
              value="${option.value}"
              id="question${index}-${option.value}"
            />
            <label class="form-check-label" for="question${index}-${option.value}">
              ${option.value}. ${option.text}
            </label>
          </div>
        `;
      });

      quizForm.appendChild(questionDiv);
    });

    // Tombol Submit
    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.classList.add("btn", "btn-primary", "mt-3");
    submitButton.textContent = "Submit Jawaban";
    submitButton.onclick = () => evaluateQuiz(content.questions);

    contentArea.appendChild(quizForm);
    contentArea.appendChild(submitButton);
  }
}

// Fungsi untuk mengevaluasi jawaban
function evaluateQuiz(questions) {
  let correctCount = 0;
  const contentArea = document.getElementById("contentArea");

  // Cek jika sudah ada hasil sebelumnya
  const existingResult = document.getElementById("quizResult");
  if (existingResult) {
    return; // Mencegah submit ulang sebelum reset
  }

  const resultDiv = document.createElement("div");
  resultDiv.id = "quizResult";
  resultDiv.classList.add("mt-4");

  questions.forEach((question, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    const isCorrect =
      selectedOption && selectedOption.value === question.answer;
    if (isCorrect) {
      correctCount++;
    }

    // Hasil tiap soal
    resultDiv.innerHTML += `
			<p>
				<strong>${index + 1}. ${question.question}</strong><br />
				Jawaban Anda: ${selectedOption ? selectedOption.value : "Tidak dijawab"} 
				(${
          isCorrect
            ? '<span class="text-success">Benar</span>'
            : '<span class="text-danger">Salah</span>'
        })<br />
				Kunci Jawaban: ${question.answer}
			</p>
		`;
  });

  // Hitung skor dalam bentuk persentase
  const scorePercentage = (correctCount / questions.length) * 100;

  resultDiv.innerHTML += `<p><strong>Skor Anda:</strong> ${scorePercentage}</p>`;
  resultDiv.innerHTML += `<p><strong>Jawaban Anda yang benar adalah:</strong> ${correctCount}/${questions.length}</p>`;

  contentArea.appendChild(resultDiv);

  // Tampilkan tombol reset
  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.classList.add("btn", "btn-secondary", "mt-3");
  resetButton.textContent = "Reset";
  resetButton.onclick = () => resetQuiz();

  contentArea.appendChild(resetButton);
}

// Fungsi untuk reset quiz
function resetQuiz() {
  const contentArea = document.getElementById("contentArea");

  // Bersihkan area konten
  contentArea.innerHTML = "";
  // Ambil data JSON dari dataset
  const quizData = JSON.parse(contentArea.dataset.quizData);

  // Bangun ulang quiz, termasuk soal dan tombol submit
  displayContent(quizData);
}

// Toggle sub-materi
function toggleSubMateri(id) {
  const subMateri = document.getElementById(id);
  subMateri.style.display =
    subMateri.style.display === "none" || subMateri.style.display === ""
      ? "block"
      : "none";
}

// Update toggleSubMateri function to handle active sub-materi
function toggleSubMateri(id) {
  const subMateri = document.getElementById(id);
  const allSubMateri = document.querySelectorAll(".sub-materi");

  // Collapse all other sub-materi
  allSubMateri.forEach((item) => {
    if (item.id !== id) {
      item.style.display = "none";
    }
  });

  // Toggle the current one
  subMateri.style.display =
    subMateri.style.display === "none" || subMateri.style.display === ""
      ? "block"
      : "none";
}

// Toggle sidebar visibility on mobile
document.querySelector(".sidebar-toggle-btn").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
  sidebar.classList.toggle("inactive");
});

// Ensure sidebar is always visible on desktop
window.addEventListener("resize", () => {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 768) {
    sidebar.classList.remove("inactive");
    sidebar.classList.remove("sidebar-mobile");
    sidebar.classList.add("sidebar");
    sidebar.classList.add("active");
  } else {
    sidebar.classList.remove("active");
    sidebar.classList.add("inactive");
    sidebar.classList.add("sidebar-mobile");
  }
});

// Initialize sidebar state based on window size
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth > 768) {
    sidebar.classList.add("active");
  } else {
    sidebar.classList.add("inactive");
  }
});

// Bangun sidebar
document.addEventListener("DOMContentLoaded", () => {
  buildSidebar(sidebarData);
});

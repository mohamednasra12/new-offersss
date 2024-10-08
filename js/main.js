// تحديث المحتوى بناءً على اللغة المختارة
function updateContent(lang) {
  const imgs = document.getElementById("imgheros");

  // تعيين خصائص الوثيقة وفقًا للغة المختارة
  if (lang === "ar") {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right"; // محاذاة النص لليمين
    if (imgs) {
      imgs.style.transform = "rotateY(360deg)";
    }
  } else {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left"; // محاذاة النص لليسار
    if (imgs) {
      imgs.style.transform = "rotateY(180deg)";
    }
  }
}

// الحدث لزر اللغة الإنجليزية
document
  .getElementById("lang-en")
  .addEventListener("click", () => updateContent("en"));

// الحدث لزر اللغة العربية
document
  .getElementById("lang-ar")
  .addEventListener("click", () => updateContent("ar"));

// تعيين اللغة الافتراضية
updateContent("ar"); // أو "en" حسب اللغة الافتراضية التي تريدها

// إضافة وإزالة فئة 'active' من روابط الفوتر (Footer)
const footerLinks = document.querySelectorAll(".footer-link");

footerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // إزالة 'active' من جميع الروابط في الفوتر
    footerLinks.forEach((link) => link.classList.remove("active"));

    // إضافة 'active' للرابط الذي تم النقر عليه
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll("#toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const textElement = this.previousElementSibling; // Get the <p> element before the button
      textElement.classList.toggle("expanded"); // Toggle the 'expanded' class
      this.textContent = textElement.classList.contains("expanded")
        ? "عرض أقل"
        : "عرض المزيد"; // Change button text based on state
    });
  });
});

window.onscroll = function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

document.getElementById("scrollToTop").onclick = function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: false, // default
  live: true, // default
});
wow.init();

document.addEventListener("DOMContentLoaded", function () {
  const wowElements = document.querySelectorAll(".wow");

  wowElements.forEach((element) => {
    element.setAttribute("data-wow-duration", "2s"); // تعيين مدة الحركة
    element.setAttribute("data-wow-delay", "0.2s"); // تعيين تأخير الحركة إلى 0
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // إزالة 'active' من جميع الروابط
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // إضافة 'active' للرابط الذي تم النقر عليه
      this.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // إعداد الخريطة
  var map = L.map("map").setView([24.7136, 46.6753], 13); // إحداثيات الرياض

  // إضافة طبقة الخرائط
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // إضافة علامة
  L.marker([24.7136, 46.6753])
    .addTo(map)
    .bindPopup("موقع في الرياض.")
    .openPopup();
});

// الحصول على الرابط الحالي بدون جزء الاستعلام (query string) أو الهاش (hash)
const currentPage = window.location.pathname.split("/").pop();

// تحديد كل الروابط في القائمة
const navLinks = document.querySelectorAll(".nav-link");

// تكرار على كل رابط وتحديد الرابط النشط
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();

  // إذا تطابق الرابط مع الصفحة الحالية
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

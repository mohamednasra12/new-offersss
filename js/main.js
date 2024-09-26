// // إغلاق القائمة الجانبية عند النقر على أي رابط داخلها
// document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
//   link.addEventListener("click", () => {
//     const navbarCollapse = document.getElementById("navbarSupportedContent");

//     // تحقق مما إذا كانت القائمة مفتوحة
//     if (navbarCollapse.classList.contains("show")) {
//       // استخدم Bootstrap Collapse API لإغلاق القائمة بشكل صحيح
//       const collapse =
//         bootstrap.Collapse.getInstance(navbarCollapse) ||
//         new bootstrap.Collapse(navbarCollapse);
//       collapse.hide();
//     }
//   });
// });

// تحديث المحتوى بناءً على اللغة المختارة
function updateContent(lang) {
  if (lang === "ar") {
    document.body.style.display = "block";
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
    document.body.style.textAlign = "right"; // محاذاة النص لليمين
  } else {
    document.body.style.display = "block";
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
    document.body.style.textAlign = "left"; // محاذاة النص لليسار
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

// إضافة وإزالة فئة 'active' من روابط التنقل (Navbar)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // إزالة 'active' من جميع الروابط
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // إضافة 'active' للرابط الذي تم النقر عليه
      this.classList.add("active");
    });
  });
});

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
  });
});

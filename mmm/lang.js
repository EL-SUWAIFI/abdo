let currentLang = "ar";

const texts = {
  ar: {
    title: "أهلاً بكم في موقع عبد الرحمن",
    desc: "حل أغلب مشكلات الحاسب وشرح قطع الكمبيوتر"
  },
  en: {
    title: "Welcome to Abdulrahman Website",
    desc: "Computer parts explanation and troubleshooting"
  }
};

function toggleLang(){
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.getElementById("title").innerText = texts[currentLang].title;
  document.getElementById("desc").innerText = texts[currentLang].desc;
}

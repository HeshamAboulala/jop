const translations = {
  ar: {
    siteTitle: "شركة نقل عفش",
    logo: "نقل عفش",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navWork: "أعمالنا",
    navContact: "تواصل",

    callNow: "اتصل الآن",
    whatsApp: "واتساب",
    seeServices: "شوف الخدمات",

    heroTitle: "نقل عفش سريع وآمن داخل القاهرة والجيزة",
    heroDesc: "تغليف احترافي، فك وتركيب، عمالة مدرّبة، وسيارات مجهزة. التزام بالمواعيد وسعر واضح.",

    badge1: "تغليف كامل",
    badge2: "فك وتركيب",
    badge3: "خدمة 7 أيام",

    quickQuote: "عرض سعر سريع",
    quickQuoteDesc: "ابعت موقعك وعدد الغرف ونرجع لك بسعر مبدئي.",

    servicesTitle: "الخدمات",
    servicesDesc: "باقة كاملة من أول التغليف لحد التسليم.",

    s1Title: "نقل عفش شقق",
    s1Desc: "نقل داخل نفس الحي أو لمحافظة تانية مع تأمين وربط ممتاز.",
    s2Title: "تغليف احترافي",
    s2Desc: "بابل راب + كرتون + فوم للأجهزة والزجاج والأنتيكات.",
    s3Title: "فك وتركيب",
    s3Desc: "غرف نوم، مطابخ، نجف، ستائر. فريق فني جاهز.",
    s4Title: "نقل مكاتب",
    s4Desc: "فك وترتيب الأجهزة والملفات وتسليم منظم حسب الأقسام.",
    s5Title: "ونش رفع (حسب الحالة)",
    s5Desc: "للأدوار العالية أو المداخل الضيقة لتقليل المخاطر.",
    s6Title: "نقل داخل/خارج القاهرة",
    s6Desc: "تنسيق المواعيد + تغليف إضافي للطرق الطويلة.",

    workTitle: "أعمالنا",
    workDesc: "نماذج شغل (حط صور بعدين في folder assets).",
    ph1: "صورة 1",
    ph2: "صورة 2",
    ph3: "صورة 3",
    ph4: "صورة 4",

    contactTitle: "تواصل",
    contactDesc: "اتصل أو واتساب، أو سيب بياناتك.",
    contactInfo: "بيانات التواصل",
    phoneLabel: "هاتف:",
    whatsLabel: "واتساب:",
    areaLabel: "نغطي:",
    areas: "القاهرة - الجيزة - أكتوبر - الشيخ زايد",
    hours: "المواعيد: يوميًا من 9 ص إلى 11 م",

    msgTitle: "رسالة",

    namePh: "الاسم",
    phonePh: "رقم الموبايل",
    areaPh: "المنطقة",
    msgPh: "قولنا: منين لفين؟ عدد الغرف؟ الدور؟",
    sendBtn: "إرسال",

    note: "*ده نموذج مبدئي، هنربطه بواتساب/إيميل بعدين.",
    note2: "هنربط الإرسال بواتساب تلقائيًا بعد ما تكتب رقمك الحقيقي.",

    footer: "© 2026 شركة نقل عفش — جميع الحقوق محفوظة."
  },

  en: {
    siteTitle: "Furniture Moving Company",
    logo: "Moving",
    navHome: "Home",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",

    callNow: "Call Now",
    whatsApp: "WhatsApp",
    seeServices: "View Services",

    heroTitle: "Fast & Safe Furniture Moving in Cairo & Giza",
    heroDesc: "Professional packing, dismantling/assembly, trained crew, and equipped trucks. On time, clear pricing.",

    badge1: "Full Packing",
    badge2: "Dismantle & Assemble",
    badge3: "7 Days Service",

    quickQuote: "Quick Quote",
    quickQuoteDesc: "Send your area and number of rooms to get a rough estimate.",

    servicesTitle: "Services",
    servicesDesc: "A complete service from packing to delivery.",

    s1Title: "Apartment Moving",
    s1Desc: "Local moves or inter-city moves with safe loading and protection.",
    s2Title: "Professional Packing",
    s2Desc: "Bubble wrap, cartons, foam for appliances, glass, and delicate items.",
    s3Title: "Dismantling & Assembly",
    s3Desc: "Bedrooms, kitchens, chandeliers, curtains — handled by technicians.",
    s4Title: "Office Relocation",
    s4Desc: "Organized packing for devices and files, delivered by department.",
    s5Title: "Lift Service (If Needed)",
    s5Desc: "For high floors or narrow entrances to reduce risk.",
    s6Title: "Cairo / Out of Cairo",
    s6Desc: "Scheduling + extra protection for long-distance trips.",

    workTitle: "Our Work",
    workDesc: "Examples (add real photos later in the assets folder).",
    ph1: "Photo 1",
    ph2: "Photo 2",
    ph3: "Photo 3",
    ph4: "Photo 4",

    contactTitle: "Contact",
    contactDesc: "Call, WhatsApp, or leave your details.",
    contactInfo: "Contact Info",
    phoneLabel: "Phone:",
    whatsLabel: "WhatsApp:",
    areaLabel: "Coverage:",
    areas: "Cairo - Giza - 6th of October - Sheikh Zayed",
    hours: "Hours: Daily 9 AM to 11 PM",

    msgTitle: "Message",

    namePh: "Name",
    phonePh: "Phone",
    areaPh: "Area",
    msgPh: "From where to where? Rooms? Floor?",
    sendBtn: "Send",

    note: "*This is a basic form. We’ll connect it to WhatsApp/email later.",
    note2: "We can auto-send to WhatsApp after you set your real number.",

    footer: "© 2026 Moving Company — All rights reserved."
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) el.setAttribute("placeholder", translations[lang][key]);
  });

  localStorage.setItem("lang", lang);
}

const langBtn = document.getElementById("langBtn");
const savedLang = localStorage.getItem("lang") || "ar";

applyLanguage(savedLang);
langBtn.textContent = (savedLang === "ar") ? "EN" : "AR";

langBtn.addEventListener("click", () => {
  const current = document.documentElement.lang || "ar";
  const next = (current === "ar") ? "en" : "ar";
  applyLanguage(next);
  langBtn.textContent = (next === "ar") ? "EN" : "AR";
});

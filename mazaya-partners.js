/*
 * SuccessFactors Home Page - "JavaScript URL" quick link
 * "مزايا | شركاؤنا" - partner benefits page (Arabic, right-to-left)
 *
 * When a user clicks the quick link, SuccessFactors adds <script src="THIS FILE">
 * to the home page and the browser runs it. This file then opens the benefits
 * page as a full-screen layer on top of the home page.
 *
 * What to edit (everything is in the "EDIT FROM HERE" section):
 *   1. IMAGE_BASE - the folder where your pictures are hosted (for example GitHub Pages).
 *   2. CONFIG     - page texts, hero picture, font, colours.
 *   3. CATEGORIES - the filter buttons.
 *   4. PARTNERS   - one block per partner.
 *
 * Pictures that are missing or fail to load are replaced automatically by a
 * coloured placeholder with an icon, so you can test before you have real pictures.
 *
 * Picture files this sample expects inside IMAGE_BASE:
 *   hero.jpg                                    - wide background at the top
 *   hayat.jpg, qimma.jpg, waha.jpg, saraya.jpg,
 *   basma.jpg, reem.jpg, maarifa.jpg, nukhba.jpg - one photo per partner
 *   logos/hayat.png ... logos/nukhba.png        - optional partner logos (transparent PNG or SVG)
 */
(function () {
  "use strict";

  // ============================== EDIT FROM HERE ==============================

  var IMAGE_BASE = "https://YOUR-USERNAME.github.io/sf-test/images/";

  var CONFIG = {
    title: "مزايا | شركاؤنا",
    subtitle: "اكتشف الخصومات والمزايا الحصرية المقدمة لموظفي حكومة رأس الخيمة من شركاء برنامج مزايا",
    heroImage: IMAGE_BASE + "hero.jpg",

    searchPlaceholder: "ابحث عن اسم الشريك",
    viewLabel: "عرض الميزة",
    ctaLabel: "استفد الآن",
    closePageLabel: "إغلاق صفحة المزايا",
    closeDetailsLabel: "إغلاق التفاصيل",
    resultsLabel: "عدد النتائج: ",
    emptyTitle: "لا يوجد شريك بهذا الاسم",
    emptyText: "جرّب اسمًا آخر أو اختر تصنيف «الكل».",
    labels: {
      howTo: "طريقة الاستفادة",
      branches: "الفروع المشمولة",
      period: "مدة العرض",
      terms: "الشروط والأحكام"
    },

    // Show the first partner's details straight away on wide screens (as in the design).
    openFirstPartner: true,

    // Space to leave at the top so the SuccessFactors header stays visible, e.g. "56px".
    topOffset: "0px",

    // Arabic web font. Set fontUrl to null to use the computer's own Arabic font.
    fontUrl: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap",
    fontFamily: '"IBM Plex Sans Arabic", "Segoe UI", Tahoma, "Noto Sans Arabic", Arial, sans-serif',

    colors: {
      primary: "#1f5bbf",     // buttons, active filter
      primaryDark: "#17479a", // button hover, offer title
      navy: "#132a4f",        // headings
      gold: "#e0a526"         // accent in the illustration
    }
  };

  // Filter buttons. "color" must be a 6-digit hex colour (used for placeholders and icons).
  // Available icons: grid, stethoscope, cap, utensils, building, bag, gamepad,
  // heart, book, palm, tooth, users, run
  var CATEGORIES = [
    { id: "all",           label: "الكل",    icon: "grid" },
    { id: "health",        label: "الصحة",   icon: "stethoscope", color: "#12927f" },
    { id: "education",     label: "التعليم", icon: "cap",         color: "#1d4fa8" },
    { id: "restaurants",   label: "المطاعم", icon: "utensils",    color: "#e0852a" },
    { id: "hotels",        label: "الفنادق", icon: "building",    color: "#c9971c" },
    { id: "shopping",      label: "التسوق",  icon: "bag",         color: "#7c5cc4" },
    { id: "entertainment", label: "الترفيه", icon: "gamepad",     color: "#1f6fd6" }
  ];

  // One block per partner. "icon" is only used when there is no logo picture.
  // Leave any text empty ("") to hide that row. "url" must start with https://
  var PARTNERS = [
    {
      id: "hayat",
      name: "مستشفى الحياة",
      category: "health",
      icon: "heart",
      image: IMAGE_BASE + "hayat.jpg",
      logo: IMAGE_BASE + "logos/hayat.png",
      offerTitle: "خصم 20% لموظفي حكومة رأس الخيمة",
      offerNote: "على جميع الخدمات الطبية والعلاجية في مستشفى الحياة",
      description: "يوفر مستشفى الحياة رعاية صحية متكاملة بمعايير عالمية، مع خصومات خاصة لموظفي حكومة رأس الخيمة وعائلاتهم على مختلف الخدمات الطبية.",
      howTo: "إبراز بطاقة الموظف عند الحضور في المستشفى.",
      branches: "جميع فروع مستشفى الحياة في إمارة رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "تطبق الشروط والأحكام الخاصة بالشريك. الخصومات لا تشمل الأدوية ولا يمكن دمجها مع عروض أخرى.",
      url: "https://www.example.com"
    },
    {
      id: "qimma",
      name: "أكاديمية القمة",
      category: "education",
      icon: "book",
      image: IMAGE_BASE + "qimma.jpg",
      logo: IMAGE_BASE + "logos/qimma.png",
      offerTitle: "خصم 15% على الرسوم الدراسية",
      offerNote: "على الدورات التدريبية وبرامج اللغات والتطوير المهني",
      description: "تقدم أكاديمية القمة دورات تدريبية معتمدة في المهارات المهنية واللغات والتقنية، بأسعار خاصة لموظفي حكومة رأس الخيمة وأبنائهم.",
      howTo: "إدخال الرقم الوظيفي عند التسجيل عبر موقع الأكاديمية، أو إبراز بطاقة الموظف في مكتب التسجيل.",
      branches: "مقر الأكاديمية في مدينة رأس الخيمة والمنصة الإلكترونية.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "يطبق الخصم على الرسوم الدراسية فقط، ولا يشمل رسوم الامتحانات والكتب.",
      url: "https://www.example.com"
    },
    {
      id: "waha",
      name: "مطاعم الواحة",
      category: "restaurants",
      icon: "palm",
      image: IMAGE_BASE + "waha.jpg",
      logo: IMAGE_BASE + "logos/waha.png",
      offerTitle: "خصم 25% على قائمة الطعام",
      offerNote: "في جميع الفروع وطوال أيام الأسبوع",
      description: "تجربة طعام عائلية تجمع بين المأكولات الإماراتية والعالمية في أجواء مريحة، مع خصم خاص لموظفي حكومة رأس الخيمة.",
      howTo: "إبراز بطاقة الموظف قبل طلب الفاتورة.",
      branches: "جميع فروع مطاعم الواحة في إمارة رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "لا يشمل الخصم العروض الموسمية وخدمة التوصيل، ويطبق على فاتورة واحدة لكل زيارة.",
      url: "https://www.example.com"
    },
    {
      id: "saraya",
      name: "فندق السرايا",
      category: "hotels",
      icon: "building",
      image: IMAGE_BASE + "saraya.jpg",
      logo: IMAGE_BASE + "logos/saraya.png",
      offerTitle: "خصم 30% على الإقامة",
      offerNote: "وخصم 20% على المطاعم والسبا داخل الفندق",
      description: "منتجع فاخر على الواجهة البحرية يوفر إقامة مريحة ومرافق متكاملة للعائلات، بأسعار حصرية لموظفي حكومة رأس الخيمة.",
      howTo: "الحجز عبر الرابط المخصص أو هاتف الفندق مع ذكر برنامج مزايا، ثم إبراز بطاقة الموظف عند تسجيل الوصول.",
      branches: "فندق السرايا – رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "الخصم خاضع لتوفر الغرف، ولا يشمل فترات الأعياد والعطلات الرسمية.",
      url: "https://www.example.com"
    },
    {
      id: "basma",
      name: "مركز البسمة",
      category: "health",
      icon: "users",
      image: IMAGE_BASE + "basma.jpg",
      logo: IMAGE_BASE + "logos/basma.png",
      offerTitle: "خصم 20% على جلسات الأطفال",
      offerNote: "في علاج النطق والعلاج الوظيفي وتنمية المهارات",
      description: "مركز متخصص في رعاية الأطفال وتنمية مهاراتهم، يقدم جلسات علاج النطق والعلاج الوظيفي والدعم السلوكي بإشراف مختصين.",
      howTo: "حجز موعد عبر الهاتف وإبراز بطاقة الموظف عند الحضور.",
      branches: "مركز البسمة – مدينة رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "يشمل الخصم أبناء الموظف فقط، ويتطلب إبراز ما يثبت صلة القرابة.",
      url: "https://www.example.com"
    },
    {
      id: "reem",
      name: "عيادة الريم",
      category: "health",
      icon: "tooth",
      image: IMAGE_BASE + "reem.jpg",
      logo: IMAGE_BASE + "logos/reem.png",
      offerTitle: "خصم 25% على علاجات الأسنان",
      offerNote: "مع فحص وتنظيف مجاني مرة واحدة في السنة",
      description: "عيادة أسنان حديثة تقدم خدمات التجميل والتقويم والزراعة وعلاج أسنان الأطفال بأحدث التقنيات.",
      howTo: "إبراز بطاقة الموظف وبطاقة الهوية عند الحضور.",
      branches: "عيادة الريم – مدينة رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "لا يشمل الخصم تكاليف المختبر، ولا يمكن دمجه مع التغطية التأمينية.",
      url: "https://www.example.com"
    },
    {
      id: "maarifa",
      name: "مكتبة المعرفة",
      category: "shopping",
      icon: "book",
      image: IMAGE_BASE + "maarifa.jpg",
      logo: IMAGE_BASE + "logos/maarifa.png",
      offerTitle: "خصم 15% على جميع المشتريات",
      offerNote: "الكتب والقرطاسية والأدوات المدرسية",
      description: "مكتبة شاملة تضم آلاف العناوين العربية والإنجليزية، إلى جانب القرطاسية والأدوات المدرسية لجميع المراحل.",
      howTo: "إبراز بطاقة الموظف عند الدفع، أو استخدام رمز الخصم عند الشراء عبر الموقع الإلكتروني.",
      branches: "جميع فروع مكتبة المعرفة والمتجر الإلكتروني.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "لا يشمل الخصم الأجهزة الإلكترونية والمنتجات المخفضة مسبقًا.",
      url: "https://www.example.com"
    },
    {
      id: "nukhba",
      name: "نادي النخبة",
      category: "entertainment",
      icon: "run",
      image: IMAGE_BASE + "nukhba.jpg",
      logo: IMAGE_BASE + "logos/nukhba.png",
      offerTitle: "خصم 35% على الاشتراك السنوي",
      offerNote: "يشمل صالة اللياقة والمسبح والحصص الجماعية",
      description: "نادٍ رياضي متكامل يضم صالة لياقة حديثة ومسبحًا وحصصًا جماعية بإشراف مدربين معتمدين.",
      howTo: "التسجيل في مكتب الاستقبال مع إبراز بطاقة الموظف.",
      branches: "نادي النخبة – مدينة رأس الخيمة.",
      period: "من 1 يناير 2026 إلى 31 ديسمبر 2026.",
      terms: "الاشتراك شخصي وغير قابل للتحويل، ويطبق الخصم على الاشتراكات الجديدة والتجديد.",
      url: "https://www.example.com"
    }
  ];

  // ========================= NO NEED TO EDIT BELOW =========================

  var HOST_ID = "mazaya-partners-page";

  // Clicking the quick link again runs this file again: close the old page first.
  var old = document.getElementById(HOST_ID);
  if (old && typeof old._close === "function") old._close();
  else if (old && old.parentNode) old.parentNode.removeChild(old);

  // The web font has to be loaded on the main page so the page below can use it.
  if (CONFIG.fontUrl && !document.getElementById(HOST_ID + "-font")) {
    var fontLink = document.createElement("link");
    fontLink.id = HOST_ID + "-font";
    fontLink.rel = "stylesheet";
    fontLink.href = CONFIG.fontUrl;
    document.head.appendChild(fontLink);
  }

  // ---------- Icons (drawn with DOM calls, no innerHTML) ----------
  var SVG_NS = "http://www.w3.org/2000/svg";
  var ICONS = {
    search: [["circle", { cx: 11, cy: 11, r: 7 }], ["path", { d: "M20 20l-4-4" }]],
    close: [["path", { d: "M6 6l12 12M18 6L6 18" }]],
    grid: [
      ["rect", { x: 4, y: 4, width: 6.5, height: 6.5, rx: 1.5 }],
      ["rect", { x: 13.5, y: 4, width: 6.5, height: 6.5, rx: 1.5 }],
      ["rect", { x: 4, y: 13.5, width: 6.5, height: 6.5, rx: 1.5 }],
      ["rect", { x: 13.5, y: 13.5, width: 6.5, height: 6.5, rx: 1.5 }]
    ],
    stethoscope: [["path", { d: "M5 3.5V8a4 4 0 0 0 8 0V3.5" }], ["path", { d: "M9 12v2.5a5 5 0 0 0 10 0V13" }], ["circle", { cx: 19, cy: 11, r: 2 }]],
    cap: [["path", { d: "M2.5 9.5L12 5l9.5 4.5L12 14z" }], ["path", { d: "M6.5 11.6V16c0 1.4 2.5 3 5.5 3s5.5-1.6 5.5-3v-4.4" }], ["path", { d: "M21.5 9.5v5" }]],
    utensils: [["path", { d: "M5 3v5a3 3 0 0 0 6 0V3M8 3v18" }], ["path", { d: "M18 21V3c-2.2 1-3.5 4-3.5 8.5H18" }]],
    building: [["rect", { x: 5, y: 3, width: 14, height: 18, rx: 1.2 }], ["path", { d: "M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15M10.5 21v-2.5h3V21" }]],
    bag: [["path", { d: "M5.5 8h13l-1 12.5h-11z" }], ["path", { d: "M9 8V6.5a3 3 0 0 1 6 0V8" }]],
    gamepad: [
      ["path", { d: "M7 7.5h10a4.5 4.5 0 0 1 4.5 4.5v1.2a3 3 0 0 1-5.4 1.8l-1-1.3H8.9l-1 1.3a3 3 0 0 1-5.4-1.8V12A4.5 4.5 0 0 1 7 7.5z" }],
      ["path", { d: "M7.5 10.2v3.6M5.7 12h3.6" }],
      ["circle", { cx: 15.6, cy: 11, r: 0.9, fill: "currentColor" }],
      ["circle", { cx: 17.6, cy: 13, r: 0.9, fill: "currentColor" }]
    ],
    heart: [["path", { d: "M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }]],
    book: [["path", { d: "M3 5.5c3-1 6-.8 9 1.5 3-2.3 6-2.5 9-1.5V19c-3-1-6-.8-9 1.5-3-2.3-6-2.5-9-1.5z" }], ["path", { d: "M12 7v13.5" }]],
    palm: [
      ["path", { d: "M12 21c.6-4 .6-8 0-12" }],
      ["path", { d: "M12 9c-1.4-2.8-4.4-3.9-7.5-3 2 .4 3.6 1.7 4.3 3.5M12 9c1.4-2.8 4.4-3.9 7.5-3-2 .4-3.6 1.7-4.3 3.5" }],
      ["path", { d: "M12 9c-2.6-1-5.6 0-7 3.2M12 9c2.6-1 5.6 0 7 3.2M12 9c-.4-2.6.4-4.6 2-6" }],
      ["path", { d: "M8 21h8" }]
    ],
    tooth: [["path", { d: "M7.5 4c1.6 0 2.8.8 4.5.8S14.9 4 16.5 4C19 4 20 6.2 20 8.5c0 2.5-1 4-1.6 6.5-.5 2.2-.9 5-2.4 5-1.8 0-1.6-4.5-4-4.5s-2.2 4.5-4 4.5c-1.5 0-1.9-2.8-2.4-5C5 12.5 4 11 4 8.5 4 6.2 5 4 7.5 4z" }]],
    users: [["circle", { cx: 9, cy: 8, r: 3 }], ["circle", { cx: 16.5, cy: 9, r: 2.5 }], ["path", { d: "M3.5 19a5.5 5.5 0 0 1 11 0M14.2 14.6A4.5 4.5 0 0 1 21 18.5" }]],
    run: [
      ["circle", { cx: 15, cy: 4.5, r: 2 }],
      ["path", { d: "M14 8.5l-3 5 4 3-1.5 5.5M14 8.5l3.5 2.5 3-1M12.3 10.5L8 10M11 13.5l-2.5 3.5H5" }]
    ],
    card: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["path", { d: "M3 10h18M7 15h4" }]],
    pin: [["path", { d: "M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.4-6.5 11-6.5 11z" }], ["circle", { cx: 12, cy: 10, r: 2.3 }]],
    calendar: [["rect", { x: 3.5, y: 5, width: 17, height: 15.5, rx: 2 }], ["path", { d: "M3.5 10h17M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" }]],
    doc: [["path", { d: "M7 3h7l4 4v14H7z" }], ["path", { d: "M14 3v4h4M10 12h5M10 15.5h5M10 8.5h2" }]],
    external: [["path", { d: "M14 4h6v6M20 4l-9 9" }], ["path", { d: "M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" }]],
    tag: [
      ["path", { d: "M3.4 12.3l8.4-8.4c.3-.3.7-.5 1.1-.5h6.4c.7 0 1.2.5 1.2 1.2V11c0 .4-.2.8-.5 1.1l-8.4 8.4c-.6.6-1.6.6-2.2 0l-6-6c-.6-.6-.6-1.6 0-2.2z", fill: "currentColor", stroke: "none" }],
      ["circle", { cx: 16.6, cy: 7.4, r: 1.3, fill: "#ffffff", stroke: "none" }],
      ["path", { d: "M9 16l4.2-4.2", stroke: "#ffffff" }],
      ["circle", { cx: 9.4, cy: 12.4, r: 1, stroke: "#ffffff" }],
      ["circle", { cx: 12.8, cy: 15.8, r: 1, stroke: "#ffffff" }]
    ]
  };

  function svgNode(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  function icon(name, size) {
    var svg = svgNode("svg", {
      viewBox: "0 0 24 24", width: size || 20, height: size || 20, fill: "none",
      stroke: "currentColor", "stroke-width": 1.8, "stroke-linecap": "round",
      "stroke-linejoin": "round", "aria-hidden": "true", focusable: "false"
    });
    (ICONS[name] || ICONS.grid).forEach(function (part) { svg.appendChild(svgNode(part[0], part[1])); });
    return svg;
  }

  // Price tag and two people, like the illustration in the design.
  function heroIllustration() {
    var c = CONFIG.colors;
    var svg = svgNode("svg", { viewBox: "0 0 130 120", width: 124, height: 114, fill: "none", "aria-hidden": "true", focusable: "false" });
    var tag = svgNode("g", { transform: "translate(2 -6) rotate(-38 62 44)" });
    tag.appendChild(svgNode("path", { d: "M30 24h44l16 20-16 20H30a6 6 0 0 1-6-6V30a6 6 0 0 1 6-6z", fill: "#ffffff", stroke: c.primaryDark, "stroke-width": 5, "stroke-linejoin": "round" }));
    tag.appendChild(svgNode("circle", { cx: 76, cy: 44, r: 4, fill: c.primaryDark }));
    tag.appendChild(svgNode("path", { d: "M42 54l16-20", stroke: c.primaryDark, "stroke-width": 4, "stroke-linecap": "round" }));
    tag.appendChild(svgNode("circle", { cx: 43, cy: 36, r: 4, stroke: c.primaryDark, "stroke-width": 3.5 }));
    tag.appendChild(svgNode("circle", { cx: 57, cy: 52, r: 4, stroke: c.primaryDark, "stroke-width": 3.5 }));
    svg.appendChild(tag);
    svg.appendChild(svgNode("circle", { cx: 88, cy: 76, r: 11, fill: "#ffffff", stroke: c.gold, "stroke-width": 4 }));
    svg.appendChild(svgNode("path", { d: "M68 116c0-12 9-20 20-20s20 8 20 20z", fill: "#ffffff", stroke: c.gold, "stroke-width": 4, "stroke-linejoin": "round" }));
    svg.appendChild(svgNode("circle", { cx: 46, cy: 80, r: 11.5, fill: c.primary }));
    svg.appendChild(svgNode("path", { d: "M24 118c0-13 10-22 22-22s22 9 22 22z", fill: c.primary }));
    return svg;
  }

  // ---------- Small helpers ----------
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text; // textContent: partner text is never read as HTML
    return node;
  }

  function button(className, label) {
    var b = el("button", className, label);
    b.type = "button";
    return b;
  }

  var warned = {};
  function warnImage(src) {
    if (warned[src]) return;
    warned[src] = true;
    console.info("[Mazaya page] Picture not found, showing a placeholder instead:", src);
  }

  function isHttps(url) { return /^https:\/\//i.test(String(url || "")); }

  // A picture with a soft coloured background behind it (shown if the picture is missing).
  function picture(src, alt, color) {
    var box = el("div", "pic");
    box.style.background = "linear-gradient(135deg, " + color + "1f, " + color + "59)";
    if (src) {
      var img = document.createElement("img");
      img.alt = alt || "";
      img.decoding = "async";
      img.onerror = function () { if (img.parentNode) img.parentNode.removeChild(img); warnImage(src); };
      img.src = src;
      box.appendChild(img);
    }
    return box;
  }

  // A partner logo, or the partner's icon if there is no logo.
  function logoMark(p, color, iconSize) {
    var box = el("span", "logo-mark");
    function useIcon() {
      box.textContent = "";
      var ic = icon(p.icon || (catById[p.category] || {}).icon, iconSize);
      ic.style.color = color;
      box.appendChild(ic);
    }
    if (p.logo) {
      var img = document.createElement("img");
      img.alt = "";
      img.onerror = function () { warnImage(p.logo); useIcon(); };
      img.src = p.logo;
      box.appendChild(img);
    } else {
      useIcon();
    }
    return box;
  }

  function normalize(s) {
    return String(s || "").toLowerCase()
      .replace(/[\u064B-\u0652\u0640]/g, "") // Arabic diacritics and tatweel
      .replace(/[\u0623\u0625\u0622\u0671]/g, "\u0627") // أ إ آ ٱ -> ا
      .replace(/\u0629/g, "\u0647") // ة -> ه
      .replace(/\u0649/g, "\u064A") // ى -> ي
      .replace(/(^|\s)\u0627\u0644/g, "$1") // ignore "ال" at the start of words
      .replace(/\s+/g, " ")
      .trim();
  }

  var catById = {};
  CATEGORIES.forEach(function (c) { catById[c.id] = c; });
  var partnerById = {};
  PARTNERS.forEach(function (p) { partnerById[p.id] = p; });
  function colorOf(p) { return (catById[p.category] || {}).color || CONFIG.colors.primary; }

  // ---------- Styles ----------
  var CSS = [
    ":host{all:initial}",
    "*,*::before,*::after{box-sizing:border-box}",
    ".page{position:absolute;inset:0;overflow-y:auto;overscroll-behavior:contain;background:#eef2f7;color:#1c2b45;font-family:var(--font);font-size:15px;line-height:1.65;-webkit-font-smoothing:antialiased;text-align:start}",
    ".page:focus{outline:none}",
    "button,input{font:inherit;color:inherit}",
    ":focus-visible{outline:3px solid color-mix(in srgb,var(--primary) 45%,transparent);outline-offset:2px}",
    "h2,h3,h4,p{margin:0}",
    ".sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}",

    /* Hero */
    ".hero-bg{position:absolute;top:0;left:0;right:0;height:440px;overflow:hidden;background:linear-gradient(180deg,#9cc0e0 0%,#d8d3c6 45%,#e7b77d 78%,#c98c56 100%)}",
    ".hero-bg img{width:100%;height:100%;object-fit:cover;display:block}",
    ".hero-bg::after{content:'';position:absolute;left:0;right:0;bottom:0;height:150px;background:linear-gradient(180deg,rgba(238,242,247,0),#eef2f7)}",
    ".close-page{position:fixed;top:calc(var(--top) + 16px);left:16px;z-index:20;width:46px;height:46px;border-radius:50%;border:0;background:rgba(255,255,255,.94);color:var(--navy);box-shadow:0 4px 14px rgba(19,42,79,.18);display:grid;place-items:center;cursor:pointer}",
    ".close-page:hover{background:#fff}",
    ".layout{position:relative;display:grid;grid-template-columns:minmax(0,1fr);grid-template-areas:'main';gap:24px;align-items:start;max-width:1680px;margin:0 auto;padding:74px 40px 40px}",
    ".page.has-details .layout{grid-template-columns:minmax(380px,480px) minmax(0,1fr);grid-template-areas:'details main'}",
    ".main{grid-area:main;min-width:0}",
    ".hero-card{display:flex;align-items:center;justify-content:space-between;gap:24px;width:min(620px,100%);margin-inline-start:auto;margin-bottom:34px;padding:28px 36px;border-radius:24px;background:rgba(255,255,255,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 10px 30px rgba(19,42,79,.12)}",
    ".hero-title{font-size:36px;line-height:1.3;font-weight:700;color:var(--navy);margin-bottom:8px}",
    ".hero-sub{font-size:17px;color:#2f3d55;max-width:40ch}",
    ".hero-art{flex-shrink:0}",

    /* Partner list */
    ".panel{background:#fff;border-radius:22px;padding:22px;box-shadow:0 8px 30px rgba(19,42,79,.08)}",
    ".search{position:relative;margin-bottom:18px}",
    ".search input{width:100%;height:50px;border:1px solid #e3e9f2;border-radius:14px;padding-inline:48px 16px;background:#fff;outline:none}",
    ".search input::placeholder{color:#8a97ab}",
    ".search input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 16%,transparent)}",
    ".search svg{position:absolute;inset-inline-start:16px;top:50%;transform:translateY(-50%);color:#8a97ab;pointer-events:none}",
    ".chips{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px}",
    ".chip{display:inline-flex;align-items:center;gap:10px;height:44px;padding:0 18px;border-radius:999px;border:1px solid #e1e7f0;background:#f7f9fc;color:#2a3a55;font-weight:500;cursor:pointer}",
    ".chip svg{color:#3b4f73}",
    ".chip:hover{border-color:#b9c9e3;background:#fff}",
    ".chip[aria-pressed='true']{background:var(--primary);border-color:var(--primary);color:#fff}",
    ".chip[aria-pressed='true'] svg{color:#fff}",
    ".grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(max(190px,calc((100% - 60px) / 4)),1fr));gap:20px}", /* at most 4 per row */,
    ".card{display:flex;flex-direction:column;text-align:center;background:#fff;border:1px solid #edf1f6;border-radius:16px;overflow:hidden;box-shadow:0 4px 16px rgba(19,42,79,.08);transition:box-shadow .2s}",
    ".card[hidden]{display:none}",
    ".card:hover{box-shadow:0 8px 22px rgba(19,42,79,.13)}",
    ".card.is-selected{box-shadow:0 0 0 2px var(--primary),0 8px 22px color-mix(in srgb,var(--primary) 20%,transparent)}",
    ".card-media{position:relative;height:104px}",
    ".pic{position:absolute;inset:0;display:grid;place-items:center;overflow:hidden}",
    ".pic img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}",
    ".card-logo{position:relative;width:84px;height:84px;margin:-46px auto 6px;border-radius:50%;background:#fff;box-shadow:0 4px 12px rgba(19,42,79,.12);display:grid;place-items:center;overflow:hidden}",
    ".logo-mark{display:grid;place-items:center;width:100%;height:100%}",
    ".logo-mark img{width:72%;height:72%;object-fit:contain}",
    ".card-name{font-size:18px;font-weight:700;color:var(--navy);margin:0 12px 2px;line-height:1.4}",
    ".cat-row{display:inline-flex;align-items:center;justify-content:center;gap:8px;color:#5b6b85;font-size:14px;margin-bottom:14px}",
    ".card-btn{margin:auto 18px 16px;height:36px;border-radius:999px;border:1px solid #a9c1e8;background:#f2f6fd;color:var(--primary);font-size:14px;font-weight:600;cursor:pointer}",
    ".card-btn:hover{background:var(--primary);border-color:var(--primary);color:#fff}",
    ".empty{text-align:center;padding:48px 16px;color:#5b6b85}",
    ".empty[hidden]{display:none}",
    ".empty strong{display:block;color:var(--navy);font-size:17px;margin-bottom:4px}",

    /* Details panel */
    ".details{grid-area:details;position:sticky;top:24px;max-height:calc(100vh - var(--top) - 48px);display:flex;flex-direction:column;background:#fff;border-radius:22px;box-shadow:0 12px 36px rgba(19,42,79,.14);overflow:hidden}",
    ".details[hidden]{display:none}",
    ".d-head{display:flex;padding:14px 16px 0}",
    ".d-close{margin-inline-start:auto;width:40px;height:40px;border:0;border-radius:10px;background:none;color:var(--navy);display:grid;place-items:center;cursor:pointer}",
    ".d-close:hover{background:#f1f4f9}",
    ".d-scroll{overflow-y:auto;padding:6px 22px 8px}",
    ".d-media{position:relative;height:200px;border-radius:14px;overflow:hidden;margin-bottom:16px}",
    ".d-fade{position:absolute;inset:0;background:linear-gradient(to left,#fff 0%,rgba(255,255,255,.92) 34%,rgba(255,255,255,0) 64%)}",
    ".d-id{position:absolute;top:0;bottom:0;right:0;width:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:12px;text-align:center}",
    ".d-logo{width:88px;height:88px}",
    ".d-name{font-size:24px;font-weight:700;line-height:1.35;color:var(--navy)}",
    ".d-name:focus{outline:none}",
    ".d-chip{display:inline-flex;align-items:center;gap:6px;padding:2px 12px;border-radius:999px;background:#eef4fd;border:1px solid #d5e2f6;color:var(--primary);font-size:14px}",
    ".offer{display:flex;align-items:center;gap:16px;padding:16px 20px;margin-bottom:16px;border-radius:14px;background:#e9f1fc}",
    ".offer-text{flex:1;text-align:center}",
    ".offer-title{font-size:20px;font-weight:700;line-height:1.4;color:var(--primary-dark);margin-bottom:2px}",
    ".offer-note{color:#33415c;font-size:14.5px}",
    ".offer svg{flex-shrink:0;color:var(--primary);transform:rotate(-12deg)}",
    ".d-desc{color:#46546b;margin:0 4px 10px}",
    ".info{display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-top:1px solid #e8edf4}",
    ".info-icon{flex-shrink:0;width:42px;height:42px;border-radius:12px;background:#eef4fd;color:var(--primary);display:grid;place-items:center}",
    ".info h4{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:2px}",
    ".info p{color:#46546b;font-size:14.5px}",
    ".d-foot{padding:12px 22px 20px;background:#fff}",
    ".d-foot[hidden]{display:none}",
    ".cta{width:100%;height:52px;border:0;border-radius:12px;background:var(--primary);color:#fff;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:12px;cursor:pointer}",
    ".cta:hover{background:var(--primary-dark)}",
    ".backdrop{display:none}",
    "@media (prefers-reduced-motion:no-preference){.details{animation:slide-in .25s ease-out}}",
    "@keyframes slide-in{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}",

    /* Medium screens */
    "@media (max-width:1480px){.page.has-details .layout{grid-template-columns:minmax(360px,430px) minmax(0,1fr)}}",
    "@media (max-width:1180px){.layout{padding:74px 24px 32px}.page.has-details .layout{grid-template-columns:minmax(330px,400px) minmax(0,1fr)}.hero-title{font-size:30px}}",

    /* Small screens: details open as a drawer over the list */
    "@media (max-width:960px){",
    ".page.has-details .layout{grid-template-columns:minmax(0,1fr);grid-template-areas:'main'}",
    ".details{position:fixed;top:var(--top);bottom:0;right:0;z-index:30;width:min(460px,100%);max-height:none;border-radius:0}",
    ".page.has-details .backdrop{display:block;position:fixed;top:var(--top);left:0;right:0;bottom:0;z-index:25;background:rgba(10,22,44,.45)}",
    ".hero-card{width:100%}",
    "}",
    "@media (max-width:600px){",
    ".layout{padding:72px 14px 24px}",
    ".hero-card{padding:20px 22px;margin-bottom:22px}",
    ".hero-art{display:none}",
    ".hero-title{font-size:26px}",
    ".hero-sub{font-size:15px}",
    ".panel{padding:14px;border-radius:18px}",
    ".chips{flex-wrap:nowrap;overflow-x:auto;margin-inline:-14px;padding-inline:14px;padding-bottom:4px}",
    ".chip{flex-shrink:0;height:40px;padding:0 16px}",
    ".grid{grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px}",
    ".card-name{font-size:16px}",
    ".card-btn{margin-inline:12px}",
    ".d-name{font-size:21px}",
    "}"
  ].join("\n");

  // Constructable stylesheets first (less likely to be blocked by a strict
  // Content Security Policy), then a normal <style> element as a fallback.
  function applyStyles(root, css) {
    try {
      var sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      root.adoptedStyleSheets = [sheet];
      return;
    } catch (e) { /* not supported: use a <style> element */ }
    var style = document.createElement("style");
    style.textContent = css;
    root.appendChild(style);
  }

  // ---------- Build the page ----------
  var prevFocus = document.activeElement;
  var prevOverflow = document.body.style.overflow;

  // A shadow root keeps this page's styles and SuccessFactors' styles apart.
  var host = document.createElement("div");
  host.id = HOST_ID;
  Object.assign(host.style, {
    position: "fixed", top: CONFIG.topOffset, left: "0", right: "0", bottom: "0", zIndex: "2147483000"
  });
  var shadow = host.attachShadow({ mode: "open" });
  applyStyles(shadow, CSS);

  var page = el("div", "page");
  page.setAttribute("dir", "rtl");
  page.setAttribute("lang", "ar");
  page.setAttribute("role", "dialog");
  page.setAttribute("aria-modal", "true");
  page.setAttribute("aria-labelledby", "mz-title");
  page.tabIndex = -1;
  page.style.setProperty("--top", CONFIG.topOffset);
  page.style.setProperty("--font", CONFIG.fontFamily);
  page.style.setProperty("--primary", CONFIG.colors.primary);
  page.style.setProperty("--primary-dark", CONFIG.colors.primaryDark);
  page.style.setProperty("--navy", CONFIG.colors.navy);
  shadow.appendChild(page);

  // Hero background
  var heroBg = el("div", "hero-bg");
  if (CONFIG.heroImage) {
    var heroImg = document.createElement("img");
    heroImg.alt = "";
    heroImg.onerror = function () { if (heroImg.parentNode) heroImg.parentNode.removeChild(heroImg); warnImage(CONFIG.heroImage); };
    heroImg.src = CONFIG.heroImage;
    heroBg.appendChild(heroImg);
  }
  page.appendChild(heroBg);

  var closePageBtn = button("close-page");
  closePageBtn.setAttribute("aria-label", CONFIG.closePageLabel);
  closePageBtn.appendChild(icon("close", 22));
  page.appendChild(closePageBtn);

  var layout = el("div", "layout");
  page.appendChild(layout);

  var main = el("div", "main");
  layout.appendChild(main);

  // Hero card
  var heroCard = el("section", "hero-card");
  var heroText = el("div", "hero-text");
  var heroTitle = el("h2", "hero-title", CONFIG.title);
  heroTitle.id = "mz-title";
  heroText.appendChild(heroTitle);
  heroText.appendChild(el("p", "hero-sub", CONFIG.subtitle));
  var heroArt = el("div", "hero-art");
  heroArt.appendChild(heroIllustration());
  heroCard.appendChild(heroText);
  heroCard.appendChild(heroArt);
  main.appendChild(heroCard);

  // Search, filters, cards
  var panel = el("section", "panel");
  main.appendChild(panel);

  var search = el("div", "search");
  var searchInput = el("input");
  searchInput.type = "search";
  searchInput.placeholder = CONFIG.searchPlaceholder;
  searchInput.setAttribute("aria-label", CONFIG.searchPlaceholder);
  search.appendChild(searchInput);
  search.appendChild(icon("search", 20));
  panel.appendChild(search);

  var chips = el("div", "chips");
  chips.setAttribute("role", "group");
  var chipButtons = [];
  CATEGORIES.forEach(function (c) {
    var chip = button("chip");
    chip.appendChild(el("span", null, c.label));
    chip.appendChild(icon(c.icon, 20));
    chip.setAttribute("aria-pressed", c.id === "all" ? "true" : "false");
    chip.addEventListener("click", function () {
      state.category = c.id;
      chipButtons.forEach(function (b) { b.btn.setAttribute("aria-pressed", b.id === c.id ? "true" : "false"); });
      applyFilters();
    });
    chipButtons.push({ id: c.id, btn: chip });
    chips.appendChild(chip);
  });
  panel.appendChild(chips);

  var grid = el("div", "grid");
  panel.appendChild(grid);

  var empty = el("div", "empty");
  empty.appendChild(el("strong", null, CONFIG.emptyTitle));
  empty.appendChild(el("span", null, CONFIG.emptyText));
  empty.hidden = true;
  panel.appendChild(empty);

  var live = el("p", "sr-only");
  live.setAttribute("aria-live", "polite");
  panel.appendChild(live);

  var cards = PARTNERS.map(function (p) {
    var cat = catById[p.category] || {};
    var color = colorOf(p);
    var card = el("article", "card");

    var media = el("div", "card-media");
    media.appendChild(picture(p.image, "", color));
    card.appendChild(media);

    var logoWrap = el("div", "card-logo");
    logoWrap.appendChild(logoMark(p, color, 40));
    card.appendChild(logoWrap);

    card.appendChild(el("h3", "card-name", p.name));
    var catRow = el("div", "cat-row");
    catRow.appendChild(el("span", null, cat.label || ""));
    catRow.appendChild(icon(cat.icon, 18));
    card.appendChild(catRow);

    var viewBtn = button("card-btn", CONFIG.viewLabel);
    viewBtn.setAttribute("aria-label", CONFIG.viewLabel + ": " + p.name);
    viewBtn.addEventListener("click", function () { selectPartner(p.id, viewBtn, true); });
    card.appendChild(viewBtn);

    grid.appendChild(card);
    return { p: p, el: card };
  });

  // Details panel
  var backdrop = el("div", "backdrop");
  layout.appendChild(backdrop);

  var details = el("aside", "details");
  details.setAttribute("aria-labelledby", "mz-d-name");
  details.hidden = true;
  var dHead = el("div", "d-head");
  var dClose = button("d-close");
  dClose.setAttribute("aria-label", CONFIG.closeDetailsLabel);
  dClose.appendChild(icon("close", 22));
  dHead.appendChild(dClose);
  var dScroll = el("div", "d-scroll");
  var dFoot = el("div", "d-foot");
  var cta = button("cta");
  cta.appendChild(el("span", null, CONFIG.ctaLabel));
  cta.appendChild(icon("external", 20));
  dFoot.appendChild(cta);
  details.appendChild(dHead);
  details.appendChild(dScroll);
  details.appendChild(dFoot);
  layout.appendChild(details);

  // ---------- Behaviour ----------
  var state = { category: "all", query: "", selected: null, opener: null };

  function applyFilters() {
    var q = normalize(state.query);
    var count = 0;
    cards.forEach(function (c) {
      var show = (state.category === "all" || c.p.category === state.category) &&
                 (!q || normalize(c.p.name).indexOf(q) !== -1);
      c.el.hidden = !show;
      if (show) count++;
    });
    empty.hidden = count > 0;
    live.textContent = CONFIG.resultsLabel + count;
  }

  function infoRow(iconName, title, text) {
    var row = el("div", "info");
    var ic = el("span", "info-icon");
    ic.appendChild(icon(iconName, 22));
    var body = el("div");
    body.appendChild(el("h4", null, title));
    body.appendChild(el("p", null, text));
    row.appendChild(ic);
    row.appendChild(body);
    return row;
  }

  function renderDetails(p) {
    var cat = catById[p.category] || {};
    var color = colorOf(p);
    dScroll.textContent = "";

    var media = el("div", "d-media");
    media.appendChild(picture(p.image, "", color));
    media.appendChild(el("div", "d-fade"));
    var id = el("div", "d-id");
    var dLogo = logoMark(p, color, 58);
    dLogo.classList.add("d-logo");
    id.appendChild(dLogo);
    var name = el("h3", "d-name", p.name);
    name.id = "mz-d-name";
    name.tabIndex = -1;
    id.appendChild(name);
    var chip = el("span", "d-chip");
    chip.appendChild(el("span", null, cat.label || ""));
    chip.appendChild(icon(cat.icon, 16));
    id.appendChild(chip);
    media.appendChild(id);
    dScroll.appendChild(media);

    if (p.offerTitle || p.offerNote) {
      var offer = el("div", "offer");
      var offerText = el("div", "offer-text");
      if (p.offerTitle) offerText.appendChild(el("p", "offer-title", p.offerTitle));
      if (p.offerNote) offerText.appendChild(el("p", "offer-note", p.offerNote));
      offer.appendChild(offerText);
      offer.appendChild(icon("tag", 44));
      dScroll.appendChild(offer);
    }

    if (p.description) dScroll.appendChild(el("p", "d-desc", p.description));
    if (p.howTo) dScroll.appendChild(infoRow("card", CONFIG.labels.howTo, p.howTo));
    if (p.branches) dScroll.appendChild(infoRow("pin", CONFIG.labels.branches, p.branches));
    if (p.period) dScroll.appendChild(infoRow("calendar", CONFIG.labels.period, p.period));
    if (p.terms) dScroll.appendChild(infoRow("doc", CONFIG.labels.terms, p.terms));

    dFoot.hidden = !isHttps(p.url);
    dScroll.scrollTop = 0;
    return name;
  }

  function selectPartner(id, opener, moveFocus) {
    var p = partnerById[id];
    if (!p) return;
    state.selected = id;
    state.opener = opener || null;
    var heading = renderDetails(p);
    details.hidden = false;
    page.classList.add("has-details");
    cards.forEach(function (c) { c.el.classList.toggle("is-selected", c.p.id === id); });
    if (moveFocus) heading.focus({ preventScroll: true });
  }

  function closeDetails() {
    state.selected = null;
    details.hidden = true;
    page.classList.remove("has-details");
    cards.forEach(function (c) { c.el.classList.remove("is-selected"); });
    if (state.opener && state.opener.isConnected) state.opener.focus();
    state.opener = null;
  }

  function focusables() {
    return Array.prototype.filter.call(
      shadow.querySelectorAll("button, input, a[href]"),
      function (n) { return !n.disabled && n.getClientRects().length > 0; }
    );
  }

  function onKey(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      if (!details.hidden) closeDetails(); else closePage();
      return;
    }
    if (e.key !== "Tab") return;
    var items = focusables();
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1], active = shadow.activeElement;
    if (e.shiftKey && (active === first || !active)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (active === last || !active)) { e.preventDefault(); first.focus(); }
  }

  function closePage() {
    document.removeEventListener("keydown", onKey, true);
    if (host.parentNode) host.parentNode.removeChild(host);
    document.body.style.overflow = prevOverflow;
    try { if (prevFocus && prevFocus.focus) prevFocus.focus(); } catch (e) { /* ignore */ }
  }
  host._close = closePage;

  searchInput.addEventListener("input", function () { state.query = searchInput.value; applyFilters(); });
  closePageBtn.addEventListener("click", closePage);
  dClose.addEventListener("click", closeDetails);
  backdrop.addEventListener("click", closeDetails);
  cta.addEventListener("click", function () {
    var p = partnerById[state.selected];
    if (p && isHttps(p.url)) window.open(p.url, "_blank", "noopener");
  });
  document.addEventListener("keydown", onKey, true);

  // ---------- Open ----------
  applyFilters();
  if (CONFIG.openFirstPartner && PARTNERS.length && window.matchMedia("(min-width: 961px)").matches) {
    selectPartner(PARTNERS[0].id, null, false);
  }
  document.body.style.overflow = "hidden";
  document.body.appendChild(host);
  page.focus({ preventScroll: true });
})();

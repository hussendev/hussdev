import type { Localized } from "./types";

export type ExperienceKind = "work" | "volunteer" | "openSource" | "competition";

export interface Experience {
  id: string;
  kind: ExperienceKind;
  title: Localized;
  organization: Localized;
  location: Localized;
  start: string;
  end: string | null;
  bullets: Localized<string[]>;
}

export const experiences: Experience[] = [
  {
    id: "wepioners",
    kind: "work",
    title: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    organization: { en: "Wepioners", ar: "Wepioners" },
    location: { en: "Gaza, Palestine (Remote)", ar: "غزة، فلسطين (عن بُعد)" },
    start: "2025-05",
    end: null,
    bullets: {
      en: [
        "Lead mobile developer on the product portfolio, delivering four production Flutter apps from architecture through App Store and Google Play release",
        "Built BALONIA (16,000+ users) with LiveKit voice rooms, Socket.IO messaging, virtual coin economy, and RBAC on a NestJS backend",
        "Built Eduba, a spaced-repetition learning app (~33k Dart LOC) with Anki-compatible SRS, six card types, and RevenueCat IAP",
        "Built Dar Al-Asas, a gold-investment wallet platform for Iraq with a TypeScript Firebase backend (6 HTTPS callables, 2 Firestore triggers)",
        "Built E-Shabni as two published apps (passenger and driver) with Haversine matching, Firebase RTDB tracking, and WhatsApp OTP",
        "Standardized delivery on feature-first Clean Architecture with Cubit, GetIt, go_router, and dartz Either across all products",
      ],
      ar: [
        "مطوّر جوّال رئيسي في محفظة المنتجات، أسلّمت أربعة تطبيقات Flutter إنتاجية من المعمارية حتى النشر على App Store و Google Play",
        "بنيت BALONIA (+16,000 مستخدم) بغرف LiveKit الصوتية و Socket.IO واقتصاد العملات الافتراضية و RBAC على خلفية NestJS",
        "بنيت Eduba لتعلّم التكرار المتباعد (~33 ألف سطر Dart) بمحرك SRS متوافق مع Anki و6 أنواع بطاقات و RevenueCat",
        "بنيت دار الأساس لاستثمار الذهب والمحفظة في العراق مع خلفية Firebase TypeScript (6 callables و2 triggers)",
        "بنيت E-Shabni كتطبيقَيْن منشورين (راكب وسائق) بمطابقة Haversine وتتبّع Firebase RTDB و OTP واتساب",
        "وحّدت التسليم على Clean Architecture feature-first مع Cubit و GetIt و go_router و dartz Either",
      ],
    },
  },
  {
    id: "freelance",
    kind: "work",
    title: { en: "Freelance Flutter Developer", ar: "مطوّر Flutter مستقل" },
    organization: {
      en: "Remote — Australia, Qatar, Saudi Arabia, Egypt, Palestine",
      ar: "عن بُعد — أستراليا، قطر، السعودية، مصر، فلسطين",
    },
    location: { en: "Remote", ar: "عن بُعد" },
    start: "2025-10",
    end: null,
    bullets: {
      en: [
        "Delivered five production applications for international clients, owning each project end to end across time zones",
        "LinkedWithin (Australia) — AI life-management platform, 22 modules and ~83k Dart LOC with WebRTC voice coach and SSE streaming chat",
        "Mushaf Qatar (Ministry of Awqaf) — official Qur'an app; search and worship feature stream in a 1,000+ commit codebase",
        "Kayan Cafe (Egypt) — bilingual cafe-management SaaS, 18 modules and ~68k Dart LOC on Laravel Sanctum API",
        "MisterCar (Saudi) — car services platform with Telr payments, installment plans, and Google/Apple sign-in",
        "MMB (Nablus) — migrated a 500k+ LOC FluxStore template to hand-written Clean Architecture",
      ],
      ar: [
        "سلّمت خمسة تطبيقات إنتاجية لعملاء دوليين، بملكية كل مشروع من البداية للنهاية عبر مناطق زمنية مختلفة",
        "LinkedWithin (أستراليا) — منصّة إدارة حياة بالذكاء الاصطناعي، 22 وحدة و~83 ألف سطر Dart مع مدرب صوتي WebRTC ودردشة SSE",
        "مصحف قطر (وزارة الأوقاف) — تطبيق القرآن الرسمي؛ تدفّق البحث والعبادة في codebase يتجاوز 1000 commit",
        "كيان كافيه (مصر) — SaaS إدارة مقاهى ثنائي اللغة، 18 وحدة و~68 ألف سطر Dart على Laravel Sanctum",
        "MisterCar (السعودية) — خدمات سيارات مع Telr وخطط تقسيط وتسجيل Google/Apple",
        "MMB (نابلس) — ترحيل قالب FluxStore بـ500 ألف+ سطر إلى Clean Architecture مكتوبة يدويًا",
      ],
    },
  },
  {
    id: "imc",
    kind: "volunteer",
    title: { en: "Data Entry Volunteer", ar: "متطوّع إدخال بيانات" },
    organization: {
      en: "International Medical Corps (IMC)",
      ar: "الهيئة الطبية الدولية (IMC)",
    },
    location: { en: "Gaza, Palestine", ar: "غزة، فلسطين" },
    start: "2023-07",
    end: "2024-09",
    bullets: {
      en: [
        "Managed medical and aid-distribution data during the humanitarian crisis under strict confidentiality protocols",
        "Collaborated with international teams on accurate, timely data entry under severe operational constraints",
      ],
      ar: [
        "أدرت بيانات طبية وتوزيع مساعدات خلال الأزمة الإنسانية وفق بروتوكولات سرية صارمة",
        "تعاونت مع فرق دولية على إدخال بيانات دقيق وفي الوقت المناسب تحت قيود تشغيلية شديدة",
      ],
    },
  },
  {
    id: "bond-framework",
    kind: "openSource",
    title: { en: "Open-Source Contributor", ar: "مساهم في المصادر المفتوحة" },
    organization: { en: "Bond Framework (Flutter)", ar: "إطار عمل Bond (Flutter)" },
    location: { en: "Remote", ar: "عن بُعد" },
    start: "2023-06",
    end: "2023-08",
    bullets: {
      en: [
        "Contributed to the core library, improving state management, authentication, and theming components",
      ],
      ar: [
        "ساهمت في المكتبة الأساسية، وحسّنت مكوّنات إدارة الحالة والمصادقة والسمات",
      ],
    },
  },
  {
    id: "developer-plus",
    kind: "work",
    title: { en: "Mobile Application Developer", ar: "مطوّر تطبيقات جوّال" },
    organization: { en: "Developer Plus Company", ar: "شركة Developer Plus" },
    location: { en: "Gaza, Palestine", ar: "غزة، فلسطين" },
    start: "2023-01",
    end: "2023-07",
    bullets: {
      en: [
        "Architected and shipped 4+ commercial Flutter applications with 10,000+ combined downloads",
        "Mentored 3 junior developers on Flutter best practices, Clean Architecture, and code review standards",
        "Established the team's code review process and reusable widget library, reducing feature development time",
        "Integrated Firebase Realtime Database, push notifications, and authentication; built offline-first storage with SQLite and Hive",
      ],
      ar: [
        "صمّمت وأطلقت أكثر من 4 تطبيقات Flutter تجارية بأكثر من 10,000 تحميل إجمالي",
        "وجّهت 3 مطوّرين مبتدئين في أفضل ممارسات Flutter و Clean Architecture ومعايير مراجعة الكود",
        "أسّست عملية مراجعة الكود ومكتبة عناصر قابلة لإعادة الاستخدام، مما قلّص وقت تطوير الميزات",
        "دمجت Firebase Realtime Database والإشعارات والمصادقة؛ وبنيت تخزينًا offline-first بـ SQLite و Hive",
      ],
    },
  },
];

export interface Education {
  degree: Localized;
  school: Localized;
  location: Localized;
  start: string;
  end: string;
  detail: Localized;
}

export const education: Education[] = [
  {
    degree: {
      en: "Bachelor of Information Technology",
      ar: "بكالوريوس تكنولوجيا المعلومات",
    },
    school: { en: "Islamic University of Gaza", ar: "الجامعة الإسلامية بغزة" },
    location: { en: "Gaza, Palestine", ar: "غزة، فلسطين" },
    start: "2020-09",
    end: "2024-02",
    detail: {
      en: "GPA 89.39 / 100 (Excellent). Completed the degree during the 2023 war in Gaza under severe disruption to campus operations. Coursework: Advanced Software Engineering, Mobile Application Development, Database Management Systems, Web Technologies, OOP.",
      ar: "المعدل 89.39 / 100 (امتياز). أُنجزت الدرجة خلال حرب 2023 في غزة تحت انقطاع شديد في عمليات الحرم الجامعي. مواد: هندسة برمجيات متقدّمة، تطوير تطبيقات الجوّال، إدارة قواعد البيانات، تقنيات الويب، OOP.",
    },
  },
];

export const certifications: Localized<string[]> = {
  en: [
    "Professional Flutter Development (Udemy)",
    "Advanced Java Programming (Udemy)",
    "Web Development Fundamentals (Udemy)",
    "Palestinian Collegiate Programming Contest (PCPC) — Oct 2024",
  ],
  ar: [
    "تطوير Flutter المهني (Udemy)",
    "برمجة Java المتقدّمة (Udemy)",
    "أساسيات تطوير الويب (Udemy)",
    "مسابقة البرمجة الجامعية الفلسطينية (PCPC) — أكتوبر 2024",
  ],
};

export const languages: Localized<string[]> = {
  en: [
    "Arabic — Native",
    "English — Professional working proficiency (undergraduate degree delivered in English)",
  ],
  ar: [
    "العربية — اللغة الأم",
    "الإنجليزية — كفاءة مهنية (الدرجة الجامعية بالإنجليزية)",
  ],
};

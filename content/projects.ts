import type { Localized } from "./types";

export type Platform = "android" | "ios" | "both";
export type Category =
  | "social"
  | "transport"
  | "commerce"
  | "healthcare"
  | "education"
  | "services";
export type Status = "production" | "productionReady";

export type StackTag =
  | "Flutter"
  | "Dart"
  | "BLoC/Cubit"
  | "Riverpod"
  | "GetX"
  | "Provider"
  | "Firebase"
  | "Firestore"
  | "Realtime DB"
  | "FCM"
  | "Cloud Functions"
  | "NestJS"
  | "LiveKit"
  | "Socket.IO"
  | "WebRTC"
  | "SSE"
  | "Hive"
  | "Drift"
  | "SQLite"
  | "Google Maps"
  | "Telr"
  | "RevenueCat"
  | "WebView"
  | "Deep Links"
  | "REST API"
  | "Dio"
  | "go_router"
  | "AI Chatbot"
  | "CI/CD";

export interface ProjectMetric {
  value: string;
  label: Localized;
}

export interface Project {
  slug: string;
  name: string;
  localizedName: Localized;
  tagline: Localized;
  summary: Localized;
  overview: Localized;
  highlights: Localized<string[]>;
  role: Localized;
  market: Localized;
  platform: Platform;
  category: Category;
  status: Status;
  stack: StackTag[];
  metrics: ProjectMetric[];
  featured: boolean;
  accent: string;
  accentSoft: string;
  image: string;
  mockup?: string;
  year: string;
  storeLinks?: {
    appStore?: string;
    playStore?: string;
    apps?: {
      label: Localized;
      appStore?: string;
      playStore?: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    slug: "mushaf-qatar",
    name: "Mushaf Qatar",
    localizedName: { en: "Mushaf Qatar", ar: "مصحف قطر" },
    tagline: {
      en: "Official Qur'an application, Ministry of Awqaf and Islamic Affairs.",
      ar: "تطبيق القرآن الرسمي، وزارة الأوقاف والشؤون الإسلامية.",
    },
    summary: {
      en: "Official Qur'an app with 50,000+ downloads and 4.5★ rating; feature-stream engineer on search, worship, prayer times, and qibla in a 4-developer team.",
      ar: "تطبيق القرآن الرسمي بأكثر من 50,000 تحميل وتقييم 4.5★؛ مهندس تدفّق ميزات البحث والعبادة ومواقيت الصلاة والقبلة ضمن فريق من 4 مطوّرين.",
    },
    overview: {
      en: "Contributed to Qatar's official Qur'an application as a feature-stream engineer in a four-person team across a 1,000+ commit, CI-gated repository supporting Arabic, English, Urdu, and Hindi with full RTL. Implemented offline diacritic-insensitive Arabic search across 114 surahs using a Dart isolate word index with CI-enforced latency budgets (p50 ≤ 25 ms, p95 ≤ 75 ms). Built on-device prayer times with the adhan library, Workmanager background refresh, and Hijri calendar tables validated by golden tests against Qatar Calendar House reference data.",
      ar: "ساهمت في تطبيق القرآن الرسمي لقطر كمهندس تدفّق ميزات ضمن فريق من أربعة في مستودع يتجاوز 1000 commit مع CI، يدعم العربية والإنجليزية والأردية والهندية وRTL كامل. نفّذت بحثًا عربيًا offline غير حسّاس للحركات عبر 114 سورة بفهرس كلمات في Dart isolate مع ميزانيات زمنية في CI. بنيت مواقيت صلاة على الجهاز مع adhan و Workmanager وجداول هجري مُتحقَّق منها باختبارات golden.",
    },
    highlights: {
      en: [
        "50,000+ downloads, 4.5★ (947 reviews) on App Store and Google Play",
        "Offline Arabic Qur'an search with Dart isolate index and CI latency budgets",
        "On-device prayer times, qibla with magnetic declination, tasbih and adhān playback",
        "33 non-merge commits across 325 files; 21 test files added to CI-gated repo",
        "4 locales: Arabic, English, Urdu, Hindi with RTL",
      ],
      ar: [
        "أكثر من 50,000 تحميل وتقييم 4.5★ (947 مراجعة) على App Store و Google Play",
        "بحث قرآني عربي offline بفهرس isolate وميزانيات زمنية في CI",
        "مواقيت صلاة على الجهاز، قبلة مع انحراف مغناطيسي، تسبيح وأذان",
        "33 commit غير دمجية عبر 325 ملفًا؛ 21 ملف اختبار في مستودع CI",
        "4 لغات: عربي، إنجليزي، أردي، هندي مع RTL",
      ],
    },
    role: { en: "Feature-Stream Engineer", ar: "مهندس تدفّق ميزات" },
    market: { en: "Qatar", ar: "قطر" },
    platform: "both",
    category: "education",
    status: "production",
    stack: ["Flutter", "Firebase", "FCM", "CI/CD"],
    metrics: [
      { value: "50K+", label: { en: "Downloads", ar: "تحميل" } },
      { value: "4.5★", label: { en: "App rating", ar: "تقييم التطبيق" } },
      { value: "4", label: { en: "Locales", ar: "لغات" } },
    ],
    featured: true,
    accent: "#14532d",
    accentSoft: "#4ade80",
    image: "/projects/mockups/mushaf-qatar.jpg",
    mockup: "/projects/mockups/mushaf-qatar.jpg",
    year: "2025",
    storeLinks: {
      appStore: "https://apps.apple.com/app/id500544210",
      playStore: "https://play.google.com/store/apps/details?id=com.islamweb.ns.quran",
    },
  },
  {
    slug: "linkedwithin",
    name: "LinkedWithin",
    localizedName: { en: "LinkedWithin", ar: "LinkedWithin" },
    tagline: {
      en: "AI-powered life management platform.",
      ar: "منصّة إدارة حياة مدعومة بالذكاء الاصطناعي.",
    },
    summary: {
      en: "Pre-launch production-ready app with 22 modules and ~83,000 Dart LOC — sole developer. Streaming AI coach over SSE, WebRTC voice assistant, and RevenueCat + Stripe billing.",
      ar: "تطبيق جاهز للإنتاج قبل الإطلاق بـ22 وحدة و~83,000 سطر Dart — مطوّر وحيد. مدرب AI عبر SSE، مساعد صوتي WebRTC، و RevenueCat + Stripe.",
    },
    overview: {
      en: "LinkedWithin is a 22-module Clean Architecture Flutter app with 26 Cubits, 131 use cases, 40 repositories, and 38 go_router routes against a versioned REST API. The streaming AI coach uses Server-Sent Events with a line-based event parser, sealed event types, and mid-stream disconnect recovery. A WebRTC voice assistant handles parallel local-offer and session creation with ICE gathering timeout and Android audio focus. RevenueCat in-app purchases work alongside Stripe web billing with entitlement polling until Pro access syncs.",
      ar: "LinkedWithin تطبيق Flutter بـ22 وحدة و Clean Architecture و26 Cubit و131 use case و40 repository و38 مسار go_router على REST API. المدرب AI يستخدم SSE مع parser للأحداث وأنواع sealed واستعادة عند انقطاع الاتصال. مساعد WebRTC الصوتي يدير عروض ICE وتركيز الصوت على Android. RevenueCat يعمل مع Stripe web مع polling للصلاحيات حتى مزامنة Pro.",
    },
    highlights: {
      en: [
        "22 modules, ~83,000 Dart LOC, sole developer",
        "SSE streaming AI coach with disconnect recovery",
        "WebRTC voice assistant with ICE timeout and audio focus",
        "Within Drive file vault: ticket → S3 presigned PUT → commit pipeline",
        "Google & Apple OAuth with SHA-256 nonce and refresh-token rotation",
      ],
      ar: [
        "22 وحدة، ~83,000 سطر Dart، مطوّر وحيد",
        "مدرب AI عبر SSE مع استعادة عند الانقطاع",
        "مساعد صوتي WebRTC مع ICE timeout وتركيز صوت",
        "خزنة Within Drive: ticket → S3 presigned PUT → commit",
        "OAuth Google و Apple مع nonce SHA-256 وتدوير refresh token",
      ],
    },
    role: { en: "Sole Developer", ar: "مطوّر وحيد" },
    market: { en: "Australia", ar: "أستراليا" },
    platform: "both",
    category: "services",
    status: "productionReady",
    stack: ["Flutter", "BLoC/Cubit", "SSE", "WebRTC", "RevenueCat", "go_router", "REST API"],
    metrics: [
      { value: "83K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "22", label: { en: "Modules", ar: "وحدات" } },
      { value: "26", label: { en: "Cubits", ar: "Cubit" } },
    ],
    featured: false,
    accent: "#312e81",
    accentSoft: "#818cf8",
    image: "/projects/mockups/linkedwithin.png",
    mockup: "/projects/mockups/linkedwithin.png",
    year: "2025",
  },
  {
    slug: "balonia",
    name: "Balonia",
    localizedName: { en: "Balonia", ar: "بالونيا" },
    tagline: {
      en: "Social live-streaming and real-time communication platform.",
      ar: "منصّة بث مباشر اجتماعي وتواصل في الوقت الحقيقي.",
    },
    summary: {
      en: "Social platform that grew to 16,000+ users with LiveKit group voice rooms, Socket.IO messaging, virtual coin economy, gifting, and RBAC on a NestJS backend.",
      ar: "منصّة اجتماعية نمت إلى أكثر من 16,000 مستخدم مع غرف LiveKit الصوتية و Socket.IO واقتصاد العملات والهدايا و RBAC على NestJS.",
    },
    overview: {
      en: "Balonia is a social live-streaming product built at Wepioners with LiveKit group voice rooms, Socket.IO real-time messaging, a virtual coin economy with gifting, role-based access control, and a NestJS backend. Delivered with feature-first Clean Architecture, Cubit state management, GetIt, go_router, and Arabic-first RTL localization.",
      ar: "بالونيا منتج بث اجتماعي مبني في Wepioners مع غرف LiveKit و Socket.IO واقتصاد عملات افتراضي وهدايا و RBAC وخلفية NestJS. يُسلَّم بـ Clean Architecture feature-first و Cubit و GetIt و go_router وتعريب RTL.",
    },
    highlights: {
      en: [
        "16,000+ users on Android and iOS",
        "LiveKit group voice rooms and Socket.IO messaging",
        "Virtual coin economy with social gifting",
        "Role-based access: User, Admin, Agent",
        "NestJS backend with Clean Architecture and CI/CD",
      ],
      ar: [
        "أكثر من 16,000 مستخدم على Android و iOS",
        "غرف LiveKit الصوتية ومراسلة Socket.IO",
        "اقتصاد عملات افتراضي وهدايا اجتماعية",
        "صلاحيات: مستخدم، مشرف، وكيل",
        "خلفية NestJS مع Clean Architecture و CI/CD",
      ],
    },
    role: { en: "Lead Flutter Developer", ar: "مطوّر Flutter رئيسي" },
    market: { en: "MENA", ar: "الشرق الأوسط وشمال أفريقيا" },
    platform: "both",
    category: "social",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "LiveKit", "Socket.IO", "NestJS", "Firebase", "Hive", "CI/CD"],
    metrics: [
      { value: "16K+", label: { en: "Users", ar: "مستخدم" } },
      { value: "LiveKit", label: { en: "Voice rooms", ar: "غرف صوتية" } },
      { value: "NestJS", label: { en: "Backend", ar: "الخلفية" } },
    ],
    featured: false,
    accent: "#4c1d95",
    accentSoft: "#a78bfa",
    image: "/projects/mockups/balonia.jpg",
    mockup: "/projects/mockups/balonia.jpg",
    year: "2025",
  },
  {
    slug: "kayan-cafe",
    name: "Kayan Cafe",
    localizedName: { en: "Kayan Cafe", ar: "كيان كافيه" },
    tagline: {
      en: "Multi-tenant cafe management SaaS.",
      ar: "SaaS إدارة مقاهى متعدد المستأجرين.",
    },
    summary: {
      en: "Arabic-first bilingual SaaS with 18 modules and ~68,000 Dart LOC on Laravel Sanctum API — live on Google Play.",
      ar: "SaaS ثنائي اللغة عربي أولًا بـ18 وحدة و~68,000 سطر Dart على Laravel Sanctum — منشور على Google Play.",
    },
    overview: {
      en: "Kayan Cafe is an AR/EN RTL-first SaaS client with 44 Cubits, 18 feature modules, and ~42 screens over a Laravel Sanctum REST API. The Dio HTTP layer implements RFC 7807 Problem Details, Idempotency-Key headers on writes, and If-Match optimistic concurrency. Includes a print-safe voucher template editor, async batch PDF export, cafe lifecycle management, wallet invoicing, and 26 test files (~5,000 LOC).",
      ar: "كيان كافيه عميل SaaS AR/EN RTL-first بـ44 Cubit و18 وحدة و~42 شاشة على Laravel Sanctum. طبقة Dio تنفّذ RFC 7807 و Idempotency-Key و If-Match. يتضمّن محرّر قسائم للطباعة وتصدير PDF غير متزامن وإدارة دورة حياة المقهى و26 ملف اختبار.",
    },
    highlights: {
      en: [
        "~68,000 Dart LOC, 18 modules, sole developer",
        "RFC 7807 errors, Idempotency-Key, If-Match concurrency",
        "Voucher template editor on 320×200 canvas with JPEG recompression",
        "Async batch PDF export with exponential backoff polling",
        "Live on Google Play",
      ],
      ar: [
        "~68,000 سطر Dart، 18 وحدة، مطوّر وحيد",
        "RFC 7807 و Idempotency-Key و If-Match",
        "محرّر قسائم 320×200 مع ضغط JPEG",
        "تصدير PDF غير متزامن مع backoff",
        "منشور على Google Play",
      ],
    },
    role: { en: "Sole Developer", ar: "مطوّر وحيد" },
    market: { en: "Egypt", ar: "مصر" },
    platform: "both",
    category: "services",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "Dio", "REST API", "go_router"],
    metrics: [
      { value: "68K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "44", label: { en: "Cubits", ar: "Cubit" } },
      { value: "26", label: { en: "Test files", ar: "ملف اختبار" } },
    ],
    featured: false,
    accent: "#78350f",
    accentSoft: "#fcd34d",
    image: "/projects/mockups/kayan-cafe.jpg",
    mockup: "/projects/mockups/kayan-cafe.jpg",
    year: "2025",
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.kayan.app",
    },
  },
  {
    slug: "eduba",
    name: "Eduba",
    localizedName: { en: "Eduba", ar: "Eduba" },
    tagline: {
      en: "Spaced-repetition learning platform.",
      ar: "منصّة تعلّم بالتكرار المتباعد.",
    },
    summary: {
      en: "Live on App Store and Google Play with Anki-compatible SRS engine, six card types, RevenueCat IAP, and offline study sync.",
      ar: "منشور على App Store و Google Play بمحرك SRS متوافق مع Anki و6 أنواع بطاقات و RevenueCat ومزامنة دراسة offline.",
    },
    overview: {
      en: "Eduba is an 11-module spaced-repetition app (~33,000 Dart LOC) with an Anki-compatible engine covering new/learning/review/relearning queues, ease-factor scheduling, and leech handling. Windowed study sessions prefetch at 10 remaining cards with Hive-backed retry queues. Six card types include MCQ, drag-to-match, and just_audio playback. RevenueCat IAP with sealed result types and email/OTP auth with device-UUID binding.",
      ar: "Eduba تطبيق تكرار متباعد بـ11 وحدة (~33,000 سطر Dart) بمحرك متوافق مع Anki وطوابير new/learning/review/relearning. جلسات دراسة بنافذة و prefetch عند 10 بطاقات متبقية. 6 أنواع بطاقات و RevenueCat ومصادقة email/OTP بربط UUID.",
    },
    highlights: {
      en: [
        "Anki-compatible SRS engine with server-configurable parameters",
        "Six card types: MCQ, true/false, drag-to-match, audio",
        "RevenueCat IAP with restore and pending-sync recovery",
        "Windowed study with Hive retry queue for failed uploads",
        "Live on App Store and Google Play",
      ],
      ar: [
        "محرك SRS متوافق مع Anki بمعاملات قابلة للضبط",
        "6 أنواع بطاقات: MCQ، صح/خطأ، سحب، صوت",
        "RevenueCat IAP مع استعادة ومزامنة معلّقة",
        "دراسة بنافذة وطابور Hive للرفع الفاشل",
        "منشور على App Store و Google Play",
      ],
    },
    role: { en: "Sole Developer", ar: "مطوّر وحيد" },
    market: { en: "MENA", ar: "الشرق الأوسط وشمال أفريقيا" },
    platform: "both",
    category: "education",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "RevenueCat", "Hive", "FCM", "REST API"],
    metrics: [
      { value: "33K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "6", label: { en: "Card types", ar: "أنواع بطاقات" } },
      { value: "70+", label: { en: "Tests", ar: "اختبار" } },
    ],
    featured: true,
    accent: "#1e40af",
    accentSoft: "#93c5fd",
    image: "/projects/mockups/eduba.png",
    mockup: "/projects/mockups/eduba.png",
    year: "2025",
    storeLinks: {
      appStore: "https://apps.apple.com/app/eduba/id6762039465",
      playStore: "https://play.google.com/store/apps/details?id=wepioners.eduba.com",
    },
  },
  {
    slug: "hunter-rank",
    name: "Hunter Rank",
    localizedName: { en: "Hunter Rank", ar: "Hunter Rank" },
    tagline: {
      en: "Solo Leveling–inspired habit tracker with RPG progression.",
      ar: "متتبّع عادات مستوحى من Solo Leveling مع تقدّم بأسلوب RPG.",
    },
    summary: {
      en: "Live on App Store and Google Play — sole developer on a ~40,000-line Flutter app with habits, goals, XP/coins, store, badges, daily wheel, and EN/AR RTL against a Laravel API.",
      ar: "منشور على App Store و Google Play — مطوّر وحيد على تطبيق Flutter ~40,000 سطر مع عادات وأهداف وXP/عملات ومتجر وشارات وعجلة يومية و EN/AR RTL على Laravel API.",
    },
    overview: {
      en: "Hunter Rank turns daily habits and goals into an RPG-style progression loop. Built feature-first with Clean Architecture, 9 modules, 12 Cubits, 60 use cases, and dartz Either error handling against a Laravel REST API at api.hunterrank.app. JWT auth with refresh queuing, Hive session restore, OTP verify/reset, and App Links. Gamification includes streaks, freezes, heatmaps, coin store, CustomPainter daily wheel, loot-box animation, and five purchasable themes. Timezone-aware local reminders plus FCM push with token sync. Full bilingual UI: 547 ARB keys, RTL, Cairo/Orbitron/Inter, and bilingual API errors.",
      ar: "Hunter Rank يحوّل العادات والأهداف اليومية إلى حلقة تقدّم بأسلوب RPG. بُني feature-first بـ Clean Architecture و9 وحدات و12 Cubit و60 use case و dartz Either على Laravel REST API. JWT مع refresh queue و Hive و OTP و App Links. gamification: streaks و freezes و heatmaps ومتجر عملات وعجلة CustomPainter وصناديق غنائم و5 ثيمات. تذكيرات محلية حسب المنطقة الزمنية و FCM. واجهة ثنائية اللغة: 547 مفتاح ARB و RTL وخطوط Cairo/Orbitron/Inter.",
    },
    highlights: {
      en: [
        "~40,000 Dart LOC, 9 modules, 28 screens — sole developer",
        "Laravel REST API with JWT refresh queue and bilingual error mapping",
        "Habits: streaks, freezes, heatmaps, multi-time timezone-aware reminders",
        "Goals with optimistic create/complete and rollback on failure",
        "Live on App Store and Google Play (v1.0.3)",
      ],
      ar: [
        "~40,000 سطر Dart، 9 وحدات، 28 شاشة — مطوّر وحيد",
        "Laravel REST API مع JWT refresh queue ومعالجة أخطاء ثنائية اللغة",
        "عادات: streaks و freezes و heatmaps وتذكيرات متعددة حسب المنطقة الزمنية",
        "أهداف مع إنشاء/إكمال optimistic و rollback عند الفشل",
        "منشور على App Store و Google Play (v1.0.3)",
      ],
    },
    role: { en: "Sole Developer", ar: "مطوّر وحيد" },
    market: { en: "Global (EN/AR)", ar: "عالمي (EN/AR)" },
    platform: "both",
    category: "services",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "Dio", "Hive", "Firebase", "FCM", "Deep Links", "REST API"],
    metrics: [
      { value: "40K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "9", label: { en: "Modules", ar: "وحدات" } },
      { value: "547", label: { en: "ARB keys", ar: "مفتاح ARB" } },
    ],
    featured: false,
    accent: "#4c1d95",
    accentSoft: "#fbbf24",
    image: "/projects/mockups/hunter-rank.png",
    mockup: "/projects/mockups/hunter-rank.png",
    year: "2026",
    storeLinks: {
      appStore: "https://apps.apple.com/us/app/hunter-rank/id6786148849",
      playStore: "https://play.google.com/store/apps/details?id=com.hunterrank.app",
    },
  },
  {
    slug: "mmb",
    name: "MMB",
    localizedName: { en: "MMB (Al-Mulook)", ar: "المُلوك (MMB)" },
    tagline: {
      en: "Salon booking and e-commerce platform.",
      ar: "منصّة حجز صالونات وتجارة إلكترونية.",
    },
    summary: {
      en: "Live on App Store and Google Play; migrated 500k+ LOC FluxStore template to ~33k LOC Clean Architecture rewrite.",
      ar: "منشور على App Store و Google Play؛ ترحيل قالب FluxStore بـ500 ألف+ سطر إلى ~33 ألف سطر Clean Architecture.",
    },
    overview: {
      en: "MMB is a salon booking and e-commerce app for Nablus, Palestine. The project migrated a 500,000+ LOC FluxStore/WooCommerce template to a hand-written feature-first Clean Architecture app (14 modules, 17 Cubits, 44 use cases), deleting ~493k lines and authoring ~22k in the rewrite. Features a five-step appointment wizard, WebView payment injection, OpenStreetMap branch map, and bilingual RTL with 350+ ARB keys.",
      ar: "MMB تطبيق حجز صالونات وتجارة إلكترونية في نابلس. رُحِّل قالب FluxStore بـ500 ألف+ سطر إلى Clean Architecture (14 وحدة، 17 Cubit، 44 use case). معالج حجز من 5 خطوات ودفع WebView وخريطة OpenStreetMap و350+ مفتاح ARB.",
    },
    highlights: {
      en: [
        "500k+ LOC template migrated to ~33k LOC Clean Architecture",
        "Five-step booking wizard with live availability slots",
        "WebView payment with return-URL interception",
        "Reduced iOS launch stalls (~50s) via image cache tuning",
        "Live on App Store and Google Play",
      ],
      ar: [
        "ترحيل 500 ألف+ سطر إلى ~33 ألف سطر Clean Architecture",
        "معالج حجز 5 خطوات مع فتحات متاحة مباشرة",
        "دفع WebView مع اعتراض return URL",
        "تقليل بطء إطلاق iOS (~50 ث) بضبط ذاكرة الصور",
        "منشور على App Store و Google Play",
      ],
    },
    role: { en: "Sole Developer", ar: "مطوّر وحيد" },
    market: { en: "Palestine", ar: "فلسطين" },
    platform: "both",
    category: "commerce",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "WebView", "REST API", "FCM"],
    metrics: [
      { value: "33K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "14", label: { en: "Modules", ar: "وحدات" } },
      { value: "350+", label: { en: "ARB keys", ar: "مفتاح ARB" } },
    ],
    featured: true,
    accent: "#831843",
    accentSoft: "#f9a8d4",
    image: "/projects/mockups/mmb.jpg",
    mockup: "/projects/mockups/mmb.jpg",
    year: "2025",
    storeLinks: {
      appStore: "https://apps.apple.com/app/mmb/id6462795471",
      playStore: "https://play.google.com/store/apps/details?id=ps.mmb.app",
    },
  },
  {
    slug: "mistercar",
    name: "MisterCar",
    localizedName: { en: "MisterCar", ar: "مستر كار" },
    tagline: {
      en: "Car services and licensing platform for Saudi Arabia.",
      ar: "منصّة خدمات سيارات وتراخيص للسوق السعودي.",
    },
    summary: {
      en: "Live on App Store and Google Play (~24,000 Dart LOC) with Telr XML payments, installment plans, Google/Apple sign-in, and bilingual RTL.",
      ar: "منشور على App Store و Google Play (~24,000 سطر Dart) مع Telr وخطط تقسيط وتسجيل Google/Apple وتعريب RTL.",
    },
    overview: {
      en: "MisterCar is a car services and licensing platform for the Saudi market. Telr integration uses the XML Mobile API and webview_flutter with mastercar:// deep links and double-finalize guards. Subscription checkout supports full vs installment plans with discount codes. Ships with Google Maps home screen, SVG custom markers, R8 minification on Android, and 239 localization keys.",
      ar: "MisterCar منصّة خدمات وتراخيص سيارات للسعودية. Telr عبر XML Mobile API و webview_flutter مع deep links mastercar://. الدفع يدعم التقسيط وأكواد الخصم. خرائط Google و239 مفتاح تعريب و R8 على Android.",
    },
    highlights: {
      en: [
        "Telr XML Mobile API with WebView and deep-link callbacks",
        "Installment plans and first-payment discount codes",
        "Google Sign-In and Sign in with Apple (SHA-256 nonce)",
        "Bilingual AR/EN RTL with 239 localization keys",
        "Live on App Store and Google Play",
      ],
      ar: [
        "Telr XML Mobile API مع WebView و deep links",
        "خطط تقسيط وأكواد خصم الدفعة الأولى",
        "Google Sign-In و Sign in with Apple (nonce SHA-256)",
        "تعريب AR/EN RTL بـ239 مفتاح",
        "منشور على App Store و Google Play",
      ],
    },
    role: { en: "Primary Developer", ar: "المطوّر الرئيسي" },
    market: { en: "Saudi Arabia", ar: "السعودية" },
    platform: "both",
    category: "services",
    status: "production",
    stack: ["Flutter", "Firebase", "Telr", "WebView", "Deep Links", "Google Maps", "FCM"],
    metrics: [
      { value: "24K", label: { en: "Dart LOC", ar: "سطر Dart" } },
      { value: "Telr", label: { en: "Payments", ar: "المدفوعات" } },
      { value: "2", label: { en: "Languages", ar: "لغتان" } },
    ],
    featured: false,
    accent: "#7c2d12",
    accentSoft: "#fb923c",
    image: "/projects/mockups/mistercar.png",
    mockup: "/projects/mockups/mistercar.png",
    year: "2025",
    storeLinks: {
      appStore: "https://apps.apple.com/app/id6758611421",
      playStore: "https://play.google.com/store/apps/details?id=com.mistercarsa.abd_aziz_app",
    },
  },
  {
    slug: "dar-al-asas",
    name: "Dar Al-Asas",
    localizedName: { en: "Dar Al-Asas", ar: "دار الأساس" },
    tagline: {
      en: "Gold investment and wallet platform for Iraq.",
      ar: "منصّة استثمار ذهب ومحفظة للعراق.",
    },
    summary: {
      en: "Full-stack: 9-module Flutter client plus TypeScript Firebase backend with atomic Firestore transactions for gold/dinar ledger.",
      ar: "Full-stack: عميل Flutter بـ9 وحدات وخلفية Firebase TypeScript بمعاملات Firestore ذرية لدفتر ذهب/دينار.",
    },
    overview: {
      en: "Dar Al-Asas is a gold investment and wallet platform for the Iraqi market. The Flutter client (17 Cubits, 22 use cases) pairs with a TypeScript Firebase backend (~820 LOC) with 6 HTTPS callables and 2 Firestore triggers. Investment subscription, wallet withdrawal (Mastercard and ZainCash), and daily profit claiming run as atomic transactions over a dual gold/dinar ledger with server-clock-aligned 24-hour cooldown.",
      ar: "دار الأساس منصّة استثمار ذهب ومحفظة للعراق. عميل Flutter (17 Cubit، 22 use case) مع خلفية Firebase TypeScript (~820 سطر) بـ6 callables و2 triggers. الاشتراك والسحب (Mastercard و ZainCash) وclaim الأرباح اليومية كمعاملات ذرية على دفتر ذهب/دينار.",
    },
    highlights: {
      en: [
        "Flutter client + TypeScript Cloud Functions backend",
        "Atomic Firestore transactions for monetary operations",
        "WhatsApp OTP via Wevlix API with TTL and attempt limits",
        "FCM fan-out with stale-token cleanup",
        "Live on App Store and Google Play",
      ],
      ar: [
        "عميل Flutter + خلفية Cloud Functions TypeScript",
        "معاملات Firestore ذرية للعمليات المالية",
        "OTP واتساب عبر Wevlix API مع TTL وحد محاولات",
        "FCM fan-out مع تنظيف tokens منتهية",
        "منشور على App Store و Google Play",
      ],
    },
    role: { en: "Sole Developer (Flutter + Backend)", ar: "مطوّر وحيد (Flutter + Backend)" },
    market: { en: "Iraq", ar: "العراق" },
    platform: "both",
    category: "commerce",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "Firebase", "Firestore", "Cloud Functions", "FCM"],
    metrics: [
      { value: "9", label: { en: "Modules", ar: "وحدات" } },
      { value: "6", label: { en: "Callables", ar: "Callable" } },
      { value: "2", label: { en: "Triggers", ar: "Trigger" } },
    ],
    featured: false,
    accent: "#854d0e",
    accentSoft: "#fde047",
    image: "/projects/mockups/dar-al-asas.png",
    mockup: "/projects/mockups/dar-al-asas.png",
    year: "2025",
    storeLinks: {
      appStore: "https://apps.apple.com/app/id6789016723",
      playStore: "https://play.google.com/store/apps/details?id=wepioners.tjaraa.com",
    },
  },
  {
    slug: "e-shabni",
    name: "E-Shabni",
    localizedName: { en: "E-Shabni (Pull Me)", ar: "اسحبني" },
    tagline: {
      en: "Ride-hailing platform shipped as two published apps.",
      ar: "منصّة طلب مركبات منشورة كتطبيقَيْن.",
    },
    summary: {
      en: "Passenger and driver apps for the Iraqi market with Haversine matching (80 km), Firebase RTDB tracking, Google Maps, WhatsApp OTP, and digital wallet.",
      ar: "تطبيق راكب وسائق للعراق بمطابقة Haversine (80 كم) وتتبّع Firebase RTDB وخرائط Google و OTP واتساب ومحفظة.",
    },
    overview: {
      en: "E-Shabni connects passengers with drivers for light and heavy transport, shipped as two separate published apps on App Store and Google Play. Driver matching uses the Haversine formula within an 80 km radius with multi-criteria filtering. Real-time location runs on Firebase Realtime Database with Google Maps and WhatsApp OTP authentication.",
      ar: "E-Shabni يربط الركّاب بالسائقين للنقل الخفيف والثقيل، منشور كتطبيقَيْن على App Store و Google Play. المطابقة بـ Haversine ضمن 80 كم. الموقع عبر Firebase RTDB وخرائط Google و OTP واتساب.",
    },
    highlights: {
      en: [
        "Two published apps: passenger and driver",
        "Haversine driver matching over 80 km radius",
        "Firebase Realtime Database location tracking",
        "WhatsApp OTP and digital wallet",
        "Live on App Store and Google Play",
      ],
      ar: [
        "تطبيقان منشوران: راكب وسائق",
        "مطابقة Haversine ضمن 80 كم",
        "تتبّع موقع Firebase RTDB",
        "OTP واتساب ومحفظة رقمية",
        "منشور على App Store و Google Play",
      ],
    },
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    market: { en: "Iraq", ar: "العراق" },
    platform: "both",
    category: "transport",
    status: "production",
    stack: ["Flutter", "BLoC/Cubit", "Firebase", "Realtime DB", "Google Maps", "Hive"],
    metrics: [
      { value: "2", label: { en: "Published apps", ar: "تطبيق منشور" } },
      { value: "80 km", label: { en: "Match radius", ar: "نطاق المطابقة" } },
      { value: "Live", label: { en: "RTDB tracking", ar: "تتبّع مباشر" } },
    ],
    featured: false,
    accent: "#064e3b",
    accentSoft: "#34d399",
    image: "/projects/mockups/e-shabni.jpg",
    mockup: "/projects/mockups/e-shabni.jpg",
    year: "2025",
    storeLinks: {
      apps: [
        {
          label: { en: "Passenger app", ar: "تطبيق الراكب" },
          appStore: "https://apps.apple.com/app/id6755629100",
          playStore: "https://play.google.com/store/apps/details?id=com.saifsaad.taksicar_user",
        },
        {
          label: { en: "Driver app", ar: "تطبيق السائق" },
          appStore: "https://apps.apple.com/app/id6755610414",
          playStore: "https://play.google.com/store/apps/details?id=com.saifsaad.taksicar_driver",
        },
      ],
    },
  },
  {
    slug: "academex",
    name: "Academex",
    localizedName: { en: "Academex", ar: "أكاديمكس" },
    tagline: {
      en: "Academic community platform with AI assistant.",
      ar: "منصّة مجتمع أكاديمي مع مساعد ذكاء اصطناعي.",
    },
    summary: {
      en: "Academic social platform with community feeds, rated digital library, and AI chatbot assistant.",
      ar: "منصّة اجتماعية أكاديمية بخلاصات مجتمعية ومكتبة رقمية مصنّفة ومساعد ذكاء اصطناعي.",
    },
    overview: {
      en: "Academex combines community feeds and resource sharing with a digital library supporting search, filtering, and ratings by subject and year, plus an AI chatbot assistant for academic questions.",
      ar: "Academex يجمع الخلاصات المجتمعية ومشاركة الموارد مع مكتبة رقمية بالبحث والفلترة والتقييم حسب المادة والسنة، ومساعد AI للأسئلة الأكاديمية.",
    },
    highlights: {
      en: [
        "Community feeds and resource sharing",
        "Rated digital library by subject and year",
        "AI chatbot assistant",
      ],
      ar: [
        "خلاصات مجتمعية ومشاركة موارد",
        "مكتبة رقمية مصنّفة حسب المادة والسنة",
        "مساعد ذكاء اصطناعي",
      ],
    },
    role: { en: "Flutter Developer", ar: "مطوّر Flutter" },
    market: { en: "Palestine", ar: "فلسطين" },
    platform: "android",
    category: "education",
    status: "productionReady",
    stack: ["Flutter", "Firebase", "Firestore", "AI Chatbot"],
    metrics: [],
    featured: false,
    accent: "#1e3a8a",
    accentSoft: "#60a5fa",
    image: "/projects/mockups/academex.jpg",
    mockup: "/projects/mockups/academex.jpg",
    year: "2023",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const allStackTags: StackTag[] = Array.from(
  new Set(projects.flatMap((p) => p.stack)),
);

export interface ProjectFilters {
  platform?: string;
  category?: string;
  stack?: string;
  status?: string;
}

export function filterProjects(filters: ProjectFilters): Project[] {
  return projects.filter((p) => {
    if (filters.platform && filters.platform !== "any") {
      if (filters.platform === "both") {
        if (p.platform !== "both") return false;
      } else if (p.platform !== filters.platform && p.platform !== "both") {
        return false;
      }
    }
    if (filters.category && filters.category !== "any" && p.category !== filters.category) {
      return false;
    }
    if (filters.stack && filters.stack !== "any" && !p.stack.includes(filters.stack as StackTag)) {
      return false;
    }
    if (filters.status && filters.status !== "any" && p.status !== filters.status) {
      return false;
    }
    return true;
  });
}

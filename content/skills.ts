import type { Localized } from "./types";

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: { en: "Mobile", ar: "الجوّال" },
    items: [
      "Flutter (Dart 3)",
      "Android & iOS",
      "Material 3",
      "Platform channels",
      "RTL layouts & accessibility",
    ],
  },
  {
    id: "architecture",
    title: { en: "Architecture", ar: "المعمارية" },
    items: [
      "Clean Architecture",
      "Feature-first modularization",
      "Repository pattern & use cases",
      "SOLID & dependency injection",
      "go_router & GetIt",
    ],
  },
  {
    id: "state",
    title: { en: "State Management", ar: "إدارة الحالة" },
    items: [
      "flutter_bloc (Cubit & BLoC)",
      "Riverpod",
      "Provider & GetX",
      "dartz Either & sealed states",
    ],
  },
  {
    id: "networking",
    title: { en: "Networking & Real-Time", ar: "الشبكات والوقت الحقيقي" },
    items: [
      "REST, Dio, SSE streaming",
      "WebRTC & Socket.IO",
      "LiveKit voice rooms",
      "RFC 7807 & Idempotency-Key",
    ],
  },
  {
    id: "backend",
    title: { en: "Backend & Cloud", ar: "الخلفية والسحابة" },
    items: [
      "Firebase (Auth, Firestore, FCM, Functions)",
      "TypeScript Cloud Functions",
      "NestJS & Laravel Sanctum APIs",
      "GCP Cloud Run",
    ],
  },
  {
    id: "data",
    title: { en: "Data & Offline", ar: "البيانات ودون اتصال" },
    items: [
      "Drift / SQLite & Hive",
      "Offline-first sync queues",
      "flutter_secure_storage",
      "TTL cache & paginated eviction",
    ],
  },
  {
    id: "payments",
    title: { en: "Payments", ar: "المدفوعات" },
    items: [
      "RevenueCat & in-app purchases",
      "Telr XML Mobile API",
      "Stripe web checkout",
      "Wallet ledgers & installments",
    ],
  },
  {
    id: "quality",
    title: { en: "Quality & DevOps", ar: "الجودة و DevOps" },
    items: [
      "Unit, widget & golden tests",
      "GitHub Actions CI",
      "Product flavors & FVM",
      "App Store Connect & Play Console",
    ],
  },
];

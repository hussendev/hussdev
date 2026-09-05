# HUSSEN SAMI GHABAYEN

**Flutter Developer | Mobile Application Engineer**

Gaza, Palestine (GMT+3) | Open to full-time remote | (+972) 59-219-7258 | ghabayenhussej@gmail.com
LinkedIn: [PASTE FULL URL] | GitHub: [PASTE FULL URL]

---

## PROFESSIONAL SUMMARY

Flutter developer with 3+ years shipping production iOS and Android applications, with **eight apps live on the App Store and Google Play** across five markets. Sole author of six codebases totaling roughly 250,000 lines of Dart. Strong in feature-first Clean Architecture with BLoC/Cubit and Riverpod, offline-first data layers (Hive, Drift/SQLite), and payment integrations across RevenueCat, Telr, and wallet-based gateways. Built real-time features including WebRTC voice, Server-Sent Events streaming, and Firebase Cloud Functions backends in TypeScript. Delivered Arabic-first RTL products for the Saudi, Iraqi, Egyptian, Palestinian, and Qatari markets, including the official Qur'an application of the Qatar Ministry of Awqaf and Islamic Affairs (50,000+ downloads, 4.5★). Comfortable owning a feature end to end and working asynchronously across time zones.

---

## TECHNICAL SKILLS

**Languages:** Dart, TypeScript, JavaScript, Java, PHP, SQL, HTML/CSS

**Mobile:** Flutter (Dart 3), Android, iOS, Material 3, responsive and tablet layouts, platform channels, RTL layouts, accessibility

**Architecture:** Clean Architecture, feature-first modularization, Repository pattern, Use Cases, SOLID, dependency injection, layered presentation/domain/data separation

**State Management:** flutter_bloc (Cubit and BLoC), Riverpod, Provider, ChangeNotifier, GetX, Equatable, dartz Either, sealed states

**Routing & DI:** go_router, StatefulShellRoute, auth redirects and route guards, GetIt service locator, flavor-based provider overrides

**Networking:** REST APIs, Dio, http, Server-Sent Events (SSE), WebRTC, Socket.IO, WebSocket, XML APIs, multipart uploads, S3 presigned URLs, RFC 7807 Problem Details, Idempotency-Key, If-Match optimistic concurrency, exponential backoff polling

**Backend & Cloud:** Firebase (Auth, Firestore, Cloud Functions, Storage, FCM, Analytics, Crashlytics), Node.js 20, TypeScript Cloud Functions, Firestore Security Rules and composite indexes, NestJS, Laravel Sanctum APIs, ASP.NET Core APIs, FastAPI integration, GCP Cloud Run

**Databases & Caching:** Drift/SQLite, Hive, SQFLite, Firestore, flutter_secure_storage (Keychain/Keystore), SharedPreferences, TTL cache invalidation, paginated cache with per-page eviction, offline-first sync queues

**Payments:** RevenueCat (purchases_flutter), Apple App Store and Google Play in-app purchases, Telr XML Mobile API, Stripe (web checkout), wallet ledgers, installment plans, discount codes, ZainCash, receipt verification flows

**Auth & Security:** OAuth 2.0, Google Sign-In, Sign in with Apple (SHA-256 nonce), JWT bearer tokens and refresh rotation, OTP via WhatsApp and email, device-bound sessions, AES-256-GCM, Argon2id key derivation

**Real-Time & Media:** WebRTC (SDP, STUN, audio focus), SSE streaming, FCM push and background isolates, flutter_local_notifications, Awesome Notifications, just_audio, audio_service, audioplayers, background_downloader

**Maps & Location:** google_maps_flutter, flutter_map / OpenStreetMap, Geolocator, flutter_compass, custom map markers, geofencing by Haversine distance

**Performance:** Dart isolates and compute(), image memory-cache tuning, pagination and prefetch, lazy tab mounting, JPEG recompression pipelines, R8/ProGuard minification, latency budgets enforced in CI

**Internationalization:** flutter_localizations, gen-l10n, ARB files, Arabic/English/Urdu/Hindi, full RTL support, intl

**Testing & Quality:** flutter_test, mocktail, unit and widget tests, integration_test, golden tests, very_good_analysis, coverage gates

**DevOps:** Git, GitHub, GitHub Actions, product flavors, dart-define and dotenv environments, Gradle (Kotlin DSL), Xcode, keystore signing, ExportOptions.plist, App Store Connect, Google Play Console, FVM, Agile/Scrum

---

## PROFESSIONAL EXPERIENCE

### Flutter Developer | May 2025 – Present
Wepioners | Gaza, Palestine (Remote) — wepioners.com

- Lead mobile developer on the company's product portfolio, delivering four production Flutter applications from architecture through App Store and Google Play release
- Built **BALONIA**, a social live-streaming platform that grew to 16,000+ users, implementing LiveKit group voice rooms, Socket.IO real-time messaging, a virtual coin economy with gifting, and role-based access control on a NestJS backend
- Built **Eduba**, a spaced-repetition learning app (11 modules, ~33k Dart LOC) with an Anki-compatible SRS engine, six card types, RevenueCat in-app purchases, and offline study sync
- Built **Dar Al-Asas**, a gold-investment and wallet platform for the Iraqi market, owning both the Flutter client and a TypeScript Firebase backend (6 HTTPS callables, 2 Firestore triggers) with transactional money handling
- Built **E-Shabni**, a ride-hailing platform shipped as two published apps (passenger and driver), with Haversine-based driver matching across an 80 km radius, Firebase Realtime Database location tracking, and WhatsApp OTP authentication
- Standardized the team's delivery on feature-first Clean Architecture with Cubit, GetIt, go_router, and dartz `Either`, with Arabic-first RTL localization across all products

### Freelance Flutter Developer | Oct 2025 – Present
Remote — clients in Australia, Qatar, Saudi Arabia, Egypt, and Palestine

- Delivered five production applications for international clients, working asynchronously across time zones and owning each project end to end
- **LinkedWithin** (Australian client) — AI life-management platform, 22 modules and ~83k Dart LOC, featuring a WebRTC voice coach and Server-Sent Events streaming chat
- **Mushaf Qatar** (Qatar Ministry of Awqaf and Islamic Affairs) — official Qur'an application; delivered the search and worship feature stream in a four-engineer, 1,000+ commit codebase
- **Kayan Cafe** (Egyptian client) — bilingual cafe-management SaaS, 18 modules and ~68k Dart LOC, built on a Laravel Sanctum API with RFC 7807 error handling and optimistic concurrency
- **MisterCar** (Saudi client) — car-services and licensing platform with Telr payment gateway, installment plans, and Google/Apple sign-in
- **MMB** (Palestinian client, Nablus) — salon booking and e-commerce app; migrated a 500k+ LOC FluxStore template to a hand-written Clean Architecture codebase

### Data Entry Volunteer | Jul 2023 – Sep 2024
International Medical Corps (IMC) | Gaza, Palestine

- Managed medical and aid-distribution data during the humanitarian crisis, maintaining strict confidentiality protocols
- Collaborated with international teams on accurate, timely data entry under severe operational constraints

### Open-Source Contributor | Jun 2023 – Aug 2023
Bond Framework (Flutter) | Remote

- Contributed to the core library, improving state management, authentication, and theming components

### Mobile Application Developer | Jan 2023 – Jul 2023
Developer Plus Company | Gaza, Palestine

- Architected and shipped 4+ commercial Flutter applications with 10,000+ combined downloads
- Mentored 3 junior developers on Flutter best practices, Clean Architecture, and code review standards
- Established the team's code review process and reusable widget library, reducing feature development time
- Integrated Firebase Realtime Database, push notifications, and authentication; built offline-first storage with SQLite and Hive

---

## SELECTED PROJECTS

### LinkedWithin — AI-Powered Life Management Platform
*iOS & Android | Pre-launch, production-ready | 22 feature modules | ~83,000 Dart LOC | Sole developer*

- Architected a 22-module Clean Architecture Flutter app with 26 Cubits, 131 use cases, 40 repositories, and 38 go_router routes against a versioned REST API with 85 endpoint helpers
- Implemented a streaming AI coach over Server-Sent Events with a line-based `event:`/`data:` parser, sealed event types, and mid-stream disconnect recovery
- Engineered a WebRTC voice assistant with parallel local-offer and session creation, 1.5s ICE gathering timeout, Android audio focus handling, and inbound-audio bot-speaking detection
- Built the "Within Drive" file vault as a three-phase ticket → S3 presigned PUT → commit pipeline with folder reordering and quota-aware Pro gating
- Integrated RevenueCat in-app purchases alongside Stripe web billing, polling entitlements until Pro access synchronized across store and backend
- Implemented Google and Apple OAuth with cryptographic nonce and SHA-256, refresh-token rotation, Keychain/Keystore storage, and offline-tolerant session validation

### Kayan Cafe — Multi-Tenant Cafe Management SaaS
*Android (live) & iOS | Arabic-first bilingual | 18 modules | ~68,000 Dart LOC | Sole developer*
Google Play: play.google.com/store/apps/details?id=com.kayan.app

- Architected an AR/EN RTL-first SaaS client with 44 Cubits, 18 feature modules, and ~42 screens over a Laravel Sanctum REST API with ~73 endpoint templates
- Engineered a Dio HTTP layer implementing RFC 7807 Problem Details error mapping, `Idempotency-Key` headers on writes, and `If-Match` optimistic concurrency with replay detection surfaced in the UI
- Built a print-safe voucher template editor on a native 320×200 canvas with drag-positioned elements, an API layout adapter, and a JPEG recompression loop keeping uploads under the 900 KB server limit
- Implemented async batch PDF export as a submit → poll job → download → open pipeline, plus foreground status pollers with jitter and exponential backoff that pause when the page is not visible
- Delivered cafe lifecycle management, Wi-Fi subscriber provisioning, WE internet line sync with captcha handling, wallet invoicing, and a dual-token staff-lookup system separate from owner authentication
- Wrote 26 test files (~5,000 LOC) covering API parsers, Cubits, and the auth contract, with an optional staging smoke suite

### Eduba — Spaced-Repetition Learning Platform
*iOS & Android (live) | 11 modules | ~33,000 Dart LOC | Sole developer*
App Store: apps.apple.com/app/eduba/id6762039465 | Google Play: play.google.com/store/apps/details?id=wepioners.eduba.com

- Engineered an Anki-compatible spaced-repetition engine with new/learning/review/relearning queues, ease-factor scheduling, graduating and easy intervals, lapse and leech handling, and server-configurable parameters
- Implemented windowed study sessions with page-based loading, prefetch triggered at 10 remaining cards, Hive-backed retry queue for failed progress uploads, and debounced exit synchronization
- Built six card types including MCQ, true/false, drag-to-match, sanitized HTML rendering, zoomable images, and just_audio playback
- Integrated RevenueCat in-app purchases with sealed result types (`PurchaseFlowResult`, `PurchaseFlowPendingSync`) covering intent → store → backend verification with restore and pending-sync recovery
- Implemented email/OTP authentication with device-UUID binding and a 401 session guard that signs the user out when the account is used on another device
- Delivered FCM push, timezone-aware local study reminders, fl_chart analytics, and a remote min-version force-update gate across ~46 REST endpoints; ~70 unit and widget tests

### MMB (المُلوك) — Salon Booking & E-Commerce Platform
*iOS & Android (live) | Nablus, Palestine | ~33,000 Dart LOC | Sole developer*
App Store: apps.apple.com/app/mmb/id6462795471 | Google Play: play.google.com/store/apps/details?id=ps.mmb.app

- Migrated a 500,000+ LOC FluxStore/WooCommerce template to a hand-written feature-first Clean Architecture app (14 modules, 17 Cubits, 44 use cases), deleting ~493k lines and authoring ~22k in the rewrite
- Engineered a five-step appointment booking wizard — branch, service or package, add-ons, live availability slots, payment method — with table_calendar and real-time slot fetching
- Integrated server-driven online payments by injecting and auto-submitting an HTML form into a WebView, intercepting return-URL states, with retry support on both orders and appointments
- Reduced iOS launch stalls of ~50 seconds by capping the Flutter image cache at 50 decoded images / 30 MB and applying `memCacheWidth`/`memCacheHeight` decode limits to CDN imagery
- Built bilingual Arabic-first RTL localization (350+ ARB keys), an OpenStreetMap branch map via flutter_map, FCM with foreground/OS-banner de-duplication, and iOS App Tracking Transparency compliance

### MisterCar (مستر كار) — Car Services & Licensing Platform
*iOS & Android (live) | Saudi market | ~24,000 Dart LOC | Primary developer (29 of 42 commits)*
App Store: apps.apple.com/app/id6758611421 | Google Play: play.google.com/store/apps/details?id=com.mistercarsa.abd_aziz_app

- Engineered Telr payment integration via the XML Mobile API and webview_flutter, intercepting `mastercar://` deep links and return URLs, verifying against `mobile_complete.xml` before backend confirmation, with double-finalize guards
- Implemented subscription checkout supporting full versus installment plans, next-unpaid-installment selection, and first-payment-only discount code pricing
- Built Google Sign-In via Firebase Auth and Sign in with Apple with SHA-256 nonce, OTP password reset, and 30-day session expiry with forced logout on 403 or disabled accounts
- Delivered a bilingual AR/EN RTL client (239 localization keys) with a Google Maps home screen using SVG-rasterized custom markers and camera offset compensation for the bottom sheet
- Shipped release 1.1.10+16 with R8 minification, resource shrinking, and ProGuard on Android, targeting iOS 13+ and Android SDK 35

### Dar Al-Asas (دار الأساس) — Gold Investment & Wallet Platform
*iOS & Android (live) | Iraqi market | 9 modules | Sole developer, Flutter + Cloud Functions*
App Store: apps.apple.com/app/id6789016723 | Google Play: play.google.com/store/apps/details?id=wepioners.tjaraa.com

- Built the full stack: a 9-module Flutter client (17 Cubits, 22 use cases) plus a TypeScript Firebase backend (~820 LOC, Node 20) with 6 HTTPS callables and 2 Firestore triggers
- Implemented investment subscription, wallet withdrawal (Mastercard and ZainCash), and daily profit claiming as atomic Firestore transactions over a dual gold/dinar ledger with a server-clock-aligned 24-hour cooldown
- Engineered phone-and-password authentication on Firebase Auth via synthetic emails with a unique phone index and rollback on partial account creation, plus WhatsApp OTP through the Wevlix API with TTL, resend cooldown, and server-side attempt limits
- Designed FCM fan-out with stale-token cleanup, a 6-digit referral index, guest-browse routing with auth gating, and remote force-update driven by live Firestore settings and semver comparison
- Hardened monetary fields with Firestore Security Rules, 7 composite indexes, and Iraqi mobile number validation (+964)

### Mushaf Qatar — Official Qur'an Application, Ministry of Awqaf and Islamic Affairs
*iOS & Android | 50,000+ downloads | 4.5★ (947 reviews) | 17 modules | 4 locales | Feature-stream engineer in a 4-developer team*
App Store: apps.apple.com/app/id500544210 | Google Play: play.google.com/store/apps/details?id=com.islamweb.ns.quran

- Implemented offline diacritic-insensitive Arabic Qur'an search across 114 surahs and 6,000+ ayahs using a Dart isolate word index, meeting CI-enforced latency budgets of p50 ≤ 25 ms and p95 ≤ 75 ms
- Engineered on-device prayer times with the `adhan` library, Workmanager background refresh, and Hijri calendar tables, validated by golden tests against Qatar Calendar House reference data
- Built offline qibla direction using great-circle bearing to the Kaaba with WMM magnetic declination via flutter_compass, plus tasbih sequences, azkar reminders, and in-app adhān playback
- Integrated the IslamWeb tafsir API behind a repository seam with lenient JSON repair for malformed server escapes, and parsed bundled Uthmani verse text off the UI thread via `compute()`
- Contributed 33 non-merge commits across 325 files and added 21 test files to a CI-gated repository supporting Arabic, English, Urdu, and Hindi with RTL

### Earlier Production Work

**BALONIA** — Social live-streaming platform that reached 16,000+ users, built with LiveKit group voice rooms, Socket.IO messaging, a virtual coin economy with gifting, role-based access control, and a NestJS backend on Clean Architecture.

**E-SHABNI (اسحبني)** — Ride-hailing platform for the Iraqi market shipped as **two published apps**, a passenger app and a driver app, with Haversine-based driver matching (80 km radius), Firebase Realtime Database location tracking, Google Maps, WhatsApp OTP, and a digital wallet.
Passenger — App Store: apps.apple.com/app/id6755629100 | Google Play: play.google.com/store/apps/details?id=com.saifsaad.taksicar_user
Driver — App Store: apps.apple.com/app/id6755610414 | Google Play: play.google.com/store/apps/details?id=com.saifsaad.taksicar_driver

**ACADEMEX** — Academic community platform with resource sharing, a rated digital library, and an AI chatbot assistant.

---

## EDUCATION

**Bachelor of Information Technology** | Sep 2020 – Feb 2024
Islamic University of Gaza | Gaza, Palestine — GPA: 89.39/100 (Excellent)

Completed the degree during the 2023 war in Gaza under severe disruption to campus operations.

Coursework: Advanced Software Engineering, Mobile Application Development, Database Management Systems, Web Technologies, Object-Oriented Programming

---

## CERTIFICATIONS & ACTIVITIES

- Professional Flutter Development — Udemy
- Advanced Java Programming — Udemy
- Web Development Fundamentals — Udemy
- Palestinian Collegiate Programming Contest (PCPC) participant — Oct 2024

---

## LANGUAGES

- **Arabic** — Native
- **English** — Professional working proficiency (undergraduate degree delivered in English)

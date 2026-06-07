import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import destKuwait from "@/assets/dest-kuwait.jpg";
import destSaudi from "@/assets/dest-saudi.jpg";
import destJordan from "@/assets/dest-jordan.jpg";
import logo from "@/assets/logo.png";
import heroTeam from "@/assets/hero.png";
import about1 from "@/assets/about-us-1.JPG";
import about2 from "@/assets/about-us-2.jpeg";
import ourValues from "@/assets/our-values.jpeg";
import contactPortrait from "@/assets/get-in-touch.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const values = [
  { n: "01", title: "Integrity & Transparency", body: "Clear terms, honest expectations, and no hidden fees — for workers and employers alike." },
  { n: "02", title: "Professional Service", body: "A trained team guides every placement from first interview to safe arrival overseas." },
  { n: "03", title: "Respect for Workers", body: "Dignified treatment, fair contracts, and continued support throughout the employment term." },
  { n: "04", title: "Legal & Ethical Recruitment", body: "Fully licensed in Ethiopia and compliant with destination-country labor regulations." },
  { n: "05", title: "Commitment to Excellence", body: "We measure success by long-term placements and the satisfaction of both sides." },
];

const destinations = [
  { country: "Saudi Arabia", city: "Dammam", img: destSaudi, blurb: "Long-standing partnerships with vetted households across the Kingdom." },
  { country: "Kuwait", city: "Kuwait City", img: destKuwait, blurb: "Established placement pipeline with families seeking experienced domestic staff." },
  { country: "Jordan", city: "Amman", img: destJordan, blurb: "Trusted employers across Jordan welcoming qualified caregivers and housemaids." },
];

const services = [
  ["Housemaids", "Trained for full household upkeep and family routines."],
  ["Cleaners", "Detail-oriented staff for residential and small-office cleaning."],
  ["Cooks", "Familiar with Ethiopian, Middle Eastern, and continental cuisine."],
  ["Nannies", "Patient, caring childminders with childcare experience."],
  ["Caregivers", "Compassionate elderly and special-needs support staff."],
] as const;

// Language translations
type Language = "en" | "am" | "ar";

const translations = {
  en: {
    // Nav
    navAbout: "About",
    navDestinations: "Destinations",
    navValues: "Our Values",
    navLocation: "Location",
    navContact: "Get in Touch",
    // Hero
    heroTitle: "TK Foreign Private Employment Agency.",
    heroSub: "Your trusted partner for overseas employment.",
    heroText: "We connect dedicated Ethiopian workers with verified employers across the Gulf — ethically, legally, and with care.",
    partnerBtn: "Partner With Us",
    applyBtn: "Apply to Work Abroad",
    // Strip
    stripLabel: "Placements across the Gulf",
    // About
    aboutTitle: "About Us",
    aboutSub: "Over a decade of overseas placement",
    aboutP1: "TK Manpower Recruitment is a dedicated overseas employment agency committed to connecting hardworking individuals with rewarding job opportunities abroad for over a decade.",
    aboutP2: "We specialize in recruiting and placing domestic workers — including housemaids, cleaners, cooks, nannies, caregivers, and other household staff — for employers in Saudi Arabia, Kuwait, Jordan, and other Gulf countries.",
    // Values
    valuesTitle: "Our values guide",
    valuesTitleSpan: "every placement.",
    visionTitle: "Our Vision",
    visionText: "To become a trusted leader in international manpower recruitment by creating opportunities that improve lives and support the workforce needs of employers across the Gulf region.",
    // Testimonials
    testimonialsTitle: "What People Say",
    testimonialsSub: "Real feedback from workers and employers who trusted TK Agency.",
    verified: "Verified Placement",
    // Destinations
    destTitle: "Our Destinations",
    destText: "We connect qualified workers with verified overseas employers through a reliable, efficient, and ethical recruitment process.",
    activePlacements: "Active Placements",
    // Location
    locationLabel: "Visit the Office",
    locationTitle: "Our Location",
    locationAddress: "Enkulal Fabrika area, near Police Kebebe<br />Pawe Building, 6th Floor<br />Addis Ababa, Ethiopia",
    directionsBtn: "Get Directions →",
    // Contact
    contactLabel: "Get in Touch",
    contactTitle: "Begin a conversation with our team.",
    contactPrimary: "Primary",
    contactSecondary: "Secondary",
    contactEmail: "Email",
    // Footer
    footerText: "TK Foreign Private Employment Agency — placing dedicated Ethiopian workers with trusted employers across the Gulf region.",
    footerServices: "Services",
    footerOffice: "Office",
    footerCopyright: "© 2026 TK Foreign Private Employment Agency. All rights reserved.",
    footerAbout: "About",
    footerDestinations: "Destinations",
    footerContact: "Contact",
    // Service items
    serviceHousemaids: "Housemaids",
    serviceCleaners: "Cleaners",
    serviceCooks: "Cooks",
    serviceNannies: "Nannies",
    serviceCaregivers: "Caregivers",
    serviceHousemaidsDesc: "Trained for full household upkeep and family routines.",
    serviceCleanersDesc: "Detail-oriented staff for residential and small-office cleaning.",
    serviceCooksDesc: "Familiar with Ethiopian, Middle Eastern, and continental cuisine.",
    serviceNanniesDesc: "Patient, caring childminders with childcare experience.",
    serviceCaregiversDesc: "Compassionate elderly and special-needs support staff.",
    // Testimonial texts
    testimonial1: "TK Agency guided me through every step. I got a safe job and everything was explained clearly before I traveled.",
    testimonial2: "Very professional service. The worker they provided was well-trained and matched our family needs perfectly.",
    testimonial3: "I felt supported from application to arrival. They truly care about workers, not just placements.",
    testimonial4: "Everything was transparent. I trusted the process and now I'm working safely abroad.",
    // Testimonial roles
    role1: "Housemaid - Saudi Arabia",
    role2: "Employer - Kuwait",
    role3: "Caregiver - Jordan",
    role4: "Cleaner - Saudi Arabia",
  },
  am: {
    navAbout: "ስለ እኛ",
    navDestinations: "መዳረሻዎች",
    navValues: "እሴቶቻችን",
    navLocation: "አድራሻ",
    navContact: "አግኙን",
    heroTitle: "ቲኬ በውጭ ሀገር ህጋዊ ስራ እና ሰራተኛ አገናኝ ኤጀንሲ።",
    heroSub: "ለውጭ አገር ሥራ የሚታመኑ አጋርዎት",
    heroText: "ታማኝ ኢትዮጵያውያን ሠራተኞችን በባህረ ሰላጤ አገራት ከተረጋገጡ ቀጣሪዎች ጋር — በሥነ ምግባር፣ በሕጋዊ መንገድ እና በእንክብካቤ እናገናኛለን።",
    partnerBtn: "ከእኛ ጋር ይተባበሩ",
    applyBtn: "ወደ ውጭ አገር ለመሥራት ያመልክቱ",
    stripLabel: "በባህረ ሰላጤ አካባቢ የሚደረጉ ምደባዎች",
    aboutTitle: "ስለ እኛ",
    aboutSub: "ከአሥር ዓመታት በላይ የውጭ አገር ሥራ ምደባ",
    aboutP1: "ቲኬ ማንፓወር ሪክሩትመንት ለአሥር ዓመታት ትጋት ያላቸውን ግለሰቦች ከሚክስ የውጭ አገር የሥራ ዕድሎች ጋር ለማገናኘት የሚሠራ የውጭ አገር ሥራ ምደባ ኤጀንሲ ነው።",
    aboutP2: "በሳውዲ አረቢያ፣ ኩዌት፣ ጆርዳን እና ሌሎች የባህረ ሰላጤ አገራት ለሚገኙ ቀጣሪዎች የቤት ውስጥ ሠራተኞችን — የቤት ሠራተኞችን፣ ጽዳት ሠራተኞችን፣ ምግብ ማብሰያዎችን፣ ሞግዚቶችን፣ ተንከባካቢዎችን እና ሌሎች የቤት ውስጥ ሠራተኞችን በመመልመል እና በማስቀጠር ልዩ ችሎታ አለን።",
    valuesTitle: "እሴቶቻችን እያንዳንዱን ምደባ ይመራሉ",
    valuesTitleSpan: "",
    visionTitle: "ራእያችን",
    visionText: "ሕይወትን የሚያሻሽሉ ዕድሎችን በመፍጠር እና በባህረ ሰላጤ አካባቢ የቀጣሪዎችን የሥራ ኃይል ፍላጎት በመደገፍ በዓለም አቀፍ የሰው ኃይል ምልመላ ውስጥ የታመነ መሪ ለመሆን።",
    testimonialsTitle: "ምስክርነቶች",
    testimonialsSub: "ቲኬ ኤጀንሲን ከተማመኑ ሠራተኞች እና ቀጣሪዎች እውነተኛ ግብረ መልስ",
    verified: "የተረጋገጠ ምደባ",
    destTitle: "መዳረሻዎቻችን",
    destText: "ብቃት ያላቸው ሠራተኞችን ከተረጋገጡ የውጭ አገር ቀጣሪዎች ጋር በአስተማማኝ፣ ቀልጣፋ እና ሥነ ምግባራዊ በሆነ ምልመላ ሂደት እናገናኛለን።",
    activePlacements: "ንቁ ምደባዎች",
    locationLabel: "ቢሮውን ይጎብኙ",
    locationTitle: "አድራሻችን",
    locationAddress: "እንቁላል ፋብሪካ አካባቢ፣ በፖሊስ ቀበሌ አቅራቢያ<br />ጳውሎስ ህንፃ፣ 6ኛ ፎቅ<br />አዲስ አበባ፣ ኢትዮጵያ",
    directionsBtn: "አቅጣጫ ያግኙ →",
    contactLabel: "አግኙን",
    contactTitle: "ከቡድናችን ጋር ውይይት ይጀምሩ።",
    contactPrimary: "ዋና",
    contactSecondary: "ሁለተኛ ደረጃ",
    contactEmail: "ኢሜይል",
    footerText: "ቲኬ የውጭ የግል ሥራ ምደባ ኤጀንሲ — ታማኝ ኢትዮጵያውያን ሠራተኞችን በባህረ ሰላጤ አካባቢ ከሚገኙ ታማኝ ቀጣሪዎች ጋር የሚያስቀምጥ።",
    footerServices: "አገልግሎቶች",
    footerOffice: "ቢሮ",
    footerCopyright: "© 2026 ቲኬ የውጭ የግል ሥራ ምደባ ኤጀንሲ። ሁሉም መብቶች ተጠብቀዋል።",
    footerAbout: "ስለ እኛ",
    footerDestinations: "መዳረሻዎች",
    footerContact: "አግኙን",
    serviceHousemaids: "የቤት ሠራተኞች",
    serviceCleaners: "ጽዳት ሠራተኞች",
    serviceCooks: "ምግብ ማብሰያዎች",
    serviceNannies: "ሞግዚቶች",
    serviceCaregivers: "ተንከባካቢዎች",
    serviceHousemaidsDesc: "ሙሉ የቤት ውስጥ እንክብካቤ እና የቤተሰብ ተግባራት የሰለጠኑ።",
    serviceCleanersDesc: "ዝርዝር ተኮር ሠራተኞች ለመኖሪያ እና ለትንንሽ ቢሮ ጽዳት።",
    serviceCooksDesc: "የኢትዮጵያ፣ የመካከለኛው ምሥራቅ እና አህጉራዊ ምግቦችን የሚያውቁ።",
    serviceNanniesDesc: "ታጋሽ እና ተንከባካቢ የልጆች ተንከባካቢዎች ከልጅ እንክብካቤ ልምድ ጋር።",
    serviceCaregiversDesc: "አዛውንቶች እና ልዩ ፍላጎት ላላቸው ደጋፊ ሠራተኞች።",
    testimonial1: "ቲኬ ኤጀንሲ በእያንዳንዱ ደረጃ መራኝ። ደህንነቱ የተጠበቀ ሥራ አገኘሁ እና ከመጓዜ በፊት ሁሉም ነገር በግልጽ ተገልጾልኝ ነበር።",
    testimonial2: "በጣም ሙያዊ አገልግሎት። ያቀረቡት ሠራተኛ በደንብ የሰለጠነ እና የቤተሰባችንን ፍላጎት በሚገባ የሚያሟላ ነበር።",
    testimonial3: "ከማመልከቻ እስከ መድረሻ ድጋፍ ተሰማኝ። እነሱ ምደባን ብቻ ሳይሆን ለሠራተኞች በእውነት ያስባሉ።",
    testimonial4: "ሁሉም ነገር ግልጽ ነበር። ሂደቱን ታምኜው ነበር እና አሁን በውጭ አገር ደህንነቱ በተጠበቀ ሁኔታ እየሠራሁ ነው።",
    role1: "የቤት ሠራተኛ - ሳውዲ አረቢያ",
    role2: "ቀጣሪ - ኩዌት",
    role3: "ተንከባካቢ - ጆርዳን",
    role4: "ጽዳት ሠራተኛ - ሳውዲ አረቢያ",
  },
  ar: {
    navAbout: "معلومات عنا",
    navDestinations: "الوجهات",
    navValues: "قيمنا",
    navLocation: "الموقع",
    navContact: "تواصل معنا",
    heroTitle: "تي كيه للتوظيف الخاص في الخارج.",
    heroSub: "شريكك الموثوق للتوظيف في الخارج",
    heroText: "نربط العمال الإثيوبيين المخلصين بأرباب عمل موثوقين في جميع أنحاء الخليج - بشكل أخلاقي وقانوني ورعاية.",
    partnerBtn: "شراكة معنا",
    applyBtn: "تقدم للعمل في الخارج",
    stripLabel: "التوظيف في جميع أنحاء الخليج",
    aboutTitle: "معلومات عنا",
    aboutSub: "أكثر من عقد من التوظيف في الخارج",
    aboutP1: "تي كيه مانباور ريكروتمنت هي وكالة توظيف خارجية مكرسة لربط الأفراد المجتهدين بفرص عمل مجزية في الخارج لأكثر من عقد من الزمن.",
    aboutP2: "نحن متخصصون في توظيف ووضع العمال المنزليين - بما في ذلك الخادمات وعمال النظافة والطهاة والمربيات ومقدمي الرعاية وغيرهم من الموظفين المنزليين - لأرباب العمل في المملكة العربية السعودية والكويت والأردن ودول الخليج الأخرى.",
    valuesTitle: "قيمنا توجه كل",
    valuesTitleSpan: "توظيف.",
    visionTitle: "رؤيتنا",
    visionText: "أن نصبح قائدًا موثوقًا به في التوظيف الدولي للقوى العاملة من خلال خلق فرص تحسن الحياة وتدعم احتياجات القوى العاملة لأرباب العمل في جميع أنحاء منطقة الخليج.",
    testimonialsTitle: "ماذا يقول الناس",
    testimonialsSub: "ملاحظات حقيقية من العمال وأرباب العمل الذين وثقوا في وكالة تي كيه.",
    verified: "توظيف موثق",
    destTitle: "وجهاتنا",
    destText: "نحن نربط العمال المؤهلين بأرباب عمل موثوقين في الخارج من خلال عملية توظيف موثوقة وفعالة وأخلاقية.",
    activePlacements: "التوظيف النشط",
    locationLabel: "قم بزيارة المكتب",
    locationTitle: "موقعنا",
    locationAddress: "منطقة إنkulal فابريكا، بالقرب من بوليس كيبيل<br />مبنى باوي، الطابق السادس<br />أديس أبابا، إثيوبيا",
    directionsBtn: "احصل على الاتجاهات ←",
    contactLabel: "تواصل معنا",
    contactTitle: "ابدأ محادثة مع فريقنا.",
    contactPrimary: "رئيسي",
    contactSecondary: "ثانوي",
    contactEmail: "البريد الإلكتروني",
    footerText: "تي كيه للتوظيف الخاص في الخارج — توظيف عمال إثيوبيين مخلصين مع أرباب عمل موثوقين في جميع أنحاء منطقة الخليج.",
    footerServices: "الخدمات",
    footerOffice: "المكتب",
    footerCopyright: "© 2026 تي كيه للتوظيف الخاص في الخارج. جميع الحقوق محفوظة.",
    footerAbout: "معلومات عنا",
    footerDestinations: "الوجهات",
    footerContact: "اتصل بنا",
    serviceHousemaids: "خادمات",
    serviceCleaners: "عمال نظافة",
    serviceCooks: "طهاة",
    serviceNannies: "مربيات",
    serviceCaregivers: "مقدمي رعاية",
    serviceHousemaidsDesc: "مدربون على الصيانة الكاملة للمنزل والروتين العائلي.",
    serviceCleanersDesc: "موظفون موجهون للتفاصيل للتنظيف السكني والمكاتب الصغيرة.",
    serviceCooksDesc: "على دراية بالمطبخ الإثيوبي والشرق أوسطي والقاري.",
    serviceNanniesDesc: "مربيات صبورات ومهتمات بخبرة في رعاية الأطفال.",
    serviceCaregiversDesc: "موظفو دعم متعاطفون لكبار السن وذوي الاحتياجات الخاصة.",
    testimonial1: "أرشدتني وكالة تي كيه خلال كل خطوة. حصلت على وظيفة آمنة وتم شرح كل شيء بوضوح قبل سفري.",
    testimonial2: "خدمة مهنية للغاية. كان العامل الذي قدموه مدربًا جيدًا وتطابق مع احتياجات عائلتنا بشكل مثالي.",
    testimonial3: "شعرت بالدعم من التقديم حتى الوصول. إنهم يهتمون حقًا بالعمال، وليس فقط بالتوظيف.",
    testimonial4: "كل شيء كان شفافًا. لقد وثقت في العملية والآن أعمل بأمان في الخارج.",
    role1: "خادمة - المملكة العربية السعودية",
    role2: "صاحب عمل - الكويت",
    role3: "مقدم رعاية - الأردن",
    role4: "عاملة نظافة - المملكة العربية السعودية",
  },
};

function Index() {
  const [language, setLanguage] = useState<Language>("en");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const t = translations[language];

  const testimonials = [
    { name: " ", role: t.role1, text: t.testimonial1 },
    { name: " ", role: t.role2, text: t.testimonial2 },
    { name: " ", role: t.role3, text: t.testimonial3 },
    { name: " ", role: t.role4, text: t.testimonial4 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Update direction based on language
  const isRtl = language === "ar";
  const direction = isRtl ? "rtl" : "ltr";

  return (
    <div dir={direction} className="min-h-screen bg-brand-cream text-brand-navy">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logo} alt="TK Agency logo" className="size-9 object-contain" />
            <span className="font-display text-xl tracking-tight">TK Agency</span>
          </a>
          <div className="hidden items-center gap-10 text-xs font-medium uppercase tracking-[0.2em] lg:flex">
            <a href="#about" className="transition-colors hover:text-brand-gold">{t.navAbout}</a>
            <a href="#destinations" className="transition-colors hover:text-brand-gold">{t.navDestinations}</a>
            <a href="#values" className="transition-colors hover:text-brand-gold">{t.navValues}</a>
            <a href="#location" className="transition-colors hover:text-brand-gold">{t.navLocation}</a>
            <a href="#contact" className="bg-brand-navy px-6 py-3 text-brand-cream transition-all hover:bg-brand-gold">
              {t.navContact}
            </a>
          </div>
          {/* Language Toggle */}
          <div className="flex gap-1 rounded-full border border-brand-border bg-white/50 p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${language === "en" ? "bg-brand-navy text-brand-cream" : "text-brand-navy/60 hover:text-brand-navy"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("am")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${language === "am" ? "bg-brand-navy text-brand-cream" : "text-brand-navy/60 hover:text-brand-navy"}`}
            >
              አማ
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${language === "ar" ? "bg-brand-navy text-brand-cream" : "text-brand-navy/60 hover:text-brand-navy"}`}
            >
              ع
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 py-20 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
           <h1 className="mb-8 text-5xl leading-[1.05] lg:text-7xl">
  {t.heroTitle}
</h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-brand-navy/70">
              {t.heroSub}<br />
              {t.heroText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/partner"
                className="border border-brand-navy bg-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-cream transition-all hover:bg-transparent hover:text-brand-navy"
              >
                {t.partnerBtn}
              </Link>
              <Link
                to="/apply"
                className="border border-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-navy/5"
              >
                {t.applyBtn}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroTeam}
              alt="TK Agency placement candidates in uniform at the Addis Ababa office"
              width={1024}
              height={1344}
              className="h-full max-h-[640px] w-full object-cover shadow-2xl shadow-brand-navy/10"
            />
          </div>
        </div>
      </section>

      {/* Placements strip */}
      <section className="border-y border-brand-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-brand-navy/40">
            {t.stripLabel}
          </p>
          <div className="flex flex-wrap items-center justify-around gap-8 opacity-70">
            {["Saudi Arabia", "Kuwait", "Jordan"].map((b) => (
              <div key={b} className="font-display text-xl tracking-wide">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between border-b border-brand-border pb-8">
            <h2 className="text-4xl lg:text-5xl">{t.aboutTitle}</h2>
            <span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-brand-gold md:block">
              {t.aboutSub}
            </span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-8">
              <div className="space-y-6 text-lg leading-relaxed text-brand-navy/75">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
              </div>
              <div className="aspect-[4/5] w-full overflow-hidden shadow-xl shadow-brand-navy/10">
                <img
                  src={about2}
                  alt="Care and attention to household detail"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="aspect-[5/4] w-full overflow-hidden shadow-xl shadow-brand-navy/10">
                <img
                  src={about1}
                  alt="TK Agency placement candidate in uniform"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <ul className="divide-y divide-brand-border border-y border-brand-border">
                {services.map(([tKey]) => {
                  let titleKey = tKey.toLowerCase();
                  let title = "";
                  let desc = "";
                  if (tKey === "Housemaids") { title = t.serviceHousemaids; desc = t.serviceHousemaidsDesc; }
                  else if (tKey === "Cleaners") { title = t.serviceCleaners; desc = t.serviceCleanersDesc; }
                  else if (tKey === "Cooks") { title = t.serviceCooks; desc = t.serviceCooksDesc; }
                  else if (tKey === "Nannies") { title = t.serviceNannies; desc = t.serviceNanniesDesc; }
                  else if (tKey === "Caregivers") { title = t.serviceCaregivers; desc = t.serviceCaregiversDesc; }
                  else { title = tKey; desc = ""; }
                  return (
                    <li key={tKey} className="group flex items-center justify-between gap-6 py-5">
                      <div>
                        <h3 className="text-xl group-hover:italic">{title}</h3>
                        <p className="mt-1 text-sm text-brand-navy/60">{desc}</p>
                      </div>
                      <span className="text-brand-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values + Vision (dark band) */}
      <section id="values" className="bg-brand-navy px-6 py-24 text-brand-cream lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={ourValues}
                  alt="Portrait of a placement candidate"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-10 border-l-2 border-brand-gold pl-6">
                <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">
                  {t.visionTitle}
                </span>
                <p className="text-lg leading-relaxed text-brand-cream/80">
                  {t.visionText}
                </p>
              </div>
            </div>
            <div className="lg:pl-12">
              <h2 className="mb-12 text-4xl leading-tight lg:text-6xl">
                {t.valuesTitle}{" "}
                {t.valuesTitleSpan && <span className="text-brand-gold">{t.valuesTitleSpan}</span>}
              </h2>
              <div className="space-y-10">
                {values.map((p) => (
                  <div key={p.n} className="flex gap-6">
                    <span className="font-display text-4xl font-light text-brand-gold/40">{p.n}</span>
                    <div>
                      <h4 className="mb-2 font-sans text-lg font-medium">{p.title}</h4>
                      <p className="leading-relaxed text-brand-cream/60">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-cream px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 border-b border-brand-border pb-8">
            <h2 className="text-4xl lg:text-5xl">{t.testimonialsTitle}</h2>
            <p className="mt-4 text-lg text-brand-navy/70">
              {t.testimonialsSub}
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="min-w-full px-2">
                    <div className="border border-brand-border p-10 bg-white shadow-sm">
                      <p className="text-lg text-brand-navy/70 leading-relaxed mb-8">
                        “{testimonial.text}”
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-brand-navy/50">{testimonial.role}</p>
                        </div>
                        <div className="text-brand-gold text-xs uppercase tracking-[0.2em]">
                          {t.verified}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === testimonialIndex ? "bg-brand-navy w-6" : "bg-brand-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 border-b border-brand-border pb-8 lg:grid-cols-12 lg:items-end">
            <h2 className="text-4xl lg:col-span-5 lg:text-5xl">{t.destTitle}</h2>
            <p className="text-lg leading-relaxed text-brand-navy/70 lg:col-span-7">
              {t.destText}
            </p>
          </div>

          <div className="grid gap-px bg-brand-border lg:grid-cols-3">
            {destinations.map((d) => (
              <article key={d.country} className="group bg-brand-cream transition-colors hover:bg-card">
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={`${d.country} skyline`}
                    width={768}
                    height={1024}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                    {t.activePlacements}
                  </span>
                  <h3 className="mb-2 text-2xl group-hover:italic">{d.country}</h3>
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-brand-navy/50">
                    {d.city}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-navy/60">{d.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="border-t border-brand-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
                {t.locationLabel}
              </span>
              <h2 className="mb-8 text-4xl leading-tight lg:text-5xl">{t.locationTitle}</h2>
              <address className="mb-8 not-italic text-lg leading-relaxed text-brand-navy/70">
                {t.locationAddress.split("<br />").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < 2 && <br />}
                  </span>
                ))}
              </address>
              <a
                href="https://maps.app.goo.gl/b2yQFi5Fn9NRPD616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-brand-navy hover:text-brand-cream"
              >
                {t.directionsBtn}
              </a>
            </div>
            <div className="lg:col-span-7">
              <iframe
                title="TK Agency office location in Addis Ababa"
                src="https://maps.google.com/maps?q=Pawe+Building+Enkulal+Fabrika+Addis+Ababa&output=embed"
                className="aspect-[4/3] w-full border border-brand-border grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-brand-border bg-brand-navy px-6 py-24 text-brand-cream lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-start justify-between gap-8 border-b border-brand-cream/15 pb-8">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
                {t.contactLabel}
              </span>
              <h2 className="text-4xl leading-tight lg:text-6xl">
                {t.contactTitle}
              </h2>
            </div>
            <div className="hidden size-32 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-gold/60 lg:block lg:size-40">
              <img
                src={contactPortrait}
                alt="TK Agency office representative"
                loading="lazy"
                decoding="async"
                sizes="160px"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-3">
            <a href="tel:+251911460406" className="group block border-t border-brand-cream/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">{t.contactPrimary}</span>
              <p className="mt-4 font-display text-3xl group-hover:italic">+251 911 460 406</p>
            </a>
            <a href="tel:+251944100707" className="group block border-t border-brand-cream/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">{t.contactSecondary}</span>
              <p className="mt-4 font-display text-3xl group-hover:italic">+251 944 100 707</p>
            </a>
            <a href="mailto:tkagent2@gmail.com" className="group block border-t border-brand-cream/15 pt-6 transition-colors hover:border-brand-gold">
              <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">{t.contactEmail}</span>
              <p className="mt-4 break-all font-display text-3xl group-hover:italic">tkagent2@gmail.com</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border bg-brand-cream px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-2.5">
                <img src={logo} alt="TK Agency logo" className="size-7 object-contain" />
                <span className="font-display text-lg tracking-tight">TK Agency</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-brand-navy/50">
                {t.footerText}
              </p>
            </div>
            <div>
              <h5 className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">{t.footerServices}</h5>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li>{t.serviceHousemaids}</li>
                <li>{t.serviceCleaners}</li>
                <li>{t.serviceCooks}</li>
                <li>{t.serviceNannies}</li>
                <li>{t.serviceCaregivers}</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">{t.footerOffice}</h5>
              <ul className="space-y-3 text-sm text-brand-navy/70">
                <li>Pawe Building, 6th Floor</li>
                <li>Enkulal Fabrika, Addis Ababa</li>
                <li>Ethiopia</li>
                <li className="pt-3"><a href="tel:+251911460406" className="hover:text-brand-gold">+251 911 460 406</a></li>
                <li><a href="mailto:tkagent2@gmail.com" className="hover:text-brand-gold">tkagent2@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-brand-border pt-12 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy/40 lg:flex-row">
            <p>{t.footerCopyright}</p>
            <div className="flex gap-8">
              <a href="#about" className="hover:text-brand-navy">{t.footerAbout}</a>
              <a href="#destinations" className="hover:text-brand-navy">{t.footerDestinations}</a>
              <a href="#contact" className="hover:text-brand-navy">{t.footerContact}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
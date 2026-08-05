/** Local myPPC media — no third-party clinic branding assets. */
export const media = {
  logo: "/home/Homepage/Logo.svg",
  heroPeople: "/images/cta.jpg",
  patients: "/images/patients.jpg",
  blogBg: "/images/blog.jpg",
  heroSide: "/images/hero-care.jpg",
  treatments: {
    weight: "/images/weight.png",
    hair: "/images/loss.png",
    skin: "/images/cutouts/skin.png",
    longevity: "/images/cutouts/longevity.png",
    sex: "/images/med1.png",
    mental: "/images/hair.png",
    smoking: "/images/cutouts/habit.png",
  },
  /** bust browser cache when cutouts update */
  cutoutVersion: "16",
  steps: {
    step1: "/images/step1.jpg",
    step2: "/images/step2.jpg",
    step3: "/images/step3.jpg",
  },
  solutions: [
    "/images/med3.png",
    "/images/med2.png",
    "/images/med1.png",
  ],
  team: [
    {
      name: "Dr. Aisha Rahman",
      title: "MD, Family Medicine",
      image: "/images/team1.jpg",
      badges: ["CFPC", "U of T"],
    },
    {
      name: "Jordan Lee",
      title: "Clinical Pharmacist",
      image: "/images/team2.jpg",
      badges: ["RPh", "OCP"],
    },
    {
      name: "Dr. Sam Okonkwo",
      title: "MD, Mental Health",
      image: "/images/team3.jpg",
      badges: ["APA", "RCPSC"],
    },
  ],
};

export const brand = {
  name: "myPPC",
  legal: "myPPC Health Inc.",
  email: "hello@myppc.care",
  press: "press@myppc.care",
  tagline: "Private care. Practical plans. Delivered.",
};

export const treatments = [
  {
    title: "Lose",
    accent: "weight",
    href: "#care",
    image: media.treatments.weight,
    span: "md:col-span-4",
  },
  {
    title: "Regrow",
    accent: "hair",
    href: "#care",
    image: media.treatments.hair,
    span: "md:col-span-2",
  },
  {
    title: "Get glowing",
    accent: "skin",
    href: "#care",
    image: media.treatments.skin,
    span: "md:col-span-2",
  },
  {
    title: "Live",
    accent: "longer",
    href: "#care",
    image: media.treatments.longevity,
    span: "md:col-span-2",
  },
  {
    title: "Sexual",
    accent: "health",
    href: "#care",
    image: media.treatments.sex,
    span: "md:col-span-2",
  },
  {
    title: "Tackle",
    accent: "mental health",
    href: "#care",
    image: media.treatments.mental,
    span: "md:col-span-2",
  },
  {
    title: "Quit",
    accent: "smoking",
    href: "#care",
    image: media.treatments.smoking,
    span: "md:col-span-2",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Pick your goal",
    description: "Browse care paths or start a short health quiz in minutes.",
    image: media.steps.step1,
  },
  {
    step: "02",
    title: "Share your story",
    description:
      "A licensed clinician reviews your history before anything is prescribed.",
    image: media.steps.step2,
  },
  {
    step: "03",
    title: "Care at your door",
    description:
      "Approved plans ship discreetly — with ongoing chat support included.",
    image: media.steps.step3,
  },
];

export const expertPoints = [
  {
    title: "Certified Specialists",
    description: "Over 20 years of experience in specialized medicine.",
  },
  {
    title: "Healthcare Reimagined",
    description:
      "Revolutionizing traditional medicine to deliver personalized care for all.",
  },
  {
    title: "Technology-Powered Care",
    description:
      "Advanced digital solutions making healthcare more convenient, effective and patient-centered.",
  },
];

export const faqs = [
  {
    q: "What is myPPC?",
    a: "myPPC is a digital health platform that connects you with licensed clinicians for conditions that deserve privacy and clear answers. From metabolic health to skin, hair, and mental wellness, we help you get a personalized plan and medication fulfillment without the usual clinic friction.",
  },
  {
    q: "How does the process work?",
    a: "Complete a focused intake about your goals and medical history. A clinician reviews your responses and decides whether a treatment path is appropriate. If approved, your plan is prepared and shipped through our partner pharmacy network, and you can follow up through the myPPC portal.",
  },
  {
    q: "Who provides care on myPPC?",
    a: "Your care is guided by physicians, nurse practitioners, and pharmacists. Support teams are available through secure messaging so questions about dosing, side effects, or shipping never sit unanswered.",
  },
  {
    q: "Is my information protected?",
    a: "Yes. myPPC uses privacy controls aligned with applicable health data requirements. Clinical details are limited to the professionals managing your care, and our systems are built to keep personal information secure.",
  },
];

export const trustItems = [
  "Licensed pharmacy partners",
  "Clinician-reviewed plans",
  "Regulated medications",
  "Trusted by thousands",
];

export const reviews = [
  {
    title: "Clear and supportive",
    body: "The intake was simple and the clinician explained everything before my plan started. Felt private and professional the whole way.",
    name: "Alex M.",
  },
  {
    title: "Fantastic team!",
    body: "Quick responses in the portal and delivery showed up when expected. myPPC made the process feel easy from day one.",
    name: "Priya S.",
  },
  {
    title: "Truly reliable care",
    body: "I asked follow-up questions after starting treatment and got helpful answers fast. Exactly the kind of support I needed.",
    name: "Jordan K.",
  },
  {
    title: "Discreet and straightforward",
    body: "No awkward clinic visits — just a clear plan, solid guidance, and packaging that stayed private. Would recommend myPPC.",
    name: "Sam R.",
  },
  {
    title: "Real service",
    body: "From quiz to delivery everything felt organized. The care team was kind and the instructions were easy to follow.",
    name: "Taylor W.",
  },
];

export const meds = [
  "Sildenafil",
  "Tadalafil",
  "Hair Foam",
  "Semaglutide options",
  "Testosterone Support",
  "Lidocaine Spray",
];

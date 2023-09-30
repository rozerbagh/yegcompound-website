import { TbVaccine, TbPrescription, TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineMedication, MdLocalLaundryService } from "react-icons/md";
import genCompounding from "../assets/images/icons/general-compounding.svg";
import hormoneReplacement from "../assets/images/icons/hormone-replacement.svg";
import painManagement from "../assets/images/icons/pain-management.svg";
import veterinaryCompounding from "../assets/images/icons/veterinary-compounding.svg";
import prescription from "../assets/images/icons/prescriptions.svg";
import vaccines from "../assets/images/icons/vaccines.svg";
import medicineCustomization from "../assets/images/icons/medicine-customization.svg";
import healthMonitoring from "../assets/images/icons/health-monitoring.svg";

import img1 from "../assets/images/portfolio/img1.jpg";
import img2 from "../assets/images/portfolio/img2.jpg";
import img3 from "../assets/images/portfolio/img3.jpg";
import img4 from "../assets/images/portfolio/img4.jpg";
import ohpi from "../assets/images/portfolio/img1.jpeg";
import img6 from "../assets/images/portfolio/img6.jpg";

export const formConstant = {
  orders: {
    ingredient: "ingredient",
    percentage: "percent",
  },
};

export const orderStatus = {
  order: "pending",
  dispatch: "dispatched",
  ship: "shipped",
  deliver: "delivered",
};

export const services = [
  {
    name: "Prescribing",
    description:
      "Your pharmacist does more than just prepare your prescriptions. They are with you every step of the way: whether you have a minor health issue or a chronic condition. Prescription services are at the core of what your pharmacist does. See how these services can benefit you.",
    icon: prescription,
    path: "/prescriptions",
  },
  {
    name: "Vaccinations",
    description:
      "Vaccines are important and offer long-term or sometimes lifelong protection against common diseases. Getting vaccinated protects not only yourself, but those around you by limiting the spread. Book an appointment with your pharmacist to get protection against the flu, common diseases or diseases that can affect travelers.",
    icon: vaccines,
    path: "/vaccines",
  },
  {
    name: "Assessments & Monitoring",
    description:
      "As your partner in health, your pharmacist is not one to simply sit back on good results. Your pharmacist can prescribe and execute certain tests to make sure your treatment is working for you. They will also help you keep your condition in check with monitoring tools and advice.",
    icon: healthMonitoring,
    path: "/assesments-monitoring",
  },
  {
    name: "Medication Customization",
    description:
      "Sticking to your medication isn’t always a walk in the park. Your pharmacist is here to make minor or major adjustments to your therapy or provide you with custom formulas and innovative packaging to make it all easier.",
    icon: medicineCustomization,
    path: "/medicine-customization",
  },
  // {
  //   name: "Wellness Consultation",
  //   description:
  //     "Your pharmacist truly believes in this. Personalized consultations are available to help you reach your wellness goals or help you navigate life-changing events in health.",
  //   icon: medicineCustomization,
  //   path: "#",
  // },
];

export const products = [
  {
    name: "Atoma Private Label",
    description: "",
    img: img1,
  },
  {
    name: "OHIP+",
    description: "",
    img: ohpi,
  },
  {
    name: "Telemedicine Services",
    description: "",
    img: img3,
  },
  {
    name: "Option+™ - Private Label",
    description: "",
    img: img4,
  },
];
const txt = `Pharmacy compounding offers customized care to meet the specific needs of individual patients.`;
export const compounding = [
  {
    name: "General Compounding",
    description: `Pharmacy compounding offers customized care to meet the specific needs of individual patients. 
    Do you wish your child's medicine tasted better, so they would accept it without a fuss?
    Do you struggle to cut prescription tablets in half because they're not the strength you require?
    Would a loved one benefit from having multiple medications combined into a single dose?
    Compounding pharmacists provide solutions to all these problems, and more.`,
    icon: genCompounding,
    path: "/general-compounding",
  },
  {
    name: "Hormone Replacement Therapy (HRT)",
    description: `Unbalanced hormones can make you feel like a stranger in your own skin.
    Hormones have a powerful effect on your body and many areas of your health, including your mood, your metabolism, 
    and your sexual and reproductive function.`,
    icon: hormoneReplacement,
    path: "/hormone-replacement-therapy",
  },
  {
    name: "Pain Management",
    description: `Pain is inevitable. Suffering doesn’t have to be. 
    Pain is the most common symptom for which people seek medical help. 
    Acute pain can easily turn into chronic pain, which can be difficult to treat.
    There are many commercially available pain relief medications that help with the chronic pain of conditions such as arthritis, fibromyalgia, migraine headaches, and other nerve and muscle pain, but they
    can also have unwanted side effects like drowsiness, dizziness or stomach irritation.
    While many patients just accept these side effects as the cost of pain relief, there may be a better solution for them: pharmacy compounding.`,
    icon: painManagement,
    path: "/pain-management",
  },
  {
    name: "Veterinary Compounding",
    description: `Your pets are special. Their medication should be, too.
    Pets are members of the family, and you want them to have medical treatment that's as 
    attentive and innovative as you expect for yourself.
    Today’s veterinarians understand this, and many rely on compounding as one way to deliver this advanced level of care.
    Consider how hard it is to get your cat to swallow a pill, and you'll start to understand the advantages of compounding for pets.`,
    icon: veterinaryCompounding,
    path: "/veterinary-compounding",
  },
];

export const prescription_content = [
  {
    img: img1,
    title: "Prescription Transfers",
    content:
      "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
  },
  {
    img: img1,
    title: "Medication for minor health problems",
    content:
      "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
  },
  {
    img: img1,
    title: "Medication for chronic conditions",
    content:
      "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
  },
  {
    img: img1,
    title: "Your medication and your safety",
    content:
      "Medication should be always be taken according to your pharmacist’s direction, to avoid incidents. See how you can use and dispose of your medication safely.",
  },
  {
    img: img1,
    title: "Prescription Renewals",
    content:
      "To save time and never miss a dose, you can renew your prescription in advance using one of the following options your pharmacist has made available to you: the mobile app, online renewals, the medication synchronization service and many others.",
  },
];
export const prescription_submenu_content = [
  {
    img: img1,
    title: "Prescription Transfers",
    content:
      "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
  },
  {
    img: img1,
    title: "Medication for minor health problems",
    content:
      "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
  },
  {
    img: img1,
    title: "Medication for chronic conditions",
    content:
      "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
  },
  {
    img: img1,
    title: "Your medication and your safety",
    content:
      "Medication should be always be taken according to your pharmacist’s direction, to avoid incidents. See how you can use and dispose of your medication safely.",
  },
  {
    img: img1,
    title: "Prescription Renewals",
    content:
      "To save time and never miss a dose, you can renew your prescription in advance using one of the following options your pharmacist has made available to you: the mobile app, online renewals, the medication synchronization service and many others.",
  },
];

export const vaccines_content = [
  {
    img: img1,
    title: "Flu Shots",
    content:
      "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
  },
  {
    img: img1,
    title: "Travel Vaccines",
    content:
      "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
  },
  {
    img: img1,
    title: "Common Diseases",
    content:
      "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
  },
];

export const medication_cus_content = [
  {
    img: img1,
    title: "Therapy Adjustments",
    content:
      "If you have been taking medication for a while, your pharmacist can adjust your therapy to fit with your needs and lifestyle even more.",
  },
  {
    img: img1,
    title: "Customized Medication",
    content:
      "When it comes to medication, the one-size-fits-all approach does not always cut it. Some medication are available in different formats, sizes, flavours and custom dosages based on your personal preferences.",
  },
  {
    img: img1,
    title: "Customized Packaging",
    content:
      "Like your medication, packaging can also correspond to your needs and situation. Your pharmacist can print larger labels and make sure your bottle is easy to open if you have poor motor skills.",
  },
];

export const assesment_monitor_content = [
  {
    img: img1,
    title: "Diabetes",
    content:
      "Whether you have prediabetes, diabetes or are newly diagnosed, many tests exist to ensure your blood sugar is well under control and that your treatment is working well.",
  },
  {
    img: img1,
    title: "Heart Health",
    content:
      "If you are taking medication for a heart condition, your pharmacist can suggest some tests to determine if your blood pressure or cholesterol is well managed or to see if adjustments to your treatment are necessary.",
  },
  {
    img: img1,
    title: "Respiratory Health",
    content:
      "If you have asthma or are experiencing strep throat symptoms, talk to your pharmacist about tests to ensure your respiratory health is in order.",
  },
  {
    img: img1,
    title: "COVID-19 Testing",
    content:
      "Discover our COVID-19 testing services, whether you are an at-risk asymptomatic person or an interested traveler.",
  },
];

export const wellness_consultant_content = [
  {
    img: img1,
    title: "Pregnancy and Maternity",
    content:
      "Looking to get pregnant? Your pharmacist can help you through the whole process until the baby arrives. They will answer your questions related to medication and vitamins, as well as help you relieve pregnancy-related symptoms. They also have breastfeeding equipment to rent.",
  },
  {
    img: img1,
    title: "Weight Loss",
    content:
      "If you’re thinking about losing weight, your pharmacist can shed a light on helpful products and make sure your medication doesn’t make you gain weight as a side effect.",
  },
  {
    img: img1,
    title: "Travel Health",
    content:
      "Your pharmacist is the key to a healthy trip. All your needs are covered for you to leave with a peace of mind: vaccination depending on your destination, tips on how to travel with medication, advice on essential items to always have on hand.",
  },
  {
    img: img1,
    title: "Compression Socks",
    content:
      "There are many good reasons to use compression socks, whether you have poor blood circulation, want to soothe heavy and tired legs or are planning to take a long flight. Your pharmacist will help you choose the right model, size and material for the best fit possible.",
  },
  {
    img: img1,
    title: "Smoking Cessation",
    content:
      "To stop smoking is not easy. You’re not alone; your pharmacist can develop an action plan with you. They can suggest nicotine replacement products (patches, chewing gums, lozenges) and help you deal with withdrawal side effects.",
  },
  {
    img: img1,
    title: "Mental Health Support",
    content:
      "Your pharmacist offers private consultations to discuss your personal progress. They will assess your current medication, talk about alternative options and make sure your side effects are not disruptive. They can act as a bridge between you and your doctor, so you can focus on your recovery.",
  },
];

export const websiteTitle = "The Medicine Shoppe Pharmacy #377";

export const footerMenus = [
  {
    mainmenu: "Pharmacy Services",
    lists: [
      { name: "Prescriptions", path: "#" },
      { name: "Vaccinations", path: "#" },
      { name: "Assessments & Monitoring", path: "#" },
      { name: "Wellness Consultations", path: "#" },
    ],
  },
  {
    mainmenu: "Products and Resources",
    lists: [
      { name: "atoma® Private Label", path: "#" },
      { name: "OHIP+", path: "#" },
      { name: "Mobile app", path: "#" },
      { name: "Telemedicine Services", path: "#" },
      { name: "Option+™ - Private Label", path: "#" },
      { name: "Our Trusted Brands", path: "#" },
    ],
  },
  {
    mainmenu: "Pharm/Assist",
    lists: [
      { name: "Search", path: "#" },
      { name: "Directions for use", path: "#" },
      { name: "Disease", path: "#" },
      { name: "Forms", path: "#" },
      { name: "Health", path: "#" },
      { name: "Laboratory tests", path: "#" },
      { name: "Natural health products", path: "#" },
      { name: "Nutrition", path: "#" },
      { name: "Street drugs", path: "#" },
      { name: "Travel Destination", path: "#" },
      { name: "Travel information", path: "#" },
      { name: "Drug Database", path: "#" },
    ],
  },
  {
    mainmenu: "Medicine Shoppe",
    lists: [
      { name: "12 Days Giveaway", path: "#" },
      { name: "Who We Are", path: "#" },
      { name: "Personal Pharmacist", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Prescription Transfer", path: "#" },
      { name: "Contact Us", path: "#" },
      { name: "Franchising Opportunities", path: "#" },
      { name: "Refills", path: "#" },
      { name: "Newsletter Subscription", path: "#" },
    ],
  },
];

export const googleDetails = {};

export const mobile_os = {
  android: "android",
  ios: "ios",
  window: "window",
  other: "other",
};

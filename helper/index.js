import { TbVaccine, TbPrescription, TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineMedication, MdLocalLaundryService } from "react-icons/md";
export const formConstant = {
    orders: {
        ingredient: "ingredient",
        percentage: "percent",
    },
};

import img1 from "../assets/images/portfolio/img1.jpg";
import img2 from "../assets/images/portfolio/img2.jpg";
import img3 from "../assets/images/portfolio/img3.jpg";
import img4 from "../assets/images/portfolio/img4.jpg";
import ohpi from "../assets/images/portfolio/img1.jpeg";
import img6 from "../assets/images/portfolio/img6.jpg";

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
        icon: <TbPrescription />,
    },
    {
        name: "Vaccinations",
        description:
            "Vaccines are important and offer long-term or sometimes lifelong protection against common diseases. Getting vaccinated protects not only yourself, but those around you by limiting the spread. Book an appointment with your pharmacist to get protection against the flu, common diseases or diseases that can affect travelers.",
        icon: <TbVaccine />,
    },
    {
        name: "Assessments & Monitoring",
        description:
            "As your partner in health, your pharmacist is not one to simply sit back on good results. Your pharmacist can prescribe and execute certain tests to make sure your treatment is working for you. They will also help you keep your condition in check with monitoring tools and advice.",
        icon: <TbHeartRateMonitor />,
    },
    {
        name: "Medication Customization",
        description:
            "Sticking to your medication isn’t always a walk in the park. Your pharmacist is here to make minor or major adjustments to your therapy or provide you with custom formulas and innovative packaging to make it all easier.",
        icon: <MdOutlineMedication />,
    },
    {
        name: "Wellness Consultation",
        description:
            "Your pharmacist truly believes in this. Personalized consultations are available to help you reach your wellness goals or help you navigate life-changing events in health.",
        icon: <MdLocalLaundryService />,
    },
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

export const compounding = [
    {
        name: "Bio-Identical Hormone Replacement Therapy (BHRT)",
        description:
            "At Lemarchand Dispensary we have a long history of compounding therapies for hormone replacement therapy. Bio-identical hormone replacement therapy uses hormones that are identical to those found in the human body instead of synthetic hormones or chemicals that mimic hormones. We can compound creams, capsules, suppositories, and lozenges that contain bio-identical estrogens, progesterone, testosterone and DHEA. There are many advantages to transdermal delivery of hormones, the main being the bypass of liver metabolism. We use cream bases that are gentle, moisturizing, aesthetically pleasing, good for vaginal use and ideal for drug delivery through the skin. In addition, we use metered-dose dispensers that provide precise dosing.",
        icon: "fa fa-star",
    },
    {
        name: "Topical Pain Therapies",
        description: `Treatment of pain can be a complex and difficult area of medicine. Lemarchand Dispensary specializes in the treatment of pain using compound creams and gels. We have pharmacists who have taken pain management training. Using the special knowledge from that training and our experience as compounding professionals we can choose the best pain treatment for our patients. Our pharmacists use a number of active drugs such as anti-inflammatories, muscle relaxants, counter-irritants, anesthetics, and nerve pain agents to treat our patients. With our experience we can choose the most appropriate vehicle to deliver the active ingredients through the skin to obtain the best pain treatment possible. We use bases such as Versapro®, Transdermal Pain Base®, Lipoderm®, and PLO Diclogel®.`,
        icon: "fa fa-star",
    },
    {
        name: "Cosmetic Compounds",
        description: `Lemarchand Dispensary has an abundance of experience in compounding cosmetic mixtures. We have developed relationships with dermatologists and other prescribers who treat patients for cosmetic conditions. Using ingredients such as glycolic acid, retinoic acid, hydroquinone, kojic acid, finasteride, and minoxidil we develop high quality blends for the treatment of conditions such hyperpigmentation (dark spots), wrinkles, acne, and hair loss. Also, choosing the right base cream to deliver the ingredients to the skin is essential to ensuring that the end result is met. We use a number of bases specifically designed for cosmetic use, including some that we have developed ourselves in-house.`,
        icon: "fa fa-star",
    },
    {
        name: "Other Dosage Forms",
        description: `Compounding is the scientific art of developing and creating custom pharmaceuticals for patients who require treatment for any number of conditions. Thus, the need to compound medications as capsules, suppositories, suspensions, oils, and lozenges is not uncommon. At Lemarchand Dispensary we are happy to offer these services to our patients and colleagues. If you have any questions about our compounding services please do not hesitate to contact us today!`,
        icon: "fa fa-star",
    },
];

export const prescription_content = [
    { 
        img: img1,
        title: "Prescription Transfers",
        content: "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
    },
    { 
        img: img1,
        title: "Medication for minor health problems",
        content: "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
    },
    { 
        img: img1,
        title: "Medication for chronic conditions",
        content: "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
    },
    { 
        img: img1,
        title: "Your medication and your safety",
        content: "Medication should be always be taken according to your pharmacist’s direction, to avoid incidents. See how you can use and dispose of your medication safely.",
    },
    { 
        img: img1,
        title: "Prescription Renewals",
        content: "To save time and never miss a dose, you can renew your prescription in advance using one of the following options your pharmacist has made available to you: the mobile app, online renewals, the medication synchronization service and many others.",
    },
];
export const prescription_submenu_content = [
    { 
        img: img1,
        title: "Prescription Transfers",
        content: "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
    },
    { 
        img: img1,
        title: "Medication for minor health problems",
        content: "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
    },
    { 
        img: img1,
        title: "Medication for chronic conditions",
        content: "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
    },
    { 
        img: img1,
        title: "Your medication and your safety",
        content: "Medication should be always be taken according to your pharmacist’s direction, to avoid incidents. See how you can use and dispose of your medication safely.",
    },
    { 
        img: img1,
        title: "Prescription Renewals",
        content: "To save time and never miss a dose, you can renew your prescription in advance using one of the following options your pharmacist has made available to you: the mobile app, online renewals, the medication synchronization service and many others.",
    },
];

export const vaccines_content = [
    { 
        img: img1,
        title: "Flu Shots",
        content: "Do you wish to transfer your prescriptions to your Medicine Shoppe pharmacy? Simply fill out our online form to send a transfer request. We'll take care of the rest!",
    },
    { 
        img: img1,
        title: "Travel Vaccines",
        content: "If you have a minor health problem (nausea during pregnancy, traveler's diarrhea, lice), you can turn to you pharmacist as a front line health professional. See what they can do for you right away: prescriptions, advice and much more.",
    },
    { 
        img: img1,
        title: "Common Diseases",
        content: "If you have a chronic condition and require regular medication, your pharmacist is here to facilitate your day to day. They can extend prescriptions and re-prescribe your medication, as well as show you tools to help you get the most out of your treatment.",
    },
];

export const medication_cus_content = [
    { 
        img: img1,
        title: "Therapy Adjustments",
        content: "If you have been taking medication for a while, your pharmacist can adjust your therapy to fit with your needs and lifestyle even more.",
    },
    { 
        img: img1,
        title: "Customized Medication",
        content: "When it comes to medication, the one-size-fits-all approach does not always cut it. Some medication are available in different formats, sizes, flavours and custom dosages based on your personal preferences.",
    },
    { 
        img: img1,
        title: "Customized Packaging",
        content: "Like your medication, packaging can also correspond to your needs and situation. Your pharmacist can print larger labels and make sure your bottle is easy to open if you have poor motor skills.",
    },
];

export const assesment_monitor_content = [
    { 
        img: img1,
        title: "Diabetes",
        content: "Whether you have prediabetes, diabetes or are newly diagnosed, many tests exist to ensure your blood sugar is well under control and that your treatment is working well.",
    },
    { 
        img: img1,
        title: "Heart Health",
        content: "If you are taking medication for a heart condition, your pharmacist can suggest some tests to determine if your blood pressure or cholesterol is well managed or to see if adjustments to your treatment are necessary.",
    },
    { 
        img: img1,
        title: "Respiratory Health",
        content: "If you have asthma or are experiencing strep throat symptoms, talk to your pharmacist about tests to ensure your respiratory health is in order.",
    },
    { 
        img: img1,
        title: "COVID-19 Testing",
        content: "Discover our COVID-19 testing services, whether you are an at-risk asymptomatic person or an interested traveler.",
    },
];

export const wellness_consultant_content = [
    { 
        img: img1,
        title: "Pregnancy and Maternity",
        content: "Looking to get pregnant? Your pharmacist can help you through the whole process until the baby arrives. They will answer your questions related to medication and vitamins, as well as help you relieve pregnancy-related symptoms. They also have breastfeeding equipment to rent.",
    },
    { 
        img: img1,
        title: "Weight Loss",
        content: "If you’re thinking about losing weight, your pharmacist can shed a light on helpful products and make sure your medication doesn’t make you gain weight as a side effect.",
    },
    { 
        img: img1,
        title: "Travel Health",
        content: "Your pharmacist is the key to a healthy trip. All your needs are covered for you to leave with a peace of mind: vaccination depending on your destination, tips on how to travel with medication, advice on essential items to always have on hand.",
    },
    { 
        img: img1,
        title: "Compression Socks",
        content: "There are many good reasons to use compression socks, whether you have poor blood circulation, want to soothe heavy and tired legs or are planning to take a long flight. Your pharmacist will help you choose the right model, size and material for the best fit possible.",
    },
    { 
        img: img1,
        title: "Smoking Cessation",
        content: "To stop smoking is not easy. You’re not alone; your pharmacist can develop an action plan with you. They can suggest nicotine replacement products (patches, chewing gums, lozenges) and help you deal with withdrawal side effects.",
    },
    { 
        img: img1,
        title: "Mental Health Support",
        content: "Your pharmacist offers private consultations to discuss your personal progress. They will assess your current medication, talk about alternative options and make sure your side effects are not disruptive. They can act as a bridge between you and your doctor, so you can focus on your recovery.",
    },
];

export const websiteTitle = "The Medicine Shoppe 377";

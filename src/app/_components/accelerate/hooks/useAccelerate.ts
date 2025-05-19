// hooks/useAccelerate.ts

const useAccelerate = () => {
  return {
    heading: "Accelerate Your SaaS Revenue with Expert Performance Marketing",
    description:
      "From targeted paid acquisition to high-impact organic strategies, I help SaaS brands turn marketing spend into predictable pipeline and revenue, trusted globally by SaaS leaders.",
    bullets: [
      "Worked with funded and growth-stage SaaS companies",
      "Proven impact on pipeline quality, CAC efficiency, and SQL velocity",
      "Result-driven, not platform-driven",
    ],
    stats: [
      { label: "demo bookings", value: "+72%" },
      { label: "bounce rate", value: "-42%" },
      { label: "sign-up rate", value: "+3.4×" },
    ],
    formTitle: "Tell us about your SaaS",
    formSubtitle: "Get a free marketing audit tailored to your funnel and growth goals.",
    formFields: [
      { label: "Full Name", placeholder: "e.g. Sarah Johnson", required: true },
      { label: "Business Email", placeholder: "e.g. you@company.com", required: true },
      { label: "Company Website URL", placeholder: "e.g. https://yourcompany.com", required: true },
      { label: "Services", placeholder: "e.g. Paid Marketing, SEO, Conversion Rate Optimisation", required: true },
      { label: "What’s blocking growth right now?", placeholder: "e.g. “Low demo bookings, drop-off after signup, unclear value prop”", required: false },
    ],
    cta: "Submit",
  }
}

export default useAccelerate

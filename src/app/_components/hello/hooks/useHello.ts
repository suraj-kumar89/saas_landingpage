// hooks/useHello.ts

const useHello = () => {
  return {
    name: 'Shitanshu Kumar',
    title: 'A performance marketing strategist helping |SaaS brands scale with precision.',
    description: `I help SaaS and digital-first businesses unlock growth through data-driven performance marketing. With a strategy-first approach and deep campaign analytics, I've helped companies | across the globe improve ROI, reduce CAC, and scale faster — all while aligning with their unique | goals.`,
    stats: [
      { value: '6+', label: 'Years of Experience' },
      { value: '$10M+', label: 'Ad Spend Managed' },
      { value: '100+', label: 'Ads Accounts' },
      { value: 'Google', label: 'Certified Expert' },
      { value: 'ROI', label: 'Focused Strategies' },
    ],
    profileImage: '/assets/Images/pro.svg', // must be inside /public/images/
    linkedin: 'https://www.linkedin.com/in/shitanshu-kumar1/', // replace with actual URL
  }
}

export default useHello

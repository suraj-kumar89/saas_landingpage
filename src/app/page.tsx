import Home from './Home'

interface Props {
  params: { slug: string }
}

// ✅ Dynamic metadata based on slug
export async function generateMetadata() {
  return {
    title: "SaaS Performance Marketing Expert | Shitanshu Kumar",
    description:
      "Helping SaaS brands scale with performance marketing that drives pipeline and revenue.",
    robots: 'noindex, nofollow',
  };
}

export default function SlugPage({ params }: Props) {
  const { slug } = params

  return <Home slug={slug} />
}

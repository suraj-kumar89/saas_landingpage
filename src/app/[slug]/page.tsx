import { Metadata } from 'next';
import Home from '../Home';
import { metadataMap } from '../../lib/MetaData';

// ✅ Correct Promise-based typing for Next.js 15+
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = metadataMap[slug as keyof typeof metadataMap] || metadataMap['homepage'];

  return {
    title: data.title,
    description: data.description,
  };
}

// ✅ The route component must ALSO await `params`
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Home slug={slug} />;
}

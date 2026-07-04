import { notFound } from 'next/navigation';
import DomainLayout from '@/components/ui/DomainLayout';
import domainsData from '@/data/domains.json';

// Define the type for the domain data based on our JSON structure
type DomainData = {
    id: string;
    heroImage: string;
    heroTitle: string;
    heroSubtitle: string;
    heroButtonText: string;
    heroButtonLink: string;
    overviewTitle: string;
    overviewDescription: string;
    whatWeDoDescription: string;
    overviewCards: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
    }>;
    marqueeImages?: string[];
};

// Generate static params for all defined domains
export function generateStaticParams() {
    return domainsData.map((domain) => ({
        id: domain.id,
    }));
}

export default async function DomainPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const domain = (domainsData as DomainData[]).find((d) => d.id === id);

    if (!domain) {
        notFound();
    }

    return (
        <DomainLayout
            heroImage={domain.heroImage}
            heroTitle={domain.heroTitle}
            heroSubtitle={domain.heroSubtitle}
            heroButtonText={domain.heroButtonText}
            heroButtonLink={domain.heroButtonLink}
            overviewTitle={domain.overviewTitle}
            overviewDescription={domain.overviewDescription}
            whatWeDoDescription={domain.whatWeDoDescription}
            overviewCards={domain.overviewCards}
            marqueeImages={domain.marqueeImages}
        />
    );
}

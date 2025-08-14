import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    url,
    image,
    type = 'website',
    noIndex = false
}) => {
    const siteTitle = 'Z9 Air Travels';
    const siteUrl = 'https://www.z9airtravels.com';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteImage = image || `${siteUrl}/images/default-og-image.jpg`;
    const canonicalUrl = url ? `${siteUrl}${url.startsWith('/') ? url : '/' + url}` : siteUrl;

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={siteTitle} />
            <meta name="publisher" content={siteTitle} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="UTF-8" />
            <meta name="theme-color" content="#ffffff" />

            {/* Robots */}
            <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
            <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Z9AirTravels" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={siteImage} />

            {/* Alternate Language (Optional) */}
            <link rel="alternate" href={siteUrl} hrefLang="en" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "TravelAgency",
                    "name": siteTitle,
                    "url": siteUrl,
                    "logo": `${siteUrl}/images/logo.jpg`,
                    "image": siteImage,
                    "description": description,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Gharisar, Naria, Shariatpur, Dhaka, Bangladesh",
                        "addressLocality": "Shariatpur",
                        "addressRegion": "Dhaka",
                        "postalCode": "12345",
                        "addressCountry": "Bangladesh"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+8801710-411019",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Bengali"]
                    },
                    "sameAs": [
                        "https://www.facebook.com/Z9airtravels/",
                        "https://www.instagram.com/z9airtravels"
                    ],
                    "openingHours": "Mo-Su 09:00-18:00"
                })}
            </script>
        </Helmet>
    );
};

export default SEO;

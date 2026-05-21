import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean; // true = light text (for dark hero backgrounds)
}

export default function Breadcrumb({ items, light = true }: BreadcrumbProps) {
  const textBase = light ? "text-white/60" : "text-slate-500";
  const textActive = light ? "text-white/90" : "text-slate-800";
  const textHover = light ? "hover:text-white" : "hover:text-navy";
  const separatorColor = light ? "text-white/30" : "text-slate-300";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://qurvewealth.in${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm flex-wrap">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className={separatorColor}>/</span>}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`${textBase} ${textHover} transition-colors`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? textActive : textBase}>{item.label}</span>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}

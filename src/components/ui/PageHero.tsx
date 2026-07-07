'use client'

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  backgroundImage?: string;
  dark?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  backgroundImage,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-32 lg:pt-36 pb-16 lg:pb-20 px-6 lg:px-10"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: !backgroundImage
          ? dark
            ? 'var(--clr-charcoal)'
            : 'var(--clr-cream)'
          : undefined,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top', // Better on mobile
      }}
    >
      {/* Background Overlay */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.65), rgba(0,0,0,0.45))',
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <span
          className="eyebrow"
          style={{
            color: backgroundImage || dark ? '#FBBF24' : undefined,
          }}
        >
          {eyebrow}
        </span>

        <h1
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: backgroundImage || dark ? '#fff' : 'var(--clr-charcoal)',
          }}
        >
          {title}
          {titleAccent && (
            <>
              {' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--clr-amber)',
                }}
              >
                {titleAccent}
              </em>
            </>
          )}
        </h1>

        {subtitle && (
          <p
            className="mt-6 max-w-xl text-base leading-relaxed"
            style={{
              color:
                backgroundImage || dark
                  ? 'rgba(255,255,255,0.85)'
                  : '#6B7280',
            }}
          >
            {subtitle}
          </p>
        )}

        <div
          className="mt-8 h-1 w-16 rounded-full"
          style={{ background: 'var(--clr-amber)' }}
        />
      </div>
    </section>
  );
}
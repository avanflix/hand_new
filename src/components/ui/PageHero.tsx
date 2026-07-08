'use client'
import Image from 'next/image'

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
      className="relative min-h-screen lg:h-screen overflow-hidden flex items-center px-6 lg:px-10"
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
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <span
          className="eyebrow"
          style={{
            color: backgroundImage || dark ? '#2c2920' : undefined,
          }}
        >
          {eyebrow}
        </span>

        {/* <h1
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
        </h1> */}

        {subtitle && (
          <p
            className="mt-60 max-w-xl text-base leading-relaxed"
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
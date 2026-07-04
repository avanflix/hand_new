'use client'

interface PageHeroProps {
  eyebrow: string
  title: string
  titleAccent?: string
  subtitle?: string
  dark?: boolean
}

export default function PageHero({ eyebrow, title, titleAccent, subtitle, dark = false }: PageHeroProps) {
  return (
    <section
      className="pt-36 pb-20 px-6 lg:px-10"
      style={{ background: dark ? 'var(--clr-charcoal)' : 'var(--clr-cream)' }}
    >
      <div className="max-w-7xl mx-auto">
        <span className="eyebrow">{eyebrow}</span>
        <h1
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: dark ? 'white' : 'var(--clr-charcoal)',
          }}
        >
          {title}
          {titleAccent && (
            <>
              {' '}
              <em style={{ fontStyle: 'italic', color: 'var(--clr-amber)' }}>{titleAccent}</em>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: dark ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>
            {subtitle}
          </p>
        )}
        <div
          className="mt-8 h-1 w-16 rounded-full"
          style={{ background: 'var(--clr-amber)' }}
        />
      </div>
    </section>
  )
}

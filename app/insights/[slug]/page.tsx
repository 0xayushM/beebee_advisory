import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/app/data/caseStudies';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider helvetica-neue transition-colors"
              style={{ color: 'var(--primary-gold)' }}
            >
              ← Back to Home
            </Link>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider helvetica-neue" style={{ backgroundColor: 'rgba(201,168,76,.15)', color: 'var(--primary-gold)' }}>
              {caseStudy.industry}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight anton" style={{ color: 'var(--text-primary)' }}>
            {caseStudy.heroTitle}
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed helvetica-neue-light" style={{ color: 'var(--text-secondary)' }}>
            {caseStudy.heroDescription}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 anton" style={{ color: 'var(--primary-gold)' }}>
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                <span className="h-px w-7 opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
                The Problem
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 anton" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.challenge.title}
              </h2>
              <p className="text-base leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.challenge.description}
              </p>
            </div>
            
            <div>
              <ul className="space-y-4">
                {caseStudy.challenge.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: 'var(--primary-gold)' }} />
                    <span className="text-base helvetica-neue" style={{ color: 'var(--text-primary)' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
                <span className="h-px w-7 opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
                The Approach
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 anton" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.solution.title}
              </h2>
              <p className="text-base leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.solution.description}
              </p>
            </div>
            
            <div>
              <ul className="space-y-4">
                {caseStudy.solution.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10l2 2 4-4" stroke="var(--primary-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="10" r="9" stroke="var(--primary-gold)" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-base helvetica-neue" style={{ color: 'var(--text-primary)' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] helvetica-neue" style={{ color: 'var(--primary-gold)' }}>
              <span className="h-px w-7 opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
              Impact
              <span className="h-px w-7 opacity-60" style={{ backgroundColor: 'var(--primary-gold)' }} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 anton" style={{ color: 'var(--text-primary)' }}>
              {caseStudy.results.title}
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
              {caseStudy.results.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.results.metrics.map((metric, index) => (
              <div 
                key={index} 
                className="p-8 rounded-lg border"
                style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)'
                }}
              >
                <div className="text-xs uppercase tracking-wider mb-3 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                  {metric.label}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4 anton" style={{ color: 'var(--primary-gold)' }}>
                  {metric.value}
                </div>
                <p className="text-sm leading-relaxed helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="h-12 w-12 mx-auto opacity-30" fill="var(--primary-gold)" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 anton" style={{ color: 'var(--text-primary)' }}>
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-medium helvetica-neue-bold" style={{ color: 'var(--text-primary)' }}>
                {caseStudy.testimonial.author}
              </div>
              <div className="text-sm helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
                {caseStudy.testimonial.role}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: 'var(--section-bg-dark)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 anton" style={{ color: 'var(--text-primary)' }}>
            Ready to Transform Your <span className="italic font-bold" style={{ color: 'var(--primary-gold)' }}>Financial Operations?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-10 helvetica-neue" style={{ color: 'var(--text-secondary)' }}>
            Let's discuss how we can help your business achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg text-sm font-medium uppercase tracking-wider transition-all anton"
            style={{
              backgroundColor: 'var(--primary-gold)',
              color: '#0F1B36'
            }}
          >
            Get Started →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

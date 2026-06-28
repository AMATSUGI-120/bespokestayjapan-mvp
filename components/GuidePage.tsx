import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import type { GuideLink, GuidePageContent } from '@/lib/guide-content';
import { getProduct } from '@/lib/products';

function LinkList({ links }: { links: GuideLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const className =
          'inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]';

        if (link.external) {
          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link key={link.href} href={link.href} className={className}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

export function GuidePage({ guide }: { guide: GuidePageContent }) {
  const product = guide.productKey ? getProduct(guide.productKey) : null;

  return (
    <>
      <SiteNav />

      <main>
        <section
          className="px-6 py-16 md:py-24"
          style={{
            backgroundColor: 'var(--bsj-bg)',
            borderBottom: '1px solid var(--bsj-border)',
          }}
        >
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                {guide.eyebrow}
              </p>
              <h1 className="max-w-4xl text-[clamp(38px,6vw,76px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                {guide.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                {guide.description}
              </p>
            </div>

            <aside className="border-l border-[var(--bsj-border)] pl-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                BSJ method
              </p>
              <p className="mt-4 text-[14px] leading-[1.8] text-[var(--bsj-text-muted)]">
                We separate public listing claims, source-backed notes, and details that
                should be confirmed directly before planning around them.
              </p>
            </aside>
          </div>
        </section>

        <section className="px-6 py-14 md:py-18" style={{ backgroundColor: 'var(--bsj-bg-card)' }}>
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="max-w-3xl">
              <div className="space-y-5 border-b border-[var(--bsj-border)] pb-10">
                {guide.intro.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-[1.9] text-[var(--bsj-text)]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="divide-y divide-[var(--bsj-border)]">
                {guide.sections.map((section) => (
                  <section key={section.title} className="py-10">
                    <h2 className="text-[24px] font-medium tracking-[0] text-[var(--bsj-text)]">
                      {section.title}
                    </h2>

                    {section.body?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets ? (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-[15px] leading-[1.75] text-[var(--bsj-text-muted)]">
                            <span className="mt-[0.72em] h-px w-5 shrink-0 bg-[var(--bsj-accent)]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.template ? (
                      <div className="mt-7 border border-[var(--bsj-border)] bg-[var(--bsj-bg)] p-5 md:p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                          Message template
                        </p>
                        <h3 className="mt-3 text-[20px] font-medium leading-[1.25] tracking-[0] text-[var(--bsj-text)]">
                          {section.template.title}
                        </h3>
                        {section.template.intro ? (
                          <p className="mt-3 text-[13px] leading-[1.7] text-[var(--bsj-text-muted)]">
                            {section.template.intro}
                          </p>
                        ) : null}
                        <div className="mt-5 grid gap-5">
                          {section.template.messages.map((message) => (
                            <div key={message.label}>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                                {message.label}
                              </p>
                              <pre className="mt-2 whitespace-pre-wrap break-words border-t border-[var(--bsj-border)] pt-3 font-sans text-[13px] leading-[1.75] text-[var(--bsj-text-muted)]">
                                {message.text}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              {guide.sourceLinks?.length ? (
                <section className="border-t border-[var(--bsj-border)] pt-10">
                  <h2 className="text-[18px] font-medium text-[var(--bsj-text)]">Sources</h2>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[var(--bsj-text-muted)]">
                    Rules and availability can change. Use official sources for final
                    confirmation.
                  </p>
                  <div className="mt-5">
                    <LinkList links={guide.sourceLinks} />
                  </div>
                </section>
              ) : null}
            </article>

            <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
              {product ? (
                <section className="border border-[var(--bsj-border)] bg-[var(--bsj-bg)] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                    {product.eyebrow}
                  </p>
                  <h2 className="mt-4 text-[22px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                    {product.title}
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.8] text-[var(--bsj-text-muted)]">
                    {product.description}
                  </p>
                  {(product.formatLabel || product.priceLabel) ? (
                    <div className="mt-5 grid gap-3 border-t border-[var(--bsj-border)] pt-4">
                      {product.formatLabel ? (
                        <p className="text-[12px] leading-[1.6] text-[var(--bsj-text-muted)]">
                          <span className="font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-light)]">
                            Format
                          </span>
                          <br />
                          {product.formatLabel}
                        </p>
                      ) : null}
                      {product.priceLabel ? (
                        <p className="text-[12px] leading-[1.6] text-[var(--bsj-text-muted)]">
                          <span className="font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-light)]">
                            Status
                          </span>
                          <br />
                          {product.priceLabel}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  {product.includes?.length ? (
                    <div className="mt-5 border-t border-[var(--bsj-border)] pt-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                        Planned contents
                      </p>
                      <ul className="mt-3 space-y-2">
                        {product.includes.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-[12px] leading-[1.6] text-[var(--bsj-text-muted)]"
                          >
                            <span className="mt-[0.7em] h-px w-4 shrink-0 bg-[var(--bsj-accent)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {product.purchaseUrl ? (
                    <a
                      href={product.purchaseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
                    >
                      {product.ctaLabel}
                    </a>
                  ) : null}
                  <p className="mt-5 border-t border-[var(--bsj-border)] pt-4 text-[12px] leading-[1.7] text-[var(--bsj-text-light)]">
                    {product.statusLabel}
                  </p>
                </section>
              ) : null}

              {guide.relatedStays?.length ? (
                <section className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
                  <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text)]">
                    Related stay profiles
                  </h2>
                  <div className="mt-5 flex flex-col gap-3">
                    {guide.relatedStays.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="border-b border-[var(--bsj-border)] pb-3 text-[14px] leading-[1.5] text-[var(--bsj-text-muted)] no-underline transition-colors last:border-0 last:pb-0 hover:text-[var(--bsj-text)]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default GuidePage;

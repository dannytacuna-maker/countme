"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { BrandMark } from "@/components/BrandMark";
import { HeroReel } from "@/components/experience/HeroReel";
import {
  CursorBlock,
  PhotoPop,
  RevealBlock,
} from "@/components/portfolio/CursorBlock";
import type { Dictionary } from "@/content/dictionary";
import {
  ADDRESS,
  COUNTME_EMAIL,
  COUNTME_PHONE_DISPLAY,
  COUNTME_PHONE_TEL,
  COUNTME_WHATSAPP_DISPLAY,
  GROUP,
  mapsEmbed,
  mapsLink,
  wazeLink,
  whatsAppHref,
} from "@/content/media";
import type { Locale } from "@/lib/i18n";
import styles from "./CountmeExperience.module.css";

const SCROLL_KEY = "countme-scroll-y";
const SERVICE_ROWS = [
  ["accounting", "payroll", "tax", "admin"],
  ["audit", "freezone", "other"],
] as const;

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function CountmeExperience({ locale, dict }: Props) {
  const router = useRouter();
  const [contactStatus, setContactStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [navSolid, setNavSolid] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [navProgress, setNavProgress] = useState(0);
  const stickyNavRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  const serviceItems = dict.services.items;
  const serviceRows = SERVICE_ROWS.map((row) =>
    row
      .map((id) => serviceItems.find((item) => item.id === id))
      .filter((item): item is (typeof serviceItems)[number] => Boolean(item)),
  );

  useEffect(() => {
    const onScroll = () => {
      const solid = window.scrollY > 24;
      setNavSolid(solid);
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      setNavProgress(Math.min(1, Math.max(0, window.scrollY / maxScroll)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const raw = sessionStorage.getItem(SCROLL_KEY);
    if (!raw) return;
    sessionStorage.removeItem(SCROLL_KEY);
    const y = Number(raw);
    if (!Number.isFinite(y)) return;
    requestAnimationFrame(() => {
      window.scrollTo({ top: y, behavior: "auto" });
    });
  }, [locale]);

  useEffect(() => {
    if (!navOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      const node = stickyNavRef.current;
      if (node && !node.contains(event.target as Node)) setNavOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [navOpen]);

  function goToSection(
    event: ReactMouseEvent<HTMLAnchorElement>,
    hash: string,
  ) {
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    event.preventDefault();
    setNavOpen(false);
    const navHeight = stickyNavRef.current?.getBoundingClientRect().height ?? 68;
    const top = window.scrollY + target.getBoundingClientRect().top - navHeight;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    window.history.replaceState(null, "", hash);
  }

  function switchLocale(next: Locale) {
    if (next === locale) return;
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    router.push(`/${next}`);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setContactStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!response.ok) throw new Error("Contact form failed.");
      event.currentTarget.reset();
      setContactStatus("sent");
    } catch {
      setContactStatus("error");
    }
  }

  const waHref = whatsAppHref(dict.contact.whatsappMessage);

  return (
    <div className={styles.page}>
      <div
        ref={stickyNavRef}
        className={`${styles.stickyNav} ${navSolid ? styles.stickyNavLight : styles.stickyNavClear} ${navOpen ? styles.stickyNavOpen : ""}`}
        style={{ ["--nav-progress" as string]: String(navProgress) }}
      >
        <div className={styles.stickyNavInner}>
          <a
            href="#hero"
            className={styles.navBrand}
            aria-label="Countme"
            onClick={(event) => {
              event.preventDefault();
              setNavOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}
          >
            <BrandMark
              height={32}
              className={styles.navLogoDark}
              tone="onDark"
              priority
            />
            <BrandMark
              height={32}
              className={styles.navLogoLight}
              tone="onLight"
              priority
            />
          </a>
          <nav id="primary-nav" className={styles.navLinks} aria-label="Primary">
            <a href="#about" onClick={(event) => goToSection(event, "#about")}>
              {dict.nav.about}
            </a>
            <a href="#why" onClick={(event) => goToSection(event, "#why")}>
              {dict.nav.why}
            </a>
            <a href="#services" onClick={(event) => goToSection(event, "#services")}>
              {dict.nav.services}
            </a>
            <a href="#contact" onClick={(event) => goToSection(event, "#contact")}>
              {dict.nav.contact}
            </a>
          </nav>
          <div className={styles.navEnd}>
            <div className={styles.langSwitch} role="group" aria-label="Language">
              <button
                type="button"
                className={`${styles.langBtn} ${locale === "es" ? styles.langBtnActive : ""}`}
                onClick={() => switchLocale("es")}
                aria-pressed={locale === "es"}
              >
                ES
              </button>
              <button
                type="button"
                className={`${styles.langBtn} ${locale === "en" ? styles.langBtnActive : ""}`}
                onClick={() => switchLocale("en")}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className={styles.navMenuBtn}
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              aria-controls="primary-nav"
              onClick={() => setNavOpen((open) => !open)}
            >
              <span className={styles.navMenuLine} />
              <span className={styles.navMenuLine} />
              <span className={styles.navMenuLine} />
            </button>
          </div>
        </div>
        <div className={styles.navProgress} aria-hidden="true">
          <span className={styles.navProgressBar} />
        </div>
      </div>

      <section id="hero" className={styles.hero} aria-label="Countme">
        <HeroReel />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{dict.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{dict.hero.headline}</h1>
          <p className={styles.support}>{dict.hero.support}</p>
          <div className={styles.actions}>
            <a
              href="#contact"
              className={`btn btn-primary ${styles.heroCta}`}
              onClick={(event) => goToSection(event, "#contact")}
            >
              {dict.hero.ctaPrimary}
            </a>
            <a
              href="#services"
              className={`btn btn-ghost ${styles.heroCta}`}
              onClick={(event) => goToSection(event, "#services")}
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <p className={styles.scrollHint}>{dict.hero.scrollHint}</p>
          <span className={styles.scrollLine} />
        </div>
      </section>

      <main className={styles.portfolio} ref={portfolioRef}>
        <section id="about" className={`${styles.about} ${styles.lightBand}`}>
          <div className={styles.portfolioInner}>
            <header className={styles.sectionQuicklink}>
              <p className={styles.eyebrow}>{dict.about.eyebrow}</p>
            </header>
            <div className={styles.aboutLayout}>
              <RevealBlock className={styles.aboutCopy}>
                <h2 className={styles.title}>{dict.about.headline}</h2>
                <p className={styles.copy}>{dict.about.support}</p>
                <dl className={styles.countRow}>
                  <div>
                    <dt>{dict.about.foundedLabel}</dt>
                    <dd>{dict.about.founded}</dd>
                  </div>
                  <div>
                    <dt>{dict.about.relationsLabel}</dt>
                    <dd>{dict.about.relations}</dd>
                  </div>
                </dl>
              </RevealBlock>
              <div className={styles.aboutPhotos}>
                <PhotoPop delayMs={80} className={styles.aboutPortraitPop}>
                  <div className={`${styles.aboutMedia} ${styles.photoFrame}`}>
                    <Image
                      src="/photos/collaboration.jpg"
                      alt={
                        locale === "es"
                          ? "Equipo Countme colaborando en la oficina"
                          : "Countme team collaborating in the office"
                      }
                      fill
                      quality={90}
                      sizes="(max-width: 900px) 88vw, 20rem"
                      className={styles.aboutPhoto}
                    />
                  </div>
                </PhotoPop>
              </div>
            </div>
            <RevealBlock delayMs={120} className={styles.industries}>
              <p className={styles.industriesLabel}>{dict.about.serveEyebrow}</p>
              <ul>
                {dict.about.industries.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealBlock>
          </div>
        </section>

        <section id="why" className={`${styles.why} ${styles.darkBand}`}>
          <div className={styles.portfolioInner}>
            <RevealBlock className={styles.sectionQuicklinkCenter}>
              <p className={styles.eyebrow}>{dict.why.eyebrow}</p>
              <h2 className={styles.title}>{dict.why.headline}</h2>
              <p className={styles.copy}>{dict.why.support}</p>
            </RevealBlock>
            <div className={styles.whyGrid}>
              {dict.why.points.map((point, index) => (
                <RevealBlock key={point.title} delayMs={index * 70}>
                  <CursorBlock className={styles.whyCardShell}>
                    <article className={styles.whyCard}>
                      <span className={styles.whyCardNum}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{point.title}</h3>
                      <p>{point.body}</p>
                      <a
                        href="#contact"
                        className={styles.whyCardCta}
                        onClick={(event) => goToSection(event, "#contact")}
                      >
                        {dict.why.inquire}
                      </a>
                    </article>
                  </CursorBlock>
                </RevealBlock>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className={`${styles.services} ${styles.lightBand}`}>
          <div className={styles.portfolioInner}>
            <RevealBlock className={styles.sectionQuicklink}>
              <p className={styles.eyebrow}>{dict.services.eyebrow}</p>
              <h2 className={styles.title}>{dict.services.headline}</h2>
              <p className={styles.copy}>{dict.services.support}</p>
            </RevealBlock>
            <div className={styles.serviceBoard}>
              {serviceRows.map((row, rowIndex) => (
                <ol
                  key={rowIndex === 0 ? "services-row-a" : "services-row-b"}
                  className={styles.serviceRow}
                >
                  {row.map((item, rowItemIndex) => {
                    const index =
                      rowIndex === 0 ? rowItemIndex : rowItemIndex + 4;
                    return (
                      <li key={item.id} id={item.id} className={styles.serviceItem}>
                        <CursorBlock>
                          <article className={styles.serviceCard} tabIndex={0}>
                            <div className={styles.serviceTop}>
                              <span className={styles.serviceNum}>
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h3>{item.title}</h3>
                            </div>
                            <div className={styles.serviceExpand}>
                              <p className={styles.serviceLead}>{item.body}</p>
                              <p className={styles.serviceDetail}>{item.detail}</p>
                              <ul>
                                {item.bullets.map((bullet) => (
                                  <li key={bullet}>{bullet}</li>
                                ))}
                              </ul>
                              <a
                                href="#contact"
                                className={styles.serviceCta}
                                onClick={(event) => goToSection(event, "#contact")}
                              >
                                {dict.services.inquire}
                                <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </article>
                        </CursorBlock>
                      </li>
                    );
                  })}
                </ol>
              ))}
            </div>
            <PhotoPop delayMs={60} className={styles.servicesPhotoPop}>
              <div className={`${styles.servicesPhoto} ${styles.photoFrame}`}>
                <Image
                  src="/photos/hero-office.jpg"
                  alt={
                    locale === "es"
                      ? "Equipo Countme en la oficina de Santa Ana"
                      : "Countme team at the Santa Ana office"
                  }
                  width={2400}
                  height={1624}
                  quality={90}
                  sizes="(max-width: 900px) 92vw, 64rem"
                  className={styles.servicesPhotoImg}
                />
              </div>
            </PhotoPop>
          </div>
        </section>

        <section id="contact" className={`${styles.contact} ${styles.lightBand}`}>
          <div className={styles.portfolioInner}>
            <RevealBlock className={styles.sectionQuicklink}>
              <p className={styles.eyebrow}>{dict.contact.eyebrow}</p>
              <h2 className={styles.title}>{dict.contact.headline}</h2>
              <p className={styles.copy}>{dict.contact.support}</p>
            </RevealBlock>
            <div className={styles.contactGrid}>
              <RevealBlock delayMs={80} className={styles.place}>
                <a className={styles.wa} href={waHref}>
                  {dict.contact.whatsappCta}
                  <span>{COUNTME_WHATSAPP_DISPLAY}</span>
                </a>
                <dl>
                  <div>
                    <dt>{dict.contact.addressLabel}</dt>
                    <dd>
                      <a href={mapsLink} target="_blank" rel="noreferrer">
                        {ADDRESS}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>{dict.contact.phoneLabel}</dt>
                    <dd>
                      <a href={`tel:${COUNTME_PHONE_TEL}`}>
                        {dict.contact.callLabel} · {COUNTME_PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>{dict.contact.emailLabel}</dt>
                    <dd>
                      <a href={`mailto:${COUNTME_EMAIL}`}>{COUNTME_EMAIL}</a>
                    </dd>
                  </div>
                </dl>
                <div className={styles.mapActions}>
                  <a href={mapsLink} target="_blank" rel="noreferrer">
                    {dict.contact.mapsCta}
                  </a>
                  <a href={wazeLink} target="_blank" rel="noreferrer">
                    {dict.contact.wazeCta}
                  </a>
                </div>
                <iframe
                  title={dict.contact.mapsLabel}
                  src={mapsEmbed}
                  className={styles.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </RevealBlock>
              <RevealBlock delayMs={140}>
                <form className={styles.form} onSubmit={onSubmit}>
                  <label>
                    {dict.contact.form.name}
                    <input name="name" type="text" required autoComplete="name" />
                  </label>
                  <label>
                    {dict.contact.form.email}
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                  <label>
                    {dict.contact.form.message}
                    <textarea name="message" required rows={6} />
                  </label>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={contactStatus === "sending"}
                  >
                    {contactStatus === "sending"
                      ? dict.contact.form.sending
                      : dict.contact.form.submit}
                  </button>
                  {contactStatus === "sent" ? (
                    <p className={styles.formNote} role="status">
                      {dict.contact.form.success}
                    </p>
                  ) : null}
                  {contactStatus === "error" ? (
                    <p className={styles.formError} role="alert">
                      {dict.contact.form.error}
                    </p>
                  ) : null}
                </form>
              </RevealBlock>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.portfolioInner}>
          <BrandMark height={28} tone="onLight" />
          <p>{dict.footer.tagline}</p>
          <p>
            <a href={GROUP.href} target="_blank" rel="noreferrer">
              {dict.footer.group}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} {dict.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

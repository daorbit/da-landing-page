import React from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";
import ContactForm from "./contact/ContactForm";
import { site } from "../data/site";

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Studio", value: site.location },
  { icon: Clock, label: "Reply time", value: "Within one working day" },
];

const ContactSection: React.FC = () => (
  <section id="contact" className="px-3 pb-16 sm:px-6 sm:pb-24">
    <div className="stage mx-auto max-w-7xl px-4 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="stage__glow" aria-hidden="true" />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal className="lg:pt-6">
          <h2 className="text-balance text-h2 font-semibold leading-[1.06] tracking-display text-fg">
            Your next product is one message away.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-lead leading-normal text-fg-muted">
            Tell us what you&apos;re building. You&apos;ll get a free consultation, a written estimate, and a
            straight answer on what it takes.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="mt-3 block text-[12px] text-fg-faint">{label}</span>
                  <span className="mt-0.5 block truncate text-[14px] font-medium text-fg">{value}</span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} className="contact-chip">
                      {body}
                    </a>
                  ) : (
                    <div className="contact-chip">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactSection;

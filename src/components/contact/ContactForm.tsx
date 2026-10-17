import React, { useEffect, useRef } from "react";

const FORM_SRC = "https://forms.daorbit.in/form/6ad347a6f4deac7abb3bb4f4/view";

const ContactForm: React.FC = () => {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const frame = ref.current;
      if (!frame || e.source !== frame.contentWindow) return;
      if (e.data?.type === "da-forms:height") frame.style.height = `${e.data.height}px`;
      if (e.data?.type === "da-forms:ready") {
        frame.contentWindow?.postMessage(
          { type: "da-forms:context", page: window.location.href, referrer: document.referrer },
          "*"
        );
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="contact-form">
      <iframe ref={ref} src={FORM_SRC} title="Get in touch" loading="lazy" className="contact-form__frame" />
    </div>
  );
};

export default ContactForm;

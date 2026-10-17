import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SmartLink from "../ui/SmartLink";
import ThemeToggle from "../ThemeToggle";
import { navEntries } from "./navMenu";
import { products, site } from "../../data/site";

const MobileMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const links = navEntries.filter((entry) => entry.href);
  const services = navEntries.find((entry) => entry.label === "Services")?.primary;

  return (
    <div id="mobile-menu" className="mobile-menu">
      <nav className="mobile-menu__body" aria-label="Mobile">
        <ul>
          {links.map((item, i) => (
            <li key={item.label} className={`rise v-d${i + 1}`}>
              <SmartLink href={item.href!} onClick={onClose} className="mobile-menu__link">
                {item.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        {services && (
          <div className="rise v-d5 mt-10">
            <p className="mobile-menu__label">{services.heading}</p>
            <ul className="mobile-menu__products">
              {services.links.map((link) => (
                <li key={link.label}>
                  <SmartLink href={link.href} onClick={onClose} className="mobile-menu__product">
                    <span className="truncate">{link.label}</span>
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rise v-d6 mt-8">
          <p className="mobile-menu__label">Our products</p>
          <ul className="mobile-menu__products">
            {products.map((product) => (
              <li key={product.id}>
                <SmartLink href={product.href} onClick={onClose} className="mobile-menu__product">
                  <span className="flex min-w-0 items-center gap-2">
                    <img src={product.logo} alt="" className="h-5 w-5 shrink-0 rounded object-contain" />
                    <span className="truncate">{product.name}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-faint" aria-hidden="true" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise v-d6 mt-8 flex items-center justify-between">
          <p className="mobile-menu__label mb-0">Appearance</p>
          <ThemeToggle />
        </div>
      </nav>

      <div className="mobile-menu__actions">
        <a href={`mailto:${site.email}`} className="mobile-menu__btn mobile-menu__btn--ghost">
          Email us
        </a>
        <SmartLink href="/#contact" onClick={onClose} className="mobile-menu__btn mobile-menu__btn--solid">
          Start a project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </SmartLink>
      </div>
    </div>
  );
};

export default MobileMenu;

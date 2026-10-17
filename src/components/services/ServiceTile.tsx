import React from "react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
  tone: string;
  fx: string;
  span?: "wide" | "full";
  visual?: React.ReactNode;
}

const ServiceTile: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  const horizontal = service.span === "full";

  return (
    <article
      className={`tile group flex h-full flex-col gap-8 overflow-hidden p-7 sm:p-9 ${
        horizontal ? "lg:flex-row lg:items-center lg:justify-between" : ""
      }`}
    >
      <div className={horizontal ? "lg:max-w-xl" : ""}>
        <span className={`service-icon ${service.tone}`}>
          <Icon className={`h-5 w-5 ${service.fx}`} />
        </span>
        <h3 className="mt-6 text-[1.375rem] font-semibold leading-tight tracking-tight text-fg sm:text-[1.625rem]">
          {service.title}
        </h3>
        <p className="mt-2 text-pretty text-[15px] leading-relaxed text-fg-muted sm:text-[16px]">{service.body}</p>
      </div>
      {service.visual && <div className={horizontal ? "lg:w-[26rem]" : "mt-auto"}>{service.visual}</div>}
    </article>
  );
};

export default ServiceTile;

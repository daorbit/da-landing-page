import React from "react";
import PhoneMock from "./PhoneMock";
import DeployCard from "./DeployCard";
import { CodeVisual } from "../services/ServiceVisuals";

const HeroShowcase: React.FC = () => (
  <div className="hero-showcase">
    <div className="hero-showcase__stage">
      <div className="hero-showcase__code">
        <CodeVisual />
      </div>
      <div className="hero-showcase__phone">
        <PhoneMock />
      </div>
      <div className="hero-showcase__deploy">
        <DeployCard />
      </div>
    </div>
  </div>
);

export default HeroShowcase;

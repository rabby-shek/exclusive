import FeatureCard from "./FeatureCard";
import { featuresData } from "../../data/featuresData";
const Features = () => {
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">
          {featuresData.map((card) => {
            return (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;

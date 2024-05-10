const FeatureCard = ({title, description, icon}) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="featurs-item text-center rounded bg-light p-4">
        <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
          <i className={`${icon} fa-3x text-white`} />
        </div>
        <div className="featurs-content text-center">
          <h5>{title}</h5>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

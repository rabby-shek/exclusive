/**
 * container header topbar information
 * with email , address and privacy terms
 * @returns {JSX.element}
 */

const Topbar = () => {
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        {/* email and location address */}
        <div className="top-info ps-2">
          <small className="me-3">
            <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
            <a href="#" className="text-white">
              123 Street, New York
            </a>
          </small>
          <small className="me-3">
            <i className="fas fa-envelope me-2 text-secondary" />
            <a href="#" className="text-white">
              Email@Example.com
            </a>
          </small>
        </div>
        {/* privacy policy */}
        <div className="top-link pe-2">
          <a href="#" className="text-white">
            <small className="text-white mx-2">Privacy Policy</small>/
          </a>
          <a href="#" className="text-white">
            <small className="text-white mx-2">Terms of Use</small>/
          </a>
          <a href="#" className="text-white">
            <small className="text-white ms-2">Sales and Refunds</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

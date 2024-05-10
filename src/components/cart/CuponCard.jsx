const CuponCard = () => {
  return (
    <div className="row g-4 justify-content-end">
      <div className="col-8" />
      <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
        <div className="bg-light rounded">
          <div className="p-4">
            <h1 className="display-6 mb-4">
              Cart <span className="fw-normal">Total</span>
            </h1>
            <div className="d-flex justify-content-between mb-4">
              <h5 className="mb-0 me-4">Subtotal:</h5>
              <p className="mb-0">$96.00</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="mb-0 me-4">Shipping</h5>
              <div className>
                <p className="mb-0">Flat rate: $3.00</p>
              </div>
            </div>
            <p className="mb-0 text-end">Shipping to Ukraine.</p>
          </div>
          <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
            <h5 className="mb-0 ps-4 me-4">Total</h5>
            <p className="mb-0 pe-4">$99.00</p>
          </div>
          <button
            className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
            type="button"
          >
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuponCard;

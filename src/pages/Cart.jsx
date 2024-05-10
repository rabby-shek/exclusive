import { tableHeadData } from "../data/cartData";
import { CuponCard } from "../components/component";
const Cart = () => {
  return (
    <div className="container-fluid py-5 my-5">
      <div className="container py-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {tableHeadData.map((item) => {
                  return (
                    <th key={item.id} scope="col">
                      {item.headerData}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="./src/assets/img/vegetable-item-3.png"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: 80, height: 80 }}
                      alt
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Big Banana</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: 100 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="./src/assets/img/vegetable-item-5.jpg"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: 80, height: 80 }}
                      alt
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Potatoes</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: 100 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src="./src/assets/img/vegetable-item-2.jpg"
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: 80, height: 80 }}
                      alt
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">Awesome Brocoli</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <div
                    className="input-group quantity mt-4"
                    style={{ width: 100 }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm text-center border-0"
                      defaultValue={1}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 mt-4">2.99 $</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="border-0 border-bottom rounded me-5 py-3 mb-4"
            placeholder="Coupon Code"
          />
          <button
            className="btn border-secondary rounded-pill px-4 py-3 text-primary"
            type="button"
          >
            Apply Coupon
          </button>
        </div>
        <CuponCard />
      </div>
    </div>
  );
};

export default Cart;

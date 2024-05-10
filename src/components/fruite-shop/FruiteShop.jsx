import { useState } from "react";
import ProductCard from "./ProductCard";
import { productsData } from "../../data/productsData";
const FruiteShop = () => {
  const [activeTab, setActiveTab] = useState("tab-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Organic Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {Object.keys(productsData).map((tabId) => (
                  <li className="nav-item" key={tabId}>
                    <a
                      className={`d-flex m-2 py-2 bg-light rounded-pill ${
                        activeTab === tabId ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tabId)}
                    >
                      <span className="text-dark" style={{ width: 130 }}>
                        {tabId === "tab-1" ? "All Products" : tabId}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {Object.keys(productsData).map((tabId) => (
              <div
                key={tabId}
                id={tabId}
                className={`tab-pane fade show p-0 ${
                  activeTab === tabId && "active"
                }`}
              >
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {productsData[tabId].map((product, index) => (
                        <ProductCard key={index} {...product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruiteShop;

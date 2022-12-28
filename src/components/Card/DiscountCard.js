import React from "react";

const DiscountCard = () => {
  const counter = document.querySelector(".counter");
  let count = 0;
  setInterval(() => {
    if (count == 92) {
      clearInterval(count);
    } else {
      count += 1;
      counter.textContent = count + "%";
    }
  }, 42);

  return (
    <div class="discount card" style={{ animationDelay: "1.5s" }}>
      <div class="title">Discount Offers</div>
      <div class="discount-wrapper">
        <div class="discount-info">
          <div class="subtitle">The Best Offer is:</div>
          <div class="subtitle-count">$5</div>
          <div class="subtitle">Distance:</div>
          <div class="subtitle-count dist">4.5 Km</div>
        </div>
        <div class="discount-chart">
          <div class="circle">
            <div class="pie">
              <svg>
                <circle cx="60" cy="60" r="50"></circle>
              </svg>
            </div>
            <div class="counter">0</div>
          </div>
        </div>
      </div>
      <div class="discount-profile">
        <span class="by">By:</span>
        <img
          class="discount-img"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          alt=""
        />
        <div class="discount-detail">
          <div class="discount-name">Johnny Cauld</div>
          <div class="discount-type">Micro bus & Travel Bus</div>
        </div>
      </div>
      <div class="button offer-button">Get Offer</div>
    </div>
  );
};

export default DiscountCard;

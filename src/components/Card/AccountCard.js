import React from "react";

const AccountCard = () => {
  return (
    <div class="account-wrapper" style={{ animationDelay: "4s" }}>
      <div class="account-profile">
        <img
          src="https://images.unsplash.com/photo-1550314124-301ca0b773ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2215&q=80"
          alt=""
        />
        <div class="blob-wrap">
          <div class="blob"></div>
          <div class="blob"></div>
          <div class="blob"></div>
        </div>
        <div class="account-name">Mike J Morgan</div>
        <div class="account-title">Taxi Driver</div>
      </div>
      <div class="account card">
        <div class="account-cash">$ 5637.04</div>
        <div class="account-income">Total Income</div>
        <div class="account-iban">**** **** **** 3060</div>
      </div>
    </div>
  );
};

export default AccountCard;

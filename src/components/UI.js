import React from "react";
import AccountCard from "./Card/AccountCard";
import ActivityCard from "./Card/ActivityCard";
import DateCard from "./Card/DateCard";
import DiscountCard from "./Card/DiscountCard";
import TodoCard from "./Card/TodoCard";
import TransactionCard from "./Card/TransactionCard";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const UI = () => {
  return (
    <div class="wrapper">
      <Sidebar />

      <div class="main-container">
        <Header />

        <div class="user-box first-box">
          <ActivityCard />
          <DiscountCard />
          <DateCard />
          <AccountCard />
        </div>
        <div class="user-box second-box">
          <TodoCard />
          <TransactionCard />
        </div>
      </div>
    </div>
  );
};

export default UI;

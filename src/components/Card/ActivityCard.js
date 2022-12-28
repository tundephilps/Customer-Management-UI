import React from "react";

const ActivityCard = () => {
  return (
    <div class="activity card" style={{ animationDelay: "1s" }}>
      <div class="title">User Activities</div>
      <div class="subtitle">
        Hoo - is an adaptive Online Courses Application with a wide range of
        course directions. The students will have a great possibility to study.
      </div>
      <div class="activity-links">
        <div class="activity-link active">Current User</div>
        <div class="activity-link notify">User Request</div>
      </div>
      <div class="destination">
        <div class="destination-card">
          <div class="destination-profile">
            <img
              class="profile-img"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              alt=""
            />
            <div class="destination-length">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                class="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              45.4m
            </div>
          </div>
          <div class="destination-points">
            <div class="point">Traffic Point</div>
            <div class="sub-point">Brooklyn St, NY</div>
          </div>
        </div>
        <div class="destination-card">
          <div class="destination-profile">
            <img
              class="profile-img"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
              alt=""
            />
            <div class="destination-length">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                class="feather feather-map-pin"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              42.8m
            </div>
          </div>
          <div class="destination-points">
            <div class="point">Pickup Point</div>
            <div class="sub-point">Maryland 17, NY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;

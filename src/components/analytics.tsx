"use client";

import Script from "next/script";

const Analytics = () => {
  return (
    <Script
      src="https://cloud.umami.is/script.js"
      data-website-id="1d9888fa-d114-4714-a3db-c3a59ec817b5"
    />
  );
};

export default Analytics;

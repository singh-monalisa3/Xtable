import React, { useState } from "react";

const XTable = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Function to sort by date
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return b.views - a.views; // Sort by views if dates are equal
    });
    setData(sortedData);
  };

  // Function to sort by views
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;

      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Sort by date if views are equal
    });
    setData(sortedData);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Heading */}
      <h1>Date and Views Table</h1>

      {/* Sorting Buttons */}
      <div>
        <button onClick={sortByDate} style={{ marginRight: "10px" }}>
          Sort by Date
        </button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>

      {/* Layout Without Table */}
      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Header Row */}
        <div style={{ display: "flex", fontWeight: "bold" }}>
          <div style={{ width: "150px" }}>Date</div>
          <div style={{ width: "100px" }}>Views</div>
          <div>Article</div>
        </div>

        {/* Data Rows */}
        {data.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <div style={{ width: "150px" }}>{item.date}</div>
            <div style={{ width: "100px" }}>{item.views}</div>
            <div>{item.article}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XTable;

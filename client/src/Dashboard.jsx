import React from 'react';
import { BarChart, Bar,  XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const products = [
        { id: 1, name: "Cow", sales: 150 },
        { id: 2, name: "Goat", sales: 120 },
        { id: 3, name: "Chicken", sales: 200 },
        { id: 4, name: "Duck", sales: 110 },
        { id: 5, name: "Milk", sales: 300 },
        { id: 6, name: "Beef", sales: 180 },
        { id: 7, name: "Mutton", sales: 160 },
        { id: 8, name: "Egg", sales: 250 }
      ];
      
    return (
        <div className="dashboard-container">
            <div className="chart-wrapper">
              <BarChart width={1000} height={400} data={products}>
          <Bar dataKey="sales" fill="#006400" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend />
        </BarChart>
        </div>
        </div>
    );
};

export default Dashboard;
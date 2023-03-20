import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { DataApiController } from "../api/table-data";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [personalData, setPersonalData] = useState<any>();
  const [latestUpdatedData, setLatestUpdatedData] = useState<any>();
  const getLatestPersonalData = async () => {
    const personalData = await axios("http://localhost:5001/latest-data");
    console.log(personalData);

    setLatestUpdatedData(personalData.data[0].fields);
  };

  useEffect(() => {
    getLatestPersonalData();
  }, []);

  return (
    <div>
      <div className="text-2xl">Personal ExpenseTracker</div>
      <div>Received Salary This This Month</div>
      <div>{latestUpdatedData?.received_salary} INR</div>
      <div>Duration of This Month</div>
      <div>
        {latestUpdatedData?.start_month_date} To{" "}
        {latestUpdatedData?.end_month_date}
      </div>

      <div>Expenses List of This Month</div>
      <div></div>
    </div>
  );
};

export default Home;

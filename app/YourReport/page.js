"use client";
import { useEffect, useState } from "react";

export default function YourReport() {
    const [reportData, setReportData] = useState({});
    const [results, setResults] = useState("Loading!!!");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const data = {
                Name: localStorage.getItem("Name"),
                Age: localStorage.getItem("Age"),
                Gender: localStorage.getItem("Gender"),
                Pregnancies: localStorage.getItem("Pregnancies"),
                Glucose: localStorage.getItem("Glucose"),
                BloodPressure: localStorage.getItem("BloodPressure"),
                SkinThickness: localStorage.getItem("SkinThickness"),
                Insulin: localStorage.getItem("Insulin"),
                BMI: localStorage.getItem("BMI"),
                DiabetesPedigreeFunction: localStorage.getItem("DiabetesPedigreeFunction"),
                Result: localStorage.getItem("Result"),
            };
            setReportData(data);

            if (data.Result === "1") {
                setResults("Seems Positive ( + )");
            } else {
                setResults("Probably Negative ( - )");
            }
        }
    }, []);

    const toggleCopyBtn = () => {
        navigator.clipboard.writeText(
            `
      Name: ${reportData.Name}
      Age: ${reportData.Age}
      Gender: ${reportData.Gender}
      Pregnancies: ${reportData.Pregnancies}
      Glucose: ${reportData.Glucose}
      BloodPressure: ${reportData.BloodPressure}
      SkinThickness: ${reportData.SkinThickness}
      Insulin: ${reportData.Insulin}
      BMI: ${reportData.BMI}
      DiabetesPedigreeFunction: ${reportData.DiabetesPedigreeFunction}
      Diabetes: ${reportData.Result}

      Note: In Diabetes, 1 Means Positive and 0 Means Negative.

      Best Wishes,
      https://COMPUTES.com
      `
        );
        setCopied(true);
    };

    return (
        <main id="REPORT">
            <h1 className="R_TITLE">Your AIM-Report!!!</h1>

            <div className="REPORT">
                <h1>As Per Your Details</h1>
                <section className="FIRST dark:shadow-none">
                    <div className="BREAK">
                        {!copied ? (
                            <button className="BTN" onClick={toggleCopyBtn}>
                                <svg className="ICON-1" fill="none" height="24" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    viewBox="0 0 24 24" width="24">
                                    <path d="M6 17C4.9 17 4 16.1 4 15V5c0-1.1.9-2 2-2h7c.7 0 1.4.4 1.7 1M11 21h7c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" />
                                </svg>
                            </button>
                        ) : (
                            <button className="BTN">
                                <svg className="ICON-2" fill="none" height="24" stroke="currentColor"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    viewBox="0 0 24 24" width="24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </button>
                        )}

                        <p className="P"><span className="FIRST_D mr-2">Name:</span> <span className="FIRST_R">{reportData.Name}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">Age:</span> <span className="FIRST_R">{reportData.Age}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">Gender:</span> <span className="FIRST_R">{reportData.Gender}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">Pregnancies:</span> <span className="FIRST_R">{reportData.Pregnancies}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">Glucose:</span> <span className="FIRST_R">{reportData.Glucose}</span></p>
                    </div>

                    <div className="BREAK">
                        <p className="P"><span className="FIRST_D mr-2">BloodPressure:</span> <span className="FIRST_R">{reportData.BloodPressure}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">SkinThickness:</span> <span className="FIRST_R">{reportData.SkinThickness}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">Insulin:</span> <span className="FIRST_R">{reportData.Insulin}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">BMI:</span> <span className="FIRST_R">{reportData.BMI}</span></p>
                        <p className="P"><span className="FIRST_D mr-2">DiabetesPedigreeFunction:</span> <span className="FIRST_R">{reportData.DiabetesPedigreeFunction}</span></p>
                    </div>
                </section>

                <section className="SECOND mt-12 dark:shadow-none">
                    <p className="PS"><span className="SECOND_D">Diabetes:</span> <span className="SECOND_R">{results}</span></p>
                    <p className="PSWR">
                        <span className="WARN">THIS IS ONLY A PREDICTION AND CAN BE FALSE IN MINUTE CASES!!!</span>
                        <span className="RECOMMENDATION">IF YOU ARE NOT SATISFIED WITH THIS RESULT, WE ALWAYS RECOMMEND TO CONSIDER A DOCTOR!!!</span>
                    </p>
                </section>
            </div>
        </main>
    );
}
"use client";
import { useEffect, useState } from "react";

export default function YourReport() {
    const [reportData, setReportData] = useState(null);
    const [resultText, setResultText] = useState("Loading...");
    const [Risk, setRisk] = useState(null);
    const [copied, setCopied] = useState(false);

    // ------------------ LOAD DATA ------------------

    useEffect(() => {
        if (typeof window === "undefined") return;

        const data = {
            Name: localStorage.getItem("Name") || "N/A",
            Age: localStorage.getItem("Age") || "N/A",
            Gender: localStorage.getItem("Gender") || "N/A",
            Pregnancies: localStorage.getItem("Pregnancies") || "N/A",
            Glucose: localStorage.getItem("Glucose") || "N/A",
            BloodPressure: localStorage.getItem("BloodPressure") || "N/A",
            SkinThickness: localStorage.getItem("SkinThickness") || "N/A",
            Insulin: localStorage.getItem("Insulin") || "N/A",
            BMI: localStorage.getItem("BMI") || "N/A",
            DiabetesPedigreeFunction: localStorage.getItem("DiabetesPedigreeFunction") || "N/A",
            Result: localStorage.getItem("Result"),
            Confidence: localStorage.getItem("Confidence"),
            PositiveProb: localStorage.getItem("PositiveProb"),
            NegativeProb: localStorage.getItem("NegativeProb"),
        };

        setReportData(data);

        if (data.Result === "1") {
            setResultText("Seems Positive ( + )");
        } else if (data.Result === "0") {
            setResultText("Probably Negative ( - )");
        } else {
            setResultText("Result Not Available");
        }

        if (data.NegativeProb >= "70") {
            setRisk("LOW");
        }

        else if (data.NegativeProb >= "40") {
            setRisk("MEDIUM");
        }

        else {
            setRisk("HIGH");
        }

    }, []);

    // ------------------ COPY ------------------

    const copyReport = async () => {
        if (!reportData) return;

        const text = `
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
        Diabetes Result: ${reportData.Result}

        Note: 1 = Positive, 0 = Negative

        This is only a prediction.
        Always consult a doctor.

        — AIM
    `;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch (error) {
            alert("Failed to copy report");
        }
    };

    if (!reportData) {
        return (
            <main id="REPORT">
                <h1 className="R_TITLE">Loading Your Report...</h1>
            </main>
        );
    }



    return (
        <main id="REPORT">
            <h1 className="R_TITLE">Your AIM-Report</h1>

            <div className="REPORT">
                <h2>As per your details</h2>

                <section className="FIRST dark:shadow-none">
                    <div className="BREAK">
                        <button className="BTN" onClick={copyReport}>
                            {!copied ? (
                                <svg
                                    className="ICON-1"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M6 17C4.9 17 4 16.1 4 15V5c0-1.1.9-2 2-2h7c.7 0 1.4.4 1.7 1M11 21h7c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z" />
                                </svg>
                            ) : (
                                <svg
                                    className="ICON-2"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                            )}
                        </button>

                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Name:</span> <span className="FIRST_R">{reportData.Name}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Age:</span> <span className="FIRST_R">{reportData.Age}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Gender:</span> <span className="FIRST_R">{reportData.Gender}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Pregnancies:</span> <span className="FIRST_R">{reportData.Pregnancies}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Glucose:</span> <span className="FIRST_R">{reportData.Glucose}</span></p>
                    </div>

                    <div className="BREAK">
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Blood Pressure:</span> <span className="FIRST_R">{reportData.BloodPressure}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Skin Thickness:</span> <span className="FIRST_R">{reportData.SkinThickness}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">Insulin:</span> <span className="FIRST_R">{reportData.Insulin}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">BMI:</span> <span className="FIRST_R">{reportData.BMI}</span></p>
                        <p className="P"><span className="FIRST_D mr-2 dark:text-black">DPF:</span> <span className="FIRST_R">{reportData.DiabetesPedigreeFunction}</span></p>
                    </div>
                </section>

                <section className="SECOND mt-12 dark:shadow-none">
                    <p className="PS">
                        <span className="SECOND_D">Diabetes:</span>{" "}
                        <span className="SECOND_R">{resultText}</span>
                    </p>

                    <div className="CONFIDENCE_BOX">
                        <h3 className="bold mb-1">Prediction Confidence</h3>

                        <div className="BAR">
                            <div
                                className="BAR_FILL"
                                style={{
                                    width: `${reportData.Confidence}%`,
                                    background: resultText === "1" ? "#ef4444" : "#22c55e",
                                }}
                            />
                        </div>

                        <p>{reportData.Confidence}% confidence in this prediction</p>
                    </div>

                    <div className="RISK_BOX">
                        <p className="text-base">Diabetic Risk: <strong>{reportData.PositiveProb}%</strong></p>
                        <p className="text-base">Non-Diabetic Probability: <strong>{reportData.NegativeProb}%</strong></p>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5rem", color: Risk >= "70" ? "red" : Risk >= "40" ? "orange" : "#ef4444" }}>Overall Diabetic Risk: <strong>{Risk}</strong></p>
                    </div>

                    <p className="PSWR">
                        <span className="WARN">
                            THIS IS ONLY A PREDICTION AND MAY BE INCORRECT.
                        </span>
                        <span className="RECOMMENDATION">
                            ALWAYS CONSULT A QUALIFIED DOCTOR.
                        </span>
                    </p>

                </section>
            </div>
        </main>
    );
}
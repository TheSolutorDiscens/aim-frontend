"use client";
import React from 'react';

export default function YourReport() {
    const Name = localStorage;
    const Age = localStorage;
    const Gender = localStorage;
    const Glucose = localStorage;
    const Pregnancies = localStorage;
    const BloodPressure = localStorage;
    const SkinThickness = localStorage;
    const Insulin = localStorage;
    const BMI = localStorage;
    const DiabetesPedigreeFunction = localStorage;

    var Results = "Loading!!!";
    if (localStorage.Result === "1") {
        var Results = "Seems Positive ( + )";
    }

    else {
        var Results = "Probably Negative ( - )";
    }

    const ToogleCopyBtn = () => {
        let CopyBtn = document.getElementById("ICON1");
        let CopiedBtn = document.getElementById("ICON2");

        navigator.clipboard.writeText(
            `
            Name: ${localStorage.getItem("Name")}
            Age: ${localStorage.getItem("Age")}
            Glucose: ${localStorage.getItem("Glucose")}
            Gender: ${localStorage.getItem("Gender")}
            Pregnancies: ${localStorage.getItem("Pregnancies")}
            BloodPressure: ${localStorage.getItem("BloodPressure")}
            SkinThickness: ${localStorage.getItem("SkinThickness")}
            Insulin: ${localStorage.getItem("Insulin")}
            BMI: ${localStorage.getItem("BMI")}
            DiabetesPedigreeFunction: ${localStorage.getItem("DiabetesPedigreeFunction")}
            Diabetes: ${localStorage.getItem("Result")}

            Note: In Diabetes, 1 Means Positive and 0 Means Negative.

            Best Wishes,
            https://COMPUTES.com
            `
        );
        CopyBtn.classList.add("HIDDEN");
        CopiedBtn.classList.remove("HIDDEN");
    }

    const Toogle = () => {
        let CopyBtn = document.getElementById("ICON1");
        let CopiedBtn = document.getElementById("ICON2");

        CopyBtn.classList.remove("HIDDEN");
        CopiedBtn.classList.add("HIDDEN");
    }

    return (
        <>
            <main id="REPORT">
                <h1 className="R_TITLE">Your AIM-Report!!!</h1>

                <div className="REPORT">
                    <h1>As Per Your Details</h1>
                    <section className="FIRST dark:shadow-none">
                        <div className="BREAK">
                            <button className="BTN" id="ICON1" onClick={ToogleCopyBtn}>
                                <svg className="ICON-1" fill="none" height="24"
                                    shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                    <path
                                        d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z">
                                    </path>
                                </svg>
                            </button>

                            <button className="BTN HIDDEN" id="ICON2" onClick={Toogle}>
                                <svg className="ICON-2" fill="none" height="24"
                                    shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </button>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Name:</span> <span className="FIRST_R" id="Name">{Name.getItem("Name")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Age:</span> <span className="FIRST_R" id="Age">{Age.getItem("Age")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Gender:</span> <span className="FIRST_R" id="Gender">{Gender.getItem("Gender")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Pregnancies:</span> <span className="FIRST_R"
                                id="Pregnancies">{Pregnancies.getItem("Pregnancies")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Glucose:</span> <span className="FIRST_R" id="Glucose">{Glucose.getItem("Glucose")}</span>
                            </p>
                        </div>

                        <div className="BREAK">
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">BloodPressure:</span> <span className="FIRST_R"
                                id="BloodPressure">{BloodPressure.getItem("BloodPressure")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">SkinThickness:</span> <span className="FIRST_R"
                                id="SkinThickness">{SkinThickness.getItem("SkinThickness")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">Insulin:</span> <span className="FIRST_R" id="Insulin">{Insulin.getItem("Insulin")}</span>
                            </p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">BMI:</span> <span className="FIRST_R" id="BMI">{BMI.getItem("BMI")}</span></p>
                            <p className="P"><span className="FIRST_D mr-2 dark:text-black">DiabetesPedigreeFunction:</span> <span className="FIRST_R"
                                id="DiabetesPedigreeFunction">{DiabetesPedigreeFunction.getItem("DiabetesPedigreeFunction")}</span></p>
                        </div>
                    </section>

                    <section className="SECOND mt-12 dark:shadow-none">
                        <p className="PS"><span className="SECOND_D dark:text-black">Diabetes:</span> <span className="SECOND_R" id="RS">{Results}</span></p>
                        <p className="PSWR">
                            <span className="WARN">THIS IS ONLY A PREDICTION AND CAN BE FALSE IN MINUTE CASES!!!</span>
                            <span className="RECOMMENDATION">IF YOU ARE NOT SATISFIED WITH THIS RESULT, WE ALWAYS RECOMMED TO
                                CONSIDER THE DOCTOR!!!</span>
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}
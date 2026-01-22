"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConsultAI() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        pregnancies: "",
        glucose: "",
        bloodPressure: "",
        skinThickness: "",
        insulin: "",
        bmi: "",
        dpf: "",
    });

    // ------------------ HANDLERS ------------------

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ------------------ API CALL ------------------

    const GenerateReport = async () => {
        const values = Object.values(formData);

        if (values.some((v) => v.trim() === "")) {
            alert("Please fill all the required fields!");
            return;
        }

        setLoading(true);

        try {
            const payload = {
                Name: String(formData.name),
                Age: Number(formData.age),
                Gender: String(formData.gender),
                Pregnancies: Number(formData.pregnancies),
                Glucose: Number(formData.glucose),
                BloodPressure: Number(formData.bloodPressure),
                SkinThickness: Number(formData.skinThickness),
                Insulin: Number(formData.insulin),
                BMI: parseFloat(formData.bmi),
                DiabetesPedigreeFunction: parseFloat(formData.dpf),
            };


            const response = await fetch(
                "https://aim-backend-f6t9.onrender.com/api/v1/predict",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                console.log(payload);
                throw new Error("Failed to generate prediction");
            }

            const result = await response.json();

            localStorage.setItem("Name", formData.name);
            localStorage.setItem("Gender", formData.gender);
            localStorage.setItem("Age", formData.age);
            localStorage.setItem("Pregnancies", formData.pregnancies);
            localStorage.setItem("Glucose", formData.glucose);
            localStorage.setItem("BloodPressure", formData.bloodPressure);
            localStorage.setItem("SkinThickness", formData.skinThickness);
            localStorage.setItem("Insulin", formData.insulin);
            localStorage.setItem("BMI", formData.bmi);
            localStorage.setItem("DiabetesPedigreeFunction", formData.dpf);
            localStorage.setItem("Result", result.prediction);
            localStorage.setItem("Confidence", result.confidence);
            localStorage.setItem("PositiveProb", result.probabilities.positive);
            localStorage.setItem("NegativeProb", result.probabilities.negative);


            router.push("/yourReport");
        } catch (error) {
            alert(error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // ------------------ UI ------------------

    return (
        <main className="MAIN_PAGE_2" id="CONSULTCRED">
            <h1 className="H1">Fill Your Health Stats</h1>

            <div className="CRED">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />

                <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />

                <input name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />

                <input
                    type="number"
                    name="pregnancies"
                    value={formData.pregnancies}
                    onChange={handleChange}
                    placeholder="Pregnancies (0 for male)"
                />

                <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} placeholder="Glucose" />

                <input
                    type="number"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                    placeholder="Blood Pressure"
                />

                <input
                    type="number"
                    name="skinThickness"
                    value={formData.skinThickness}
                    onChange={handleChange}
                    placeholder="Skin Thickness"
                />

                <input type="number" name="insulin" value={formData.insulin} onChange={handleChange} placeholder="Insulin" />

                <input
                    type="number"
                    step="0.1"
                    name="bmi"
                    value={formData.bmi}
                    onChange={handleChange}
                    placeholder="BMI"
                />

                <input
                    type="number"
                    step="0.01"
                    name="dpf"
                    value={formData.dpf}
                    onChange={handleChange}
                    placeholder="Diabetes Pedigree Function"
                />
            </div>

            <div className="MAIN_BTN">
                <button
                    onClick={GenerateReport}
                    disabled={loading}
                    className={loading ? "cursor-not-allowed bg-gray-500" : ""}
                >
                    {loading ? "Generating Report..." : "Generate AIM Report"}
                </button>

                {loading && (
                    <p className="text-center text-red-500 mt-3">
                        Please wait, this may take a few seconds...
                    </p>
                )}
            </div>
        </main>
    );
}


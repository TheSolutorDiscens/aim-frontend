"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function ConsultAI() {
    const [ButtonDisabled, setButtonDisabled] = useState(false);
    const [MkButtonDisabled, setMkButtonDisabled] = useState(false);
    const [Input1, setInput1] = useState("");
    const [Input2, setInput2] = useState("");
    const [Input3, setInput3] = useState("");
    const [Input4, setInput4] = useState("");
    const [Input5, setInput5] = useState("");
    const [Input6, setInput6] = useState("");
    const [Input7, setInput7] = useState("");
    const [Input8, setInput8] = useState("");
    const [Input9, setInput9] = useState("");
    const [Input0, setInput0] = useState("");

    const Router = useRouter();

    async function PostData(url = "", data = {}) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }

    const GenerateReport = async () => {
        const inputs = [Input1, Input2, Input3, Input4, Input5, Input6, Input7, Input8, Input9, Input0];
        const hasEmptyInput = inputs.some(input => input.trim().length === 0);

        if (hasEmptyInput) {
            alert("Please fill all the required fields!!!");
            return;
        }

        setButtonDisabled(true);
        setMkButtonDisabled(true);

        let parsedData = {};
        try {
            parsedData = {
                "Age": parseInt(Input2),
                "Pregnancies": parseInt(Input4),
                "Glucose": parseInt(Input5),
                "BloodPressure": parseInt(Input6),
                "SkinThickness": parseInt(Input7),
                "Insulin": parseInt(Input8),
                "BMI": parseInt(Input9),
                "DiabetesPedigreeFunction": parseFloat(Input0),
            };

            for (const key in parsedData) {
                if (isNaN(parsedData[key])) {
                    throw new Error(`Invalid input for ${key}. Please enter a number.`);
                }
            }

            console.log("Sending data to Flask:", parsedData);

            let Report = await PostData("https://aim-backend-31i9.onrender.com", parsedData);

            if (Report && Report.Result && Report.Result.Data !== undefined) {
                if (typeof window !== "undefined") {
                    localStorage.setItem("Result", Report.Result.Data);
                    localStorage.setItem("Name", Input1);
                    localStorage.setItem("Gender", Input3);
                    localStorage.setItem("Pregnancies", Input4);
                    localStorage.setItem("Glucose", Input5);
                    localStorage.setItem("BloodPressure", Input6);
                    localStorage.setItem("SkinThickness", Input7);
                    localStorage.setItem("Insulin", Input8);
                    localStorage.setItem("BMI", Input9);
                    localStorage.setItem("DiabetesPedigreeFunction", Input0);
                    localStorage.setItem("Age", Input2);
                }

                setMkButtonDisabled(false);
                setButtonDisabled(false);
                Router.push("/YourReport");
            }

            else {
                alert("Error: Invalid response from API or missing result data.");
                console.error("API Response:", Report);
            }

        }
        catch (error) {
            alert(`An error occurred: ${error.message}`);
            console.error("Error in GenerateReport:", error);
        }

        finally {
            setMkButtonDisabled(false);
            setButtonDisabled(false);
        }
    };

    return (
        <>
            <main className="MAIN_PAGE_2" id="CONSULTCRED">
                <h1 className="H1">FILL YOUR CREDINTIALS!!!</h1>

                <div className="CRED">
                    <input type="text" value={Input1} onChange={(event) => setInput1(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Name" />
                    <input type="text" value={Input2} onChange={(event) => setInput2(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Age" />
                    <input type="text" value={Input3} onChange={(event) => setInput3(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Gender" />
                    <input type="text" value={Input4} onChange={(event) => setInput4(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Pregnancies.If Male, ENTER 0" />
                    <input type="text" value={Input5} onChange={(event) => setInput5(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Glucose" />
                    <input type="text" value={Input6} onChange={(event) => setInput6(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR BloodPressure" />
                    <input type="text" value={Input7} onChange={(event) => setInput7(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR SkinThickness" />
                    <input type="text" value={Input8} onChange={(event) => setInput8(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR Insulin" />
                    <input type="text" value={Input9} onChange={(event) => setInput9(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR BMI" />
                    <input type="text" value={Input0} onChange={(event) => setInput0(event.target.value)} name="TEXTCONTAINER" placeholder="ENTER YOUR DiabetesPedigreeFunction" />
                </div>

                <div className="MAIN_BTN">
                    <button className={MkButtonDisabled ? `!cursor-not-allowed !bg-gray-500` : ``} disabled={MkButtonDisabled ? true : false} id="MAIN-B" onClick={GenerateReport}>
                        {ButtonDisabled ? "Generating Your AIM-Report!!!" : "Generate Your AIM-Report!!!"}
                    </button>

                    {
                        ButtonDisabled
                            ?
                            <p className="text-center text-red-500 m-auto">Be Patient, It may take few seconds!!!</p>
                            :
                            <p className="hidden"></p>

                    }
                </div>
            </main>
        </>
    );
}
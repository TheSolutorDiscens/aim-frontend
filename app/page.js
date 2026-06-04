import React from "react";
import Link from "next/link";
import { CpuChipIcon } from "@heroicons/react/24/solid";

export default function Home() {
  function Welcome() {
    console.info("WELCOME TO AIM!!!");
    console.info("CREATED WITH ❤ BY COMPUTES!!!");
  };
  Welcome();

  return (
    <>
      <section className="FRONT">
        <div className="TITLE-ENTRY">
          <h1>
            <CpuChipIcon className="flex-shrink-0 w-[120px] h-[120px]"></CpuChipIcon>
            AIM!!!
          </h1>

          <p>MADE MACHINES HUMANS CURE!!!</p>
          <p>AIM!!! Is A ML-Powered APP That Predicts That The
            Person Is Suffering From Diabetes Or Not.</p>
        </div>

        <div className="BUTTON_INITIATE">
          <Link href="/ConsultAI" className="UNDERLINE"><button>GET STARTED!!!</button></Link>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="BORDER"></div>

      <main className="MAIN #Diabetes">
        <div className="HEADING">
          <h1>OUR PRIORITY!!! : DIABETES</h1>
        </div>
        <div className="INFO">
          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Prevalence</h1>
              <p>
                463 million people worldwide have diabetes (2019)
                1 in 11 adults worldwide have diabetes (2019)
                34.2 million people in the United States have diabetes (2020)
                1 in 10 adults in the United States have diabetes (2020)
              </p>
            </div>
          </div>

          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Incidence</h1>
              <p>
                1.5 million new cases of diabetes are diagnosed in the United States each year (2020)
                4,725 people are diagnosed with diabetes every day in the United States (2020)
              </p>
            </div>
          </div>

          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Mortality</h1>
              <p>
                4.2 million deaths worldwide were attributable to diabetes in 2019
                Diabetes is the 7th leading cause of death in the United States (2020)
              </p>
            </div>
          </div>

        </div>
        <div className="INFO">
          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Complications</h1>
              <p>
                1 in 3 people with diabetes will develop kidney disease (2020)
                1 in 5 people with diabetes will develop blindness (2020)
                1 in 10 people with diabetes will develop nerve damage (2020)
              </p>
            </div>
          </div>

          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Economic Burden</h1>
              <p>
                The total economic burden of diabetes in the United States is estimated to be $327 billion
                (2020)
                The average medical expenditure for people with diabetes is 2.3 times higher than for people
                without diabetes (2020)
              </p>
            </div>
          </div>

          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Risk Factors</h1>
              <p>
                Obesity increases the risk of developing type 2 diabetes by 7-12 times (2020)
                Physical inactivity increases the risk of developing type 2 diabetes by 20-30% (2020)
                Family history increases the risk of developing type 2 diabetes by 2-3 times (2020)
              </p>
            </div>
          </div>
        </div>
        <div className="INFO-SIDE">
          <div className="MAC_STYLE_TERMINAL dark:border-green-300">
            <div className="CONTENT">
              <h1>Management and Prevention</h1>
              <p>
                63% of people with diabetes in the United States have their condition under control (2020)
                Lifestyle changes, such as diet and exercise, can prevent or delay the onset of type 2
                diabetes by 58% (2020)
              </p>
            </div>
          </div>
        </div>

        <div className="BUTTON_INITIATE">
          <Link href="/ConsultAI" className="UNDERLINE"><button>GET STARTED!!!</button></Link>
        </div>

        <br />
        <br />
        <br />
      </main>
    </>
  );
}

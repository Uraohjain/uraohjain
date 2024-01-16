import { useState, useEffect, useLayoutEffect } from "react";
// import SignupForm from './SignupForm';
import { MultiStep } from "./MultiStepEn";
import { motion } from "framer-motion";

export function MultiStepForm() {
  const [answers, setAnswers] = useState({
    unemployement: "",
    interest: "",
    language: "",
    diploma: "",
  });
  const [unemployement, setUnemployement] = useState("No");
  const [interest, setInterest] = useState("No");
  const [language, setLanguage] = useState("No");
  const [diploma, setDiploma] = useState("No");

  const [showRadioForm, setShowRadioForm] = useState(true);
  const [showMultiStepper, setShowMultiStepper] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [allRadioChecked, setAllRadioChecked] = useState(false);

  function handleNextClick() {
    if (
      unemployement === "Yes" &&
      interest === "Yes" &&
      language === "Yes" &&
      diploma === "Yes"
    ) {
      setShowRadioForm(false);
      setShowMultiStepper(true);
      setShowMessage(false);
    } else {
      setShowRadioForm(false);
      setShowMultiStepper(false);
      setShowMessage(true);
    }
  }

  useEffect(() => {
    // Check if all radio buttons have been selected (with any value)
    if (
      unemployement === "No" &&
      interest === "No" &&
      language === "No" &&
      diploma === "No"
    ) {
      setAllRadioChecked(false);
    } else {
      setAllRadioChecked(true);
    }
  }, [unemployement, interest, language, diploma]);

  return (
    <div className="md:grid md:grid-cols-2" id="pink-box">
      <form className="md:p-18 bg-u+pinky p-4">
        {showRadioForm && (
          <motion.div
            className="md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <h3 className="pb-8 text-3xl font-bold">
              Take our test to see whether the CareerDriver service is right for
              you and sign up!
            </h3>
            <ol className="ml-5 flex list-decimal flex-col gap-10">
              <li className="text-xl">
                Are you registered as an unemployed job seeker at Helsinki
                Employment Services?
                <div className="flex flex-row pt-4">
                  <input
                    type="radio"
                    name="unemployement"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setUnemployement("Yes")}
                  />
                  <span className="mx-4 font-bold">Yes</span>
                  <input
                    type="radio"
                    name="unemployement"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setUnemployement("No")}
                  />
                  <span className="mx-4 font-bold">No</span>
                </div>
              </li>
              <li className="text-xl">
                Is your goal to find employment in the field of ICT, software
                development or media?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="interest"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setInterest("Yes")}
                  />
                  <span className="mx-4 font-bold">Yes</span>
                  <input
                    type="radio"
                    name="interest"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setInterest("No")}
                  />
                  <span className="mx-4 font-bold">No</span>
                </div>
              </li>
              <li className="text-xl">
                Are your Finnish or English skills at least at the B2 level?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="language"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setLanguage("Yes")}
                  />
                  <span className="mx-4 font-bold">Yes</span>
                  <input
                    type="radio"
                    name="language"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setLanguage("No")}
                  />
                  <span className="mx-4 font-bold">No</span>
                </div>
              </li>
              <li className="text-xl">
                Do you have an upper secondary or higher education degree?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="diploma"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setDiploma("Yes")}
                  />
                  <span className="mx-4 font-bold">Yes</span>
                  <input
                    type="radio"
                    name="diploma"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setDiploma("No")}
                  />
                  <span className="mx-4 font-bold">No</span>
                </div>
              </li>
            </ol>
            <div className="mt-10 flex justify-end md:mt-4">
              <button
                className="btn btn-outline btn-lg w-40 rounded-lg text-xl text-u+burg  hover:bg-u+burg hover:text-white disabled:cursor-not-allowed disabled:opacity-80"
                onClick={handleNextClick}
                disabled={!allRadioChecked}
              >
                Next
              </button>
            </div>
          </motion.div>
        )}

        {showMessage && (
          <motion.div
            className="flex flex-col items-center py-28 md:px-8 md:py-24"
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.5 }}
          >
            <h3 className="pb-5 text-2xl font-bold">
              Thank you for your interest!
            </h3>
            <p className="text-light text-center text-xl">
              Unfortunately, your situation does not meet the criteria for
              joining the CareerDriver service. You can contact Helsinki
              Vocational College and Adult Institute’s{" "}
              <a
                href="https://stadinao.fi/palvelut-tyollistymiseen-ja-opintoihin/"
                className="underline hover:text-u+burg-darker"
              >
                career and guidance counselling services
              </a>{" "}
              or visit an advice service point of{" "}
              <a
                href="https://tyollisyyspalvelut.hel.fi/en/contact-information/advice-services"
                className="underline hover:text-u+burg-darker"
              >
                Helsinki Employment Services
              </a>{" "}
              to find a suitable service. <br />
              <br />
              If you need guidance for your studies, you can turn to Laurea
              University of Applied Sciences’ Open UAS{" "}
              <a
                href="https://www.laurea.fi/en/degree_programmes/open-university-of-applied-sciences/open-uas-contact-information/"
                className="underline hover:text-u+burg-darker"
              >
                guidance services
              </a>{" "}
              or Metropolia University of Applied Sciences’{" "}
              <a
                href="https://www.metropolia.fi/en/academics/general-information-on-studies/student-services"
                className="underline hover:text-u+burg-darker"
              >
                guidance services
              </a>
            </p>
          </motion.div>
        )}

        {showMultiStepper && (
          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 2 }}
          >
            <MultiStep />
          </motion.div>
        )}
      </form>
      <figure className="hidden md:block">
        <img
          src="/img/register/walking-man.jpg"
          alt=""
          className="h-full w-full bg-cover"
          width={1000}
          height={1000}
        />
      </figure>
    </div>
  );
}

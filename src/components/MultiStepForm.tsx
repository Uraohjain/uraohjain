import { useState, useEffect, useLayoutEffect } from "react";
// import SignupForm from './SignupForm';
import { MultiStepper } from "./MultiStep";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="flex flex-col gap-8 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <h3 className="pb-8 text-3xl font-bold">
              Testaa sopiiko Uraohjain-palvelu sinulle ja ilmoittaudu!
            </h3>
            <ol className="flex list-decimal flex-col gap-10 pl-5">
              <li className="text-xl">
                Oletko ilmoittautunut työttömäksi työnhakijaksi Helsingin
                työllisyyspalveluihin?
                <div className="flex flex-row pt-4">
                  <input
                    type="radio"
                    name="unemployement"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setUnemployement("Yes")}
                  />
                  <span className="mx-4 font-bold">Kyllä</span>
                  <input
                    type="radio"
                    name="unemployement"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setUnemployement("No")}
                  />
                  <span className="mx-4 font-bold">Ei</span>
                </div>
              </li>
              <li className="text-xl">
                Onko tavoitteesi työllistyä ICT-, ohjelmistokehitys-, tai
                media-alalle?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="interest"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setInterest("Yes")}
                  />
                  <span className="mx-4 font-bold">Kyllä</span>
                  <input
                    type="radio"
                    name="interest"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setInterest("No")}
                  />
                  <span className="mx-4 font-bold">Ei</span>
                </div>
              </li>
              <li className="text-xl">
                Onko suomen tai englannin kielen tasosi vähintään B2?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="language"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setLanguage("Yes")}
                  />
                  <span className="mx-4 font-bold">Kyllä</span>
                  <input
                    type="radio"
                    name="language"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setLanguage("No")}
                  />
                  <span className="mx-4 font-bold">Ei</span>
                </div>
              </li>
              <li className="text-xl">
                Onko sinulla toisen tai korkea-asteen tutkinto?
                <div className="flex pt-4">
                  <input
                    type="radio"
                    name="diploma"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setDiploma("Yes")}
                  />
                  <span className="mx-4 font-bold">Kyllä</span>
                  <input
                    type="radio"
                    name="diploma"
                    className="radio bg-neutral checked:bg-u+burg"
                    onChange={() => setDiploma("No")}
                  />
                  <span className="mx-4 font-bold">Ei</span>
                </div>
              </li>
            </ol>
            <div className="flex justify-end pt-10 md:pt-4">
              <Button onClick={handleNextClick} disabled={!allRadioChecked}>
                Seuraava
              </Button>
              {/* <button
                className="btn btn-outline btn-lg w-40 rounded-lg text-xl text-u+burg  hover:bg-u+burg hover:text-white disabled:cursor-not-allowed disabled:opacity-80"
                onClick={handleNextClick}
                disabled={!allRadioChecked}
              >
                Seuraava
              </button> */}
            </div>
          </motion.div>
        )}

        {showMessage && (
          <motion.div
            className="flex flex-col items-center justify-center py-28 md:px-8 md:py-24"
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", stiffness: 80, duration: 0.5 }}
          >
            <h3 className="pb-5 text-2xl font-bold">
              Kiitos mielenkiinnostasi!
            </h3>
            <p className="text-light text-center text-xl">
              Valitettavasti Uraohjain-palvelun osallistumiskriteerit eivät
              täyty kohdallasi. Voit olla yhteydessä{" "}
              <a
                href="https://stadinao.fi/palvelut-tyollistymiseen-ja-opintoihin/"
                className="underline hover:opacity-75"
              >
                Stadin Ammatti- ja aikuisopiston ura- ja
                opinto-ohjauspalveluihin
              </a>{" "}
              tai vierailla{" "}
              <a
                href="https://tyollisyyspalvelut.hel.fi/yhteystiedot/neuvonta"
                className="underline hover:opacity-75"
              >
                Helsingin työllisyyspalveluiden neuvontapisteillä
              </a>{" "}
              sopivan palvelun löytämiseksi. <br />
              <br />
              Opintoihin liittyen voit kysyä ohjausta{" "}
              <a
                href="https://www.laurea.fi/tyoelamapalvelut/palveluteot/avoin-amk-ohjauspalvelut/"
                className="underline hover:opacity-75"
              >
                Laurea-ammattikorkeakoulun avoimen AMK:n ohjauspalveluista
              </a>{" "}
              tai{" "}
              <a
                href="https://www.metropolia.fi/fi/opiskelu-metropoliassa/yleista-tietoa-opiskelusta/opiskelijapalvelut"
                className="underline hover:opacity-75"
              >
                Metropolia Ammattikorkeakoulun ohjauspalveluista
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
            <MultiStepper />
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

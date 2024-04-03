import { useState, useEffect, type SetStateAction } from "react";
import { MultiStepper } from "./MultiStep";
import { motion } from "framer-motion";
import { Button } from "./ui/button";


export function MultiStepForm() {
  const [unemployement, setUnemployement] = useState("No");
  const [interest, setInterest] = useState("No");
  const [language, setLanguage] = useState("No");
  const [diploma, setDiploma] = useState("No");

  const [showRadioForm, setShowRadioForm] = useState(true);
  const [showMultiStepper, setShowMultiStepper] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [allRadioChecked, setAllRadioChecked] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // State to store current step index
  
  const handleNextStep = (index: SetStateAction<number>) => {
    setCurrentStepIndex(index); // Update current step index in parent component
  };
  

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
      setShowImage(true);
    } else {
      setShowRadioForm(false);
      setShowMultiStepper(false);
      setShowMessage(true);
      setShowImage(false);
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


  const photoUrls = [
    "/img/register/uraohjain_porraskuva1.png",
    "/img/register/uraohjain_porraskuva2.png",
    "/img/register/uraohjain_porraskuva3.png",
    "/img/register/uraohjain_porraskuva4.png",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2" id="pink-box" style={{ minHeight: '600px' }}>
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
            <img src="/img/logo.svg" alt="uraohjain" width={320} height={370} />
            <h3 className="pb-5 text-2xl font-bold">
              Kiitos mielenkiinnostasi!
            </h3>
            <p className="text-light text-center text-xl">
              Valitettavasti Uraohjain-palvelun osallistumiskriteerit eivät
              täyty kohdallasi.
              <br/><br/>
              Voit olla yhteydessä{" "}
              <br/>
              <a
                href="https://stadinao.fi/palvelut-tyollistymiseen-ja-opintoihin/"
                className="underline hover:opacity-75"
              >
                Stadin Ammatti- ja aikuisopiston ura- ja
                opinto-ohjauspalveluihin
              </a>{" "}
              <br/><br/>
              tai vierailla sopivan palvelun löytämiseksi {" "}
              <br/>
              <a
                href="https://tyollisyyspalvelut.hel.fi/yhteystiedot/neuvonta"
                className="underline hover:opacity-75"
              >
                Helsingin työllisyyspalveluiden neuvontapisteillä.
              </a>{" "}<br />
              {/*
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
            */}
            </p>
            <style>{`.text-xl a { font-weight: bold; }`}</style>
          </motion.div>
        )}

        {showMultiStepper && (
          <motion.div
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 2 }}
          >
            <MultiStepper onNextStep={handleNextStep}
            />
          </motion.div>
        )}
      </form>
      {showImage && (
        <div className="relative">
          <div className="absolute inset-0 bg-u+pinky"></div>
          <figure className="hidden lg:block">
            <img
              src={photoUrls[currentStepIndex]}
              alt=""
              className="w-550 h-550 object-cover rounded-full absolute top-1/2 transform -translate-y-1/2 right-8"
              loading="eager"
              width={550}
              height={550}
            />
          </figure>
        </div>
      )}
    </div>
  );
}

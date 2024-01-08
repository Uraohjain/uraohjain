import { motion } from "framer-motion";
import { type ReactElement, useState } from "react";

function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}

function Survey() {
  return (
    <div className="mb-8">
      <iframe
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=wWvrPyLXJkeWbFtYtk33UkE8Jwxx_WlJs9JbeqLbPZJUMEEwQlNTWEk0TFVCRUZXMDk2WkU0NFBDNS4u&embed=true"
        id="survey-iframe"
      ></iframe>
    </div>
  );
}

function FinalStep() {
  return (
    <motion.div
      className="flex flex-col items-center px-6 py-24"
      initial={{ opacity: 0, translateX: 100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring", stiffness: 80, duration: 0.5 }}
    >
      <h3>Kiitos ilmoittautumisestasi Uraohjain-palveluun!</h3>
      <p>
        Tarkemmat ohjeet jatkosta löydät bookings-varauksen vastausviestistä ja
        saat myös muistutuksen sähköpostiin ennen aloitustapaamista.
      </p>
    </motion.div>
  );
}

function Booking() {
  return (
    <div className="mb-8">
      <iframe
        src="https://outlook.office365.com/owa/calendar/Uraohjainaloitustapaaminen@opetus.hel.fi/bookings/"
        id="booking-iframe"
      ></iframe>
    </div>
  );
}

export function TermsOfService(){
  return (
    <div className="p-4 md:py-16">
      <h3 className="md:mb-4 md:mt-0">
        Tervetuloa ilmoittautumaan Uraohjain-palveluun!
      </h3>
      <p>
        Varaa ilmoittautumiseen aikaa noin 20 minuuttia. Aloita ilmoittautuminen
        täyttämällä taustoittava kysely ammatillisesta osaamisestasi. Tämän
        jälkeen pääset täyttämään henkilötietosi ja varaamaan ajan
        aloitustapaamiseen. Aloitustapaamisessa vahvistetaan osallistumisesi
        Uraohjain-palveluun. Ilmoittautuaksesi palveluun sinun tulee hyväksyä
        tietosuojaseloste ja suostumus tietojen vaihtoon Uraohjain-palvelun
        toteuttajien kesken.
      </p>
      <div className="burgundy-color  form-control mt-8 text-lg">
        <label className="label cursor-pointer justify-start">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            className="checkbox mr-4 bg-neutral"
          />
          <div className="flex flex-col md:flex-row">
            <label htmlFor="privacy">Hyväksyn tietosuojaselosteen.</label>
            <span className="mx-4">
              <a
                className="underline"
                href="/doc/uraohjain-tietosuojaseloste.pdf"
                target="_blank"
              >
                Lue lisää
              </a>
            </span>
          </div>
        </label>
        <label className="label cursor-pointer justify-start">
          <input
            type="checkbox"
            name="information"
            id="information"
            className="checkbox mr-4 bg-neutral"
          />
          <div className="flex flex-col md:flex-row">
            <label htmlFor="information">
              Hyväksyn tietojen vaihdon Uraohjain-palvelu toteuttajien kesken.
            </label>
            <span className="mx-4">
              <a
                className="underline"
                href="/doc/uraohjain-suostumuslomake.pdf"
                target="_blank"
              >
                Lue lisää
              </a>
            </span>
          </div>
        </label>
      </div>
      <p className="mt-4">
        Uraohjain-palvelun aloituspaikkojen määrä on rajallinen. Jos seuraavan
        kahden viikon aloitustapaamisten ajat on täytetty, ilmoitamme tästä
        seuraavan sivun kyselyn alussa. Löydät tiedon kyselyn ylälaidasta. 
      </p>
    </div>
  );
};

export function MultiStepper(){
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <TermsOfService />,
      <Survey />,
      <Booking />,
      <FinalStep />,
    ]);

  return (
    <div>
      <form>
        <p className="p-0 text-right font-semibold">
          {currentStepIndex + 1} / {steps.length}
        </p>
        {step}
        <div className="mt-10 flex justify-end space-x-40 md:mt-4 md:space-x-96">
          {/* {!isFirstStep && (
            <button type='button' className={'btn btn-lg btn-outline w-40'} onClick={back}>
              Edellinen
            </button>
          )} */}

          {!isLastStep && (
            <button
              type="button"
              className={"btn-form btn btn-outline btn-lg w-40"}
              onClick={next}
            >
              {isLastStep ? "Kiitos!" : "Seuraava"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

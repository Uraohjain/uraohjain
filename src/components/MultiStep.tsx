import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { type ReactElement, useState, useCallback } from "react";

function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }, [setCurrentStepIndex]);

  const back = useCallback(() => {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }, [setCurrentStepIndex]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentStepIndex(index);
    },
    [setCurrentStepIndex],
  );

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
    <div className="max-h-[600px] pb-8">
      <iframe
        className="h-[600px] w-full"
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
      <h3 className="text-2xl font-bold">
        Kiitos ilmoittautumiestasi Uraohjain-palveluun!
      </h3>
      <p className="text-center text-xl font-light">
        Tarkemmat ohjeet jatkosta löydät bookings-varauksen vastausviestistä ja
        saat myös muistutuksen sähköpostiin ennen aloitustapaamista.
      </p>
    </motion.div>
  );
}

function Booking() {
  return (
    <div className="max-h-[600px] pb-8">
      <iframe
        className="h-[600px] w-full"
        src="https://outlook.office365.com/owa/calendar/Uraohjainaloitustapaaminen@opetus.hel.fi/bookings/"
        id="booking-iframe"
      ></iframe>
    </div>
  );
}

export function TermsOfService() {
  return (
    <div className="flex flex-col gap-5 p-4 text-xl font-light md:py-16">
      <h3 className="pb-4 text-2xl font-bold">
        Tervetuloa ilmoittautumaan Uraohjain-palveluun!
      </h3>
      <p>
        Varaa ilmoittautumiseen aikaa noin 15 minuuttia. Aloita ilmoittautuminen
        täyttämällä taustoittava kysely ammatillisesta osaamisestasi. Tämän
        jälkeen pääset varaamaan ajan aloitustapaamiseen. Aloitustapaamisessa
        vahvistetaan osallistumisesi Uraohjain-palveluun.
      </p>
      <p>
        Ilmoittautuaksesi palveluun sinun tulee hyväksyä tietosuojaseloste ja
        suostumus tietojen vaihtoon Uraohjain-palvelun toteuttajien kesken.
      </p>
      <div className="form-control mt-8 text-lg">
        <label className="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            className="checkbox bg-neutral [--chkbg:theme(colors.u+burg)]"
          />
          <div className="flex flex-col md:flex-row md:gap-4">
            <label htmlFor="privacy">Hyväksyn tietosuojaselosteen.</label>
            <a
              className="underline"
              href="/doc/uraohjain-tietosuojaseloste.pdf"
              target="_blank"
            >
              Lue lisää
            </a>
          </div>
        </label>
        <label className="label cursor-pointer justify-start gap-4">
          <input
            type="checkbox"
            name="information"
            id="information"
            className="checkbox bg-neutral [--chkbg:theme(colors.u+burg)]"
          />
          <div className="flex flex-col md:flex-row md:gap-4">
            <label htmlFor="information">
              Hyväksyn tietojen vaihdon Uraohjain-palvelun toteuttajien kesken.
            </label>
            <a
              className="underline"
              href="/doc/uraohjain-suostumuslomake.pdf"
              target="_blank"
            >
              Lue lisää
            </a>
          </div>
        </label>
      </div>
    </div>
  );
}

interface MultiStepperProps {
  onNextStep: (index: number) => void;
}

export function MultiStepper(props: MultiStepperProps) {
  const { steps, currentStepIndex, step, isLastStep, next } = useMultistepForm([
    <TermsOfService />,
    <Survey />,
    <Booking />,
    <FinalStep />,
  ]);

  const handleNextClick = () => {
    next(); // Call next function from useMultistepForm
    props.onNextStep(currentStepIndex + 1); // Call parent's onNextStep function with the updated index
  };

  return (
    <div>
      <div className="flex justify-center space-x-4">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStepIndex === index ? 'bg-primary text-white' : 'bg-white text-gray-500'}`}
          >
            {currentStepIndex === index && <span>{index + 1}</span>}
          </div>
        ))}
      </div>
      <div className="mt-4">
      {step}
      </div>
      <div className="mt-10 flex justify-end space-x-40 md:mt-4 md:space-x-96">
        {!isLastStep && (
          <Button type="button" onClick={handleNextClick}>
            {isLastStep ? "Kiitos!" : "Seuraava"}
          </Button>
        )}
      </div>
    </div>
  );
}
import { motion } from "framer-motion";
import { Button } from "./ui/button";
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
        Thank you for registering for the CareerDriver service!
      </h3>
      <p className="text-center text-xl font-light">
        You will receive more detailed instructions and confirmation of the
        location of your start appointments in your appointment confirmation
        email.
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
        Welcome, it is now time to sign up for the CareerDriver service!
      </h3>
      <p>
        Please reserve roughly 15 minutes for signing up. Start by filling out a
        background survey on your professional know-how. After that, you can
        schedule a kick-off meeting. At the kick-off meeting your participation
        to CareerDriver is confirmed.
      </p>
      <p>
        To sign up for the service, you must accept the privacy statement and
        consent to information exchange.
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
            <label htmlFor="privacy">I accept the privacy statement.</label>
            <a
              className="underline"
              href="/doc/uraohjain-tietosuojaseloste.pdf"
              target="_blank"
            >
              Read More
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
              I accept my participation in the CareerDriver+ development
              project.
            </label>
            <a
              className="underline"
              href="/doc/uraohjain-suostumuslomake.pdf"
              target="_blank"
            >
              Read More
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

export function MultiStep(props: MultiStepperProps) {
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
            {isLastStep ? "Thank you!" : "Next"}
          </Button>
        )}
      </div>
    </div>
  );
}

import {
  Box,
  Text,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import Select from "react-select";

import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import CaseValue from "./CaseValue";
import AccidentDate from "./AccidentDate";
import DriverInfo from "./DriverInfo";
import AccidentDetails from "./AccidentDetails";
import PropertyDamage from "./PropertyDamage";
import AccidentDetailsExtra from "./AccidentDetailsExtra";
import PropertyDamageExtra from "./PropertyDamageExtra";
import PropertyDamageLast from "./PropertyDamageLast";
import PropertyDamage4 from "./PropertyDamage4";
import PropertyDamage5 from "./PropertyDamage5";

function FormData() {
  const [step, setStep] = useState(1);
  const [selectedInjury, setSelectedInjury] = useState([]);

  const nextStep = () => {
    setStep(step + 1);
    console.log(step);
  };
  const prevStep = () => {
    setStep(step - 1);
    console.log(step);
  };
  const handleSelectedInjury = (injury) => {
    // if (selectedInjury.find((el) => el === injury)) {
    //   selectedInjury.pop(injury);
    // } else {
    //   setSelectedInjury((prevState) => {
    //     return [...prevState, injury];
    //   });
    // }
    // console.log(selectedInjury);
    setSelectedInjury((prevState) => {
      return [prevState, injury];
    });
    console.log(selectedInjury);
  };
  switch (step) {
    case 1:
      return <PersonalDetails nextStep={nextStep} prevStep={prevStep} />;
    case 2:
      return <AccidentDate prevStep={prevStep} nextStep={nextStep} />;
    case 3:
      return <DriverInfo prevStep={prevStep} nextStep={nextStep} />;
    case 4:
      return <AccidentDetails prevStep={prevStep} nextStep={nextStep} />;
    case 5:
      return <AccidentDetailsExtra prevStep={prevStep} nextStep={nextStep} />;
    case 6:
      return <PropertyDamage prevStep={prevStep} nextStep={nextStep} />;
    case 7:
      return <PropertyDamageExtra prevStep={prevStep} nextStep={nextStep} />;
    case 8:
      return <PropertyDamageLast prevStep={prevStep} nextStep={nextStep} />;
    case 9:
      return <PropertyDamage4 prevStep={prevStep} nextStep={nextStep} />;
    case 10:
      return (
        <PropertyDamage5
          prevStep={prevStep}
          nextStep={nextStep}
          selected={selectedInjury}
          setSelectedInjury={setSelectedInjury}
          selectedInjury={handleSelectedInjury}
        />
      );
    default:
      console.log("adding more");
  }
}

export default FormData;

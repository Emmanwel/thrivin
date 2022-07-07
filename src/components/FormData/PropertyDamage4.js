import React from "react";
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
import RadioComponent from "../SelectComponent.js/RadioComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

function PropertyDamage4(props) {
  const nextStep = (e) => {
    props.nextStep();
  };
  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const options = [
    { value: "1", option: "The day of the accident" },
    { value: "2", option: "1-5 days after the accident" },
    { value: "3", option: "5-10 days after the accident" },
    { value: "4", option: "11 days or more" },
  ];
  return (
    <div>
      <RadioComponent
        label={"When did you first seek medical treatment"}
        options={options}
      />
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        align={"right"}
        spacing={4}
        pb={7}
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          width={["100%", "50%", "30%"]}
          height={"14"}
          minW={"30%"}
          fontSize={"sm"}
          paddingInlineStart={"6"}
          paddingInlineEnd={"6"}
          onClick={prevStep}
          transitionProperty={"common"}
          transitionDuration={"normal"}
          background={"gray.100"}
        >
          Return
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          width={["100%", "50%", "30%"]}
          height={"14"}
          minW={"30%"}
          fontSize={"sm"}
          paddingInlineStart={"6"}
          paddingInlineEnd={"6"}
          onClick={nextStep}
          transitionProperty={"common"}
          transitionDuration={"normal"}
          background={"#1F2845"}
          color={"white"}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}

export default PropertyDamage4;

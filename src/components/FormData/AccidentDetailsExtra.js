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

function AccidentDetailsExtra(props) {
  const nextStep = (e) => {
    props.nextStep();
  };
  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const options = [
    { value: "1", option: "Yes" },
    { value: "2", option: "No" },
    { value: "3", option: "I don't know" },
  ];
  return (
    <div>
      <RadioComponent
        label={"Property Damage"}
        subLabel={
          "How would you describe how much damage was done to vehicle(s) in the accident?"
        }
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

export default AccidentDetailsExtra;

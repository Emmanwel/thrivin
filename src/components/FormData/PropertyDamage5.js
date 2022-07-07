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
  FormHelperText,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import RadioComponent from "../SelectComponent.js/RadioComponent";

function PropertyDamage5(props) {
  const nextStep = (e) => {
    props.nextStep();
  };
  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const options = [
    { value: "1", option: "Head" },
    { value: "2", option: "Back" },
    { value: "3", option: "Neck" },
    { value: "4", option: "Arms" },
    { value: "5", option: "Shoulder" },
    { value: "6", option: "Legs" },
    { value: "7", option: "Hearing" },
    { value: "8", option: "Knee" },
    { value: "9", option: "Vision" },
    { value: "10", option: "Hip" },
    { value: "11", option: "Death" },
    { value: "12", option: "Scars" },
  ];
  const selectInjury = (o) => {
    console.log(o.option);
    // props.selectedInjury(o.option);
    props.selectedInjury(o.option);
    console.log("working", props.selected);
  };
  return (
    <div>
      <FormControl mb={"8"}>
        <FormLabel fontSize={"md"} mb={"2"} fontWeight={"semibold"}>
          {"What part of your body did you injure?"}
          <span color="#CBD5E0" fontWeight={"600"} fontSize={"md"}>
            (Select all that apply)
          </span>
        </FormLabel>
        <Stack direction={"row"}>
          <Wrap spacing={"2"} justify={"left"}>
            {/* <WrapItem>
              <Button>Head</Button>
            </WrapItem>
            <WrapItem>
              <Button>Brain Damage</Button>
            </WrapItem> */}
            {options.map((option) => (
              <WrapItem>
                <Button onClick={(e) => selectInjury(option)}>
                  {option.option}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </Stack>
      </FormControl>
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

export default PropertyDamage5;

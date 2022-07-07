import React, { useEffect } from "react";
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
import SelectComponent from "../SelectComponent.js/SelectComponent";
import RadioComponent from "../SelectComponent.js/RadioComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { calculate, driverOrPassanger } from "../../Redux/action/injury";

function DriverInfo(props) {
  const dispatch = useDispatch();
  const allDetails = useSelector((state) => state.allDetails);
  const passengerOrDriver = allDetails.passengerOrDriver;
  useEffect(() => {
    // console.log(passengerOrDriver);
  }, [passengerOrDriver]);

  const nextStep = (e) => {
    props.nextStep();
  };
  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const handleRadioSelect = (v) => {
    console.log(v);
    dispatch(driverOrPassanger(v));
    dispatch(calculate());
  };
  const options = [
    { value: "passenger", option: "Passenger" },
    { value: "driver", option: "Driver" },
  ];
  return (
    <div>
      <RadioComponent
        label={"Were you a passenger or the driver?"}
        options={options}
        currentOption={passengerOrDriver}
        // currentOption={options.filter(
        //   (option) => option.value === passengerOrDriver
        // )}
        update={handleRadioSelect}
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

export default DriverInfo;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Container,
  HStack,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import classNames from "classnames";
import Step from "./Step";
import "./ProgressNavigation.css";
function ProgressNavigation() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 48em)" });
  useEffect(() => {
    console.log(isBigScreen);
  }, [isBigScreen]);

  const stepsData = [
    {
      stepNumber: "1",
      stepDetails: "personal information",
    },
    {
      stepNumber: "2",
      stepDetails: "dates",
    },
    {
      stepNumber: "3",
      stepDetails: "passenger or driver",
    },
    {
      stepNumber: "4",
      stepDetails: "Accident details",
    },
    {
      stepNumber: "5",
      stepDetails: "Property damage",
    },
  ];
  const [currentActive, setCurrentActive] = useState(1);
  const handleClickPrev = () => {
    setCurrentActive((prevState) => prevState - 1);
    console.log(currentActive);
  };

  const handleClickNext = () => {
    setCurrentActive((prevState) => prevState + 1);
    console.log(currentActive);
  };
  return (
    <Container className="container" pt="0" mt={"4"} mb={"4"}>
      <div className="progress-container">
        {isBigScreen ? (
          <div
            className="progress"
            style={{
              height:
                ((currentActive - 1) / (stepsData.length - 1)) * 100 + "%",
            }}
          ></div>
        ) : (
          <div
            className="progress"
            style={{
              width: ((currentActive - 1) / (stepsData.length - 1)) * 100 + "%",
            }}
          ></div>
        )}

        {stepsData?.map((step, index) => {
          const stepClass = classNames({
            circle: true,
            active: index < currentActive,
          });
          return (
            <Step
              key={index}
              className={stepClass}
              details={step.stepDetails}
              currentCircle={index === currentActive}
              content={step.stepNumber}
            />
          );
        })}
      </div>
      {/* <button
        onClick={handleClickPrev}
        className="btn"
        id="prev"
        {...(currentActive === 1 && { disabled: true })}
      >
        Prev
      </button>
      <button
        onClick={handleClickNext}
        className="btn"
        id="next"
        {...(currentActive === stepsData.length && { disabled: true })}
      >
        Next
      </button> */}
    </Container>
  );
}

export default ProgressNavigation;

import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  Show,
  Hide,
  Icon,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
function CaseValue() {
  const allDetails = useSelector((state) => state.allDetails);
  const { resultFinal } = allDetails.result.result;
  const [showHide, setShowHide] = useState(false);
  const handleShowHide = () => {
    setShowHide(!showHide);
  };
  return (
    <Box bgColor="#5794F7F0" color="white" borderRadius="lg">
      <Container position={"relative"} mb={"4"} p={["4", "6", "6"]}>
        <Text fontWeight={"600"} fontSize="xl">
          Total Case Value
        </Text>
        <Show below="sm">
          {/* <Button> */}
          <IconButton
            colorScheme={"#5794F7F0"}
            as="button"
            onClick={handleShowHide}
            maxW={"6"}
            height={"6"}
            fontWeight={"semibold"}
            fontSize="xl"
            borderRadius={"var(--chakra-radii-md);"}
            m={"4"}
            position={"absolute"}
            right={"0"}
            top={"0"}
            fontFamily={"chakra-fonts-extra"}
            icon={<Icon />}
          />
          {/* </Button> */}
        </Show>
        <Hide below="sm">
          <Text
            // fontWeight={"600"}
            fontFamily={"var(--chakra-fonts-extra)"}
            fontSize={["xs", "sm", "sm"]}
            maxW={"lg"}
            color={"gray.100"}
          >
            Your value will be automatically updated as you provide more
            information about your case to find out how much it is worth.
          </Text>
        </Hide>

        {showHide && (
          <Show below="sm">
            <Text
              // fontWeight={"600"}
              fontFamily={"var(--chakra-fonts-extra)"}
              fontSize={["xs", "sm", "sm"]}
              maxW={"lg"}
              color={"gray.100"}
            >
              Your value will be automatically updated as you provide more
              information about your case to find out how much it is worth.
            </Text>
          </Show>
        )}

        <Text
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          fontWeight={"bold"}
          lineHeight={"32px"}
          mt={"8"}
          mb={"4"}
        >
          ${resultFinal ? resultFinal : 750}
        </Text>
      </Container>
    </Box>
  );
}

export default CaseValue;

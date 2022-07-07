import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Center, Flex, Hide, Show } from "@chakra-ui/react";
import "./Home.css";
import { Heading, Link as ReachLink } from "@chakra-ui/react";
import { Container, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/action/login";
function Home() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;
  useEffect(() => {
    if (!token) {
      dispatch(login());
    }
  }, [token, dispatch]);

  return (
    <div className="home">
      <div className="content">
        <Container
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          pl={"0"}
          pr={"0"}
          maxW={"container.xl"}
          h={"full"}
        >
          <Container paddingInlineStart={"0"} paddingRight={"0"} maxW={"800px"}>
            <Flex justifyContent={["left", "center"]}>
              <Text
                fontSize={["5xl", "5xl", "8xl"]}
                lineHeight={["1.33", "1.33", "1.2"]}
                // fontWeight={"small"}
              >
                Injury Values
              </Text>
            </Flex>
            <Flex mt={"0.5rem"} flexDirection={"column"}>
              <Heading
                as={"h1"}
                fontSize={["xl", "2xl", "4xl"]}
                textAlign={["left", "center"]}
              >
                How much is your car accident case worth?
              </Heading>
              <Show above="sm">
                <Text
                  as={"h2"}
                  fontSize={["xl", "2xl"]}
                  textAlign={["left", "center"]}
                >
                  Valuing a Car Accident Injury Claim
                </Text>
              </Show>

              <Text
                mt={"6"}
                color={"gray.200"}
                mb={"4"}
                fontSize={["md", "lg", "xl"]}
              >
                Insurance companies investigate thousands of car accident
                insurance claims each year so they know how much a case is worth
                because they know how much people are willing to accept in
                settlements and they know how much juries are willing to award.
                A lot of factors determine how much a car crash injury is worth.
                Some of these valuation factors include the following: fault,
                speed of impact, involvement of drugs or alcohol, your age, your
                sex, the nature and extent of injuries, treatment types, amount
                of medical bills, and your lost wages. This website is designed
                to give you a sense about how these factors might impact a
                hypothetical injury claim. This website is for illustration
                purposes only and does not provide legal advice and the values
                for hypothetical injury claims should not be relied on to
                resolve a car injury insurance claim.
              </Text>
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {/* <Link
                // display={"flex"}
                // position={"relative"}
                // flexDirection={"column"}
                // width={"100%"}
                as={ReachLink}
                to="case"
              > */}
                <Button
                  href={"/case"}
                  as={"a"}
                  display={"flex"}
                  position={"relative"}
                  w={["100%", "60%", "30%"]}
                  h={"10"}
                  pt={"6"}
                  pb={"6"}
                  mb={"8"}
                  mt={["4", "6"]}
                  bg="#B0935B"
                >
                  Let's get Started
                </Button>
                {/* </Link> */}
              </Flex>
            </Flex>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Home;

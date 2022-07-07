import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./Case.css";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
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
  TableContainer,
  Heading,
  Divider,
  Show,
  Hide,
  Box,
  SlideFade,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  CheckCircleIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
// import ProgressNavigation from "../ProgressNavigation/ProgressNavigation";
import FormData from "../FormData/FormData";
import CaseValue from "../FormData/CaseValue";
function Case() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 48em)" });
  useEffect(() => {
    console.log(isBigScreen);
  }, [isBigScreen]);
  const [openModal, setOpenModal] = useState(true);
  const onClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="case-section">
      <div>
        <Heading className="case-header">
          <div className="header-overlay header-font">
            <h1>How much is your case worth?</h1>
          </div>
        </Heading>
        <nav className="border-bottom">
          <Container maxW="container.xl" w={"full"}>
            {/* <HStack className="nav-stack">
              <Link className="nav-link" to="/">
                <Icon w={6} h={6} as={MdHome} />
              </Link>
              <Icon>
                <svg
                  width="24"
                  height="44"
                  viewBox="0 0 24 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.296875 0L22.2969 22L0.296875 44H1.71088L23.7109 22L1.71088 0H0.296875Z"
                    fill="#E5E7EB"
                  />
                </svg>
              </Icon>
              <Link className="nav-link" to="/">
                <Text>Case</Text>
              </Link>
              <Link className="nav-link" to="/">
                <Text>Personal Information</Text>
              </Link>
            </HStack> */}
            <Breadcrumb
              display={"flex"}
              flexDirection={"row"}
              separator={
                <svg
                  width="24"
                  height="44"
                  viewBox="0 0 24 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.296875 0L22.2969 22L0.296875 44H1.71088L23.7109 22L1.71088 0H0.296875Z"
                    fill="#E5E7EB"
                  />
                </svg>
              }
            >
              <BreadcrumbItem>
                <BreadcrumbLink
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textTransform={"capitalize"}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  maxW={"4"}
                  fontSize={"sm"}
                  flex={"1 1 0%"}
                  paddingInlineStart={"4"}
                  paddingInlineEnd={"4"}
                  h={"10"}
                  as={Link}
                  to="/"
                >
                  <Icon as={MdHome} />
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  as={Link}
                  to="/case"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textTransform={"capitalize"}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  maxW={"100%"}
                  fontSize={"sm"}
                  flex={"1 1 0%"}
                  paddingInlineStart={"4"}
                  paddingInlineEnd={"4"}
                  h={"10"}
                >
                  <Text
                  // overflow={"hidden"}
                  // textOverflow={"ellipsis"}
                  // whiteSpace={"nowrap"}
                  // maxW={"5"}
                  >
                    Case
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  as={Link}
                  to="/pi"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textTransform={"capitalize"}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  // maxW={"14"}
                  fontSize={"sm"}
                  // flex={"1 1 0%"}
                  paddingInlineStart={"4"}
                  paddingInlineEnd={"4"}
                  h={"10"}
                >
                  <Text
                  // overflow={"hidden"}
                  // textOverflow={"ellipsis"}
                  // whiteSpace={"nowrap"}
                  // maxW={"10"}
                  >
                    Personal Information
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </nav>
        <Flex
          background={"#F2F4F7"}
          direction={{ base: "column", md: "row" }}
          pt={"4"}
        >
          {/* <ProgressNavigation /> */}
          {/* <StepperProgress /> */}

          {/* <Show below="md">
            <ul class="steps steps-horizontal ">
              <li data-content="✓" class="step step-primary"></li>
              <li data-content="●" class="step step-primary"></li>
              <li data-content=" " class="step "></li>
              <li data-content=" " class="step"></li>
              <li data-content=" " class="step"></li>
            </ul>
          </Show> */}
          {/* <Show above="md">
            <ul class="steps steps-vertical top-0">
              <li data-content="✓" class="step step-primary top-0">
                PERSONAL INFORMATION
              </li>
              <li data-content="●" class="step step-primary">
                DATES
              </li>
              <li data-content=" " class="step">
                PASSENGER OR DRIVER
              </li>
              <li data-content=" " class="step">
                ACCIDENT DETAILS
              </li>
              <li data-content=" " class="step">
                PROPERTY DAMAGE
              </li>
            </ul>
          </Show> */}
          <Box
            as="aside"
            maxW={{ sm: "full", md: "sm", lg: "md" }}
            flex="1 1 0%"
          >
            <SlideFade
              animate="enter"
              custom={{
                delay: undefined,
                initialScale: 0.95,
                reverse: true,
                transition: undefined,
                transitionEnd: undefined,
              }}
              initial="exit"
            >
              <UnorderedList
                spacing={"0"}
                display="flex"
                flexDir={{ base: "row", sm: "row", md: "column" }}
                justifyContent="center"
                pt={"4"}
                pb="4"
                position={"relative"}
                height="fit-content"
                paddingInlineStart={"4"}
                paddingInlineEnd={"4"}
                zIndex="1"
              >
                <ListItem
                  display={"flex"}
                  alignItems="center"
                  flexDir={"row"}
                  zIndex="1"
                >
                  <Box>
                    <Box
                      color={"#276EF1"}
                      w="8"
                      h={"8"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius={"full"}
                      border="2px"
                      background="white"
                      cursor={"pointer"}
                    >
                      <CheckCircleIcon color={"currentColor"}></CheckCircleIcon>
                    </Box>
                  </Box>
                  <Text
                    display={["none", "none", "block"]}
                    textTransform="uppercase"
                    ml={"2"}
                    pl="2"
                    flex={"1 1 0%"}
                    fontSize="12px"
                    color={"gray.900"}
                    fontWeight="bold"
                    cursor={"pointer"}
                  >
                    Personal Information
                  </Text>
                </ListItem>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  flex={"1 1 0%"}
                >
                  <Box
                    bg={"#276EF1"}
                    h={{ base: "0.5", sm: "0.5", md: "10" }}
                    w={{ base: "full", sm: "full", md: "0.5" }}
                    ml={{ base: "0px", sm: "0px", md: "4" }}
                  ></Box>
                </Box>
                <ListItem
                  display={"flex"}
                  alignItems="center"
                  flexDir={"row"}
                  zIndex="1"
                >
                  <Box>
                    <Box
                      color={"#276EF1"}
                      w="8"
                      h={"8"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius={"full"}
                      border="2px"
                      background="white"
                      cursor={"pointer"}
                    >
                      <Icon
                        viewBox="0 0 11 10"
                        color={"currentColor"}
                        verticalAlign="middle"
                        w="8"
                        h="8"
                        padding={"2"}
                      >
                        <circle
                          cx="5.5"
                          cy="5"
                          r="5"
                          fill="currentColor"
                        ></circle>
                      </Icon>
                    </Box>
                  </Box>
                  <Text
                    display={["none", "none", "block"]}
                    textTransform="uppercase"
                    ml={"2"}
                    pl="2"
                    flex={"1 1 0%"}
                    fontSize="12px"
                    color={"gray.900"}
                    fontWeight="bold"
                    cursor={"pointer"}
                  >
                    Date
                  </Text>
                </ListItem>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  flex={"1 1 0%"}
                >
                  <Box
                    bg={"#276EF1"}
                    h={{ base: "0.5", sm: "0.5", md: "10" }}
                    w={{ base: "full", sm: "full", md: "0.5" }}
                    ml={{ base: "0px", sm: "0px", md: "4" }}
                  ></Box>
                </Box>
                <ListItem
                  display={"flex"}
                  alignItems="center"
                  flexDir={"row"}
                  zIndex="1"
                >
                  <Box>
                    <Box
                      color={"#276EF1"}
                      w="8"
                      h={"8"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius={"full"}
                      border="2px"
                      background="white"
                      cursor={"pointer"}
                    ></Box>
                  </Box>
                  <Text
                    display={["none", "none", "block"]}
                    textTransform="uppercase"
                    ml={"2"}
                    pl="2"
                    flex={"1 1 0%"}
                    fontSize="12px"
                    color={"gray.900"}
                    fontWeight="bold"
                    cursor={"pointer"}
                  >
                    Passenger or driver
                  </Text>
                </ListItem>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  flex={"1 1 0%"}
                >
                  <Box
                    bg={"#276EF1"}
                    h={{ base: "0.5", sm: "0.5", md: "10" }}
                    w={{ base: "full", sm: "full", md: "0.5" }}
                    ml={{ base: "0px", sm: "0px", md: "4" }}
                  ></Box>
                </Box>
                <ListItem
                  display={"flex"}
                  alignItems="center"
                  flexDir={"row"}
                  zIndex="1"
                >
                  <Box>
                    <Box
                      color={"#276EF1"}
                      w="8"
                      h={"8"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius={"full"}
                      border="2px"
                      background="white"
                      cursor={"pointer"}
                    ></Box>
                  </Box>
                  <Text
                    display={["none", "none", "block"]}
                    textTransform="uppercase"
                    ml={"2"}
                    pl="2"
                    flex={"1 1 0%"}
                    fontSize="12px"
                    color={"gray.900"}
                    fontWeight="bold"
                    cursor={"pointer"}
                  >
                    Accident Details
                  </Text>
                </ListItem>
                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  flex={"1 1 0%"}
                >
                  <Box
                    bg={"#276EF1"}
                    h={{ base: "0.5", sm: "0.5", md: "10" }}
                    w={{ base: "full", sm: "full", md: "0.5" }}
                    ml={{ base: "0px", sm: "0px", md: "4" }}
                  ></Box>
                </Box>
                <ListItem
                  display={"flex"}
                  alignItems="center"
                  flexDir={"row"}
                  zIndex="1"
                >
                  <Box>
                    <Box
                      color={"#276EF1"}
                      w="8"
                      h={"8"}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                      borderRadius={"full"}
                      border="2px"
                      background="white"
                      cursor={"pointer"}
                    ></Box>
                  </Box>
                  <Text
                    display={["none", "none", "block"]}
                    textTransform="uppercase"
                    ml={"2"}
                    pl="2"
                    flex={"1 1 0%"}
                    fontSize="12px"
                    color={"gray.900"}
                    fontWeight="bold"
                    cursor={"pointer"}
                  >
                    Property Damage
                  </Text>
                </ListItem>
              </UnorderedList>
            </SlideFade>
          </Box>

          <Container pt={["4", "4", "0"]}>
            <CaseValue />
            <Container
              background={"white"}
              borderRadius="lg"
              p={{ base: "6", md: "8", lg: "8" }}
              mt={6}
              mb={6}
            >
              <FormData />
            </Container>
          </Container>
        </Flex>
      </div>
      <Modal isCentered isOpen={openModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody className="radius" background="rgb(227, 221, 204)">
            <Text fontWeight="bold" fontSize="xl" className="bold-font">
              Disclaimer
            </Text>
            <Text className="text-color-gray">
              The information on this website is not intended to serve as legal
              advice and your use of this site does not creates an
              attorney/client relationship with the owners of this website. All
              calculations are estimates and provided for informational purposes
              only. Data may not be complete. Actual injury values will vary. We
              recommend contacting an attorney if you have legal questions about
              the value of a car injury claim.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              background="#1F2845;"
              className="lg-button"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              size="lg"
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Case;

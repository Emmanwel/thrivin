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
  RadioGroup,
  Radio,
  Input,
} from "@chakra-ui/react";
function RadioComponent(props) {
  const handleChange = (v) => {
    props.update(v);
    console.log(v);
    console.log(props.currentOption);
  };
  return (
    <div>
      <FormControl>
        <FormLabel fontSize={"xl"} mb={"2"} fontWeight={"semibold"}>
          {props.label}
        </FormLabel>
        <Text mb={"8"} width={"100%"}>
          {props.subLabel}
        </Text>
        <RadioGroup
          mb={"8"}
          onChange={handleChange}
          value={props.currentOption}
        >
          <Stack>
            {props.options.map((option) => (
              <Box
                borderWidth="1px"
                borderRadius={"8px"}
                borderColor={"gray.200"}
                // height={"40px"}
                display={"flex"}
                alignItems={"center"}
              >
                <Radio
                  key={option.value}
                  marginInline={"0.5rem"}
                  fontSize={"md"}
                  pt="3"
                  mb="3"
                  pl="3"
                  value={option.value}
                >
                  {option.option}
                </Radio>
              </Box>
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioComponent;

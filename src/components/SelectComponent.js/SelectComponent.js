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
import Select from "react-select";
import "./SelectComponent.css";
function SelectComponent(props) {
  const handleChange = (v) => {
    props.update(v);
  };
  return (
    <FormControl mb={"8"}>
      <FormLabel fontSize={"xl"} fontWeight={"semibold"}>
        {props.label}
      </FormLabel>
      <Text fontSize={"sm"} mb={"1"} mt={"2"}>
        {props.subLabel}
      </Text>
      {props.type === "date" && (
        <Input
          type={"date"}
          onChange={handleChange}
          value={props.currentOption}
        />
      )}

      {props.type === "select" && (
        <Select
          defaultValue={props.currentOption}
          // value={props.currentOption}
          name={props.name}
          placeholder={props.placeholder}
          options={props.options}
          onChange={handleChange}
        />
      )}
    </FormControl>
  );
}

export default SelectComponent;

import React, { useEffect, useState } from 'react'
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
} from '@chakra-ui/react'
import Select from 'react-select'
import SelectComponent from '../SelectComponent.js/SelectComponent'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { calculate, updatePersonalInfo } from '../../Redux/action/injury'
function PersonalDetails(props) {
  const [ages, setAges] = useState('')
  const [genders, setGenders] = useState('')

  const handleAgesChange = (event) => {
    setAges(event.target.value)
  }

  const handleGendersChange = (event) => {
    setGenders(event.target.value)
  }

  const dispatch = useDispatch()
  const allDetails = useSelector((state) => state.allDetails)
  const { age, gender } = allDetails.personalInformation
  const nextStep = (e) => {
    props.nextStep()
  }
  const prevStep = (e) => {
    e.preventDefault()
    props.prevStep()
  }
  const handleAge = (v) => {
    dispatch(updatePersonalInfo(gender, v.value))
    dispatch(calculate())
  }
  const handleGender = (v) => {
    dispatch(updatePersonalInfo(v.value, age))
    dispatch(calculate())
  }
  // useEffect(() => {
  //   console.log(a, b);
  // }, [a, b]);
  const ageOptions = [
    { value: '0-18', label: '0 - 18' },
    { value: '19-65', label: '19 - 65' },
    { value: '65<+', label: '65 < +' },
  ]
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'not', label: 'Prefer not to say' },
  ]
  return (
    <div>
      <SelectComponent
        label={'What is your age?'}
        subLabel={'Select range'}
        type={'select'}
        currentOption={ageOptions.filter((option) => option.value === age)}
        options={ageOptions}
        placeholder={'-'}
        update={handleAge}
        onChange={handleAgesChange}
        value={ages}
      />
      <SelectComponent
        label={'What is your gender?'}
        subLabel={'Select your gender'}
        type={'select'}
        onChange={handleGendersChange}
        value={genders}
        options={genderOptions}
        placeholder={'-'}
        update={handleGender}
        currentOption={genderOptions.filter(
          (option) => option.value === gender,
        )}
      />
      <Stack
        direction={'row'}
        justifyContent={'flex-end'}
        align={'right'}
        spacing={4}
        pb={7}
      >
        <Button
          leftIcon={<ArrowBackIcon />}
          width={['100%', '50%', '30%']}
          height={'14'}
          minW={'30%'}
          fontSize={'sm'}
          paddingInlineStart={'6'}
          paddingInlineEnd={'6'}
          onClick={prevStep}
          transitionProperty={'common'}
          transitionDuration={'normal'}
          background={'gray.100'}
          disabled={!ages || !genders}
        >
          Return
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          width={['100%', '50%', '30%']}
          height={'14'}
          minW={'30%'}
          fontSize={'sm'}
          paddingInlineStart={'6'}
          paddingInlineEnd={'6'}
          onClick={nextStep}
          transitionProperty={'common'}
          transitionDuration={'normal'}
          background={'#1F2845'}
          color={'white'}
        >
          Next
        </Button>
      </Stack>
    </div>
  )
}

export default PersonalDetails

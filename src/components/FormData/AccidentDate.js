import React, { useState } from 'react'
import { Stack, Button } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

import { UsaState } from '../../Constant/StateUSA'
import SelectComponent from '../SelectComponent.js/SelectComponent'
import { calculate, updateDates } from '../../Redux/action/injury'
import { useDispatch, useSelector } from 'react-redux'

function AccidentDate(props) {
  const allDetails = useSelector((state) => state.allDetails)
  const { accidentState, accidentDate } = allDetails.date
  const dispatch = useDispatch()
  const nextStep = (e) => {
    props.nextStep()
  }
  const prevStep = (e) => {
    e.preventDefault()
    props.prevStep()
  }
  const handleState = (v) => {
    console.log(v.value)

    dispatch(updateDates(v.value, accidentDate))
    dispatch(calculate())
  }
  const handleDate = (v) => {
    console.log(v.target.value)
    dispatch(updateDates(accidentState, v.target.value))
    dispatch(calculate())
  }

  return (
    <div>
      <SelectComponent
        label={'Where did accident occur?'}
        subLabel={'Select state'}
        type={'select'}
        options={UsaState}
        placeholder={'-'}
        update={handleState}
        currentOption={UsaState.filter(
          (option) => option.value === accidentState,
        )}
      />
      <SelectComponent
        label={'When did accident occur?'}
        subLabel={'Select date'}
        type={'date'}
        placeholder={'-'}
        update={handleDate}
        currentOption={accidentDate}
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

export default AccidentDate

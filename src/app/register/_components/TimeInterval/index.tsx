'use client'

import { Button, Checkbox, MultiStep, Text, TextInput } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useFieldArray, useForm } from 'react-hook-form'
import z from 'zod'

import { getWeekDays } from '@/app/_utils/get-week-days'

import {
  TimeIntervalBox,
  TimeIntervalContainer,
  TimeIntervalDay,
  TimeIntervalInputs,
  TimeIntervalItem,
  TimeIntervalsContainer,
} from './styles'

const timeIntervalsFormSchema = z.object({})

export function TimeInterval() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeIntervals() {}

  return (
    <TimeIntervalContainer>
      <MultiStep size={4} currentStep={3} />

      <TimeIntervalBox
        as="form"
        onSubmit={handleSubmit(handleSetTimeIntervals)}
      >
        <TimeIntervalsContainer>
          {fields.map((field, index) => {
            return (
              <TimeIntervalItem key={field.id}>
                <TimeIntervalDay>
                  <Checkbox />
                  <Text>{weekDays[field.weekDay]}</Text>
                </TimeIntervalDay>
                <TimeIntervalInputs>
                  <TextInput
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    type="time"
                    step={60}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </TimeIntervalInputs>
              </TimeIntervalItem>
            )
          })}
        </TimeIntervalsContainer>

        <Button type="submit">
          <>
            Próximo passo
            <ArrowRight />
          </>
        </Button>
      </TimeIntervalBox>
    </TimeIntervalContainer>
  )
}

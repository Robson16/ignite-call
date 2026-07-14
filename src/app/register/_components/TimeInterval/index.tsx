'use client'

import { Button, Checkbox, MultiStep, Text, TextInput } from '@beryl-ui/react'
import { ArrowRight } from 'phosphor-react'

import {
  TimeIntervalBox,
  TimeIntervalContainer,
  TimeIntervalDay,
  TimeIntervalInputs,
  TimeIntervalItem,
  TimeIntervalsContainer,
} from './styles'

export function TimeInterval() {
  return (
    <TimeIntervalContainer>
      <MultiStep size={4} currentStep={3} />

      <TimeIntervalBox as="form">
        <TimeIntervalsContainer>
          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Quarta-feira</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Quinta-feira</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Sexta-feira</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Sábado</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>

          <TimeIntervalItem>
            <TimeIntervalDay>
              <Checkbox />
              <Text>Domingo</Text>
            </TimeIntervalDay>
            <TimeIntervalInputs>
              <TextInput type="time" step={60} />
              <TextInput type="time" step={60} />
            </TimeIntervalInputs>
          </TimeIntervalItem>
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

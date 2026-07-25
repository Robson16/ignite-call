import { Button, Text, TextArea, TextInput } from '@beryl-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'

import { ConfirmForm, FormActions, FormHeader, FormHeaderText } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <FormHeaderText>
          <CalendarBlank /> 25 de Julho de 2026
        </FormHeaderText>
        <FormHeaderText>
          <Clock /> 18:00h
        </FormHeaderText>
      </FormHeader>

      <Text as="label">
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="Seu nome" />
      </Text>

      <Text as="label">
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput placeholder="johndoe@example.com" />
      </Text>

      <Text as="label">
        <Text size="sm">Observações</Text>
        <TextArea />
      </Text>

      <FormActions>
        <Button type="button" variant="tertiary">
          <>Cancelar</>
        </Button>
        <Button type="submit">
          <>Confirmar</>
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}

import { RegisterForm } from './_components/RegisterForm'
import {
  RegisterContainer,
  RegisterHeader,
  RegisterHeaderText,
  RegisterHeaderTitle,
} from './styles'

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <RegisterHeaderTitle as="strong">
          Bem-vindo ao Ignite Call!
        </RegisterHeaderTitle>
        <RegisterHeaderText>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </RegisterHeaderText>
      </RegisterHeader>

      <RegisterForm />
    </RegisterContainer>
  )
}

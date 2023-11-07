import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import perfil from '../../assets/image/perfil.jpg'
import * as S from './styles'
import { cadastrar } from '../../store/reducers/contatos'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, telefone, email }))
    navigate('/')
  }

  return (
    <S.AddContainer>
      <form onSubmit={adicionarContato}>
        <S.FormContainer>
          <S.AddImage src={perfil} alt="Contact" />
          <S.AddInput
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome do contato"
            required
          />
          <S.AddInput
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            type="number"
            placeholder="Telefone"
            required
          />
          <S.AddInput
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            type="text"
            placeholder="E-mail"
            required
          />
          <S.AddButton type="submit">Salvar</S.AddButton>
          <S.RemoveButton type="submit" onClick={() => navigate('/')}>
            Cancelar
          </S.RemoveButton>
        </S.FormContainer>
      </form>
    </S.AddContainer>
  )
}

export default Cadastro

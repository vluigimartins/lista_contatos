import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import * as S from './styles'

import { cadastrar } from '../../store/reducers/contatos'
import perfil from '../../assets/image/perfil.jpg'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [imagemPerfil, setImagemPerfil] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({ nome, telefone, email, imagemPerfil: imagemPerfil || perfil })
    )
    navigate('/')
  }

  return (
    <S.AddContainer>
      <form onSubmit={adicionarContato}>
        <S.FormContainer>
          <S.AddImage src={imagemPerfil || perfil} alt="Foto do contato" />
          <S.AddInput
            type="text"
            value={imagemPerfil}
            onChange={(evento) => setImagemPerfil(evento.target.value)}
            placeholder="URL da imagem do contato"
          />
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
          <S.CancelButton type="button" onClick={() => navigate('/')}>
            Cancelar
          </S.CancelButton>
        </S.FormContainer>
      </form>
    </S.AddContainer>
  )
}

export default Cadastro

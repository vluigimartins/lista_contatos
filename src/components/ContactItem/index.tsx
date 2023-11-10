import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { remover } from '../../store/reducers/contatos'
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineClose,
  AiFillEdit
} from 'react-icons/ai'

import * as S from './styles'

import perfil from '../../assets/image/perfil.jpg'

import Contato from '../../models/Contato'

export type Props = Contato

const ContactItem = ({ nome, telefone, email, id, imagemPerfil }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneContato, seTelefoneContato] = useState('')
  const [emailContato, setEmailContato] = useState('')

  useEffect(() => {
    if (telefone.length > 0) seTelefoneContato(telefone)
  }, [telefone])

  useEffect(() => {
    if (email.length > 0) setEmailContato(email)
  }, [email])

  return (
    <>
      <S.ContactContainer>
        <S.ContactImage src={imagemPerfil || perfil} alt="Contact" />
        <S.DataContainer>
          <div className="container-dados">
            <S.ContactName>{nome}</S.ContactName>
            <div className="container-telefone">
              <AiFillPhone size={18} style={{ marginRight: '8px' }} />
              <S.ContactButton
                disabled={!estaEditando}
                type="number"
                value={telefoneContato}
                onChange={(evento) => seTelefoneContato(evento.target.value)}
              />
            </div>
            <div className="container-email">
              <AiFillMail size={18} style={{ marginRight: '8px' }} />
              <S.EmailButton
                disabled={!estaEditando}
                value={emailContato}
                onChange={(evento) => setEmailContato(evento.target.value)}
              />
            </div>
          </div>
        </S.DataContainer>
        <S.RemoveButton onClick={() => dispatch(remover(id))}>
          <AiOutlineClose size={25} />
        </S.RemoveButton>
        <S.EditButton onClick={() => setEstaEditando(true)}>
          <AiFillEdit size={25} />
        </S.EditButton>
      </S.ContactContainer>
    </>
  )
}

export default ContactItem

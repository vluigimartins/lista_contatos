import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiFillMail, AiFillPhone, AiOutlineClose } from 'react-icons/ai'
import perfil from '../../assets/image/perfil.jpg'
import { remover } from '../../store/reducers/contatos'

import * as S from './styles'
import Contato from '../../models/Contato'

export type Props = Contato

const ContactItem = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      <S.ContactContainer>
        <S.ContactImage src={perfil} alt="Contact" />
        <S.DataContainer>
          <div>
            <h3 onClick={() => navigate('/novo')}>{nome}</h3>
            <S.ContactButton>
              <AiFillPhone size={18} style={{ marginRight: '8px' }} />
              {telefone}
            </S.ContactButton>
            <S.EmailButton>
              <AiFillMail size={18} style={{ marginRight: '8px' }} />
              {email}
            </S.EmailButton>
          </div>
        </S.DataContainer>
        <S.RemoveButton onClick={() => dispatch(remover(id))}>
          <AiOutlineClose size={25} />
        </S.RemoveButton>
      </S.ContactContainer>
    </>
  )
}

export default ContactItem

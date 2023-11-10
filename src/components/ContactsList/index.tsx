import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { AiOutlineUserAdd, AiOutlineSearch } from 'react-icons/ai'

import * as S from './styles'

import ContactItem from '../ContactItem'

const ContactsList = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const pesquisaContatos = () => {
    return itens.filter((item) => item.nome.toLowerCase().search(termo) >= 0)
  }

  return (
    <S.Container>
      <S.Title>Contatos</S.Title>
      <div className="container-pesquisa">
        <AiOutlineSearch size={22} style={{ marginLeft: '8px' }} />
        <S.SearchInput
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </div>
      <br />
      <div className="container-option">
        <Link to="/novo">
          <S.ButtonAdd>
            <AiOutlineUserAdd size={18} style={{ marginRight: '8px' }} />
            Adicionar
          </S.ButtonAdd>
        </Link>
      </div>
      <S.ContactsContainer>
        {pesquisaContatos().map((contato) => (
          <ContactItem
            key={contato.id}
            nome={contato.nome}
            telefone={contato.telefone}
            email={contato.email}
            id={contato.id}
            imagemPerfil={contato.imagemPerfil}
          />
        ))}
      </S.ContactsContainer>
    </S.Container>
  )
}

export default ContactsList

import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { AiOutlineUserAdd } from 'react-icons/ai'

import ContactItem from '../ContactItem'

import * as S from './styles'
import { alterarTermo } from '../../store/reducers/filtro'
import { Link } from 'react-router-dom'

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
      <S.Label>Pesquisar:</S.Label>
      <S.SearchInput
        type="text"
        placeholder="Buscar"
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
      />
      <S.Label>Filtrar:</S.Label>
      <br />
      <div className="container-option">
        <S.FilterSelect>
          <option value="todos">Todos</option>
          <option value="alfabetica">Ordem Alfabética</option>
        </S.FilterSelect>
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
          />
        ))}
      </S.ContactsContainer>
    </S.Container>
  )
}

export default ContactsList

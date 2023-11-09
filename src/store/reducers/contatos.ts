import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'William José',
      telefone: '67987654123',
      email: 'willianjm@outlook.com',
      imagemPerfil:
        'https://cdn.pixabay.com/photo/2015/09/18/00/24/robin-944887_640.jpg'
    },
    {
      id: 2,
      nome: 'Armindo Freitas',
      telefone: '41998568745',
      email: 'armindofs@gmail.com',
      imagemPerfil:
        'https://cdn.pixabay.com/photo/2016/07/22/16/54/portrait-1535266_640.jpg'
    },
    {
      id: 3,
      nome: 'Maria Alice',
      telefone: '45981657489',
      email: 'maria_alice@gmail.com',
      imagemPerfil:
        'https://cdn.pixabay.com/photo/2021/06/20/20/31/woman-6351965_640.jpg'
    },
    {
      id: 4,
      nome: 'Afonso Rodrigues',
      telefone: '44951657449',
      email: 'arodrugues@gmail.com',
      imagemPerfil: null
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id != action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoexiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoexiste) {
        alert('Um contato já existe com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer

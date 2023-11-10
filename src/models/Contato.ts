class Contato {
  nome: string
  telefone: string
  email: string
  id: number
  imagemPerfil: string | ''

  constructor(
    nome: string,
    telefone: string,
    email: string,
    id: number,
    imagemPerfil: string | ''
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.imagemPerfil = imagemPerfil
  }
}

export default Contato

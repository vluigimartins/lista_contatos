class Contato {
  nome: string
  telefone: string
  email: string
  id: number
  imagemPerfil: string | null

  constructor(
    nome: string,
    telefone: string,
    email: string,
    id: number,
    imagemPerfil: string | null = null
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.id = id
    this.imagemPerfil = imagemPerfil
  }
}

export default Contato

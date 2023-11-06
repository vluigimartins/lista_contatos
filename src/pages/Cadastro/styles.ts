import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const AddContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 800px;
  margin: 120px auto;
  background-color: ${variaveis.azul};
  padding: 50px;
  border-radius: 55px;
`

export const FormContainer = styled.div`
  width: 650px;
  text-align: center;
`

export const AddImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 25px;
`

export const AddInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 15px;
`

export const AddButton = styled.button`
  font-size: 16px;
  margin: 15px 60px;
  padding: 13px;
  width: 120px;
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  border-radius: 25px;
`

export const RemoveButton = styled(AddButton)`
  background-color: ${variaveis.vermelho};
`

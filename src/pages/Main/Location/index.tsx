import { useState, useEffect } from 'react'

import { Container } from './styles'

import { currencyFormat } from '../../../helpers/currencyFormat'

import getAddress from '../../../services/api'
import { CepData } from '../../../interfaces/ProductData'

export default function Locationn() {
  const [inputCep, setInputCep] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [cep, setCep] = useState<CepData>({} as CepData)

  if (cep.uf === 'SP' || cep.uf === 'RJ') {
    cep.price = 25
  }

  async function handleCepChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const cepInformado = inputCep
      const cepRecebido = await getAddress(cepInformado)
      setCep(cepRecebido)
      setInputCep('')
      setError(false)
    } catch (error) {
      setInputCep('')
      setError(true)
    }
  }

  useEffect(() => {
    if (cep.uf === 'SP' || cep.uf === 'RJ') {
      setCep((prevCep) => ({
        ...prevCep,
        price: 25,
      }))
    }
  }, [])

  return (
    <Container>
      <form onSubmit={handleCepChange}>
        <label htmlFor=''>Informe um cep: </label>
        <input name='cep' value={inputCep} onChange={(e) => setInputCep(e.target.value)} />
      </form>

      {Object.keys(cep).length > 0 && !error ? (
        <ul>
          <li>
            <p>{cep.logradouro}</p>
          </li>
          <li>
            <p>{cep.bairro}</p>
          </li>
          <li>
            <p>{cep.localidade}</p>
          </li>
          <li>
            <p>{cep.cep}</p>
          </li>
          <li>
            <p>{cep.uf}</p>
          </li>
          <li>
            <p>{cep.ddd}</p>
          </li>
          {cep.uf === 'SP' || cep.uf === 'RJ' ? (
            <li>
              <p>
                O frete para {cep.uf} é {currencyFormat(cep?.price)}
              </p>
            </li>
          ) : null}
        </ul>
      ) : null}
    </Container>
  )
}

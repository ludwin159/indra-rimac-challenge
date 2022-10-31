import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import Button from '../common/Button'
import Checkbox from '../common/Checkbox'
import Input from '../common/Input'
import Select from '../common/Select'

export const FormLogin = () => {
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState<boolean>(false)
  const [typeDocument, setTypeDocument] = useState<string>('dni')
  const [dni, setDni] = useState<string>('')
  const [cellPhone, setCellPhone] = useState<string>('')
  const [placa, setPlaca] = useState<string>('')

  return (
    <form className="Form" onSubmit={() => navigate('/build-plan')}>
      <fieldset className="Form__fieldset">
        <legend className="Form__legend">Déjanos tus datos</legend>
        <div className="Form__select">
          <Select
            value={typeDocument}
            onChange={(ev) => setTypeDocument(ev.target.value)}
            id="document"
            options={[{ value: 'dni', text: 'DNI' }]}
          />
          <Input
            id="dni"
            label="Nro. de doc"
            onChange={(ev) => setDni(ev.target.value)}
            value={dni}
          />
        </div>
        <Input
          id="celular"
          label="Celular"
          onChange={(ev) => setCellPhone(ev.target.value)}
          value={cellPhone}
        />
        <Input
          id="placa"
          label="Placa"
          onChange={(ev) => setPlaca(ev.target.value)}
          value={placa}
        />
        <Checkbox {...{ isActive, setIsActive }}>
          Acepto la{' '}
          <Link to="#">Política de Protección de Datos Personales</Link> y{' '}
          <Link to="#">los Términos y Condiciones.</Link>
        </Checkbox>

        <Button type="submit">cotízalo</Button>
      </fieldset>
    </form>
  )
}

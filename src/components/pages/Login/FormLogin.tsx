import { FormEvent, useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { addUser } from '../../../redux/actions/user.actions'
import useGetFetch from '../../../hooks/useGetFetch'

import { isDNI, isPhone, isValidPlaca } from '../../../utils/validations'
import {Button, Checkbox, Input, Select} from '../../common'
import { IInputValid } from '../../components'
import { randomNumber } from '../../../utils/functions'


const FormLogin = () => {
  const initialValue: IInputValid = {
    value: '', isValid: null
  }
  const [dni, setDni] = useState<IInputValid>(initialValue)
  const [cellPhone, setCellPhone] = useState<IInputValid>(initialValue)
  const [placa, setPlaca] = useState<IInputValid>(initialValue)
  const [isActive, setIsActive] = useState<boolean>(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [infoUser, loading ] = useGetFetch(`/users/${randomNumber(1, 10)}`)

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, email} = infoUser;
    const infoToSave = {name: name.split(' ')[0], email, placa: placa.value};
    
    dispatch(addUser(infoToSave))
    window.localStorage.setItem('user', JSON.stringify(infoToSave))
    if (!loading) navigate('/build-plan')
  }

  return (
    <form className="Form" onSubmit={sendData}>
      <fieldset className="Form__fieldset">
        <legend className="Form__legend">Déjanos tus datos</legend>
        <div className="Form__select">
          <Select
            value='dni'
            id="document"
            options={[{ value: 'dni', text: 'DNI' }]}
          />
          <Input
            id="dni"
            label="Nro. de doc"
            state={dni}
            setState={setDni}
            maxLength={8}
            required={true}
            validator={isDNI(dni.value)}
            textError='El dni debe tener al menos 8 números'
          />
        </div>
        <Input
          id="celular"
          label="Celular"
          state={cellPhone}
          setState={setCellPhone}
          required={true}
          validator={isPhone(cellPhone.value)}
          textError='El celular es obligatorio no es necesario (+51)'
        />
        <Input
          id="placa"
          label="Placa"
          state={placa}
          setState={setPlaca}
          required={true}
          validator={isValidPlaca(placa.value)}
          textUppercase
          textError='Ingrese una placa válida ejem: AEF717'
          maxLength={6}
        />
        <Checkbox {...{ isActive, setIsActive }}>
          Acepto la{' '}
          <Link to="#">Política de Protección de Datos Personales</Link> y{' '}
          <Link to="#">los Términos y Condiciones.</Link>
        </Checkbox>

        <Button disabled={!isActive || loading} type="submit">cotízalo</Button>
      </fieldset>
    </form>
  )
}

export default FormLogin

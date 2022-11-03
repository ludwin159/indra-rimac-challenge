const reg_phone = /^[9][0-9]{8}$/
const reg_DNI = /^[0-9]{8}$/
const reg_placa = /[a-zA-Z]{3}[0-9]{2}[a-zA-Z0-9]/


export const isPhone = (phone: string) => reg_phone.test(phone)
export const isDNI = (dni: string) => reg_DNI.test(dni)
export const isValidPlaca = (placa: string) => reg_placa.test(placa)
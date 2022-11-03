
export const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

export const goBack = () => window.history.back()

export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
import {
  useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch
} from 'react'

interface IUseSelectedClasse {
  selectedClasse: string
  setSelectedClasse: Dispatch<SetStateAction<string>>
}

const Context = createContext<IUseSelectedClasse>({} as IUseSelectedClasse)

export const SelectedClasseProvider = ({ children }: any) => {
  const [selectedClasse, setSelectedClasse] = useState('Turma 1º A')

  return (
    <Context.Provider value={{ selectedClasse, setSelectedClasse }}>
      {children}
    </Context.Provider>
  )
}

export const useSelectedClasse = () => {
  const context = useContext(Context)

  return context
}

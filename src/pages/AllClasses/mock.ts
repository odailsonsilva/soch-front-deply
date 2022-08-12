import ImageIcon from 'assets/images/classes.svg'
import PlanningIcon from 'assets/images/planning.svg'
import { ICardNavitationWithImage } from 'components'
import { AULAS } from 'navigation/constants'

export const mock: ICardNavitationWithImage[] = [
  {
    src: ImageIcon,
    name: 'Aulas',
    to: `/aulas`,
    background: 'yellow'
  },
  {
    src: PlanningIcon,
    name: 'Planejamento',
    to: `/aulas`,
    background: 'violet'
  }
]

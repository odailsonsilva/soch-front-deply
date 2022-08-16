import ImageIcon from 'assets/images/classes.svg'
import PlanningIcon from 'assets/images/planning.svg'
import ClassesMobileIcon from 'assets/images/classes-mobile.svg'
import PlanningMobileIcon from 'assets/images/planning-mobile.svg'
import { ICardNavitationWithImage } from 'components'

export const mock: ICardNavitationWithImage[] = [
  {
    src: ImageIcon,
    name: 'Aulas',
    to: `/aulas`,
    background: 'yellow',
    imgMobile: ClassesMobileIcon
  },
  {
    src: PlanningIcon,
    name: 'Planejamento',
    to: `/aulas`,
    background: 'violet',
    imgMobile: PlanningMobileIcon
  }
]

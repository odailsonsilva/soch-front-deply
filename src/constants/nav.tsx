import AnalyticsIcon from 'assets/images/icons/analytics.svg'
import MultiUser from 'assets/images/icons/multi-user.svg'

export type NavData = {
  to: string
  name: string
  icon?: string
  iconLib?: React.ReactElement
}

export const nav_link: NavData[] = [
  {
    to: '/acompanhamento',
    name: 'Acompanhamento',
    icon: AnalyticsIcon
  },
  {
    to: '/',
    name: 'Turmas',
    icon: MultiUser
  }
]

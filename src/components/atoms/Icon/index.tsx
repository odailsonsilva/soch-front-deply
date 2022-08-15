import { ReactSVG } from 'react-svg'
import * as icons from './Icons'

import * as S from './styles'

type IconType = 'MultiUser'

export interface IIconParams {
  size?: number
  color?: string
  icon: IconType
}

export const Icon = ({ size = 24, color = '#7626EA', icon }: IIconParams) => (
  <S.Wrapper size={size} color={color}>
    <ReactSVG src={icons[icon]} wrapper="div" />
  </S.Wrapper>
)

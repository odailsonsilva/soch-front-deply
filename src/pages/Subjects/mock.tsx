import { IButtonActionParams } from 'components/atoms/ButtonAction'
import { ReactSVG } from 'react-svg'
import CheckIcon from 'assets/images/icons/check-circle.svg'

export const mock: IButtonActionParams[] = [
  {
    label: 'Sistema decimal',
    iconLeft: <ReactSVG src={CheckIcon} />,
    iconTypeRight: 'next',
    variantIcon: 'gray'
  },
  {
    label: 'Multiplicação e divisão de frações',
    iconLeft: <ReactSVG src={CheckIcon} />,
    iconTypeRight: 'next',
    variantIcon: 'gray'
  },
  {
    label: 'Multiplicação e divisão de frações',
    iconLeft: <ReactSVG src={CheckIcon} />,
    iconTypeRight: 'next',
    variantIcon: 'gray'
  },
  {
    label: 'Operações Básicas',
    iconLeft: <ReactSVG src={CheckIcon} />,
    iconTypeRight: 'next',
    variantIcon: 'gray'
  },
  {
    label: 'Sistema decimal',
    iconLeft: <ReactSVG src={CheckIcon} />,
    iconTypeRight: 'next',
    variantIcon: 'gray'
  }
]

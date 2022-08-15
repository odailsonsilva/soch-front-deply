import { IButtonActionParams } from 'components/atoms/ButtonAction'
import { ReactSVG } from 'react-svg'
import MultiUser from 'assets/images/icons/multi-user.svg'

export const mock: IButtonActionParams[] = [
  {
    label: '1º A',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'violet',
    value: 'Turma 1º A'
  },
  {
    label: '1º B',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'violet',
    value: 'Turma 1º B'
  },
  {
    label: '1º C',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'violet',
    value: 'Turma 1º C'
  },
  {
    label: '2º A',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'yellow',
    value: 'Turma 2º A'
  },
  {
    label: '2º B',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'yellow',
    value: 'Turma 2º B'
  },
  {
    label: '2º C',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'yellow',
    value: 'Turma 2º C'
  },
  {
    label: 'Terceirão A',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'pink',
    value: 'Turma 3º A'
  },
  {
    label: 'Terceirão B',
    description: 'Turma',
    iconLeft: <ReactSVG src={MultiUser} />,
    iconTypeRight: 'next',
    variantIcon: 'pink',
    value: 'Turma 3º B'
  }
]

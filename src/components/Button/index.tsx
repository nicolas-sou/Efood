import { ButtonContainer, ButtonPopup } from './styles'

type Props = {
  type: 'Button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, onClick, children }: Props) => {
  if (type === 'Button') {
    return (
      <>
        <ButtonContainer type="button" title="title" onClick={onClick}>
          {children}
        </ButtonContainer>
        <ButtonPopup type="button" title="title" onClick={onClick}>
          {children}
        </ButtonPopup>
      </>
    )
  }
}

export default Button

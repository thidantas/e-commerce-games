import Empty from 'components/Empty'

import * as S from './styles'

const NotFound = () => (
  <S.WrapperContainer>
    <Empty
      title="404: Not found"
      description="Ops... this page does not exist. Go back to the store and enjoy our game offers!"
      hasLink
    />
  </S.WrapperContainer>
)

export default NotFound

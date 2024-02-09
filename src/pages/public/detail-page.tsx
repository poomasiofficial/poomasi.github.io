import { useToastClear } from '@hooks'

import styled from '@emotion/styled'
import TextareaAutosize from 'react-textarea-autosize'
import { useParams } from 'react-router-dom'
import { profileDataList } from './components'

export function DetailPage() {
  useToastClear()
  const { id } = useParams()

  const profileData = profileDataList.find((profileData) => profileData.id === id)

  return (
    <Container>
      <PageContainer>
        <PageContent>
          <Header>
            <ProfilePictureWrapper>
              <ProfileImage src={profileData?.image} alt={'profile-image'} />
            </ProfilePictureWrapper>
            <HeaderBody>
              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <HeaderName>{profileData?.name}</HeaderName>
                <HeaderField>{profileData?.field}</HeaderField>
              </div>
              <HeaderJob>{profileData?.company1 + ' ' + profileData?.job1}</HeaderJob>
            </HeaderBody>
          </Header>

          <div style={{ marginTop: '30px', fontWeight: 'bold', fontSize: '20px' }}>자기소개</div>
          <Description readOnly value={'안녕하세요.\n저는 개발자입니다.\n반가워용. ㅎㅎ~'} />
          <Body>---질의응답 테이블---</Body>
        </PageContent>
      </PageContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
`
const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 5% 0 5%;
  /* background-color: pink; */
`
const PageContent = styled.div`
  width: 1200px;
  margin-bottom: 50px;
`

const Header = styled.div`
  width: 100%;

  display: flex;
  /* background-color: green; */
`

const ProfilePictureWrapper = styled.div`
  display: flex;

  width: 140px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const HeaderBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 30px;
  padding-top: 40px;
  /* background-color: blue; */

  @media (max-width: 520px) {
    margin-left: 13px;
  }
`
const HeaderName = styled.div`
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 520px) {
    font-size: 30px;
  }
`
const HeaderField = styled.div`
  margin-left: 10px;
  font-weight: bold;
  font-size: 30px;
  color: var(--gray-color);

  @media (max-width: 520px) {
    font-size: 23px;
  }
`
const HeaderJob = styled.div`
  font-size: 20px;
  @media (max-width: 520px) {
    font-size: 16px;
  }
`

const Description = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 10px;
  border: none;
  outline: none;
  resize: none;
  font-size: 17px;
  /* background-color: green; */
`

const Body = styled.div`
  margin-top: 30px;
  width: 100%;
`

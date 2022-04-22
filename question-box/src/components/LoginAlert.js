import { Icon, Block, Notification, Section, Box, Heading, Card, Media, Content, Image, Button } from 'react-bulma-components';



export const LoginAlert= ({ username }) => {

if (!username) {

  return (    

  <Block>
    <Notification color="danger" mb="3">
      <strong>Please register and log in to utilize this feature.</strong> 
    </Notification>
  </Block>
  )
}
}

export default LoginAlert
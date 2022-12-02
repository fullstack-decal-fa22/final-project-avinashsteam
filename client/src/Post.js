 import Comments from "./Comments"
 import { Box, Text } from '@chakra-ui/react'


const Post = ({ title, comments, id, selectedFile }) => {
  return (
  <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <Box borderRadius="lg" padding="100px" marginBottom="30px"bg='#FDFD96' w='100%' p={4} color='white'>
        <Text color={"black"} fontSize="xl" fontFamily={"serif"}>
          {title}
        </Text>
    <img src={selectedFile} />
    <Comments postId={id} comments={comments} />
    </Box>
  </div>
)}

export default Post;

import {useState} from "react";
import axios from "axios";
import { Box, Button, Input, Text } from '@chakra-ui/react'

const Comments = ({ postId, comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = () => {
    console.log(newComment)
    // Un-comment the lines below to complete your solution
    // ====================
   axios.post(`http://localhost:3000/post/${postId}/comment`, { newComment }).then((res) => {
     setComments(res.data.comments);
     setNewComment('')
   });
  };

  return (
  
    <div >
      <Box padding={"10px"} borderRadius='lg' bg='#C8EDF7' w='100%' p={4} color='white'>
        {comments && comments.map((comment, i) => (
        <div key={i + comment}>
        <Text color={'black'}>
          {comment}
        </Text>
        </div>
      ))}
      <div>
        <Input color={'black'} bg = "white" placeholder='Comment' value={newComment} onChange={e => setNewComment(e.target.value)} padding-bottom="10px"/>
      </div>
      <Button bg='#216583' color="white" onClick={handleSubmitComment} border marginTop='10px' >Submit</Button>
      </Box>
      
    </div>
  )
}

export default Comments;
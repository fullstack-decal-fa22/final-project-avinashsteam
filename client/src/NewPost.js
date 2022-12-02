import {useState} from "react";
import axios from "axios";
import { Box, Button, Input } from '@chakra-ui/react'


const NewPost = ({newFunc}) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [selectedFile, setSelectedFile] = useState('');

  // const fileUploadHandler = () => {
    //const fd = new FormData();
    //fd.append('image', selectedFile, selectedFile.name);
  //}

  const onFileChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }

  const onSubmit = () => {
    console.log({
      id,
      title,
      selectedFile
    })

    axios.post("http://localhost:3000/post", {id, title, selectedFile}).then(newFunc);
  }

  return (
  <div>  
    <Box  borderRadius="lg" padding="100px" marginBottom="30px"bg='#9BCBE3' w='100%' p={4}>
    <div>
      {/* <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} /> */}
      <Input marginBottom="10px" bg = "white" type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)}></Input>
    </div>
    <div>
      <Input type="text" bg = "white" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></Input>
      {/* <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /> */}
    </div>
    <div>
      <input type="file" onChange={(event) => onFileChange(event)}/>
      <img src={selectedFile} />
    </div>
    {/* <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button> */}
    <Button marginTop={"10px"} bg='#216583' color="white" onClick={onSubmit} > Submit</Button>
    </Box>
    </div>
  )
}

export default NewPost;

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Stack, Box, Button, ButtonGroup } from '@chakra-ui/react'
import Header from "./Header";



// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');





function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
    }

    const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
    }

    const onSubmit = () => {
    axios.post('http://localhost:4000/user/login', {username, password}).then(res => console.log(res));
    // add in postman json object to check if it's working
    }
    
    return (
        <div style={{backgroundColor:'#C8EDF7'}}>
            <Header></Header>
            <Box  bg='#C8EDF7' w="100%" display="flex" justifyContent="center" alignItems="center" paddingTop='10%' paddingBottom='100%'>
            <Box  bg='#9BCBE3' display="flex" w='500px' h='350px' justifyContent="center" alignItems="center" >
            <Stack spacing={3} w="25%" align = 'center'>
            {/* <b >Login</b>
            <Input placeholder='Login' size='md' w='300px' bg='white' />
            <Input placeholder='Password' size='md' w='300px' bg='white' />
            <Button w="50%" color='#FFFFFF' bg="#216583" >Login</Button> */}
            <b >Login - Welcome back!</b>
            <Input placeholder='Login' size='md' w='300px' bg='white' onChange={handleUsername} />
            <Input placeholder='Password' size='md' w='300px' bg='white' onChange={handlePassword} />
            <Button w="50%" color='#FFFFFF' bg="#216583" onClick={onSubmit}>Login</Button>
            </Stack>
            </Box>
            </Box>
        </div>
        
    );
}export default Login;

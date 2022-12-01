import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Stack, Box, Button, ButtonGroup } from '@chakra-ui/react'
import Header from "./Header";



function Register(){
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
        axios.post('http://localhost:3000/user/register', {username, password}).then(res => console.log(res));
        // add in postman json object to check if it's working
        }

    return (
        <div>
            <Header></Header>
            <Box  bg='#C8EDF7' w="100%" display="flex" justifyContent="center" alignItems="center" paddingTop='10%' paddingBottom='100%'  >
            <Box  bg='#9BCBE3' display="flex" w='500px' h='350px' justifyContent="center" alignItems="center" >
            <Stack spacing={3} w="25%" align = 'center'>
            <b >Register</b>
            <Input placeholder='Create Username' size='md' w='300px' bg='white' onChange={handleUsername}/>
            <Input placeholder='Create Password' size='md' w='300px' bg='white' onChange={handlePassword}/>
            <Button w="50%" color='#FFFFFF' bg="#216583" onClick={onSubmit}>Login</Button>
            </Stack>
            </Box>
            </Box>
        </div>
        
        
    );
}export default Register;

/* laughter 1 */



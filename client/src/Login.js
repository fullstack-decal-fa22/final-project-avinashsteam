import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input, Stack, Box, Button, ButtonGroup } from '@chakra-ui/react'
import Header from "./Header";



function Login(){
    return (
        <div style={{backgroundColor:'#C8EDF7'}}>
            <Header></Header>
            <Box  bg='#C8EDF7' w="100%" display="flex" justifyContent="center" alignItems="center" paddingTop='10%' paddingBottom='100%'>
            <Box  bg='#9BCBE3' display="flex" w='500px' h='350px' justifyContent="center" alignItems="center" >
            <Stack spacing={3} w="25%" align = 'center'>
            <b >Login</b>
            <Input placeholder='Login' size='md' w='300px' bg='white' />
            <Input placeholder='Password' size='md' w='300px' bg='white' />
            <Button w="50%" color='#FFFFFF' bg="#216583" >Login</Button>
            </Stack>
            </Box>
            </Box>
        </div>
        
    );
}export default Login;

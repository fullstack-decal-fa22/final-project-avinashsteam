import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, Stack, Image } from '@chakra-ui/react'
import bear from "./bear.png"

function Header(){
    return (
        <Stack direction='row' spacing={4} fontFamily='Roboto'  align='center' bg='#FFFFFF'>
        <Box fontSize="30px" bg='#FFFFFF' fontStyle='normal' w='100%' p={4} color='#000000'>
            <Stack direction='row'>
                <p>BearPrep</p>
                <img src={bear} height='40px' width='40px'></img>
            </Stack>

        </Box>
        <Stack direction='row' spacing={4} align='center' >
            <a href='/'>
                <Button color ='#00509D' variant='ghost'>
                    Home
                </Button>
            </a>
            <a href='/posts'>
                <Button color ='#00509D' variant='ghost'>
                    Posts
                </Button>
            </a>
            <a href='/login'>
                <Button color ='#00509D' variant='ghost'>
                    Login
                </Button> 
            </a>
            <a href='/register'>
                <Button color ='#00509D' variant='ghost'>
                    Register
                </Button>
            </a>
            
            </Stack>
        </Stack>
)} export default Header;
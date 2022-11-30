import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, Stack, Image, Text, Flex, Square } from '@chakra-ui/react'
import '../src/Sather.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from "./Header";
import icon from "./computer.png"


function Sather(){
    return (
        <div>
           <Header></Header>
           <Box  bg='#C8EDF7' w="100%" display="flex" justifyContent="center" alignItems="center" paddingTop='10%' paddingBottom='100%'  >
           
           <Flex color='white'>
  
            <Square flex='1' size='150px'>
                <img src={icon}></img>
            </Square>
            
            {/* trying to implement a box inbetween*/}
            <Square flex='1' size='30px'>
            </Square>

            <Square flex='1' size='150px'>
                <Stack spacing={3}>
                    <Text fontSize='3xl' color='#000000'>BearPrep</Text>
                    <Text fontSize='sm' color='#049E9F'>Streamline Collabration</Text>
                <Text fontSize='xl' color='#000000'>Worried about how to study for exams collaboratively? Work together with your peers to solve exercises and problem sets here!</Text>
                </Stack>
            </Square>
            
            </Flex>
            </Box>
        {/* <figure className="position-relative">
            <img  width= "100%" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sather_Gate_at_University_of_California%2C_Berkeley%2C_California_LCCN2013633500_%28edited%29.jpg/1200px-Sather_Gate_at_University_of_California%2C_Berkeley%2C_California_LCCN2013633500_%28edited%29.jpg' alt='tower' className="img-fluid" />
            <figcaption>
                Welcome to the Decentralized Panel for Berkeley Students
            </figcaption>
        </figure>  */}
        </div>
        
       
    );
} export default Sather;
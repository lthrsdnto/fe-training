import { Badge,Flex,Spacer,Text } from "@chakra-ui/react";
import React from "react";
import { Pokemon } from "../types";

export const Card: React.FC<Pokemon> = ({name, hp, mana, skills, description}) => {
    return (
        <div className="card">
            <div className="cardone">
            <Text ml={2} fontSize='xl' fontWeight='bold'>{name}</Text>
                <img className="balbasaur" src="https://images.saymedia-content.com/.image/t_share/MTc2Mjk3OTE1NzAxMDExNjI5/pokemon-bulbasaur-nicknames.jpg" alt="" />
                <Flex mx={2}>
                    <Badge variant='solid' colorScheme='green'>HP {hp}</Badge>
                    <Spacer />
                <Badge variant='solid' colorScheme='blue'>MANA {mana}</Badge>
                </Flex>

                <Text fontSize='xs' fontWeight='bold' py={ 2} px={4}>{description}</Text>

            
            <ul>
                {skills.map(skill => {
                    return(
                        <li><Text as='u' fontSize='sm' fontWeight='semibold' mx={3} >{skill.name}</Text> - <Text as='i' fontSize='md' fontWeight='bold' color='red'>{skill.damage}</Text></li>
                    )
                })}
                </ul>
                </div>
        </div>
    )
}
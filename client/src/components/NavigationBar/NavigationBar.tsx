import React from 'react'

import {
  Avatar,
  AvatarBadge,
  Box, Button, Code, Flex, HStack, Icon, IconButton, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode, useColorModeValue
} from '@chakra-ui/react'
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { IoMdPeople } from 'react-icons/io'
import { FaRegBell } from 'react-icons/fa6'
import { GoOrganization } from 'react-icons/go'
import { type IconType } from 'react-icons'

const ProfileMenu = (props: { profileImage: string }): JSX.Element => {
  const colleagueColor: string = useColorModeValue('colleaguePurple.500', 'colleaguePurple.300')
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}>
        <Avatar
          outline={'20px'}
          outlineColor={colleagueColor}
          size={'sm'}
          src={
            props.profileImage
          }
        >
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Link 3</MenuItem>
      </MenuList>
    </Menu>
  )
}

const SearchBar = (): JSX.Element => {
  const colleagueColor: string = useColorModeValue('colleaguePurple.500', 'colleaguePurple.300')
  return (
    <InputGroup rounded={'full'} variant={'filled'}>
      <Input placeholder='Take me to my next adventure' rounded={'full'} bg={ useColorModeValue('gray.200', 'gray.800') }></Input>
      <InputRightAddon rounded={'full'} ><SearchIcon color={colleagueColor}></SearchIcon></InputRightAddon>
    </InputGroup>
  )
}

const NavItem = (props: { name: string, icon: IconType }): JSX.Element => {
  return (
    <IconButton rounded={'full'} bg={'None'} aria-label='props.name' icon={<Icon as={props.icon}></Icon>}></IconButton>
  )
}

const NavItemList = (props: { items: Array<{ name: string, icon: IconType }> }): JSX.Element => {
  return (
    <HStack spacing={0} rounded={'full'} bg={ useColorModeValue('colleaguePurple.300', 'colleaguePurple.700') }>
      {props.items.map((item, index): JSX.Element => {
        return (<NavItem key={index} name={item.name} icon={item.icon}/>)
      })}
    </HStack>
  )
}

// For testing
const NavIcons: Array<{ name: string, icon: IconType }> = [
  { name: 'People', icon: IoMdPeople },
  { name: 'Notifications', icon: FaRegBell },
  { name: 'Organization Notifications', icon: GoOrganization }
]

export function NavBar (): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode()
  const colleagueColor: string = useColorModeValue('colleaguePurple.500', 'colleaguePurple.300')
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <Code rounded={'full'} bg={useColorModeValue('gray.300', 'gray.800')} fontSize={'2xl'} fontWeight='bold' color={colleagueColor}>Colleague</Code>
        </Box>
        <Flex maxW={'1000px'} minW={'300px'} w={'md'}>
          <SearchBar></SearchBar>
        </Flex>
        <HStack rounded={'full'} bg={useColorModeValue('gray.200', 'gray.800')} spacing={2}>
          <NavItemList items={NavIcons}/>
          <IconButton variant={'ghost'} aria-label={'Change Mode'} onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon color={colleagueColor}/> : <SunIcon color={colleagueColor}/>}/>
          <ProfileMenu profileImage='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'/>
        </HStack>
      </Flex>
    </Box>
  )
}

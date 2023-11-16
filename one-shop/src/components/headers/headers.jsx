import { Box, Button, Container, Image, Input, Text } from "@chakra-ui/react"
import { CiSearch } from "react-icons/ci";
import { SiGooglemaps } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";
import logo from '../images/logo.png'

function Headers() {
    return (
      <>
        <Box h="150px" w="100%" bg="white">
          <Container maxW="80%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              h="70px"
            >
              <Image src={logo} alt="logo is not" />
              <Box
                maxW="550px"
                w="100%"
                display="flex"
                alignItems="center"
                bg="rgba(222, 222, 226, 1)"
                borderRadius="10px"
              >
                <Input
                  placeholder="Введите номер запчасти или VIN "
                  variant="unset"
                  bg="transparent"
                />
                <Button bg="rgba(222, 222, 226, 1)">
                  <CiSearch size="26px" />
                </Button>
              </Box>
              <Box display="flex" alignItems="center">
                <SiGooglemaps color="rgba(89, 70, 215, 1)" size="20px" />
                <Text p="0 5px">Санкт-Петербург</Text>
              </Box>
              <Box display="flex" alignItems="center">
                <BsFillTelephoneFill color="rgba(89, 70, 215, 1)" size="20px" />
                <Text p="0 5px" fontSize="18px" fontWeight="600">
                  +7 (347) 229-46-45
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <HiUsers color="rgba(89, 70, 215, 1)" size="22px" />
                <Text p="0 5px">Вход / Регистрация</Text>
              </Box>
            </Box>
          </Container>
          <Box w="100%" h="2px" bg="gray.200"></Box>
          <Container maxW="80%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              h="70px"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p=" 12px 20px"
                bg="rgba(89, 70, 215, 1)"
                borderRadius="10px"
              >
                <IoGrid color="white" size="20px" />
                <Button color="white" p="0 0 0 10px" variant="unset">
                  Все категории
                </Button>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                p=" 12px 20px"
                bg="#F4F5F6"
                borderRadius="10px"
              >
                <IoGrid color="white" size="20px" />
                <Button color="white" p="0 0 0 10px" variant="unset">
                  Все категории
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </>
    );
}

export default Headers
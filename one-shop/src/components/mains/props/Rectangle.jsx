import { Box, Image, Text } from "@chakra-ui/react"


function Rectangle(props) {
    return (
        <>
        <Box p='20px'>
            <Image src={props.img} alt="error is img"/>
            <Box>
                <Text>{props.title}</Text>
                <Text>{props.product}</Text>
            </Box>
        </Box>
        </>
    )
}

export default Rectangle
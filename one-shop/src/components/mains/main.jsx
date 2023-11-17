import { Box, Container, Grid } from "@chakra-ui/react";
import SimpleSlider from "../carusel/carusel";
import Rectangle from "./props/Rectangle";
import imgProductone from "../images/Brakes.png"

function Main() {
    return (
        <Box w="100%" bg="white" >
            <Container maxW="80%" p='30px 0 0'>
                <Box bg='#FAFAFD'>
                    <SimpleSlider/>
                    <Grid templateColumns='repeat(4, 1fr)' gap={3}>
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img={imgProductone} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img={imgProductone} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img={imgProductone} />
                    </Grid>
                </Box>
                <Box bg='white'>

                </Box>
            </Container>
        </Box>
    )
}

export default Main
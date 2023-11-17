import { Box, Container, Grid } from "@chakra-ui/react";
import SimpleSlider from "../carusel/carusel";
import Rectangle from "./props/Rectangle";

function Main() {
    return (
        <Box w="100%" bg='#FAFAFD' >
            <Container maxW="80%" p='30px 0 0'>
                <Box>
                    <SimpleSlider/>
                    <Grid templateColumns='repeat(3, 1fr)' mt='30px'>
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" />
                    </Grid>
                </Box>
                <Box bg='white'>

                </Box>
            </Container>
        </Box>
    )
}

export default Main
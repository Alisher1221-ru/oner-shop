import { Box, Container, Grid } from "@chakra-ui/react";
import SimpleSlider from "../carusel/carusel";
import Rectangle from "./props/Rectangle";

function Main() {
    return (
        <Box w="100%" bg='#FAFAFD' >
            <Container maxW="80%" p='300px 0 0'>
                <Box>
                    <SimpleSlider/>
                    <Grid templateColumns='repeat(3, 1fr)' mt='30px' gap='2px' bg='gray.200' borderRadius='20px' overflow='hidden' boxShadow='0 4px 10px rgba(0, 0, 0, 0.10)'>
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />                        
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={false} />
                        <Rectangle title="Оригинальные запчасти" product="730 товаров" img="https://cdn-icons-png.flaticon.com/512/950/950484.png" blur={true} />
                    </Grid>
                </Box>
                <Box bg='white'>

                </Box>
            </Container>
        </Box>
    )
}

export default Main
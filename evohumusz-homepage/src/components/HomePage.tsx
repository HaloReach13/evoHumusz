import { Container } from '@mui/material';
import MenuBar from './MenuBar';
import { styles } from '../styles/HomePage.styles';


const HomePage = () => {
    return (
        <>
            <MenuBar />
            <Container sx={styles.container}>
                <h1>Üdvözöllek a Humusz Szövetségnél!</h1>
                <h3>Ismerd meg a nulla hulladék felé vezető utat és szakmai tevékenységünket.</h3>
            </Container>
        </>
    );
}

export default HomePage;
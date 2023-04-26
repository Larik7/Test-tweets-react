import { HomeWrap, Title } from "../Components/SharedLayout/SharedLayout.styled";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {

    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeWrap>
                <Title>
                    Welcome to the TweetStats. More interesting things can be found on the Tweets page
                </Title>
            </HomeWrap>
        </HelmetProvider>

    )
};

export default Home;
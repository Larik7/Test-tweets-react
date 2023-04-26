import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Filter } from "..components/Filter/Filter";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { HiArrowLeft } from "react-icons/hi";
import { GoBackLink, TweetsContainer } from "../components/SharedLayout/SharedLayout.styled";
import { Loader } from "../components/Loader/Loader";
// import { Helmet, HelmetProvider } from 'react-helmet-async';


const Tweets = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const goBack = useRef(location.state?.from ?? "/");

    useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch]);

    return (
       <>
       <title>Tweets</title>
            <TweetsContainer>
                <GoBackLink to={goBack.current}><HiArrowLeft size='12' />Go Back</GoBackLink>
                <Filter />
                {isLoading ? <Loader />
                    : error ? <p>{error}</p>
                        : <TweetsList />}
            </TweetsContainer>
       </>
    )
};

export default Tweets;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux"
// import { useLocation } from "react-router-dom";
// import { TweetsList } from "./componens/TweetsList/TweetsList";
// import { Link } from "react-router-dom";
// import { Filter } from "./componens/Filter/Filter";

// export default function Tweets() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTweets());
//   }, [dispatch]);

//   return (
//     <div>
//       <Link to="/">
//         <button type="click">Back</button>
//       </Link>
//       <Filter />
//       <TweetsList />
//     </div>
//   );
// }
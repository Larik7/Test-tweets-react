import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../components/Filter/Filter";
import { TweetsList } from "../components/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Loader } from "../components/Loader/Loader";

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <>
      <title>Tweets</title>
      <div>
        <Filter />
        {isLoading ? <Loader /> : error ? <p>{error}</p> : <TweetsList />}
      </div>
    </>
  );
};

export default Tweets;

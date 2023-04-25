import { useEffect } from "react";
import { TweetsList } from "../componens/TweetsList/TweetsList";
import { fetchTweets } from "../redux/operations";
import { useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { Filter } from "../componens/Filter/Filter";

export default function Tweets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">
        <button type="click">Back</button>
      </Link>
      <Filter />
      <TweetsList />
    </div>
  );
}

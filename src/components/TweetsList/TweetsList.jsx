import { useSelector } from "react-redux"
import { selectVisibleTweets } from "../../redux/selectors"
import { Tweet } from "../TweetsItem/TweetsItem";
import { LoadMoreBtn } from "../TweetsItem/TweetsItem.styled";
import { Cards, ListItem } from "./TweetsList.styled";
import { useState } from "react"

export const TweetsList = () => {
    const tweets = useSelector(selectVisibleTweets);
    const [perPage, setPerPage] = useState(3);
    const loadMore = () => setPerPage(prev => prev + 3);

    return (
        <div>
            <Cards>
                {tweets.slice(0, perPage).map(tweet => (
                    <ListItem key={tweet.id}>
                        <Tweet item={tweet} />
                    </ListItem>
                ))}
            </Cards>
            {tweets.length > perPage && <LoadMoreBtn type="button" onClick={loadMore}>Load More</LoadMoreBtn>}
        </div>
    )
};
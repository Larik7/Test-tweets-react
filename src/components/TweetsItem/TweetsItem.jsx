import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { patchUser } from '../../redux/operations';
import { setFollow } from '../../redux/tweetsSlice';
import { Avatar, Counts, FollowBtn, Info, Stats } from './TweetsItem.styled';

export const Tweet = ({ item }) => {
    const dispatch = useDispatch();

    const handleFollow = () => {
        dispatch(patchUser(item));
        dispatch(setFollow(item.id));
        
    };

    const formatedNumber = new Intl.NumberFormat('EN').format(item.followers);

    return (
        <Info>
            <Avatar src={item.avatar} alt="avatar" />
            <Stats>
                <Counts>{item.tweets} tweets</Counts>
                <Counts>{formatedNumber} followers</Counts>
            </Stats>
            
            {item.isFollowing ? <FollowBtn isFollow={item.isFollowing}type='button' onClick={handleFollow}>Following</FollowBtn>
                : <FollowBtn type='button' onClick={handleFollow}>Follow</FollowBtn>}
            
        </Info>
    )
};

Tweet.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      tweets: PropTypes.number,
        followers: PropTypes.number,
      isFollowing: PropTypes.bool,
    }).isRequired,
};
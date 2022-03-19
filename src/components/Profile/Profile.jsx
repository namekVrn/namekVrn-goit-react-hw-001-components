import css from "../../components/Profile/Profile.module.css"
import PropTypes from 'prop-types';
export const Profile = ({username,tag,location,avatar,stats}) => {
  const {followers,views,likes} = stats
    return (
        <div className={css.Profile}>
        <div className={css.ProfileDescription}>
        <img
        src={avatar}
        alt={username}
        className={css.ProfileAvatar}
        />
        <p className={css.ProfileName}>{username}</p>
        <p className={css.ProfileTag}>{tag}</p>
        <p className={css.ProfileLocation}>{location}</p>
  </div>

  <ul className={css.ProfileStats}>
    <li>
      <span>Followers:</span>
      <span className={css.ProfileStatsQuantity}>{followers}</span>
    </li>
    <li>
      <span>Views:</span>
      <span className={css.ProfileStatsQuantity}>{views}</span>
    </li>
    <li>
      <span>Likes:</span>
      <span className={css.ProfileStatsQuantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}

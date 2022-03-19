import css from "../FriendList/FriendList.module.css"
import {FriendListItem} from '../FriendListItem/FriendListItem'
console.log(css)
export const FriendList = ({friends}) => {
    console.log(friends)
    return (
        <ul className={css.FriendList}>
            {friends.map(elem=><FriendListItem key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline} id={elem.id}/>)}
        </ul>
    )
}
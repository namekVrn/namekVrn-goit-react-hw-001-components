import css from '../FriendListItem/FriendListItem.module.css'
export const FriendListItem = ({avatar, name, isOnline})=>{
    return (
        <li className={css.FriendListItem}>
        <span className={css.FriendListItemStatus} style={{backgroundColor: isOnline ? "green" : "red"}}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className={css.FriendListItemName}>{name}</p>
        </li>
    )
}
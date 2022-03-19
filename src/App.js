import { Profile } from './components/Profile/Profile'
import { Statistics } from './components/Statistics/Statistics'
import { FriendList } from './components/FriendList/FriendList'
import {Transaction} from './components/TransactionHistory/TransactionHistory'
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import friends from './components/FriendList/friends.json'
import tableBd from './components/TransactionHistory/tableBd.json'
console.log(Profile)
function App() {
  return (
    <>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
    <Statistics  title='Upload stats' data={data}/>
    <FriendList friends={friends}/>
    
    <Transaction items={tableBd}/>
    </>
  )
}

export default App;

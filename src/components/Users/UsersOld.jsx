import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

let Users = (props) =>{
    let getUsers = () =>{
        if(props.users.length === 0)
    {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response =>{
            props.setUsers(response.data.items);
        })
    }
    
   /*props.setUsers(
    [
        { id: 1, followed: true, fullName: 'Volodymyr', status:'I am boss', location: { city: 'Uman', country: 'Ukraine' }, photoUrl: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
        { id: 2, followed: false, fullName: 'Volodymyr', status:'I am boss', location: { city: 'Uman', country: 'Ukraine' }, photoUrl: 'https://www.meme-arsenal.com/memes/b1913e3eaef71cf4d848ab595c331618.jpg' },
        { id: 3, followed: true, fullName: 'Volodymyr', status:'I am boss', location: { city: 'Uman', country: 'Ukraine' }, photoUrl: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
    ]
   )*/
}

    return <div>
        <button onClick={getUsers}>Set Users</button>
        {
            props.users.map(u=> <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?<button onClick={()=>{props.unfollow(u.id)}}>Follow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Unfollow</button> }
                    </div>
                </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                </span>
                <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;
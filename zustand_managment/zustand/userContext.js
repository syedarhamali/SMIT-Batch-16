import {create} from 'zustand';


const useUsers = create((set,get)=>({
    users: [
        {
            id:1, name:"user1"
        },
        {
            id:2, name:"user2"
        }
    ],
    addNewUser: (newUser)=> set((state)=>({
        users: [...state.users, newUser]
    })),
    removeAllUsers: ()=> set({users:[]}),
    setUsers: (usersData)=> set({users: [...usersData]}),
    filterUser: (id)=>{
        let allUsers = get().users ;
        let filter = allUsers.find((user)=> id == user.id)
        console.log(filter)
    }

}));


export default useUsers;
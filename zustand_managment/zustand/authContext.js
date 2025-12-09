import {create} from 'zustand';

const useAuth = create((set,get)=>({
    user: null,
    deleteAuth: ()=> set({user: null}),
    setAuth: (userData)=> set({user: userData}),
}))


export default useAuth;
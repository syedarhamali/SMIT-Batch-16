import {create} from 'zustand';

const useTheme = create((set,get)=>({
    theme: 'light',
    changeTheme: ()=> {
        const currentTheme = get().theme;
        set({theme: (currentTheme == 'light') ? 'dark':'light'})
    },
}))


export default useTheme;
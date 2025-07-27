import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "../slices/themeSlice";


const ThemeChanger = () => {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch();
  return (
    <div className='theme'>
        <h1>Theme Changer</h1>
        <p>Click the button below to change the theme.</p>
        <button className='btn' onClick={()=>{dispatch(changeTheme())}}>Change Theme</button>
        <p>Current Theme:{theme}</p>
    </div>
  )
}

export default ThemeChanger
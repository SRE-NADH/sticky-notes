import Switch from '@mui/material/Switch';



const Header = ({theme,SetTheme})=>{

    return (
        <div className='header'>
            <h1>Notes</h1>
             <div><Switch onChange={()=>{SetTheme(!theme)}} /></div>
        </div>
    )
}

export default Header;
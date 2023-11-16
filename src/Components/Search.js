import SearchSharpIcon from '@mui/icons-material/SearchSharp';


const Search = ({searchValue,SetSearchValue})=>{

    return (
       <div className='search-container'>
           <div className="search">
             <SearchSharpIcon style={{color:"black"}} />
             <input type="text" value={searchValue} onChange={(e)=>{SetSearchValue(e.target.value)}}/>
        </div>
       </div>
    )
}
export default Search;
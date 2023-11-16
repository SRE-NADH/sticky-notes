import Header from "./Components/Header";
import Search from "./Components/Search";
import Notes from "./Components/Notes";
import { useState,useEffect } from "react";
function App() {

  const [searchValue,SetSearchValue]=  useState("");
  const [theme,SetTheme] = useState(false);

  useEffect(()=>{
    if(!theme){
       document.body.style.backgroundColor= "white";
       document.body.style.color = "black";
    }
    else{
      document.body.style.backgroundColor= "black";
      document.body.style.color = "white"
    }
  },[theme])

  return (
   <div  className="app" >
     <Header theme={theme} SetTheme={SetTheme} />
     <Search theme={theme} searchValue={searchValue} SetSearchValue={SetSearchValue} />
     <Notes searchValue={searchValue} />
   </div>
  );
}

export default App;

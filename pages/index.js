import Navbar from "./../compoents/Navbar";

const Global=[
  {name:"Vietnam",
  Activities:"Heritage",
  days:"7 days",
  Description:"7 Days and 6 Nights in Vietnam",
  image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-MSuRUAqz/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/Sunset-over-the-islands-of-Halong-Bay-in-northern-Vietnam.webp",
},
{name:"Cambodia",
  Activities:"Heritage",
  days:"7 days",
  Description:"7 Days and 6 Nights in Vietnam",
  image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-gAz40dlW/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/Ancient-Temple-Ruins-in-Cambodia.webp",
},
{name:"Vietnam & Cambodia",
Activities:"Heritage",
days:"10 days",
Description:"10 Days and 9 Nights in Vietnam & Cambodia",
image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-vfLeJc9z/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/traditional-ancient-building-in-Hue-Vietnam.webp",
}]
const index=()=>{
  return(
  <div className="app">
    
  <div className="App">
    {Global.map((elem,i)=>{
      
      return(
        <div className="Global" >
           <img className="GlobalImg" src={elem.image}  width="450" height="300"/>
        <p className="GlobalDes">{elem.Description}</p>
        <p className="GlobalDays">{elem.days}</p>
       

        
        
        </div>

      )
    })}
    
  </div>
  
  </div>);
}
export default index;
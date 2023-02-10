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
image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-OxXfDa1a/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/Combodia-Trip.webp",
},
{name:"Vietnam & Cambodia",
Activities:"Heritage",
days:"10 days",
Description:"10 Days and 9 Nights in Vietnam & Cambodia",
image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-vfLeJc9z/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/traditional-ancient-building-in-Hue-Vietnam.webp",
},
{name:"Vietnam & Cambodia",
Activities:"Heritage",
days:"10 days",
Description:"10 Days and 9 Nights in Vietnam & Cambodia",
image:"https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-vzdfoNyi/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2023/01/Vietnamese-Old-woman-craftsman-making-the-traditional-vietnam-hat-in-the-old-traditional-house.webp",
},
]

const index=()=>{
  
  
  return(
  <div className="app">
    
  <div className="App">
    
    {Global.map((elem,i)=>{
      
      return(
        <div className="Global" >
           <img className="GlobalImg" src={elem.image}  width="450" height="300"/>
           <div className="text">
            <p className="GlobalDes">{elem.Description}</p>
        </div>
        
        <div className="button">
        <button title="bookMark" className="bookMark">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
</button>
<button className="Act"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
</svg></button>
       <button className="quickViwe">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
  <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
</svg>
</button>
        </div>
      


       
        
        </div>

      )
    })}
   
  </div>
  <div class="pagination">
  <a href="#">❮</a>
  <a href="#">❯</a>
</div>

<div className="Explore">

{/* <h1>Explore The World</h1> */}
<div className="Square">
<div className="ExploreTanzania">
<img className="imgTanzania"src="https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-qmK4xKN7/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2022/09/Sunset-in-Tanzania.webp" width="500" height="800"/>
<div class="overlayTanzania">
    <div class="textTanzania">Tanzania is waiting</div>
  </div>
</div>
  {/* <img className="img" src="https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-WeR_xuQs/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2022/04/al-khaznah-petra.webp" width="800" height="400"/> */}
<div className="ExploreUzbekistan">
<img className="imgUzbekistan"src="https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-LvYcK5M1/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2022/09/minaret-in-Uzbekistan.webp" width="500" height="800"/>
<div class="overlayUzbekistan">
    <div class="textUzbekistan">The history you know </div>
  </div>
</div>
</div>
<div className="ExploreKyrgyzstan">
<img className="imgKyrgyzstan"src="https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-kBeixCof/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2022/08/Yurt-Camping.webp" width="500" height="800"/>
<div class="overlayKyrgyzstan">
    <div class="textKyrgyzstan">A Hidden Gem </div>
  </div>
</div>
  <div className="ExploreJordan">
<img className="imgJor"src="https://ml4fe7mkrawf.i.optimole.com/UyGtUbQ-WeR_xuQs/w:auto/h:auto/q:mauto/https://globaltribes.io/wp-content/uploads/2022/04/al-khaznah-petra.webp" width="500" height="800"/>
<div class="overlayJordan">
    <div class="textJordan">Welcome to jordan </div>
  </div>
</div>
</div >
<footer>
  <p>Mohammad Asfour</p>
  <p><a href="mohammad.asfo@gmail.com">mohammad.asfo@gmail.com</a></p>
</footer>
  </div>
  
  );
}
export default index;
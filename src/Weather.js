// import React, { useState, useEffect } from 'react';
// import './Weather.css';

// const Weather = () => {
//   const [city, setCity] = useState(null);
//   const [search, setSearch] = useState('Mumbai');

//   useEffect(() => {
//     async function fetchApi() {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=90b70ba4b6b0a825b55173bb80c52299`
//       );
//       const resJson = await response.json();
//       setCity(resJson.main);
//       console.log(resJson.main);
//     }
//     fetchApi();
//   }, [search]);

//   return (
//     <div className="box">
//       <div className="inputData">
//         <input
//           type="search"
//           className="inp"
//           onChange={e => {
//             setSearch(e.target.value);
//           }}
//         />
//       </div>
//       {!city ? (
//         <p>No data FOUND</p>
//       ) : (
//         <div className="detail">
//           <h1>{search}</h1>
//           <h2>{city.temp}</h2>
//           <h3>minmax</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import stars from './stars.png';
import sunImage from './sun.png';
import mercury from './mercury.png';
import venus from './venus.png';
import earth from './earth.png';
import mars from './mars.png';
import jupiter from './jupiter.png';
import saturn from './saturn.png';
import uranus from './uranus.png';
import neptune from './neptune.png';
import pluto from './pluto.png';
import mercuryDetails from './mercuryDetails.png';
import venusDetails from './venusDetails.png';
import earthDetails from './earthDetails.png';
import marsDetails from './marsDetails.png';
import jupiterDetails from './jupiterDetails.png';
import saturnDetails from './saturnDetails.png';
import uranusDetails from './uranusDetails.png';
import neptuneDetails from './neptuneDetails.png';
import plutoDetails from './plutoDetails.png';
import { Game } from './Game';
import { Messages } from './Messages';
import { Wordle } from './Wordle/Wordle';


// const cssUnit = window.matchMedia("(orientation: landscape)").matches ? 'vw' : 'vh';

// const sun = {
//   diameter: cssUnit === 'vw' ? 3 : 2,
// }

// const planetsData = [
//   {
//     name: 'Mercury',
//     diameter: sun.diameter / 1.99,
//     speed: 44,
//     face: mercury,
//     modalHeading: 'The Beginning',
//     modalData: 'An idea that took birth, as a way to strive for excellence and greatness, has now expanded over 20 cities, resolved more than 5000 Tax Matters, and seen the investment of more than $10M.',
//     detailImage: mercuryDetails
//   },
//   {
//     name: 'Venus',
//     diameter: sun.diameter / 1.90,
//     speed: 106,
//     face: venus,
//     modalHeading: 'Our Support',
//     modalData: 'Saturn has been the ultimate point of contact for NRIs dealing with any financial and regulatory matters related to India, and has provided solutions to one and all.',
//     detailImage: venusDetails
//   },
//   {
//     name: 'Earth',
//     diameter: sun.diameter / 1.40,
//     speed: 182,
//     face: earth,
//     modalHeading: '5 Years Later',
//     modalData: ' We have successfully spread our wings and expertise in cross-border complexities, investment and tax issues, and finance related solutions tailored for expert NRI investors and newcomers, alike.',
//     detailImage: earthDetails
//   },
//   {
//     name: 'Mars',
//     diameter: sun.diameter / 2.02,
//     speed: 340,
//     face: mars,
//     modalHeading: 'Oldest CA Firm and Us',
//     modalData: 'With our affiliation with one of the oldest CA Firms in Delhi, SS Dingliwala & Co, we have been the backbone of Auditing, Taxation, and Accounting services across diverse sectors and areas.',
//     detailImage: marsDetails
//   },
//   {
//     name: 'Jupiter',
//     diameter: sun.diameter / 1.34,
//     speed: 2150,
//     face: jupiter,
//     modalHeading: 'Our Motto',
//     modalData: 'Even now, our aim is to dive deep into the world of NRIs, provide tailored financial solutions, understand the nuances of NRI transactions, and make financial journeys easy for NRIs.',
//     detailImage: jupiterDetails
//   },
//   {
//     name: 'Saturn',
//     diameter: sun.diameter / 1.76,
//     speed: 5000,
//     face: saturn,
//     modalHeading: 'The Dream',
//     modalData: 'At Saturn, we still dream the old dream of excellence and have put our best foot forward for it. We pride ourselves for our services and expertise, and have several clients who would vouch for it.',
//     detailImage: saturnDetails
//   },
//   {
//     name: 'Uranus',
//     diameter: sun.diameter / 1.76,
//     speed: 42,
//     face: uranus,
//     modalHeading: 'Our Work',
//     modalData: 'We have not only invested in partnerships with banks to expedite processes paired with our collaboration with Indian regulatory bodies, but have worked hard to enhance the overall efficiency and reduce complications.',
//     detailImage: uranusDetails
//   },
//   {
//     name: 'Neptune',
//     diameter: sun.diameter / 1.62,
//     speed: 82,
//     face: neptune,
//     modalHeading: 'Our Belief',
//     modalData: 'We believe in making financial decisions and processes easy. Much like the planet Saturn, we fight for excellence, strive to provide financial security, and hope to assist people on their journey.',
//     detailImage: neptuneDetails
//   },
//   {
//     name: 'Pluto',
//     diameter: sun.diameter / 1.40,
//     speed: 124,
//     face: pluto,
//     modalHeading: 'Your Trust',
//     modalData: ' Be it investing, saving, spending, taxing, or securing your life, we have your back! With us, you get the expertise of half a decade, proper guidance, and complete security. We promise to be there for all your financial needs!',
//     detailImage: plutoDetails
//   },
// ];

// const Sun = ({ setSelectedPlanet }) => {
//   return (
//     <button
//       className='sun'
//       style={{
//         height: `${sun.diameter}${cssUnit}`,
//         width: `${sun.diameter}${cssUnit}`,
//       }}
//       onClick={() => { setSelectedPlanet(0) }}
//     >
//       <img
//         alt={'sun'}
//         src={sunImage}
//         style={{
//           height: '420%',
//         }}
//       />
//       <div style={{ position: 'absolute' }} className='clickMe'>
//         <i>Our Journey</i>
//       </div>
//     </button>
//   )
// }

// const Galaxy = ({ children, setSelectedPlanet }) =>
//   <div className='galaxy'>
//     <Sun setSelectedPlanet={setSelectedPlanet} />
//     {children}
//   </div>;

// const Planet = ({ planet, index, setSelectedPlanet }) => {

//   return (
//     <button
//       onClick={() => setSelectedPlanet(index)}
//       className='planet'
//       style={{
//         top: `-${planet.distFromSun}${cssUnit}`,
//         left: `-${planet.distFromSun}${cssUnit}`,
//         height: `${planet.diameter}${cssUnit}`,
//         width: `${planet.diameter}${cssUnit}`,
//         transformOrigin: `${planet.rotationOriginOffset}${cssUnit} ${planet.rotationOriginOffset}${cssUnit}`,
//         animationDuration: `${planet.speed}s`,
//         animationDelay: `-${planet.initialPosition}s`,
//       }}

//     >
//       <img
//         alt={planet.name}
//         src={planet.face}
//         style={{
//           height: `200%`,
//           width: `200%`,
//         }}
//       />

//     </button>
//   )
// };

// const Orbit = ({ planet }) =>
//   <div
//     className='orbit'
//     style={{
//       position: 'absolute',
//       height: `${planet.orbitDiameter}${cssUnit}`,
//       width: `${planet.orbitDiameter}${cssUnit}`,
//       top: `-${planet.orbitOffset}${cssUnit}`,
//       left: `-${planet.orbitOffset}${cssUnit}`,
//     }}
//   />;

// const Universe = ({ planets, setSelectedPlanet }) => {
//   return (
//     <div className='universe'>
//       <Galaxy setSelectedPlanet={setSelectedPlanet}>
//         {
//           planets.map((planet, index) => {
//             return (
//               <div key={index}>
//                 <Planet planet={planet} index={index} setSelectedPlanet={setSelectedPlanet} />
//                 <Orbit planet={planet} />
//               </div>
//             )
//           })
//         }
//       </Galaxy>
//     </div>
//   )
// };

// const Detail = ({ planets, selecetedPlanet }) => {
//   const planet = planets[selecetedPlanet];
//   return (
//     <div className='detailContainer'>
//       <img
//         className='detailImage'
//         alt={planet.name}
//         src={planet.detailImage}
//       />
//       <div className='detailContent'>
//         <h3>{planet.modalHeading}</h3>
//         <br />
//         <p>{planet.modalData}</p>
//       </div>
//     </div>
//   )
// };

// const PlanetBar = ({ planets, selecetedPlanet, setSelectedPlanet }) => {

//   const selectedPlantRef = useRef(null);

//   useEffect(() => {
//     selectedPlantRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', });
//   }, [selecetedPlanet])

//   return (
//     <div className='planetBar'>
//       <ol className='planetBarList'>
//         {
//           planets.map((planet, index) => {
//             return (
//               <li key={index} ref={index === selecetedPlanet ? selectedPlantRef : null}>
//                 <div className='planetBarBlur' />
//                 <button className={`planetButton ${selecetedPlanet === index ? 'selectedPlanet' : ''}`} onClick={() => setSelectedPlanet(index)}>
//                   <img src={planet.face} alt={planet.name} className='planetBarImage' />
//                 </button>
//               </li>)
//           }
//           )
//         }
//       </ol>
//     </div>
//   )
// };

// const PlanetDetails = ({ planets, selecetedPlanet, setSelectedPlanet }) => {
//   return (
//     <div className='planetDetails'>
//       <PlanetBar planets={planets} setSelectedPlanet={setSelectedPlanet} selecetedPlanet={selecetedPlanet} />
//       <Detail planets={planets} selecetedPlanet={selecetedPlanet} />
//     </div>
//   )
// };

// const Navbar = () => {
//   return (
//     <div className='nav'>
//       <ul className='linksContainer'>
//         <li> Home </li>
//         <li> About Us </li>
//       </ul>
//     </div>
//   );
// };

// const SolarSystem = () => {

//   const [planets, setPlanets] = useState(planetsData);
//   const [selecetedPlanet, setSelectedPlanet] = useState(-1);

//   useEffect(() => {
//     initialisePlanets();
//   }, []);

//   const initialisePlanets = () => {
//     const _planets = [...planetsData];
//     _planets.forEach((planet, index) => {
//       planet.distFromSun = !index ? planet.diameter * 2.5 : planet.diameter + _planets[index - 1].distFromSun;
//       planet.rotationOriginOffset = (sun.diameter / 2) + planet.distFromSun;
//       planet.orbitDiameter = (2 * planet.distFromSun + sun.diameter - planet.diameter) * 1.41;
//       planet.orbitOffset = (planet.orbitDiameter - sun.diameter) / 2;
//       planet.initialPosition = planet.speed * Math.random();
//     });
//     setPlanets(_planets);
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', backgroundImage: `url(${stars})` }}>
//       <Navbar />
//       {selecetedPlanet > -1 ?
//         <PlanetDetails planets={planets} selecetedPlanet={selecetedPlanet} setSelectedPlanet={setSelectedPlanet} />
//         :
//         <Universe planets={planets} selecetedPlanet={selecetedPlanet} setSelectedPlanet={setSelectedPlanet} />
//       }
//     </div>
//   )
// };

// const Header = ({ searchText, setSearchText }) => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1${cssUnit} 2${cssUnit}', backgroundColor: 'gray', color: 'white', flexWrap: 'wrap', flexGrow: 1 }}>
//         <h2 >Restaurant Test</h2>
//         <input style={{ padding: '0.5${cssUnit}' }} type='text' placeholder='Search for a restaurant' onChange={(e) => { setSearchText(e.target.value) }} value={searchText}></input>
//       </div>
//     </div>
//   );
// }

// const Restaurant = () => {

//   const Data = [
//     {
//       "id": "18",
//       "name": "Valeria Ramos"
//     },
//     {
//       "id": "61050f21aa707624a853421b",
//       "name": "Campos Daniels"
//     },
//     {
//       "id": "61050f21ec0c4d434eedda85",
//       "name": "Kate Gilbert"
//     },
//     {
//       "id": "61050f21a4543be9235f4643",
//       "name": "Hunt"
//     },
//     {
//       "id": "1",
//       "name": "Valeria"
//     },
//     {
//       "id": "61050f21aa707624a853421",
//       "name": "Campos Daniels"
//     },
//     {
//       "id": "61050f21ec0c4d434eedda8",
//       "name": "Kate Gilbert"
//     },
//     {
//       "id": "61050f21a4543be9235f464",
//       "name": "Hunt Lynch"
//     },
//     {
//       "id": "1",
//       "name": "Ramos"
//     },
//     {
//       "id": "3",
//       "name": "Campos "
//     },
//     {
//       "id": "4",
//       "name": "Gilbert"
//     },
//     {
//       "id": "5",
//       "name": "Lynch"
//     },
//   ];

//   const [filteredItems, setFilteredItems] = useState(Data);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     const _filteredItems = Data.filter((_) => _.name.toLowerCase().startsWith(searchText.toLowerCase()));
//     JSON.stringify(filteredItems) !== JSON.stringify(_filteredItems) && setFilteredItems(_filteredItems);
//   }, [searchText]);

//   const Layout = ({ items }) => {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', margin: '5${cssUnit}' }}>
//         <div style={{ display: 'flex', gap: '10vw', justifyContent: 'center', flexWrap: 'wrap' }}>
//           {
//             items.map((item, i) =>
//               <div style={{ display: 'flex', border: '1px solid gray', width: '20vw', height: '20vw', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }} key={i}>{item.name}</div>
//             )
//           }
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header searchText={searchText} setSearchText={setSearchText} />
//       <Layout items={filteredItems} />
//     </>
//   )
// };

// const useDebounce = (text) => {
//   let timer = useRef(null);
//   const [debouncedText, setDebouncedText] = useState('');
//   useEffect(() => {
//     clearTimeout(timer.current);
//     timer.current = setTimeout(() => {
//       setDebouncedText(text)
//     }, 2000);
//   }, [text]);
//   return debouncedText;
// }

// // const timeout = () =>{
// //   let timer = null;
// // return (setTimeout(()=>{
// //   console.log('hii', value)
// //   value+=1;
// // }, 2000));
// //   return(
// //     ()=>{
// //       // value+=1;
// //       setTimeout(()=>{
// //           value+=1;
// //       console.log('hii', value)
// //     }, 2000)
// //       console.log('hii', value)
// //     }
// //   )
// // }

const debouncedAction = (action) => {
  let timer;
  return (
    (e) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => action(e.target.value), 1000);
    }
  )
}

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Litchi',
  'Apricot',
  'Mango',
  'Guava',
  'Pear',
  'Orange',
]

const DebouncedFilter = () => {

  const [text, setText] = useState('');
  const filteredList = fruits.filter(_ => _.startsWith(text));
  const inputRef = useRef(null);
  const handleChange = debouncedAction(setText)

  return (
    <div>
      <input type='text' onChange={handleChange} ref={inputRef} />
      <br />
      {filteredList.map(_ => <div>{_}</div>)}
    </div>
  )
}

// const binarySearch = (arr, num) => {
//   if (arr.length > 1) {
//     let half = Math.floor(arr.length / 2)
//     if (num < arr[half])
//       return binarySearch(arr.splice(0, half), num);
//     else
//       return binarySearch(arr.splice(half), num);
//   }
//   else return arr == num;
// }

// const isPallindrome = (str) => {
//   if(!str)
//     return false;

//   let _str = str;
//   let flag = true;

//   if (typeof(_str) === 'number')
//     _str = str.toString(10);

//   _str = _str.toLowerCase();

//   for (let i = 0, j = _str.length - 1; j >= i; i++, j--)
//     if (_str[i] !== _str[j]) {
//       flag = false;
//       break;
//     }

//   return flag;
// }
// const isPallindrome = _ => +_ < 0 ? false : (typeof (_) === 'number' ? _.toString() : _) === (typeof (_) === 'number' ? _.toString() : _).split('').reverse().join('');


// const fibonacci = (n) => {
//   if (n < 2) return n;
//   let x = 0;
//   let y = 1;
//   for (let i = 2; i < n; i++) {
//     y = x + y;
//     x = y - x;
//   }
//   return y;
// }
// const recursiveFibonacci = _ => _ > 2 ? _ : recursiveFibonacci(_ - 2) + recursiveFibonacci(_ - 1);


// const isAnagram = (str1, str2) => {

//   if (str1 === str2)
//     return true;
//   if (str1.length !== str2.length)
//     return false;

//   let flag = true;

//   const obj1 = {};
//   const obj2 = {};

//   for (let i=0; i<str1.length; i++){
//     obj1[`${str1[i]}`] = 1 + (obj1[`${str1[i]}`] || 0) ;
//     obj2[`${str2[i]}`] = 1 + (obj2[`${str2[i]}`] || 0) ;
//   }

//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj1);

//   if (keys1.length !== keys2.length)
//     return false;

//   for (let i = 0; i< keys1.length; i++){
//     let key = keys1[i];
//     if(obj1[key] !== obj2[key]){
//       flag= false;
//       break;
//     }
//   }
//   return flag;
// }
// const isAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

// const twoSum = (arr, num) => {
//   let flag = false;
//   let i, j;
//   const set = new Set();
//   for (i = 0; i < arr.length; i++) {
//     if (set.has(arr[i]))
//       continue;
//     set.add(arr[i]);
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         flag = true;
//         break;
//       }
//     }
//     if (flag) break;
//   }
//   return ([i, j]);
// }

// Array.prototype.myMap = function (fn) {
//   let arr = [];
//   // this.forEach((_) => {
//   //   arr.push(fn(_));
//   // });
//   for (let i = 0; i < this.length; i++) {
//     arr[i] = fn(this[i], i, this);
//   }
//   return arr;
// };

// Array.prototype.myReduce = function (fn, initialValue) {
//   let acc = initialValue ?? 0;
//   for (let i = 0; i < this.length; i++) {
//     acc = fn(acc, this[i], i);
//   }
//   return acc;
// };

// const bubbleSort = (_arr) => {
//   const arr = [..._arr];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let swapped = false
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped)
//       break;
//   }
//   return arr;
// }

//[3,5,2,4,1]
//[1,5,2,4,3]
//[1,2,5,4,3]
//[1,2,3,4,5]
//[1,2,3,4,5]
// const selectionSort = (_arr) => {
//   const arr = [..._arr];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++)
//       if (arr[j] < arr[i])
//         minIndex = j;
//     if (minIndex !== i) {
//       [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }
//   }
//   return arr;
// }

//[3,5,2,4,1]
//[3,5,2,4,1]
//[2,3,5,4,1]
//[2,3,4,5,1]
//[1,2,3,4,5]
// const insertionSort = (_arr) => {
//   const arr = [..._arr];
//   for (let i = 1; i < arr.length; i++) {
//     let cur = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > cur) 
//         arr[j + 1] = arr[j--];
//     arr[j+1] = cur;
//   }
//   return arr;
// }

// const longestSubstring = (_str) => {
//   const str = _str;
//   let maxStr = '';
//   let start = 0
//   let end = 0;
//   while(start < str.length){
//     end = start;
//     let arr =[];
//     while(end < str.length && (!arr.includes(str[end]))){
//       arr.push(str[end++]);
//     }
//     if (arr.length > maxStr.length)
//       maxStr = arr.join('');
//     start = end;
//   }
//   return maxStr;
// }

// const debounce = (fn, delay) => {
//   var timer = null;
//   return (() => {
//     console.log(timer);
//     if (timer) {
//       return null;
//     }
//     else{
//       fn();
//       timer 
//     }
//   })

// }

// const throttle = (fn, delay) => {
//   var isRunning = false;
  

//   return ((...args)=>{
//     if(timer)
//       return;
//     else{
//       fn.bind(this, ...args);
//       timer = setTimeout(()=>{clearTimeout(timer)}, delay);
//     }
//   })
// }



// const PromiseAll = (promises) => {
//   return new Promise((res, rej) => {
//     const results = [];
//     try {
//       promises.forEach((promise, index) => {
//         results.push(promise.resolve(promise));
//       });
//       res();
//     }
//     catch (err) {
//       rej(err);
//     }
//   })
// }


const App = () => {
  // const [word,setWord] = useState('LEVEL');

  return (
    <div className="App">
      {/* <button onClick={()=>debouncedFunction()}>clickme</button> */}
      {/* <Restaurant /> */}
      {/* <SolarSystem />  */}
      {/* <DebouncedFilter /> */}
      {/* <Messages/> */}
      {/* <Game poles={3} rings={7} /> */}
      {/* <button onClick={() => setWord('hello')}>Change Word</button> {word} */}
      {/* <div>a</div> */}
      <Wordle word="LEVEL" attempts={6} />
    </div>
  );
};

export default App;

import Car from './Car';
import Apple from './Apple';
function Garage()
{
    // listdemo
    const carList=[
        {brand:"BMW",color:"Red"},
       
        {brand:"Suziki",color:"White"},
        {brand:"Tesla",color:"Green"}
    ];

    const  numberList=[
        1,2,3,4,5,6,6,4,5,6
    ];


    //const brand='TESLA';
    //const color='Black';
    const carInfo={brand:"Ferrari",color:"White"}

    // class component
    const appleInfo={type:"Fuji",color:"Red"};
  return(
    <>
    <h1>Who lives in the garage</h1>
    {/* <Car  brand={brand} color={color}/> */}
    <Car carInfo={carInfo}/>
    <Apple  appleInfo={appleInfo}/>

    <ul>
       {carList.map((carInfo)=> <li key={carInfo.brand}><Car carInfo={carInfo}/></li>)}
    </ul>

    <ul>
        {numberList.map((e,index)=> <p key={index}>{e}</p>)}
    </ul>
    </>
  ); 
}
export default Garage;
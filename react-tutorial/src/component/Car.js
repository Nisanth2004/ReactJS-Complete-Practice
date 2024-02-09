function Car(props)
{
    // const{brand,color}=props
   
    // get props by object
    const{carInfo}=props;
    const{brand,color}=carInfo
    
    const text=`This is ${brand} ${color} car`;
  return(
   <h2>{text}</h2>
  );
}

export default Car;
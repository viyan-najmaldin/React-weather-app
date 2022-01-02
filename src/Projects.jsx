import React from 'react';
import { Link } from 'react-router-dom';

const City = [
    {
      Id:1,
        Name: 'Erbil',
       
    },
    {
      Id:2,
        Name: 'Sulaymaniyah',
        
    },
    {
        Id:3,
        Name: 'Duhok',
      
    },
    {
        Id:4,
        Name: 'kirkuk',
         }
]
const Projects= props =>
{
  return(
City.map(el=>{
  return(
   
    <Link to={`/Projects/${el.Name}`} >
  <div className='city-div'>
 
   <h4>{el.Name}</h4>

</div>
</Link>

  )
}
)
      
  )
}
export default Projects;
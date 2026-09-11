import type { Dispatch, SetStateAction } from 'react';
import type { Itech } from '../../type/TypeTech';
import TechCard from './TechCard';

interface IAvailableProps{
    techs : Itech[],
    isSelected: Itech[],
    setIsSelected : Dispatch<SetStateAction<Itech[]>>

}

const AvailableTech = ({techs, isSelected, setIsSelected}:IAvailableProps)=> {
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
                techs.map((tech : Itech, ) =>{
                    return <div key={tech.id}>
                    <TechCard  tech = {tech} isSelected={isSelected} setIsSelected={setIsSelected}></TechCard>
                    </div>
                })
            }

    </div>
      
          
       
    
};

export default AvailableTech;
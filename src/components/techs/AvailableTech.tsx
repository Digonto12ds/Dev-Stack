import type { Itech } from '../../type/TypeTech';
import TechCard from './TechCard';

interface IAvailableProps{
    techs : Itech[],

}

const AvailableTech = ({techs}:IAvailableProps)=> {
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
                techs.map((tech : Itech, index : number) =>{
                    return <div>
                    <TechCard key={index} tech = {tech}></TechCard>
                    </div>
                })
            }

    </div>
      
          
       
    
};

export default AvailableTech;
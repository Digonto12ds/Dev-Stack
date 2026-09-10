import React from 'react';
import type { Itech } from '../../type/TypeTech';
import TechCard from './TechCard';

interface IAvailableProps{
    techs : Itech[],
}

const AvailableTech = ({techs}:IAvailableProps)=> {
    return <div>
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
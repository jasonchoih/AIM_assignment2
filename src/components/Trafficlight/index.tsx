import React, { useState, useEffect } from 'react';
import './index.css';
// 
const TrafficLight: React.FC<{duration:number}> = (props) =>
{
    const { duration } = props;
    const [ tick, setTick ] = useState(0);
    // 
    const lights = ['red', 'yellow', 'green'];
    // 
    useEffect(() => {
        const timer = setInterval(() => {
          setTick(tick===(lights.length-1) ? 0 : tick+1);    
        }, duration);
        return () => clearInterval(timer);
    }, [tick]);
    //   
    return (
        <div className='box w'>
            {lights.map((v,k)=>(
                <div 
                    key={k} 
                    className={'traffic '+ (v==lights[tick] ? "light-"+v : "")}>
                </div>
            ))}
        </div> 
    );
}
// 
export default TrafficLight;
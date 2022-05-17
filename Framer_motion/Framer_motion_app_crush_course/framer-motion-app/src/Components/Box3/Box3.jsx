import React from 'react';
import { motion } from 'framer-motion';

const Box3 = () => {
    const boxVarient={
        hidden:{
            x:"-100vw",
        },
        visible:{
            x:0,
            transition:{
                delay:.5,
                when:"beforeChildren"
            }
        }
        
    }

    const listVarient={
        hidden:{
            x:-100,
            opacity:0,
        },
        visible:{
            x:0,
            transition:{
                opacity:1,
                staggerChildren: 0.5,
            }
        }

    }
  
    return (
        <div className='box-container'>
            <motion.div 
            className="box"
            variants={boxVarient}
            initial="hidden"
            animate="visible"

            
            >
                {[1,2,3].map(box =>
                    {
                        return(
                            <motion.li 
                        className="boxItem"
                        variants={{listVarient}}
                        initial={"hidden"}
                        animate={"visible"}
                        
                        ></motion.li>
                        )
                        
                        
                    })}

            </motion.div>
            
        </div>
    );
};

export default Box3;
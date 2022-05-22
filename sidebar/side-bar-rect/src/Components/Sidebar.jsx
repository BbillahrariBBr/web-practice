// import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = ({ children }) => {
    return (
        <div className="main-container">
            <motion.div className='sidebar'
            animate={{width:"200px"}}
            >
                
            </motion.div>
            <main>
                {children}
                </main>
        </div>
        
    );
};

export default Sidebar;
// import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {FaHome, FaUsers,FaBars} from 'react-icons/fa';
import {MdMessage} from 'react-icons/md';
import {BiAnalyse, BiSearch,BiCog} from 'react-icons/bi';
import {AiTwotoneFileExclamation,AiFillHeart} from 'react-icons/ai';
import {BsCartCheck} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const routes = [
    {
        path:"/",
        name:"Home",
        icon: <FaHome/>,
    },
    {
        path:"/users",
        name: "Users",
        icon:<FaUsers/>,
    },
    {
        path:"/messages",
        name: "Messages",
        icon:<MdMessage/>,
    },
    {
        path:"/analytics",
        name:"Analytics",
        icon:<BiAnalyse/>,
    },
    {
        path:"/filemanager",
        name:"File Manager",
        icon:<AiTwotoneFileExclamation/>,
    },
    {
        path:"/order",
        name:"Order",
        icon:<BsCartCheck/>,
    },
    {
        path: "/setting",
        name: "Setting",
        icon: <BiCog/>,
    },
    {
        path:"/saved",
        name: "Saved",
        icon: <AiFillHeart/>
    }
]
const Sidebar = ({ children }) => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    const inputAnimation ={
        hidden:{
            width: 0,
            padding: 0,
            opacity:0,
            transition:{
                duration: 0.2,
            }
        },
        show:{
            width:"140px",
            padding: "5px 10px",
            opacity:1,
            transition:{
                duration: 0.2,
            }
        },    
    };

    const textAnimation ={
        hidden:{
            width: 0,
            padding: 0,
            opacity:0,
            transition:{
                duration: 0.2,
            }
        },
        show:{
            width:"auto",
            opacity:1,
            transition:{
                duration: 0.2,
            }
        },    
    };
    return (
        <div className="main-container">
            <motion.div className='sidebar'
            animate={{width: isOpen? "200px": "40px" ,
            transition:{
                transition:0.5,
                type:'spring',
                damping:10,
            }}}
            >
                <div className="top_section">
                    {isOpen && <motion.h1 
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={textAnimation}
                    className='logo'>ছাপাও</motion.h1>}
                    <div className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                <div className="search">
                    <div className="search-icon">
                        <BiSearch/>
                    </div>
                    <AnimatePresence>
                    {isOpen && <motion.input
                    initial='hidden'
                    animate="show"
                    exit="hidden"
                    variants={inputAnimation}
                     placeholder='search....' />}
                    </AnimatePresence>
                </div>
                <section className='routes'>
                    {routes.map((route)=>(
                        <NavLink activeClassName="active"  to={route.path} key={route.name} className="link">
                            <div className="icon">{route.icon}</div>
                           <AnimatePresence>
                           {isOpen && <motion.div 
                           initial="hidden"
                           animate="show"
                           exit="hidden"
                           variants={textAnimation}
                           className="link_text">{route.name}</motion.div>}
                           </AnimatePresence>
                           
                        </NavLink>
                    ))}
                </section>
                
            </motion.div>
            <main>
                {children}
                </main>
        </div>
        
    );
};

export default Sidebar;
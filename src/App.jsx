import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function App() {

  return (
    <div className='flex items-center justify-center'>
      <div className='h-[100vh] w-[51vw] border-2 border-black flex overflow-y-hidden'>
        
          <motion.div
            key="div1"
            className='w-[17vw] h-full'
            initial={{ y: -1000 }}
            animate={{ y: 0,transition:{repeat:Infinity,duration:5,ease:"easeInOut"}}} 
            exit={{ y: 1000 }}
            
          >
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
          </motion.div>
        
          <motion.div
            key="div2"
            className='w-[17vw] h-full '
            initial={{ y: 0 }}
            animate={{ y: -1000,transition:{repeat:Infinity,duration:5,ease:"easeInOut"}}} 
            exit={{ y: -1000 }}
          >
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-green-700"></motion.div>
          </motion.div>
       
          <motion.div
            key="div3"
            className='w-[17vw] h-full '
            initial={{ y: -1000 }}
            animate={{ y: 0,transition:{repeat:Infinity,duration:5,ease:"easeInOut"}}} 
            exit={{ y: 1000 }}
            
          >
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
            <motion.div className="w-full h-[17vw] bg-red-700"></motion.div>
            <motion.div className="w-full h-[17vw] bg-slate-800"></motion.div>
          </motion.div>
        
      </div>
    </div>
  )
}

export default App

/* eslint-disable react/jsx-key */

import { useState } from 'react'
import img from './img.png';
import img2 from './img2.gif'
//react icons
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
//add Task model
import AddTask from './components/AddTask'
import ColorFilter from './components/ColorFilter';
//redux
import { useDispatch } from 'react-redux'
import { Add, Remove, RemoveAll } from './redux/AddTask';


import { useSelector } from 'react-redux'


function App() {
  const colorFilter = useSelector((state) => state.colorFilter);
  const[addTaskModal, setAddTaskModal] = useState(false);
  const tasks = useSelector((state)=>state.addTask)
  const dispatch= useDispatch()
  
  const addNewTask = (text, color) => {
    dispatch(Add({ text, color }));
  };
  const deleteAllTasks = () => {
    dispatch(RemoveAll());
  };
  
  const removeHandle=(idx)=>{
    dispatch(Remove(idx))
  }
  return (
      <div className='App w-full h-screen flex justify-center items-center' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <img src={img2} alt="Image" className="absolute top-90 left-60 w-auto h-auto" />
        <div className='w-4/5 md:w-1/2 lg:w-4/12 2xl:w-1/5 m-auto h-1/2 overflow-auto bg-white rounded-md drop-shadow-xl '>
          <div className='w-full sticky top-0 bg-[#b91818] text-grey-200 p-4 flex justify-between items-center '>
            <div className='text-white'>
              <h1 className='text-xl font-semibold'>
                To Do List App
              </h1>
              <p className='text-xs'>manage your tasks</p>
            </div>
            <div className='w-8 h-8 bg-white text-black rounded-full flex justify-center items-center'>
              <button>
                <AiOutlinePlus onClick={()=> setAddTaskModal(true)} size={'1rem'}/>
              </button>
            </div>
          </div>
          <div className='p-5 text-black'>
  <ul className='space-y-4'>
    {tasks && tasks.map((task, idx) => {
      // Filter tasks based on the color filter
      if (colorFilter === 'all' || colorFilter === task.color) {
      const taskStyle = {
        backgroundColor: task.color, 
      };

      return (
        <div className='bg-grey-100 flex justify-between bg-slate-200' key={idx} style={taskStyle}>
          <li className='flex space-x-4 p-4'>
            <input type="checkbox" name="" id="complete" className='peer/complete'/>
            <label htmlFor="complete" className='peer-checked/complete:line-through'>{task.text}</label>
          </li>
          <button onClick={() => removeHandle(idx)}>
            <MdDelete size={'1.5rem'}/>
          </button>
        </div>
      );
    } else {
      return null; // Hide tasks that don't match the filter
    }
    })}
  </ul>
</div>
        </div>
        {addTaskModal && <AddTask setAddTaskModal={setAddTaskModal} addNewTask={addNewTask}/>}
        <div className='position relative w-8 h-8'>
        <ColorFilter />
        </div>
        <div className='delete-button-container absolute top-120px bottom-20 right-50 '>
  <button
    onClick={deleteAllTasks}
    className='border rounded-md px-4 py-2 bg-red-500 text-white hover:bg-red-600 hover:text-white'
  >
    Delete All Tasks
  </button>
</div>



      </div>
      
  )
}

export default App

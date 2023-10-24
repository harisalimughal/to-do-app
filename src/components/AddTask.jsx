/* eslint-disable react/prop-types */
import { useState } from 'react';

// React icons
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

const AddTask = ({ setAddTaskModal, addNewTask }) => {
  const [inputText, setInputText] = useState('');
  const [selectedColor, setSelectedColor] = useState('default'); // Default color category

  const closeHandle = () => {
    setAddTaskModal(false);
  };

  const inputHandle = (e) => {
    setInputText(e.target.value);
  };

  const colorHandle = (e) => {
    setSelectedColor(e.target.value);
  };

  const addTask = () => {
    // Pass the selected color to the parent component
    console.log('Selected Color:', selectedColor);
    addNewTask(inputText, selectedColor);
    setAddTaskModal(false);
  };

  return (
    <div className="w-full h-screen bg-black/30 absolute flex justify-center items-center">
      <div className="w-[400px] bg-white rounded">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Add New Task</h1>
            <button onClick={closeHandle}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <input
            type="text"
            placeholder="new text"
            className="w-full outline-0 p-2 bg-gray-100"
            onChange={inputHandle}
          />
          <select
            className="w-full p-2 bg-gray-100"
            onChange={colorHandle}
            value={selectedColor}
          >
            <option value="default">Select Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          <button
            onClick={addTask}
            className="w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400"
          >
            <IoAddCircleOutline size="1.1rem" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
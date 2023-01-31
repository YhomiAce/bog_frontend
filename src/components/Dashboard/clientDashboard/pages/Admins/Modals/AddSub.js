import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin3Line } from "react-icons/ri";

export const AddSub = ({ closeModal }) => {

    const [inputFields, setInputFields] = useState([
        { name: '' }
      ])

    const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    }
    const addFields = () => {
        let newfield = { name: '' }
        setInputFields([...inputFields, newfield])
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }

  return (
    <div>
      <FaTimes
        className="absolute right-6 top-6 text-red-500 cursor-pointer"
        onClick={closeModal}
      />
      <p className="fw-600 text-lg">Add Subscription Plan</p>
      <div className="mt-3 lg:mt-10 mb-3 fs-500">
        <form>
          <div>
            <label>Name of Subscribtion</label>
            <input
              type="text"
              className="w-full mt-2 rounded border border-gray-400 p-2"
            />
          </div>
          <div className="lg:flex">
            <div className="mt-4 lg:w-6/12 lg:pr-2">
              <label>Subscribtion Duration (years)</label>
              <input
                type="number"
                className="w-full mt-2 rounded border border-gray-400 p-2"
              />
            </div>
            <div className="mt-4 lg:w-6/12 lg:pl-2">
              <label>Subscription Fee (NGN)</label>
              <input
                type="number"
                className="w-full mt-2 rounded border border-gray-400 p-2"
              />
            </div>
          </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label>Add Benefits/Previledges</label>
                    <MdAddCircle onClick={addFields} className='text-xl text-primary' />
                </div>
                {inputFields.map((input, index) => {
                    return (
                        <div key={index} className='flex'>
                            <input
                                name='name'
                                placeholder='input benefits'
                                className="w-full mt-2 rounded border border-gray-400 p-2"
                                value={input.name}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <button className="mx-2" onClick={() => removeFields(index)}><RiDeleteBin3Line className="text-xl text-red-600"/></button>
                        </div>
                    )
                    })}
            </div>
            <div className="mt-8 text-end">
                <button className="lg:px-10 px-5 bg-primary fw-600 py-2 text-white rounded-lg">
                    Add Plan
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

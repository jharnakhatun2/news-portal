import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateField = ({ label, type = "text", currentValue, updateHandler, placeholder }) => {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState(currentValue || "");
  const [message, setMessage] = useState('');

  const handleToggle = () => {
    setToggle(prev => !prev);
    setMessage(`Please enter a new ${label ? label.toLowerCase() : "label"}.`);
  };

  const handleSave = async () => {
    setMessage('');
    try {
      await updateHandler(inputValue);
      toast.success(`${label} updated successfully`, {
        position: "bottom-right",
        autoClose: 2000,
        style: { backgroundColor: '#333', color: '#fff' },
      });
      setToggle(false);
    } catch (error) {
      console.error(`Error updating ${label ? label.toLowerCase() : "label"}:`, error.message);
      toast.error(`Failed to update ${label ? label.toLowerCase() : "label"}`, {
        position: "bottom-right",
        autoClose: 2000,
        style: { backgroundColor: '#A32727', color: '#fff' },
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between text-black text-sm">
        <h3>{label}</h3>
        {toggle ? (
          <button onClick={handleSave} className="underline">Save</button>
        ) : (
          <button onClick={handleToggle} className="underline">Update</button>
        )}
      </div>

      {toggle ? (
        <input
          type={type}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="border rounded p-2 outline-none mt-2"
        />
      ) : (
        <p className="text-gray-400">{currentValue || `No ${label ? label.toLowerCase() : "label"} added`}</p>
      )}

      {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
    </div>
  );
};

export default UpdateField;

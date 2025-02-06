import React, { useEffect, useState } from "react"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProfileDiv = ({ label, placeholder, storageKey }) => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const [fieldData, setFieldData] = useState('');
    const [savedData, setSavedData] = useState('');

    useEffect(() => {
        const storedData = localStorage.getItem(storageKey);
        if (storedData) {
            setSavedData(storedData);
        }
    }, [])

    const handleToggle = () => {
        setToggleBtn(pre => !pre);
    }

    const handleChange = () => {
        const data = fieldData.trim();
        if (data) {
            setSavedData(data);
            localStorage.setItem(storageKey, data);
            toast.success(`${label} updated successfully`, {
                position: "bottom-right",
                autoClose: 2000,
                style: { backgroundColor: '#333', color: '#fff' },
              });
        }
        
        setToggleBtn(false);
    }

    return (
        <div>
            <div className="flex justify-between text-black text-sm">
                <h3>{label}</h3>
                {toggleBtn ?
                    <button onClick={() => {
                        handleToggle();
                        handleChange();
                    }} className="underline">Save</button> :
                    <button onClick={handleToggle} className="underline">Update</button>
                }
            </div>

            {toggleBtn ?
                <input type="text" value={fieldData} onChange={(e) => setFieldData(e.target.value)} placeholder={savedData || placeholder} className="border rounded p-1 outline-none" /> : <p className="text-gray-400 ">{savedData || `No ${label ? label.toLowerCase() : "label"} added`}</p>}

        </div>
    )
};

export default ProfileDiv;

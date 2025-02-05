import { updatePassword } from "firebase/auth";
import React, { useState } from "react"
import { authApp } from "../../components/Authentication/Context/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PasswordUpdate = () => {
    const [toggle, setToggle] = useState(false);
    const [passwordData, setPasswordData] = useState("");
    const [message, setMessage] = useState('');
    const { user } = authApp();

    const handleToggle = () => {
        setToggle(pre => !pre);
        setMessage("Please enter a new password.")
    }

    // change password
    const handlePasswordChange = async () => {
        setMessage('');
       
        try {
            await updatePassword(user, passwordData)
            toast.success("Password updated successfully",{
                position: "bottom-right",
                autoClose: 2000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    backgroundColor: '#333',
                    color: '#fff',
                  },
              });
            setPasswordData("");
        } catch (error) {
            console.error(error.message)
        }

    }
    return (
        <div>
            <div className="flex justify-between text-black text-sm">
                <h3>Password</h3>
                {toggle ?
                    <button onClick={()=>{
                        handleToggle();
                        handlePasswordChange();
                    }} className="underline">Save</button> :
                    <button onClick={handleToggle} className="underline">Update</button>}
            </div>

            {toggle ?
                <input type="password" value={passwordData} onChange={(e) => setPasswordData(e.target.value)} placeholder="••••••••••••••••" className="border rounded p-1 outline-none" /> : <p className="text-gray-400 ">••••••••••••••••</p>}

            {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
        </div>
    )
};

export default PasswordUpdate;

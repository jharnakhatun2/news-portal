import React from "react"
import ToggleIcon from "./ToggleIcon";

const PasswordInput = ({ label, isVisible, toggleVisibility , registerOptions }) => {
    return (
        <div className="form-control relative">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input {...registerOptions } type={isVisible ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            {/* eye icon */}
            <ToggleIcon isVisible={isVisible} onClick={toggleVisibility} />
        </div>
    )
};

export default PasswordInput;

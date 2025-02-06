import React, { useState } from "react"
import { authApp } from "../../components/Authentication/Context/AuthProvider";
import ProfileDiv from "../../util/UserProfile/ProfileDiv";
import { updatePassword, updateProfile } from "firebase/auth";
import UpdateField from "../../util/UserProfile/UpdateField";

const ProfileBody = () => {
  const { user } = authApp();

  return (
    <div className=" flex items-center justify-center py-5 text-sm">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-baseline">
          <h2 className="text-lg sm:text-xl text-gray-800">Your profile</h2>
          {user?.photoURL ? <img src={user?.photoURL} alt="Profile Image" className="rounded-full" /> : <img src="" alt="Profile Image" className="rounded-full" />}
        </div>
        <div className="divider divider-neutral"></div>
        {/* Display Name Update */}
        <UpdateField
          label="Display Name"
          currentValue={user?.displayName}
          placeholder="Enter your name"
          updateHandler={(newName) => updateProfile(user, { displayName: newName })}
        />
        <div className="divider"></div>

        {/* User name Update */}
        <ProfileDiv label='User name' placeholder='Enter user name' storageKey='username' />
        <div className="divider"></div>

        {/* location update */}
        <ProfileDiv label='Your Location' placeholder='Enter location name' storageKey='location' />


        <h2 className="text-lg sm:text-xl text-gray-800 pt-10">Account information</h2>
        <div className="divider divider-neutral"></div>
        {/* Email Update */}
        <div>
          <h3>Email</h3>
          <p className="text-gray-400">{user.email}</p>
        </div>
        <div className="divider"></div>
        {/* Password Update */}
        <UpdateField
          label="Password"
          type="password"
          currentValue="........................."
          placeholder="Enter new password"
          updateHandler={(newPassword) => updatePassword(user, newPassword)}
        />
      </div>
    </div>

  )
};

export default ProfileBody;

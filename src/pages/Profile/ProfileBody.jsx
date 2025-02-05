import React from "react"

const ProfileBody = () => {
  return (
    <div className=" flex items-center justify-center py-5 text-sm">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-lg sm:text-xl text-gray-800">Your profile</h2>
        <div className="divider divider-neutral"></div>
        {/* Email Update */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Name</h3>
            <button className="underline">Update</button>
          </div>
          <p className="text-gray-400">No name added</p>
        </div>
        <div className="divider"></div>
        {/* Password Update */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Username</h3>
            <button className="underline">Update</button>
          </div>
          <p className="text-gray-400 ">No username added</p>
        </div>
        <div className="divider"></div>
        {/* Google account Disconnect */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Your Location</h3>
            <button className="underline">Update</button>
          </div>
          <p className="text-gray-400 ">No places added</p>
        </div>
        
        
        <h2 className="text-lg sm:text-xl text-gray-800 pt-10">Account information</h2>
        <div className="divider divider-neutral"></div>
        {/* Email Update */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Email address</h3>
            <button className="underline">Update</button>
          </div>
          <p className="text-gray-400 ">jharnaamin8@gmail.com</p>
        </div>
        <div className="divider"></div>
        {/* Password Update */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Password</h3>
            <button className="underline">Update</button>
          </div>
          <p className="text-gray-400 ">••••••••••••••••••</p>
        </div>
        <div className="divider"></div>
        {/* Google account Disconnect */}
        <div>
          <div className="flex justify-between text-black text-sm">
            <h3>Connected accounts</h3>
            <button className="border px-2 py-1">Disconnect</button>
          </div>
          <p className="text-gray-400 ">Google</p>
        </div>
       
        
      </div>




    </div>

  )
};

export default ProfileBody;

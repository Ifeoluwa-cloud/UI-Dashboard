
function ProfileComponent ({ imageUrl, fullName, email }) {
  return (
    <>
        <div className="flex flex-col text-white items-center">
            {/* Image */}
            
            <div className="relative rounded-full overflow-hidden w-32 h-32">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-blue-500 to-pink-500"></div>
                {/* Profile image */}
                <img
                src={imageUrl} // Use the imageUrl prop
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                />
            </div>
            
            {/* Full Name */}
            <h2 className="text-xl font-semibold mb-1">{fullName}</h2>
            {/* Email */}
            <p className="text-sm">{email}</p>
        </div>
    </>
  );
}

export default ProfileComponent;

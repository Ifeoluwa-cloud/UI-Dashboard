import React, { useState, useEffect } from 'react';
import MockAPI from '../MockAPI'; // Import the MockAPI component

function UsersAvatarGroup() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          const data = MockAPI(); 
          setUsers(data); 
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchData(); 
    }, []); 

    return (
      <div className="flex mr-2">
        {/* Render user images */}
        {users.slice(0, 4).map(user => (
          <img
            key={user.id} // Set a unique key for each image
            className="border-2 border-[#425C5A] rounded-full h-10 w-10 -mr-2"
            src={user.image} // Use the imported image as the src
            alt={`User ${user.id}`} // Provide alternative text for the image
          />
        ))}
        {/* Render additional count if users exceed 6 */}
        {users.length > 4 && (
          <span className="flex items-center justify-center bg-[#C99C33] text-sm text-white font-semibold border-2 border-[#425C5A] rounded-full h-10 w-10">
            +{users.length - 4}
          </span>
        )}
      </div>
    );
  }
  
  // Export the UserAvatarGroup component
  export default UsersAvatarGroup;
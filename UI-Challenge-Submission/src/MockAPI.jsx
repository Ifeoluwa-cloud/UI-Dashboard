// MockAPI.js

// Import necessary images as React assets
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';
import avatar4 from './assets/avatar4.jpg';
import avatar5 from './assets/avatar5.jpg';
import avatar6 from './assets/avatar6.jpg';
import avatar7 from './assets/avatar7.jpg';
import avatar8 from './assets/avatar8.jpg';
import avatar9 from './assets/avatar9.jpg';
import avatar10 from './assets/avatar10.jpg';

// MockAPI component to simulate a mock API providing user image data
const MockAPI = () => {
  // Array of user images with IDs and corresponding imported image assets
  const images = [
    { id: 1, image: avatar1 },
    { id: 2, image: avatar2 },
    { id: 3, image: avatar3 },
    { id: 4, image: avatar4 },
    { id: 5, image: avatar5 },
    { id: 6, image: avatar6 },
    { id: 7, image: avatar7 },
    { id: 8, image: avatar8 },
    { id: 9, image: avatar9 },
    { id: 10, image: avatar10 },
  ];

  // Return the array of user images
  return images;
};

// Export the MockAPI component
export default MockAPI;

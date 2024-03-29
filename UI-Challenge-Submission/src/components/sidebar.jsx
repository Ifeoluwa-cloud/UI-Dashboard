import Users from './usersAvatarGroup';
import ProfileComponent from './profileComponent';
import Map from './map';
import MapImage from '../assets/map.png';
import ProfileImage from '../assets/Profile.jpg';
import Navigation from './navigation';

function sidebar() {
  return (
    <>
        <div className="w-80">
            <div className="relative w-full h-1/3 p-8 bg-[#3D5654]">
                <div className="flex justify-center items-center">
                    <ProfileComponent
                        // Pass the imported image as a prop
                        imageUrl={ProfileImage}
                        fullName="ALEX JOHNSON"
                        email="john.doe@example.com"
                    />
                </div>
            </div>
            <div className="bg-[#425C5A] h-2/3 text-white p-8 space-y-6">
                {/* Sidebar content */}
                <Navigation />
                <div className='p-0'>
                    <h2 className='text-[#C99C33] text-base font-normal'>ACTIVE USERS</h2>
                </div>
                <Users />
                <Map imageUrl={MapImage}/>
            </div>  
        </div>  
    </>
  )
}

export default sidebar

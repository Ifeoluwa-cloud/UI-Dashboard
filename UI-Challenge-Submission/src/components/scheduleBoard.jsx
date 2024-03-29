import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';
  
  const FlightScheduleBoard = () => {
    const flights = [
        { logo: logo1, flightNumber: "ABC123", destination: "New York", status: "On Time", terminal: "A" },
        { logo: logo2, flightNumber: "XYZ456", destination: "Los Angeles", status: "Delayed", terminal: "B" },
        { logo: logo3, flightNumber: "ABC123", destination: "New York", status: "On Time", terminal: "A" },
        { logo: logo1, flightNumber: "XYZ456", destination: "Los Angeles", status: "Delayed", terminal: "B" },
    ];
  
    return (
      <div className="w-full h-full rounded-lg px-10">
        {flights.map((flight, index) => (
          <div key={index}>
            <div className="flex items-center justify-between space-y-10">
              {/* Logo image */}
              <div className="w-24 h-12 mr-4">
                <img src={flight.logo} alt="Airline Logo" className="w-full h-full object-contain" />
              </div>
              {/* Text div */}
              <div className="flex flex-col">
                <div className="font-bold">Flight Number</div>
                <div>{flight.flightNumber}</div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="font-bold">Destination</div>
                <div>{flight.destination}</div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="font-bold">Status</div>
                <div>{flight.status}</div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="font-bold">Terminal</div>
                <div>{flight.terminal}</div>
              </div>
            </div>
            {index !== flights.length - 1 && <hr className="my-4 border-gray-300" />} {/* Divider */}
          </div>
        ))}
      </div>
    );
  };
  
  export default FlightScheduleBoard;
  
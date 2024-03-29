import Map from '../assets/map.png';

const priceBoard = () => {
  return (
    <div>
            <div className="relative w-full h-2/3 p-8 bg-[#425C5A]">
                <div className="w-full flex justify-between text-center text-white">
                        <h4 className="p-4">FROM</h4>
                        <h4 className="p-4">TO</h4>
                </div>
                <div className="w-full flex justify-between text-center text-white">
                        <h4 className="p-4">JFK</h4>
                        <h4 className="p-4">NON STOP</h4>
                        <h4 className="p-4">BOM</h4>
                </div>
                <div className="w-full relative pt-8">
                    {/* Image overlay */}
                    <img
                        src={Map}
                        alt="Travel route Map"
                    />
                </div>
            </div>
            <div className="bg-[#3D5654] h-1/3 text-white p-8 space-y-6">
                <div className="flex justify-between text-center text-xs text-white">
                        <h4 className="w-1/3 bg-[#C99C33] rounded-full p-2">NON STOP</h4>
                        <h4 className="p-2">ONE STOP</h4>
                        <h4 className="p-2">MORE STOP</h4>
                </div>  
                <h4 className="text-xs text-white p-2">PRICE</h4>
            </div>
    </div>
  )
}

export default priceBoard

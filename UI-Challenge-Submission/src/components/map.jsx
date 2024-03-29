
function MapComponent({ imageUrl }) {
  return (
    <>
        <div className="relative w-full h-32">
        {/* Image overlay */}
        <img
            src={imageUrl}
            alt="Custom Map"
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
        </div>
    </>
  );
}

export default MapComponent;

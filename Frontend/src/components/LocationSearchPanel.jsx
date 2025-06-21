function LocationSearchPanel({ setVehiclePanel, setDestination,setOpenLocationPanel }) {
  const locations = [
    "2013,sector-4, Gurugram Haryana 122001",
    "unhani, kanina, Mahender Garh Haryana 123027",
    "sadar bazar,sector-14, Gurugram Haryana 122001",
    "58-R New colony,sector-7, Gurugram Haryana 122001",
    "2013,sector-4, Gurugram Haryana 122001",
  ];
  return (
    <>
      {locations.map((loc, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setVehiclePanel(true);
              setOpenLocationPanel(false);
              setDestination(loc)
            }}
            className="flex border-2 justify-center align-baseline active:border-black border-gray-50 rounded-lg p-3  my-2"
          >
            <div className="mx-2  ">
              <i className="ri-map-pin-2-fill"></i>
            </div>
            <p className="font-medium">{loc}</p>
          </div>
        );
      })}
    </>
  );
}

export default LocationSearchPanel;

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

function Leaflet() {
  const position = [23.7903210, 90.4076959]

  return (  
    <div className='my-8'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-80 w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Banani palace</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Leaflet;
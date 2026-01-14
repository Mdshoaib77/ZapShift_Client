import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Search } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet default icon fix
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ALL_DISTRICTS = [
    { id: 1, district: "Dhaka", name: "Dhaka Central Hub", lat: 23.8103, lng: 90.4125, address: "Motijheel, Dhaka" },
    { id: 2, district: "Chittagong", name: "CTG Port Branch", lat: 22.3569, lng: 91.7832, address: "Agrabad, Chittagong" },
    { id: 3, district: "Sylhet", name: "Sylhet Town Point", lat: 24.8949, lng: 91.8687, address: "Zindabazar, Sylhet" },
    { id: 4, district: "Bogura", name: "Bogura Delivery Center", lat: 24.8481, lng: 89.3730, address: "Satmatha, Bogura" },
    { id: 5, district: "Rajshahi", name: "Rajshahi Main Branch", lat: 24.3745, lng: 88.6042, address: "Saheb Bazar, Rajshahi" },
    { id: 6, district: "Khulna", name: "Khulna Express Hub", lat: 22.8456, lng: 89.5403, address: "Shiv Bari, Khulna" },
    { id: 7, district: "Barishal", name: "Barishal Branch", lat: 22.7010, lng: 90.3535, address: "Sadarr Road, Barishal" },
    { id: 8, district: "Rangpur", name: "Rangpur Point", lat: 25.7439, lng: 89.2752, address: "Rangpur Town" },
    { id: 9, district: "Mymensingh", name: "Mymensingh Hub", lat: 24.7471, lng: 90.4203, address: "Ganginarpar" },
    { id: 10, district: "Cumilla", name: "Cumilla Service Center", lat: 23.4607, lng: 91.1809, address: "Kandirpar, Cumilla" },
];

// ম্যাপ ফ্লাই-টু কন্ট্রোলার
function MapFlyController({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                duration: 1.5, // ফ্লাই করার সময়কাল (সেকেন্ড)
                easeLinearity: 0.25
            });
        }
    }, [center, zoom, map]);
    return null;
}

const Coverage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [mapConfig, setMapConfig] = useState({
        center: [23.6850, 90.3563], // ডিফল্ট বাংলাদেশ সেন্টার
        zoom: 7
    });

    // ইনপুট চেঞ্জ হ্যান্ডলার (রিয়েল টাইম সার্চ)
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const found = ALL_DISTRICTS.find(d => 
                d.district.toLowerCase().includes(value.toLowerCase())
            );
            
            if (found) {
                setMapConfig({
                    center: [found.lat, found.lng],
                    zoom: 12
                });
            }
        } else {
            // ইনপুট খালি করলে ম্যাপ আবার ফুল বাংলাদেশে ফিরে যাবে
            setMapConfig({
                center: [23.6850, 90.3563],
                zoom: 7
            });
        }
    };

    return (
        <section className="bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-8 shadow-sm">
                
                <h2 className="text-[#03373D] text-3xl md:text-4xl font-bold mb-8">
                    We are available in 64 districts
                </h2>

                {/* Search Bar */}
                <div className="relative max-w-lg mb-12 flex items-center">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                            <Search size={20} />
                        </span>
                        <input 
                            type="text" 
                            placeholder="Type district name (e.g. Bogura)" 
                            className="w-full bg-[#F0F2F5] rounded-full py-4 pl-12 pr-4 outline-none border-none focus:ring-2 focus:ring-[#C6E87A] transition-all"
                            value={searchTerm}
                            onChange={handleInputChange} // টাইপ করার সাথে সাথে কাজ করবে
                        />
                    </div>
                    <div className="absolute right-1 bg-[#C6E87A] text-[#03373D] font-bold px-8 py-3 rounded-full shadow-md text-sm">
                        Search
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-[#03373D] text-xl md:text-2xl font-bold mb-6">
                        We deliver almost all over Bangladesh
                    </h3>

                    <div className="h-[550px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl z-0">
                        <MapContainer 
                            center={[23.6850, 90.3563]} 
                            zoom={7} 
                            scrollWheelZoom={true}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* FlyTo Controller */}
                            <MapFlyController center={mapConfig.center} zoom={mapConfig.zoom} />

                            {ALL_DISTRICTS.map((point) => (
                                <Marker 
                                    key={point.id} 
                                    position={[point.lat, point.lng]}
                                    eventHandlers={{
                                        mouseover: (e) => e.target.openPopup(),
                                        mouseout: (e) => e.target.closePopup(),
                                    }}
                                >
                                    <Popup closeButton={false}>
                                        <div className="p-1 min-w-[120px]">
                                            <h4 className="font-bold text-[#03373D] border-b pb-1 mb-1">{point.name}</h4>
                                            <p className="text-xs text-gray-600"><b>District:</b> {point.district}</p>
                                            <p className="text-[10px] text-gray-500 mt-1 italic">{point.address}</p>
                                            <div className="mt-2 bg-[#C6E87A] text-[10px] text-center py-1 rounded-sm font-bold text-[#03373D]">
                                                Active Center
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coverage;
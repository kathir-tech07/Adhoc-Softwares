import { useState, useEffect, useCallback } from 'react';
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMapsLibrary,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

const DEFAULT_COIMBATORE_CENTER = { lat: 11.0642358, lng: 77.0018165 };
const DIRECTIONS_URL = 'https://maps.app.goo.gl/r2m3dAh6mDoTmtJEA';

function OfficeMarkerLayer({
  onLocationResolved,
}: {
  onLocationResolved: (coords: { lat: number; lng: number }, addressText?: string) => void;
}) {
  const placesLib = useMapsLibrary('places');
  const [markerRef, markerEl] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);
  const [markerPos, setMarkerPos] = useState(DEFAULT_COIMBATORE_CENTER);
  const [resolvedAddress, setResolvedAddress] = useState(COMPANY_INFO.address.full);

  useEffect(() => {
    let cancelled = false;
    if (!placesLib || !placesLib.Place?.searchByText) return;

    const lookupOffice = async () => {
      try {
        const { places } = await placesLib.Place.searchByText({
          textQuery: 'Adhoc Softwares, Saravanampatti, Coimbatore 641035, Tamil Nadu',
          fields: ['location', 'formattedAddress', 'displayName'],
          maxResultCount: 1,
        });
        if (!cancelled && places && places.length > 0 && places[0].location) {
          const lat = places[0].location.lat();
          const lng = places[0].location.lng();
          const addr = places[0].formattedAddress || COMPANY_INFO.address.full;
          setMarkerPos({ lat, lng });
          setResolvedAddress(addr);
          onLocationResolved({ lat, lng }, addr);
        }
      } catch {
        // Silently fall back to Coimbatore headquarters coordinates if Places lookup is unavailable
      }
    };

    lookupOffice();
    return () => {
      cancelled = true;
    };
  }, [placesLib, onLocationResolved]);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={markerPos}
        title="Adhoc Softwares – Coimbatore Headquarters"
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin background="#3478F6" borderColor="#081426" glyphColor="#FFFFFF" scale={1.15} />
      </AdvancedMarker>

      {infoOpen && markerEl && (
        <InfoWindow anchor={markerEl} onCloseClick={() => setInfoOpen(false)} maxWidth={260}>
          <div className="p-1 text-[#172337]">
            <p className="font-bold text-sm text-[#081426]">Adhoc Softwares</p>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">{resolvedAddress}</p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#3478F6] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function CoimbatoreOfficeMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const [center, setCenter] = useState(DEFAULT_COIMBATORE_CENTER);
  const [mapError, setMapError] = useState(false);

  const handleLocationResolved = useCallback((coords: { lat: number; lng: number }) => {
    setCenter(coords);
  }, []);

  if (!apiKey || mapError) {
    return (
      <div className="relative h-[360px] lg:h-full min-h-[360px] w-full rounded-xl overflow-hidden border border-slate-800 bg-[#081426] shadow-lg">
        <iframe
          title="Adhoc Softwares Location Map"
          src="https://maps.google.com/maps?q=11.0642358,77.0018165&hl=en&z=17&output=embed"
          className="w-full h-full min-h-[360px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#081426]/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/60 shadow-md flex items-center justify-between gap-3 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#3478F6]/20 border border-[#3478F6]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#21C8E5]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Adhoc Softwares</p>
              <p className="text-[11px] text-slate-300">Saravanampatti, Coimbatore · 641035</p>
            </div>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3478F6] hover:bg-[#2563EB] text-white text-xs font-medium transition-colors shrink-0"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[360px] lg:h-full min-h-[360px] w-full rounded-xl overflow-hidden border border-slate-200 bg-[#F4F7FB]">
      <APIProvider
        apiKey={apiKey}
        libraries={['marker', 'places']}
        language="en"
        region="IN"
        onError={() => setMapError(true)}
      >
        <GoogleMap
          mapId="DEMO_MAP_ID"
          defaultCenter={DEFAULT_COIMBATORE_CENTER}
          center={center}
          defaultZoom={15}
          gestureHandling="cooperative"
          internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
          style={{ width: '100%', height: '100%' }}
        >
          <OfficeMarkerLayer onLocationResolved={handleLocationResolved} />
        </GoogleMap>
      </APIProvider>
    </div>
  );
}

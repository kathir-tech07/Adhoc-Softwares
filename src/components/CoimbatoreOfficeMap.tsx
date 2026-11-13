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

const DEFAULT_COIMBATORE_CENTER = { lat: 11.0785, lng: 77.0016 };
const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=Adhoc+Softwares+Saravanampatti+Coimbatore+641035';

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
      <div className="h-[360px] lg:h-full min-h-[360px] w-full rounded-xl bg-[#081426] text-white p-6 flex flex-col justify-between border border-slate-800">
        <div className="flex items-start justify-between gap-4">
          <div className="w-11 h-11 rounded-lg bg-[#3478F6]/20 border border-[#3478F6]/40 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#21C8E5]" aria-hidden="true" />
          </div>
          <span className="text-xs font-mono text-slate-400">Coimbatore · 641035</span>
        </div>

        <div className="space-y-2">
          <p className="text-base font-semibold text-white">Adhoc Softwares Headquarters</p>
          <p className="text-sm text-slate-300 leading-relaxed">{COMPANY_INFO.address.full}</p>
        </div>

        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3478F6] hover:bg-[#2563EB] text-white text-sm font-semibold transition-colors w-full sm:w-auto"
        >
          <span>View Location on Google Maps</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
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

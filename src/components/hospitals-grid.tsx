"use client";

import HospitalCard from "./hospital-card";

import {
  HospitalDataWithImage,
  HospitalDataWithImageWithDistance,
} from "@/lib/fakeData";

import { useEffect } from "react";
import { useState } from "react";

import { getDistanceFromLatLonInKm } from "@/utils/utilFunctions";

export default function HosptialsGrid({
  hospitalsData,
}: {
  hospitalsData: HospitalDataWithImage[];
}) {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((location) => {
      const locationObject = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(locationObject);
    });
  }, []);

  const hospitalDataWithDistance = hospitalsData.map(
    (hospital: HospitalDataWithImage) => {
      return {
        ...hospital,
        distance: getDistanceFromLatLonInKm(
          location.latitude,
          location.longitude,
          hospital.location.latitude,
          hospital.location.longitude
        ),
      };
    }
  );

  const hospitalCards: React.ReactNode[] = hospitalDataWithDistance.map(
    (hospital: HospitalDataWithImageWithDistance) => (
      <HospitalCard
        key={Math.random()}
        name={hospital.name}
        rating={hospital.rating}
        imageSrc={hospital.imageSrc}
        distance={
          location.latitude && location.longitude
            ? hospital.distance
            : undefined
        }
      />
    )
  );

  return (
    <div
      className="grid gap-5 gap-y-10 ml-auto mr-auto px-9 max-w-screen-2xl"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(235px, 1fr))",
      }}
    >
      {hospitalCards}
    </div>
  );
}

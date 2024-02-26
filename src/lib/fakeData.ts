export interface HospitalData {
  name: string;
  rating: number;
  pincode: string;
  id: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface HospitalDataWithImage extends HospitalData {
  imageSrc: string;
}

export interface HospitalDataWithImageWithDistance
  extends HospitalDataWithImage {
  distance: number;
}

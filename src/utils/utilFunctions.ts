export const nameToId = (name: string) => {
  const filteredName = name.toLowerCase().replaceAll(" ", "-");
  const tempNameArray: string[] = [];
  for (let i: number = 0; i < filteredName.length; i++) {
    if (
      (filteredName.charCodeAt(i) >= 97 && filteredName.charCodeAt(i) <= 122) ||
      filteredName.charAt(i) === "-"
    ) {
      tempNameArray.push(filteredName[i]);
    }
  }
  return tempNameArray.toString().replaceAll(",", "");
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

export const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return Number(d.toFixed(1));
};

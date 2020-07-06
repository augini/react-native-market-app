import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  try {
    const getLocation = async () => {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    };

    useEffect(() => {
      getLocation();
    });
  } catch (error) {
    console.log("Location not granted");
  }

  return location;
};

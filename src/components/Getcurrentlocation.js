import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

const CurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            console.log('Location permission denied');
          }
        } else {
          getCurrentLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          reverseGeocode(latitude, longitude);
        },
        error => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    const reverseGeocode = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDd-PP07ceKPBnFCHbL2ZL5LEBYsw853p0`
        );
        if (response.data && response.data.results.length > 0) {
          const addressComponents = response.data.results[0].address_components;
          const locationName = addressComponents.find(component => component.types.includes('locality'));
          if (locationName) {
            setLocationName(locationName.long_name);
          } else {
            console.log('Location name not found in response');
          }
        } else {
          console.log('No address found');
        }
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    };

    requestLocationPermission();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {currentLocation ? (
        <>
          <Text>
            Latitude: {currentLocation.latitude}, Longitude: {currentLocation.longitude}
          </Text>
          <Text>Location Name: {locationName || 'Unknown'}</Text>
        </>
      ) : (
        <Text>Fetching current location...</Text>
      )}
    </View>
  );
};

export default CurrentLocation;



import React from 'react';

import {useParams} from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Pidurangala',
    description: 'The best place to view legendary Sirigiya Rock.',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/596b2969d2b85786e6892853/1533043419137-G6DVP3RGN9YLV76Y6F8T/ke17ZwdGBToddI8pDm48kGTJ8Z1cmxTlWoEgYHtRFB0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2CmM36Zl4gtM3rrckeQVk7d1wHpBH1aG7pbxzWwyEUnwm_AaHWq01a8yFgqe9oqFs/Pidurangala+Rock+Sunrise?format=750w',
    address: 'Sigiriya',
    location: {
      lat: 7.9656602, 
      lng: 80.7599911
    },
    creator: 'as'
  },
  {
    id: 'p2',
    title: 'Mirissa',
    description: 'Home to many seafood restaurants, best known for surfing & seasonal whale watching.',
    imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2019/06/Mirissa-cover_24th-Mar.jpg',
    address: 'Mirissa, Sri Lanka',
    location: {
      lat: 5.943542,
      lng: 80.4565393
    },
    creator: 'as'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
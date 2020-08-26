// update title or description
import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';



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
const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    },
    true
  );

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"


        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
import React from 'react';
import UsersList from '../components/UsersList';


const Users=() =>{
  const USERS =[
    {
      id:'as' ,
    name:'asiri', 
    image:'https://media.gettyimages.com/photos/young-woman-kayaking-through-the-backwaters-of-monroe-island-picture-id1031430214?s=2048x2048' ,
    places: 3
  }]
  return <UsersList items={USERS}/>;
};

export default Users;
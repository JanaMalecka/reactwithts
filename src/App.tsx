import React from 'react';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div>
      {/*       <Parent /> */}
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;

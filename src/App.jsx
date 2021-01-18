import React, { useState, useEffect } from 'react';
import './App.scss';
import { makeArtworks, makeCurrentUsers } from './components/common/Utils';
import SideDrawer from './components/common/SideDrawer';
import UrgentTasks from './components/counters/UrgentTasks';
import CompletedTasks from './components/counters/CompletedTasks';
import ArtworksTable from './components/artworks/ArtworksTable';
import TotalArtworks from './components/counters/TotalArtworks';
import Timeline from './components/timeline/Timeline';
import TaskList from './components/tasks/TaskList';
import Footer from './components/common/Footer';

const App = () => {
  const [artworks, setArtworks] = useState([]);
  const [users, setUsers] = useState([]);

  const handleArtworks = () => {
      setArtworks(makeArtworks(250));
      // console.log(makeArtworks(250));
  };

  const handleUsers = () => {
    setUsers(makeCurrentUsers(1));
};

  useEffect(() => {
    handleArtworks();
    handleUsers();
  },[])

  return (
    <main className="app">
      <SideDrawer users={users}/>
      <div className="left-scene">
        <h1>Dashboard</h1>
        <div className="wrapper-counters">
          <TotalArtworks artworks={artworks}/>
          <UrgentTasks artworks={artworks}/>
          <CompletedTasks />
        </div>        
          <ArtworksTable artworks={artworks}/>
          <Timeline artworks={artworks} />
      </div>
      <div className="right-scene">
        <TaskList />
        <Footer />
      </div>
    </main>
  );
}

export default App;

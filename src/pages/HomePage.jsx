import React from 'react';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList';
import AudioComponent from '../components/AudioComponent';


const HomePage = () => {
  return (
    <div>
      <h2>URL Shortener</h2>
      <URLForm />
      <URLList />
      <AudioComponent/>
    </div>
  );
};

export default HomePage;
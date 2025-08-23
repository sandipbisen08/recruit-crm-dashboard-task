import React from 'react';
import Layout from './components/Layout';
import { useCandidate } from './hooks/useCandidate';

function App() {
  const { candidate, updateCandidate } = useCandidate();

  return (
    <Layout 
      candidate={candidate} 
      updateCandidate={updateCandidate} 
    />
  );
}

export default App;

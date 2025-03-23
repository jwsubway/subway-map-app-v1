import React from 'react';
import stations from './data/stations.json';
import connections from './data/connections.json';

function App() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">나만의 지하철 지도</h1>
      <p>총 역 수: {stations.length}</p>
      <p>총 연결 수: {connections.length}</p>
    </div>
  );
}

export default App;

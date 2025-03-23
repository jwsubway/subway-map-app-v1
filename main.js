import stations from './stations.json' assert { type: 'json' };
import connections from './connections.json' assert { type: 'json' };

document.getElementById("root").innerHTML = `
  <h1 style="font-family:sans-serif; text-align:center">🚇 나만의 지하철 지도</h1>
  <p style="text-align:center">총 역 수: ${stations.length}</p>
  <p style="text-align:center">총 연결 수: ${connections.length}</p>
`;

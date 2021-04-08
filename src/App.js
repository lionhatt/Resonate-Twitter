import { Timeline } from 'react-twitter-widgets';

function App() {
  return (
    <div className="App">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'resonateAU'
        }}
      />
    </div>
  );
}

export default App;

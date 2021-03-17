import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID='933b9e00-eeae-480d-a571-b882a03550fa'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppsProps) => <ChatFeed {...chatAppsProps} /> }
      />
    </div>
  )
}

export default App

import { useState } from 'react';
import initialEmails from './data/emails';
import './styles/App.css';
import Header from './Header';
import LeftMenu from './Leftmenu';
import Emails from './Emails';
import EmailDisplay from './EmailDisplay';

const getReadEmails = emails => emails.filter(email => !email.read);
const getStarredEmails = emails => emails.filter(email => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);

  const unreadEmails = emails.filter(email => !email.read);
  const starredEmails = emails.filter(email => email.starred);

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  };

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  };

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      <Header/>
      <LeftMenu
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      hideRead={hideRead}
      setHideRead={setHideRead}
      unreadEmails={unreadEmails}
      starredEmails={starredEmails}
      />

      {selectedEmail ? (
        <EmailDisplay 
        selectedEmail={selectedEmail}
        setSelectedEmail={setSelectedEmail}
        />) :
      (
      <Emails
      filteredEmails={filteredEmails}
      toggleRead={toggleRead}
      toggleStar={toggleStar}
      selectedEmail={selectedEmail}
      setSelectedEmail={setSelectedEmail}
      />
      )}
    </div>
  )
}

export default App;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Email from './Email';

function Emails({ 
  filteredEmails, 
  toggleRead, 
  toggleStar, 
  setSelectedEmail }) {
    
    return (
      <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email 
              key={index} 
              email={email} 
              toggleRead={toggleRead} 
              toggleStar={toggleStar} 
              onClick={() => {setSelectedEmail(email);}}
            />
          ))}
        </ul>
      </main>
    );
  }
  
  export default Emails;

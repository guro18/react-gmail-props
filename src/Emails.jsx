//import the individual email component
import Email from './Email'

//emails component
function Emails({ emails, filteredEmails, toggleRead, toggleStar }) {
    return (
      <main className="emails">
        <ul>
          {/* Render individual email items */}
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
          ))}
        </ul>
      </main>
    );
  }
  
  export default Emails;
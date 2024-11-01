/* eslint-disable react/prop-types */

function EmailDisplay({ selectedEmail, setSelectedEmail }) {
    return (
      <div>
        <button onClick={() => setSelectedEmail(null)}>Back</button>
        <ul>
          <h1>{selectedEmail.sender}</h1>
          <h3>{selectedEmail.title}</h3>
        </ul>
      </div>
    );
  }

  export default EmailDisplay;

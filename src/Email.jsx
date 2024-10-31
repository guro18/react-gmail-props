/* eslint-disable react/prop-types */
function Email({ email, toggleRead, toggleStar, onClick }) {
    return (
      <li className={`email ${email.read ? 'read' : 'unread'}`} onClick={onClick}>
        <div className="select">
          <input
            className="select-checkbox"
            type="checkbox"
            checked={email.read}
            onClick={(e) => e.stopPropagation()}
            onChange={() => toggleRead(email)}
          />
        </div>
        <div className="star">
          <input
            className="star-checkbox"
            type="checkbox"
            checked={email.starred}
            onClick={(e) => e.stopPropagation()}
            onChange={() => toggleStar(email)}
          />
        </div>
        <div className="sender">{email.sender}</div>
        <div className="title">{email.title}</div>
      </li>
    );
  }

  export default Email;

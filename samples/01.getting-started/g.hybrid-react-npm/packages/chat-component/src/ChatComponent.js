import React, { useMemo, useState } from 'react';

import ReactWebChat, { createDirectLine } from 'botframework-webchat';

function ChatComponent({ styleOptions }) {
  const [directLine, setDirectLine] = useState();
  useMemo(async () => {
    const res = await fetch('https://localhost:44383/v3/directline/tokens/generate',
    {
      method: 'POST',
      headers:
      {
        'Authorization': 'Bearer mIcpw2jTx1U.WnrxFaDmmvHQyK4vMDPmMaaZ7d8UG0LvQ-hkeZHRVPw'
      }
    });
    const { token } = await res.json();

    setDirectLine(createDirectLine({
      domain: 'https://localhost:44383/v3/directline',
      token: token,
      webSocket: false
    }));
  }, []);

  return (
    <section>
      <header>Chat component is using React {React.version}</header>
      <div className="react-container webchat">
        {!!directLine && <ReactWebChat directLine={directLine} styleOptions={styleOptions} />}
      </div>
    </section>
  );
}

export default ChatComponent;

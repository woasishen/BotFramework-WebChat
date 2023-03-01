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
        'Authorization': 'Bearer Ux95HT3DQ7I.-YVYaK_w3o1CgwSrInXfvPzz_-E9QnvOGWFUcYamQpM'
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

import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ServerName: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef} >
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Felipe Bello"
            date="18/02/2020"
            content="Template desenvolvido no vídeo da Rocketseat!"
          />
        ))}

        <ChannelMessage
          author="Bot do Server"
          date="18/02/2020"
          hasMention
          isBot
          content={
            <>
              <Mention>@Felipe Bello</Mention>, tudo bem?
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ServerName;

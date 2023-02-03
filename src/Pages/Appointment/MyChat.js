import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';

function MyChat() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: 'Henry Mill',
        email: 'henrymill@example.com',
        photoUrl: 'people1.png',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '2',
        name: 'Doctors Portal cutomer care',
        email: 'jessicawells@example.com',
        photoUrl: 'people2.png',
        welcomeMessage: 'Hello!',
        role: 'default',
      });

      const session = new Talk.Session({
        appId: 't74mMhMD',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} />;
}

export default MyChat;
import { useRef } from "react";
import { useWebsocket } from "./useWebSocket";

export const Messages = () => {

    const inputRef = useRef(null);

    const {messages, sendMessage} = useWebsocket('wss://echo.websocket.org');

    const handleClick = () => sendMessage(inputRef.current.value);

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={handleClick}>Send</button>
            Messages:
            {messages.map((_,i)=><div key={i}>{_}</div>)}
        </div>
    );
};  
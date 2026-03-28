import { useCallback, useEffect, useRef, useState } from "react"

export const useWebsocket = (url) => {
    const [messages, setMessages] = useState([]);
    const wsRef = useRef(null);
    const intervalRef = useRef(null);
    const msgBufferRef = useRef([]);

    const sendMessage = msg => wsRef.current?.readyState === WebSocket.OPEN && wsRef.current.send(msg);

    const connect = useCallback((url) => {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => {
            console.log('ws open');
            intervalRef.current = setInterval(() => {
                if (!msgBufferRef.current.length) return;
                const _msgBuffer = [...msgBufferRef.current];
                setMessages(prev => {
                    msgBufferRef.current.length = 0;
                    return [...prev, ..._msgBuffer]
                });
            }, 2000);
        };

        ws.onmessage = ({ data }) => {
            console.log(data);
            msgBufferRef.current.push(data);

        };
        ws.onclose = () => console.log('ws closed');
        ws.onerror = _ => console.log('ws error', _)
    }, []);

    useEffect(() => {
        connect(url);

        return () => {
            clearInterval(intervalRef.current);
            wsRef.current.close();
        };
    }, [connect, url]);

    return { messages, sendMessage };
}

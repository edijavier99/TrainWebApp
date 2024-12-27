import React, { useEffect, useState } from 'react';

interface WebSocketMessage {
  message: string;
}

const WebSocketComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [newComment, setNewComment] = useState<string>('');  // Estado para el nuevo comentario

  useEffect(() => {
    // Conectar al WebSocket sin especificar una sala
    const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/`);

    socket.onopen = () => {
      console.log('WebSocket conectado');
    };

    socket.onmessage = (event: MessageEvent) => {
      const data: WebSocketMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    };

    socket.onclose = () => {
      console.log('WebSocket cerrado');
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ message }));
        setMessage('');
      } else {
        console.error('WebSocket no está abierto. No se puede enviar el mensaje.');
      }
    }
  };

  const handleCreateComment = async () => {
    if (newComment.trim() !== "") {
      const response = await fetch('http://127.0.0.1:8000/api/comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newComment }),
      });

      if (response.ok) {
        setNewComment(''); // Limpiar el campo después de crear el comentario
        console.log('Comentario creado');
      } else {
        console.error('Error al crear el comentario');
      }
    }
  };

  return (
    <div>
      <div>
        <h3>Mensajes:</h3>
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Crear un Comentario:</h3>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario"
        />
        <button onClick={handleCreateComment}>Crear Comentario</button>
      </div>

      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje"
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default WebSocketComponent;

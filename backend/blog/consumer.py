from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    # Mantener un registro de todas las conexiones abiertas
    connections = []

    async def connect(self):
        # Registrar la conexión en el listado de conexiones activas
        print("contestadoooooo")
        self.connections.append(self)
        await self.accept()

    async def disconnect(self, close_code):
        # Eliminar la conexión cuando se desconecte
        print("desssssss",close_code)
        self.connections.remove(self)

    # Método para enviar notificaciones a todos los clientes conectados
    @classmethod
    async def send_notification(cls, message):
        # Verificar si hay conexiones activas
        if cls.connections:
            # Enviar el mensaje a todos los consumidores conectados
            for connection in cls.connections:
                await connection.send(text_data=json.dumps({
                    'message': message
                }))
        else:
            print("No hay conexiones activas.")

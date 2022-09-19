import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from datetime import date
from django.db import models
from .models import Post
from django.contrib.auth.models import User

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'test'

        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
   

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type':'chat_message',
                'message':message
            }
        )

    def chat_message(self, event):
        message = event['message']
        mensaje = Post.objects.create(text=message.split(':')[1], author = message.split(':')[0])
        mensaje.publish()
        
        self.send(text_data=json.dumps({
            'type':'chat',
            'message': {
                'text': mensaje.text,
                'uuid': str(mensaje.uuid),
                'author': mensaje.author,
                'published_date': mensaje.published_date.strftime("%d/%m/%Y, %I:%M:%S")
            }
        }))
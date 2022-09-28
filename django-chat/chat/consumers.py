import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from datetime import date
from django.db import models
from django.utils import timezone

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
    
        self.send(text_data=json.dumps({
            'type':'chat',
            'message': {
                'text': message.split(':')[1],
                'uuid': "def",
                'author': message.split(':')[0],
                'published_date': (timezone.now()).strftime("%d/%m/%Y, %I:%M:%S")
            }
        }))

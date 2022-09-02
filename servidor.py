# Connection Data
import socket
import threading


host = "192.168.1.10"  # El servidor y los clientes deben pertenecer a la misma red, de lo contrario, no funcionara
port = 55555  # Puerto puede ser cualquiera evitar el 8000, suele estar ocupado.

server = socket.socket()  # Creamos el socket
server.bind(
    (host, port)
)  # Le indicamos que busque si esta libre tanto la ip como el puerto
server.listen()  # El socket se pone a esperar a los clientes

# Lista de clientes
clientes = []
usuarios = []


# Esta funcion envia mensajes a todos los usuarios conectados al servidor
def chat(msg):
    for cliente in clientes:
        cliente.send(msg)


# Tenemos un control de los usuarios que entran como de sus mensajes
def control(cliente):
    while True:
        try:
            # Recibimos el mensaje que envio el usuario y lo difundimos
            msg = cliente.recv(1024)
            chat(msg)
        except:
            # En caso de que el cliente abandone conexion, lo eliminamos de las listas y notificamos
            index = clientes.index(cliente)
            clientes.remove(cliente)
            cliente.close()
            usuario = usuarios[index]
            chat("{} ha abandonado el chat!".format(usuario).encode())
            usuarios.remove(usuario)
            break


# El servidor estable con los clientes
def recibir():
    while True:

        cliente, direccion = server.accept()
        print("Conectado con{}".format(str(direccion)))

        cliente.send("Debe ingresar usuario".encode())
        usuario = cliente.recv(1024).decode()
        usuarios.append(usuario)
        clientes.append(cliente)

        print("El usuario '{}'".format(usuario))
        chat("{} se ha conectado".format(usuario).encode())
        cliente.send("Conexion establecida".encode())

        # Creamos hilos, esto con la finalidad de que el servidor siempre este disponible tanto como para recibir mensajes, como clientes.
        thread = threading.Thread(target=control, args=(cliente,))
        thread.start()


recibir()

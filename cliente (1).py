import socket
import threading

usuario = input("Ingresa tu nombre de usuario: ")

cliente = socket.socket()
cliente.connect(("192.168.71.167", 55555))


def recibir():
    while True:
        try:
            mensaje = cliente.recv(1024).decode()
            if mensaje == "Debe ingresar usuario":  # Obligamos a ingresar usuario
                cliente.send(usuario.encode())
            else:
                print(mensaje)
        except:
            print("Error")
            cliente.close()
            break


def enviar():
    while True:
        mensaje = "{}: {}".format(usuario, input(""))
        cliente.send(mensaje.encode())


recibir_thread = threading.Thread(target=recibir)
recibir_thread.start()

enviar_thread = threading.Thread(target=enviar)
enviar_thread.start()

# El cliente se crean hilos, para recibir y enviar mensajes, de lo contrario limitariamos al cliente a solo recibir o enviar mensajes.

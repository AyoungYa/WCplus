# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: utils\network.py


def get_ip():
    """
    :return: 获取局域网IP地址
    """
    from instance import PLATFORM
    if PLATFORM == 'win':
        import socket
        ip = socket.gethostbyname(socket.gethostname())
        return ip
    if PLATFORM == 'osx':
        return '终端运行 ifconfig 查看'


if __name__ == '__main__':
    print(get_ip())
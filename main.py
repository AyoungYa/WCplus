# Python bytecode 3.6 (3372)
# Embedded file name: main.py
# Decompiled by https://python-decompiler.com
"""

"""
from threading import Thread
from multiprocessing import Process
import multiprocessing
from flask_server import run_webserver
from cmp.l111l_wcplus_ import start_proxy
import webbrowser, time

def proxy_server():
    """
    :return:
    """
    start_proxy()


def other_tasks():
    """
    :return: 
    """
    from app.api.crawler import ReqData
    while True:
        ReqData().send()
        time.sleep(3)


if __name__ == '__main__':
    multiprocessing.freeze_support()
    Process(target=proxy_server).start()
    Thread(target=other_tasks).start()
    webbrowser.open('http://localhost:5000')
    run_webserver()

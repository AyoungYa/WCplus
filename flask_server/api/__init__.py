# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: flask_server\api\__init__.py
"""
RESTful API
"""
from flask_server.api.helloworld import HelloWorld
from flask_server.api.crawler import Crawler
from flask_server.api.gzh import GZH
from flask_server.api.settings import Settings
from flask_server.api.search import Search

api_resources = [
    {'res': HelloWorld,
     'url': '/helloworld'},
    {'res': Crawler,
     'url': '/crawler'},
    {'res': GZH,
     'url': '/gzh'},
    {'res': Settings,
     'url': '/settings'},
    {'res': Search,
     'url': '/search'}]

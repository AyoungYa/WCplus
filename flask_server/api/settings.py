# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: l1l11_wcplus_\api\settings.py
from flask_restful import Resource, reqparse
from instance import user_settings
parser = reqparse.RequestParser()
arguments = ['proxy', 'use_proxy', 'article_list_delay', 'reading_data_delay', 'save_html']
for arg in arguments:
    parser.add_argument(arg)

class Settings(Resource):

    def get(self):
        return user_settings.get()

    def put(self):
        args = parser.parse_args()
        user_settings.insert(args)
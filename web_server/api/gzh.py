# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: l1l11_wcplus_\api\l11lll1l1_wcplus_.py
from flask_restful import Resource, reqparse
parser = reqparse.RequestParser()
arguments = ['nickname', 'type', 'start', 'end']
for arg in arguments:
    parser.add_argument(arg)

class GZH(Resource):

    def get(self):
        from app.api.gzh import Finished
        return Finished().get()

    def post(self):
        args = parser.parse_args()
        from app.api.gzh import Finished
        return Finished().get_article_list(args)
# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: instance\__init__.py
"""
定义全局对象
"""
from cmp.db.l1ll11l11_wcplus_ import CollectionOperation
col_crawler_log = CollectionOperation('crawler_log')
col_req_data = CollectionOperation('req_data')
from app.l1ll11ll1_wcplus_.req_data import ReqData
rd = ReqData()
from app.api.settings import Settings
user_settings = Settings()
from app.l1ll11ll1_wcplus_ import l1ll1ll1ll_wcplus_
stop_and_start = l1ll1ll1ll_wcplus_()

from utils.base import the_platform
PLATFORM = the_platform()
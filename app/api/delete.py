# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: app\api\delete.py
"""
负责删除工作
"""

class DeleteGZH:
    """
    删除一个公众号的全部数据
    """

    def __init__(self, nickname):
        self.nickname = nickname

    def delete_collection(self):
        from cmp.db.l1ll11l11_wcplus_ import db_instance
        db_instance.drop_collection(self.nickname)

    def delete_crawler_log(self):
        from instance import col_crawler_log
        col_crawler_log.delete(nickname=self.nickname)

    def delete_html(self):
        """
        :return: wcplus的设计初衷是希望大家尽可能多保存微信数据
        暂时设定手动删除html文档
        """
        pass

    def delete_index(self):
        """
        :return: 从索引中删除
        """
        from app.search.index import GZHIndex
        GZHIndex(self.nickname).delete()

    def run(self):
        try:
            self.delete_collection()
            self.delete_crawler_log()
            self.delete_html()
            self.delete_index()
        except:
            from utils.base import logger
            logger.warning('删除数据遇到一个警告')

        from utils.front import notification
        notification(self.nickname, '删除完成 刷新页面公众号消失', 'success')
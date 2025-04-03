# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: app\command_handler\l111ll1ll_wcplus_.py
"""
run 方法必须
"""
from utils.front import command_log

class IndexAllGZH:

    def __int__(self):
        pass

    def run(self, command, cmd_args):
        import time
        begin_time = time.time()
        print(command, cmd_args)
        from instance import col_crawler_log
        gzhs = col_crawler_log.get()
        clean_gzhs = []
        for g in gzhs:
            clean_gzhs.append(g['nickname'])

        if len(cmd_args) and set(cmd_args) <= set(clean_gzhs):
            clean_gzhs = cmd_args
        for nickname in clean_gzhs:
            command_log('> 搜集文章正文 %s' % nickname)
            from app.weixin_crawler.article import get_all_article_by_nickname
            get_all_article_by_nickname(nickname, worker_num=128)
            command_log('>> 创建索引 服务搜索 %s' % nickname)
            from app.api.crawler import index_gzh
            index_gzh(nickname)
            command_log('>>> 完成 %s' % nickname)

        command_log('指令完成 用时%.1f分钟' % ((time.time() - begin_time) / 60))
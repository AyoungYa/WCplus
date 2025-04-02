# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: app\api\search.py
"""
为搜索相关的界面提供数据
"""


def index_info():
    """
    根据index的数据 提供搜索选项
    1. 可用的搜索范围
    2. index的总文档数
    """
    from app.search.search import GZHSearch
    index_list = GZHSearch.get_all_index_info()
    total_doc = 0
    index_info_list = []
    for i in index_list:
        total_doc += i[1]
        index_info_list.append({'value': i[0], 'lable': '%s %d' % (i[0], i[1])})

    index_info_list = [{'value': '全部',
                        'lable': '全部 ' + str(total_doc)}] + index_info_list
    return index_info_list


if __name__ == '__main__':
    print(index_info())

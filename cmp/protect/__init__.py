# uncompyle6 version 3.2.6
# Python bytecode 3.6 (3379)
# Decompiled from: Python 3.6.6 (default, Mar 29 2019, 00:03:27) 
# [GCC 4.8.5 20150623 (Red Hat 4.8.5-36)]
# Embedded file name: cmp\protect\__init__.py
from utils.base import logger
from utils.time import get_internet_time
from datetime import datetime

def get_uuid():
    """
    :return: (UUID, ip)
    用该方法的返回的IP地址似乎有问题
    """
    from psutil import net_if_addrs
    from instance import PLATFORM
    uuid = []
    for k, v in net_if_addrs().items():
        for item in v:
            address = item[1]
            if PLATFORM == 'win':
                if '-' in address and len(address) == 17:
                    uuid.append(int(address.replace('-', ''), 16))
                else:
                    if PLATFORM == 'osx' and ':' in address and len(address) == 17:
                        uuid.append(int(address.replace(':', ''), 16))

    return uuid


class Passport:

    @classmethod
    def get_uuid_first(cls):
        uuid = get_uuid()
        if len(uuid):
            return uuid[0]
        else:
            return 1

    @classmethod
    def check_license(cls, q=True):
        mac, pt = cls.read_license()
        if not mac and not pt:
            return False
        else:
            uid_first = cls.get_uuid_first()
            uuid = get_uuid()
            if uid_first == 1:
                return False
            if int(mac) not in uuid:
                if not q:
                    logger.warning('证书错误')
                return False
            end_time = int(pt) - int(mac) - 12874767561234
            net_time = get_internet_time()
            if not net_time:
                return False
            time_range = end_time - get_internet_time()
            if time_range <= 0:
                if not q:
                    logger.warning('证书过期')
                return False
            time_s = datetime.utcfromtimestamp(end_time).strftime('%Y-%m-%d %H:%M:%S')
            if not q:
                logger.info('证书有效至' + time_s)
            return time_s

    @classmethod
    def read_license(cls):
        try:
            data = None
            with open('./license.ca', 'r', encoding='utf-8') as (f):
                data = f.readlines()
            mac = int(data[70][:-1])
            license_end = int(data[91][:-1])
            return mac, license_end
        except:
            logger.warning('未能找到授权证书license.ca')
            return (None, None)


if __name__ == '__main__':
    print(get_uuid())
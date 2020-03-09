from time import time
import requests
import json


def postForParameter(content):
    content = {'content': content}
    res_json = json.loads(requests.post('http://127.0.0.1:3000/youdao',data=content).text)
    return res_json

def setPostData(content):
    res_json = postForParameter(content)
    find_data = {
        "i": content,
        "from": "AUTO",
        "to": "AUTO",
        "smartresult": "dict",
        "client": "fanyideskweb",
        "salt": res_json['salt'],
        "sign": res_json['sign'],
        "ts": res_json['ts'],
        "bv": res_json['bv'],
        "doctype": "json",
        "version": '2.1',
        "keyfrom": "fanyi.web",
        "action": "FY_BY_REALTlME"
    }
    return find_data

def requestsPost(content):
    # Cookie用不了的时候记得替换
    headers = {
        'Cookie': 'P_INFO=huangsheng6668@163.com|1578619668|0|other|00&99|gud&1577759925&mail_client#gud&null#10#0#0|&0||huangsheng6668@163.com; _ntes_nnid=8ac64f03498e6899816d9806d9103c62,1579055247910; OUTFOX_SEARCH_USER_ID_NCOO=1532566323.7705622; OUTFOX_SEARCH_USER_ID=-1961211936@117.136.40.221; JSESSIONID=aaaHBL6lbW6bW7I7Fvxbx; ___rl__test__cookies=1582037591827',
        'Host': 'fanyi.youdao.com',
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'http://fanyi.youdao.com',
        'Referer': 'http://fanyi.youdao.com',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
    }
    session = requests.session()
    session.headers = headers
    json_session_text = json.loads(session.post('http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule', data=setPostData(content)).text)
    print('译文：' + json_session_text['translateResult'][0][0]['tgt'])
    print('原文：' + json_session_text['translateResult'][0][0]['src'])


if __name__ == "__main__":
    requestsPost('猪')
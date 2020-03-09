import requests


def get_page(url,session):
    import json
    params = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
    }
    p = requests.get("http://127.0.0.1:3000/pinglun_param").json()
    encText = p["encText"]
    encSecKey = p["encSecKey"]
    data = {
        "params": encText,
        "encSecKey": encSecKey
    }
    print(session.post(url, headers=params, data=data).json())


if __name__ == '__main__':
    session = requests.session()
    get_page("http://music.163.com/weapi/v1/resource/comments/R_SO_4_1411718813?csrf_token=",session)

var token = JSON.parse(localStorage.getItem('userInfo')).remember_token

function http(url, type, data = '') {
    var p = new Promise((v, b) => {
        $.ajax({
            headers: {
                Authorization: 'Bearer ' + token
            },
            url,
            type,
            data,
            success: (res) => {
                v(res)
            },
            error: (er) => {
                b(er)
            }
        })
    })
    return p
}

function getNav() {
    return http('http://...:/api/menu/info', 'post')
}

function getList(pageNum, statues, nickname, mobile) {
    return http('http://127.0.0.1api/user?page=${pageNum}&limit=10&status=${statues}&nickname=${nickname}&mobile=${mobile}&', 'get');
}
// 调用
async function List(n, status, nickname, mobel) {
    var list = await getList(n, status, nickname, mobel)
    //这个将 异步的接口封装，同步化
    console.log(list); //这里以同步的方式 获取异步结果
}
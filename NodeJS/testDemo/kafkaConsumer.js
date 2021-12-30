const kafka = require('./kafkaUtil');
(async function () {
    const fs = require('fs');
    let count = 1;
    const topic = 'test-log'
    const groupId = 'handle-log'
    try {
        await kafka.consumer(topic, groupId, async (msg) => {
            let str = `第${count}接收到的数据为:${msg}`;
            count++;
            fs.writeFileSync(`${process.cwd()}/test01.txt`, str, {
                flag: 'a',
            })
            // console.log(str)
        })
    } catch (error) {
        console.log(14, error)
        throw error;
    }
})()
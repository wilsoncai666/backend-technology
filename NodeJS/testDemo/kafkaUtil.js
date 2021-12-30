const {
    Kafka,
    logLevel
} = require('kafkajs')
//const cache = require('../conn/redis.js');
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [
        'host.docker.internal:9092', 
        'host.docker.internal:9093',
        'host.docker.internal:9094'
    ],
    retry: {
        retries: 8
    },
    logLevel: logLevel.ERROR
})
/**
 * 如果groupId已存在重复的，建立不同的kafka实例会报错
 */
/**
 * kafka生产者发送消息
 *   messages: [{
            value: 'Hello KafkaJS user!',
        }, {
            value: 'Hello KafkaJS user2!',
        }],
 */

exports.producer = async (topic, groupId, msg) => {
    try {
        const producer = kafka.producer({
            groupId: groupId
        })
        await producer.connect()
        await producer.send({
            topic: topic,
            messages: msg,
            acks: 1
        })
    } catch (error) {
        throw error;
    }

}

exports.consumer = async (topic, groupId, callback) => {
    try {
        const consumer = kafka.consumer({
            groupId: groupId
        })
        await consumer.connect()
        await consumer.subscribe({
            topic: topic
        })
        await consumer.run({
            autoCommit: true,
            eachMessage: async ({
                topic,
                partition,
                message
            }) => {
                //防止重复消费数据
                await consumer.commitOffsets([{
                    topic: topic,
                    partition: partition,
                    offset: Number(message.offset) + 1
                }])
                let msg = message.value.toString();
                let msgKey = message.key.toString();
                console.log(72, '消费者接收到的数据为:',partition, msgKey);
                 callback(msg);
            }
        })
    } catch (err) {
        throw err;
    }
}
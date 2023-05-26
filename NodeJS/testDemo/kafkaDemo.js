const { Kafka } = require('kafkajs')

// 创建一个 Kafka 客户端实例并连接到服务
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['127.0.0.1:9092']
})

// 创建一个生产者实例
const producer = kafka.producer()

// 等待连接成功后发送一条消息
async function sendMessage() {
  await producer.connect()
  const result = await producer.send({
    topic: 'logdatabaseqas',
    messages: [
      { value: 'Hello, World!' }
    ]
  })
  console.log('Sent message:', result)
  await producer.disconnect()
}

sendMessage().catch(console.error)

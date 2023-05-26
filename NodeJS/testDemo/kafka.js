const {
  Kafka
} = require('kafkajs')

const kafka = new Kafka({
  clientId: 'log-app',
  ssl:true,
  brokers: [
    '10.102.107.223:31788',
    '10.99.49.172:31770',
    '10.109.92.163:32280'
  ]
})

const producer = kafka.producer()
const consumer = kafka.consumer({
  topic: 'log',
  groupId: 'test-group'
})

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-log',
    messages: [{
      key: 'C200E130000VOLVO',
      value: '{"chassisId":"C200E130002VOLVO","deviceId":"l2039006","msgBundle":true,"timestamp":"2021-07-07T02:00:13.000Z","timestampSource":0,"processedAt":"2021-07-07T02:00:15.177Z","streamType":"log","machineModel":"EC200E","gnssValid":true,"gnssSat":9,"gnssHdop":0.6,"streamBody":{},"rawPayload":{"data":{"152A":"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","152C":"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","154A":"000000000000000000000000000000000000000000000000000000000000000000000000"},"split":[1,1]}}'
    }],
  })

  // Consuming
  await consumer.connect()
  await consumer.subscribe({
    topic: 'test-topic',
    fromBeginning: true
  })

  await consumer.run({
    eachMessage: async ({
      topic,
      partition,
      message
    }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

run().catch(console.error)
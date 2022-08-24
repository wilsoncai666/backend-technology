SELECT *
FROM (SELECT "chassisId",
             "deviceId",
             to_char("timestamp" ::timestamp + '8 hour', 'yyyy-MM-dd T HH24:mi:ss.ms')                 "timestamp",
             to_char("iotHubTimestamp" ::timestamp + '8 hour',
                     'yyyy-MM-dd T HH24:mi:ss.ms')                                                     "iotHubTimestamp",
             to_char("eventHubTimestamp" ::timestamp + '8 hour',
                     'yyyy-MM-dd T HH24:mi:ss.ms')                                                     "eventHubTimestamp",
             to_char(created_at + '8 hour', 'yyyy-MM-dd T HH24:mi:ss.ms')                              "databseTimestamp",
             "timestampSource",
             to_char(("streamBody"::JSON ->> 'acquisitionTime')::timestamp, 'yyyy-MM-dd T HH24:mi:ss') acquisitionTime,
             extract(epoch FROM ("iotHubTimestamp" :: TIMESTAMP - timestamp :: TIMESTAMP))             iot_timestamp,
             extract(epoch FROM ("eventHubTimestamp" :: TIMESTAMP - "iotHubTimestamp" :: TIMESTAMP))   eventHub_iot,
             extract(epoch FROM (created_at :: TIMESTAMP - "eventHubTimestamp" :: TIMESTAMP))          databse_eventHub
      FROM public.cniv_info
      WHERE 1 = 1
        and "chassisId" = 'C200E990003VOLVO'
        and "timestamp" > '2022-08-22T00:00:00.000Z'
         -- AND "timestampSource" =1
     ) aa
--WHERE aa.iot_timestamp >10
ORDER BY "chassisId";
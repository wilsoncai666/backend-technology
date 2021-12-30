const kafka = require('./kafkaUtil');
let body = {
    "chassisId": "C200E190042VOLVO",
    "deviceId": "l2053013",
    "msgBundle": true,
    "timestamp": "2021-09-02T23:16:00.000Z",
    "timestampSource": 2,
    "dateInfo": "2021-09-03",
    "processedAt": "2021-09-03T01:42:08.532Z",
    "streamType": "log",
    "machineModel": "EC200E",
    "gnssValid": true,
    "gnssSat": 8,
    "gnssHdop": 0.6,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"宁夏回族自治区\",\"city\":\"固原市\",\"city_level\":2,\"district\":\"彭阳县\",\"town\":\"白阳镇\",\"town_code\":\"640425100\",\"adcode\":\"640425\",\"street\":\"G85(银昆高速)\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"宁夏回族自治区固原市彭阳县白阳镇G85(银昆高速)\",\"location\":{\"lng\":106.6587803924832,\"lat\":35.89827247269927}}}",
    "streamBody": "{}",
    "rawPayload": "{\"data\":{\"12A0\":\"0031E1D50000000000000000000000000000000000000000000372EA0005966500164C2D000E3444000441AA0000166B000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
};

let decodeData = [{
    "chassisId": "C380E130017VOLVO",
    "deviceId": "l2117122",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:25.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:30.246Z",
    "streamType": "log",
    "machineModel": "EC380E",
    "gnssValid": true,
    "gnssSat": 7,
    "gnssHdop": 0.8,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"湖南省\",\"city\":\"郴州市\",\"city_level\":2,\"district\":\"资兴市\",\"town\":\"州门司镇\",\"town_code\":\"431081106\",\"adcode\":\"431081\",\"street\":\"\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"湖南省郴州市资兴市州门司镇谷家西北314米\",\"location\":{\"lng\":113.5705134285903,\"lat\":26.150662826087263}}}",
    "streamBody": "[{\"ld318\":\"{\\\"totalLoggedTime\\\":819674,\\\"cellNo_lt50\\\":0,\\\"cellNo_bt50n100\\\":0,\\\"cellNo_bt100n150\\\":0,\\\"cellNo_bt150n200\\\":0,\\\"cellNo_bt200n250\\\":0,\\\"cellNo_bt250n300\\\":0,\\\"cellNo_bt300n350\\\":0,\\\"cellNo_bt350n400\\\":358,\\\"cellNo_bt400n450\\\":20891,\\\"cellNo_bt450n500\\\":86819,\\\"cellNo_bt500n550\\\":313679,\\\"cellNo_bt550n600\\\":211280,\\\"cellNo_gte600\\\":186647}\"},{\"ld318.ts\":\"2021-11-04T06:00:25.000Z\"}]",
    "rawPayload": "{\"data\":{\"1372\":\"000000000000000000000000000000000000000000000000000000000000000000000000\",\"1373\":\"000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"1374\":\"000C81DA00000000000000000000000000000000000000000000000000000000000001660000519B000153230004C94F000339500002D917\"},\"split\":[1,1]}"
}, {
    "chassisId": "C200E190591VOLVO",
    "deviceId": "l2115011",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:26.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:33.490Z",
    "streamType": "log",
    "machineModel": "EC200E",
    "gnssValid": true,
    "gnssSat": 5,
    "gnssHdop": 1.1,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"安徽省\",\"city\":\"亳州市\",\"city_level\":2,\"district\":\"谯城区\",\"town\":\"汤陵街道\",\"town_code\":\"341602003\",\"adcode\":\"341602\",\"street\":\"建安北路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"安徽省亳州市谯城区汤陵街道建安北路古泉小区-16幢北133米\",\"location\":{\"lng\":115.80791169629974,\"lat\":33.89686258704035}}}",
    "streamBody": "[{\"ld435\":\"{\\\"totalLoggedTime\\\":2404196,\\\"totalNumber\\\":0,\\\"machineHours_no0_ct\\\":\\\"na\\\",\\\"machineHours_no0_mh\\\":0,\\\"machineHours_no0_od\\\":0,\\\"machineHours_no1_ct\\\":\\\"na\\\",\\\"machineHours_no1_mh\\\":0,\\\"machineHours_no1_od\\\":0,\\\"machineHours_no2_ct\\\":\\\"na\\\",\\\"machineHours_no2_mh\\\":0,\\\"machineHours_no2_od\\\":0,\\\"machineHours_no3_ct\\\":\\\"na\\\",\\\"machineHours_no3_mh\\\":0,\\\"machineHours_no3_od\\\":0,\\\"machineHours_no4_ct\\\":\\\"na\\\",\\\"machineHours_no4_mh\\\":0,\\\"machineHours_no4_od\\\":0,\\\"machineHours_no5_ct\\\":\\\"na\\\",\\\"machineHours_no5_mh\\\":0,\\\"machineHours_no5_od\\\":0,\\\"machineHours_no6_ct\\\":\\\"na\\\",\\\"machineHours_no6_mh\\\":0,\\\"machineHours_no6_od\\\":0,\\\"machineHours_no7_ct\\\":\\\"na\\\",\\\"machineHours_no7_mh\\\":0,\\\"machineHours_no7_od\\\":0,\\\"machineHours_no8_ct\\\":\\\"na\\\",\\\"machineHours_no8_mh\\\":0,\\\"machineHours_no8_od\\\":0,\\\"machineHours_no9_ct\\\":\\\"na\\\",\\\"machineHours_no9_mh\\\":0,\\\"machineHours_no9_od\\\":0,\\\"machineHours_no10_ct\\\":\\\"na\\\",\\\"machineHours_no10_mh\\\":0,\\\"machineHours_no10_od\\\":0,\\\"machineHours_no11_ct\\\":\\\"na\\\",\\\"machineHours_no11_mh\\\":0,\\\"machineHours_no11_od\\\":0,\\\"machineHours_no12_ct\\\":\\\"na\\\",\\\"machineHours_no12_mh\\\":0,\\\"machineHours_no12_od\\\":0,\\\"machineHours_no13_ct\\\":\\\"na\\\",\\\"machineHours_no13_mh\\\":0,\\\"machineHours_no13_od\\\":0,\\\"machineHours_no14_ct\\\":\\\"na\\\",\\\"machineHours_no14_mh\\\":0,\\\"machineHours_no14_od\\\":0,\\\"machineHours_no15_ct\\\":\\\"na\\\",\\\"machineHours_no15_mh\\\":0,\\\"machineHours_no15_od\\\":0,\\\"machineHours_no16_ct\\\":\\\"na\\\",\\\"machineHours_no16_mh\\\":0,\\\"machineHours_no16_od\\\":0,\\\"machineHours_no17_ct\\\":\\\"na\\\",\\\"machineHours_no17_mh\\\":0,\\\"machineHours_no17_od\\\":0,\\\"machineHours_no18_ct\\\":\\\"na\\\",\\\"machineHours_no18_mh\\\":0,\\\"machineHours_no18_od\\\":0,\\\"machineHours_no19_ct\\\":\\\"na\\\",\\\"machineHours_no19_mh\\\":0,\\\"machineHours_no19_od\\\":0}\"},{\"ld435.ts\":\"2021-11-04T06:00:26.000Z\"}]",
    "rawPayload": "{\"data\":{\"1249\":\"0024AF640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
}, {
    "chassisId": "C200E190591VOLVO",
    "deviceId": "l2115011",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:31.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:38.394Z",
    "streamType": "log",
    "machineModel": "EC200E",
    "gnssValid": true,
    "gnssSat": 5,
    "gnssHdop": 1.1,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"安徽省\",\"city\":\"亳州市\",\"city_level\":2,\"district\":\"谯城区\",\"town\":\"汤陵街道\",\"town_code\":\"341602003\",\"adcode\":\"341602\",\"street\":\"建安北路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"安徽省亳州市谯城区汤陵街道建安北路古泉小区-16幢北133米\",\"location\":{\"lng\":115.80791169629974,\"lat\":33.89686258704035}}}",
    "streamBody": "[{\"ld439\":\"{\\\"totalLoggedTime\\\":2404196,\\\"totalNumber\\\":0,\\\"totalAccumulatedDuration\\\":0,\\\"machineHours_no0_ct\\\":\\\"na\\\",\\\"machineHours_no0_mh\\\":0,\\\"machineHours_no0_ed\\\":0,\\\"machineHours_no0_od\\\":0,\\\"machineHours_no1_ct\\\":\\\"na\\\",\\\"machineHours_no1_mh\\\":0,\\\"machineHours_no1_ed\\\":0,\\\"machineHours_no1_od\\\":0,\\\"machineHours_no2_ct\\\":\\\"na\\\",\\\"machineHours_no2_mh\\\":0,\\\"machineHours_no2_ed\\\":0,\\\"machineHours_no2_od\\\":0,\\\"machineHours_no3_ct\\\":\\\"na\\\",\\\"machineHours_no3_mh\\\":0,\\\"machineHours_no3_ed\\\":0,\\\"machineHours_no3_od\\\":0,\\\"machineHours_no4_ct\\\":\\\"na\\\",\\\"machineHours_no4_mh\\\":0,\\\"machineHours_no4_ed\\\":0,\\\"machineHours_no4_od\\\":0,\\\"machineHours_no5_ct\\\":\\\"na\\\",\\\"machineHours_no5_mh\\\":0,\\\"machineHours_no5_ed\\\":0,\\\"machineHours_no5_od\\\":0,\\\"machineHours_no6_ct\\\":\\\"na\\\",\\\"machineHours_no6_mh\\\":0,\\\"machineHours_no6_ed\\\":0,\\\"machineHours_no6_od\\\":0,\\\"machineHours_no7_ct\\\":\\\"na\\\",\\\"machineHours_no7_mh\\\":0,\\\"machineHours_no7_ed\\\":0,\\\"machineHours_no7_od\\\":0,\\\"machineHours_no8_ct\\\":\\\"na\\\",\\\"machineHours_no8_mh\\\":0,\\\"machineHours_no8_ed\\\":0,\\\"machineHours_no8_od\\\":0,\\\"machineHours_no9_ct\\\":\\\"na\\\",\\\"machineHours_no9_mh\\\":0,\\\"machineHours_no9_ed\\\":0,\\\"machineHours_no9_od\\\":0,\\\"machineHours_no10_ct\\\":\\\"na\\\",\\\"machineHours_no10_mh\\\":0,\\\"machineHours_no10_ed\\\":0,\\\"machineHours_no10_od\\\":0,\\\"machineHours_no11_ct\\\":\\\"na\\\",\\\"machineHours_no11_mh\\\":0,\\\"machineHours_no11_ed\\\":0,\\\"machineHours_no11_od\\\":0,\\\"machineHours_no12_ct\\\":\\\"na\\\",\\\"machineHours_no12_mh\\\":0,\\\"machineHours_no12_ed\\\":0,\\\"machineHours_no12_od\\\":0,\\\"machineHours_no13_ct\\\":\\\"na\\\",\\\"machineHours_no13_mh\\\":0,\\\"machineHours_no13_ed\\\":0,\\\"machineHours_no13_od\\\":0,\\\"machineHours_no14_ct\\\":\\\"na\\\",\\\"machineHours_no14_mh\\\":0,\\\"machineHours_no14_ed\\\":0,\\\"machineHours_no14_od\\\":0,\\\"machineHours_no15_ct\\\":\\\"na\\\",\\\"machineHours_no15_mh\\\":0,\\\"machineHours_no15_ed\\\":0,\\\"machineHours_no15_od\\\":0,\\\"machineHours_no16_ct\\\":\\\"na\\\",\\\"machineHours_no16_mh\\\":0,\\\"machineHours_no16_ed\\\":0,\\\"machineHours_no16_od\\\":0,\\\"machineHours_no17_ct\\\":\\\"na\\\",\\\"machineHours_no17_mh\\\":0,\\\"machineHours_no17_ed\\\":0,\\\"machineHours_no17_od\\\":0,\\\"machineHours_no18_ct\\\":\\\"na\\\",\\\"machineHours_no18_mh\\\":0,\\\"machineHours_no18_ed\\\":0,\\\"machineHours_no18_od\\\":0,\\\"machineHours_no19_ct\\\":\\\"na\\\",\\\"machineHours_no19_mh\\\":0,\\\"machineHours_no19_ed\\\":0,\\\"machineHours_no19_od\\\":0}\"},{\"ld439.ts\":\"2021-11-04T06:00:31.000Z\"}]",
    "rawPayload": "{\"data\":{\"124A\":\"0024AF640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
}, {
    "chassisId": "C380E130017VOLVO",
    "deviceId": "l2117122",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:35.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:39.970Z",
    "streamType": "log",
    "machineModel": "EC380E",
    "gnssValid": true,
    "gnssSat": 7,
    "gnssHdop": 0.7,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"湖南省\",\"city\":\"郴州市\",\"city_level\":2,\"district\":\"资兴市\",\"town\":\"州门司镇\",\"town_code\":\"431081106\",\"adcode\":\"431081\",\"street\":\"\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"湖南省郴州市资兴市州门司镇谷家西北314米\",\"location\":{\"lng\":113.57051533267806,\"lat\":26.15066198694574}}}",
    "streamBody": "[{\"ld457\":\"{\\\"totalLoggedTime\\\":819674,\\\"lt150_lt750\\\":0,\\\"lt150_bt751n1000\\\":0,\\\"lt150_bt1000n1250\\\":0,\\\"lt150_bt1250n1500\\\":0,\\\"lt150_bt1500n1700\\\":0,\\\"lt150_bt1700n1900\\\":0,\\\"lt150_bt1900n2100\\\":0,\\\"lt150_bt2100nMAX\\\":0,\\\"lt150_gteMAX\\\":0,\\\"bt150n300_lt750\\\":0,\\\"bt150n300_bt751n1000\\\":0,\\\"bt150n300_bt1000n1250\\\":0,\\\"bt150n300_bt1250n1500\\\":0,\\\"bt150n300_bt1500n1700\\\":0,\\\"bt150n300_bt1700n1900\\\":0,\\\"bt150n300_bt1900n2100\\\":0,\\\"bt150n300_bt2100nMAX\\\":0,\\\"bt150n300_gteMAX\\\":0,\\\"bt300n450_lt750\\\":0,\\\"bt300n450_bt751n1000\\\":0,\\\"bt300n450_bt1000n1250\\\":0,\\\"bt300n450_bt1250n1500\\\":0,\\\"bt300n450_bt1500n1700\\\":0,\\\"bt300n450_bt1700n1900\\\":0,\\\"bt300n450_bt1900n2100\\\":0,\\\"bt300n450_bt2100nMAX\\\":0,\\\"bt300n450_gteMAX\\\":0,\\\"bt450n600_lt750\\\":0,\\\"bt450n600_bt751n1000\\\":0,\\\"bt450n600_bt1000n1250\\\":0,\\\"bt450n600_bt1250n1500\\\":0,\\\"bt450n600_bt1500n1700\\\":0,\\\"bt450n600_bt1700n1900\\\":0,\\\"bt450n600_bt1900n2100\\\":0,\\\"bt450n600_bt2100nMAX\\\":0,\\\"bt450n600_gteMAX\\\":0,\\\"bt600n750_lt750\\\":0,\\\"bt600n750_bt751n1000\\\":0,\\\"bt600n750_bt1000n1250\\\":0,\\\"bt600n750_bt1250n1500\\\":0,\\\"bt600n750_bt1500n1700\\\":0,\\\"bt600n750_bt1700n1900\\\":0,\\\"bt600n750_bt1900n2100\\\":0,\\\"bt600n750_bt2100nMAX\\\":0,\\\"bt600n750_gteMAX\\\":0,\\\"bt750n900_lt750\\\":0,\\\"bt750n900_bt751n1000\\\":0,\\\"bt750n900_bt1000n1250\\\":0,\\\"bt750n900_bt1250n1500\\\":0,\\\"bt750n900_bt1500n1700\\\":0,\\\"bt750n900_bt1700n1900\\\":0,\\\"bt750n900_bt1900n2100\\\":0,\\\"bt750n900_bt2100nMAX\\\":0,\\\"bt750n900_gteMAX\\\":0,\\\"bt900n1050_lt750\\\":0,\\\"bt900n1050_bt751n1000\\\":0,\\\"bt900n1050_bt1000n1250\\\":0,\\\"bt900n1050_bt1250n1500\\\":0,\\\"bt900n1050_bt1500n1700\\\":0,\\\"bt900n1050_bt1700n1900\\\":0,\\\"bt900n1050_bt1900n2100\\\":0,\\\"bt900n1050_bt2100nMAX\\\":0,\\\"bt900n1050_gteMAX\\\":0,\\\"bt1050n1200_lt750\\\":0,\\\"bt1050n1200_bt751n1000\\\":0,\\\"bt1050n1200_bt1000n1250\\\":0,\\\"bt1050n1200_bt1250n1500\\\":0,\\\"bt1050n1200_bt1500n1700\\\":0,\\\"bt1050n1200_bt1700n1900\\\":0,\\\"bt1050n1200_bt1900n2100\\\":0,\\\"bt1050n1200_bt2100nMAX\\\":0,\\\"bt1050n1200_gteMAX\\\":0,\\\"gte1200_lt750\\\":470,\\\"gte1200_bt751n1000\\\":64662,\\\"gte1200_bt1000n1250\\\":31475,\\\"gte1200_bt1250n1500\\\":178100,\\\"gte1200_bt1500n1700\\\":378935,\\\"gte1200_bt1700n1900\\\":165838,\\\"gte1200_bt1900n2100\\\":194,\\\"gte1200_bt2100nMAX\\\":0,\\\"gte1200_gteMAX\\\":0}\"},{\"ld457.ts\":\"2021-11-04T06:00:35.000Z\"}]",
    "rawPayload": "{\"1375\":\"000C81DA000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001D60000FC9600007AF30002B7B40005C837000287CE000000C20000000000000000\"}"
}, {
    "chassisId": "C200E190357VOLVO",
    "deviceId": "l2109154",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:39.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:40.929Z",
    "streamType": "log",
    "machineModel": "EC200E",
    "gnssValid": true,
    "gnssSat": 7,
    "gnssHdop": 0.8,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"重庆市\",\"city\":\"重庆市\",\"city_level\":2,\"district\":\"巴南区\",\"town\":\"木洞镇\",\"town_code\":\"500113109\",\"adcode\":\"500113\",\"street\":\"G348(渝巴路)\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"重庆市重庆市巴南区木洞镇G348(渝巴路)丁家湾南574米\",\"location\":{\"lng\":106.84989949864193,\"lat\":29.563807041063146}}}",
    "streamBody": "[{\"ld457\":\"{\\\"totalLoggedTime\\\":3186872,\\\"lt150_lt750\\\":0,\\\"lt150_bt751n1000\\\":0,\\\"lt150_bt1000n1250\\\":0,\\\"lt150_bt1250n1500\\\":0,\\\"lt150_bt1500n1700\\\":0,\\\"lt150_bt1700n1900\\\":0,\\\"lt150_bt1900n2100\\\":0,\\\"lt150_bt2100nMAX\\\":0,\\\"lt150_gteMAX\\\":0,\\\"bt150n300_lt750\\\":0,\\\"bt150n300_bt751n1000\\\":0,\\\"bt150n300_bt1000n1250\\\":0,\\\"bt150n300_bt1250n1500\\\":0,\\\"bt150n300_bt1500n1700\\\":0,\\\"bt150n300_bt1700n1900\\\":0,\\\"bt150n300_bt1900n2100\\\":0,\\\"bt150n300_bt2100nMAX\\\":0,\\\"bt150n300_gteMAX\\\":0,\\\"bt300n450_lt750\\\":0,\\\"bt300n450_bt751n1000\\\":0,\\\"bt300n450_bt1000n1250\\\":0,\\\"bt300n450_bt1250n1500\\\":0,\\\"bt300n450_bt1500n1700\\\":0,\\\"bt300n450_bt1700n1900\\\":0,\\\"bt300n450_bt1900n2100\\\":0,\\\"bt300n450_bt2100nMAX\\\":0,\\\"bt300n450_gteMAX\\\":0,\\\"bt450n600_lt750\\\":0,\\\"bt450n600_bt751n1000\\\":0,\\\"bt450n600_bt1000n1250\\\":0,\\\"bt450n600_bt1250n1500\\\":0,\\\"bt450n600_bt1500n1700\\\":0,\\\"bt450n600_bt1700n1900\\\":0,\\\"bt450n600_bt1900n2100\\\":0,\\\"bt450n600_bt2100nMAX\\\":0,\\\"bt450n600_gteMAX\\\":0,\\\"bt600n750_lt750\\\":0,\\\"bt600n750_bt751n1000\\\":0,\\\"bt600n750_bt1000n1250\\\":0,\\\"bt600n750_bt1250n1500\\\":0,\\\"bt600n750_bt1500n1700\\\":0,\\\"bt600n750_bt1700n1900\\\":0,\\\"bt600n750_bt1900n2100\\\":0,\\\"bt600n750_bt2100nMAX\\\":0,\\\"bt600n750_gteMAX\\\":0,\\\"bt750n900_lt750\\\":637,\\\"bt750n900_bt751n1000\\\":243,\\\"bt750n900_bt1000n1250\\\":521473,\\\"bt750n900_bt1250n1500\\\":20436,\\\"bt750n900_bt1500n1700\\\":1294443,\\\"bt750n900_bt1700n1900\\\":1335477,\\\"bt750n900_bt1900n2100\\\":13523,\\\"bt750n900_bt2100nMAX\\\":639,\\\"bt750n900_gteMAX\\\":1,\\\"bt900n1050_lt750\\\":0,\\\"bt900n1050_bt751n1000\\\":0,\\\"bt900n1050_bt1000n1250\\\":0,\\\"bt900n1050_bt1250n1500\\\":0,\\\"bt900n1050_bt1500n1700\\\":0,\\\"bt900n1050_bt1700n1900\\\":0,\\\"bt900n1050_bt1900n2100\\\":0,\\\"bt900n1050_bt2100nMAX\\\":0,\\\"bt900n1050_gteMAX\\\":0,\\\"bt1050n1200_lt750\\\":0,\\\"bt1050n1200_bt751n1000\\\":0,\\\"bt1050n1200_bt1000n1250\\\":0,\\\"bt1050n1200_bt1250n1500\\\":0,\\\"bt1050n1200_bt1500n1700\\\":0,\\\"bt1050n1200_bt1700n1900\\\":0,\\\"bt1050n1200_bt1900n2100\\\":0,\\\"bt1050n1200_bt2100nMAX\\\":0,\\\"bt1050n1200_gteMAX\\\":0,\\\"gte1200_lt750\\\":0,\\\"gte1200_bt751n1000\\\":0,\\\"gte1200_bt1000n1250\\\":0,\\\"gte1200_bt1250n1500\\\":0,\\\"gte1200_bt1500n1700\\\":0,\\\"gte1200_bt1700n1900\\\":0,\\\"gte1200_bt1900n2100\\\":0,\\\"gte1200_bt2100nMAX\\\":0,\\\"gte1200_gteMAX\\\":0}\"},{\"ld457.ts\":\"2021-11-04T06:00:39.000Z\"}]",
    "rawPayload": "{\"1375\":\"0030A0B80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027D000000F30007F50100004FD40013C06B001460B5000034D30000027F00000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"}"
}, {
    "chassisId": "C380E130017VOLVO",
    "deviceId": "l2117122",
    "msgBundle": true,
    "timestamp": "2021-11-04T06:00:40.000Z",
    "timestampSource": 0,
    "dateInfo": "2021-11-04",
    "processedAt": "2021-11-04T06:00:45.423Z",
    "streamType": "log",
    "machineModel": "EC380E",
    "gnssValid": true,
    "gnssSat": 7,
    "gnssHdop": 0.7,
    "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"湖南省\",\"city\":\"郴州市\",\"city_level\":2,\"district\":\"资兴市\",\"town\":\"州门司镇\",\"town_code\":\"431081106\",\"adcode\":\"431081\",\"street\":\"\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"湖南省郴州市资兴市州门司镇谷家西北314米\",\"location\":{\"lng\":113.57051533267806,\"lat\":26.15066198694574}}}",
    "streamBody": "[{\"ld970\":\"{\\\"totalLoggedTime\\\":819674,\\\"cellNo_engONButNoWorkIdle\\\":104676,\\\"cellNo_workAndTravel\\\":714998}\"},{\"ld970.ts\":\"2021-11-04T06:00:40.000Z\"},{\"ld975\":\"{\\\"totalLoggedTime\\\":819674,\\\"cellNo_highSpeed\\\":18100,\\\"cellNo_lowSpeed\\\":82577}\"},{\"ld975.ts\":\"2021-11-04T06:00:40.000Z\"}]",
    "rawPayload": "{\"data\":{\"1376\":\"000C81DA000198E4000AE8F6\",\"1377\":\"0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\",\"1378\":\"000C81DA000046B400014291\",\"1379\":\"000C81DA000000250000001A00000015000000200000002C0000003E00010B2D0000025C0000018400000227000001E0000002EB000003320000007C00000BC3\"},\"split\":[1,1]}"
}];

let logData = [{
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:09:48.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:09:49.785Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北753米\",\"location\":{\"lng\":119.53217411964053,\"lat\":35.35978276215972}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1248\":\"049DD1A00000027A00000212000002B1000002480001A5F0000C72620023415D002600D70017A778000216F2\",\"1249\":\"049E1329090009000F10041318CF1D380C1C0C143D2910150D1C0C143D291A070A1F0C143D591433000202153FC0112F010202153FC00C1D0E170215412A1D140E170215412A03230D0D0A1550901F0700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:09:58.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:00.075Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北731米\",\"location\":{\"lng\":119.53216830225611,\"lat\":35.359575052063825}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"124A\":\"049E1329070007000000C0DE091A07154AD2282A00000FA80E1A07154AD4153A000029C6121A07154AD7070E00000008121A07154AD7381000000B23141A07154AD91815000047D9121B07154AE92C0600000E70171B07154AEE260F000025FC000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:02.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:03.780Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北714米\",\"location\":{\"lng\":119.53219069510726,\"lat\":35.359430917458376}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"124B\":\"049E1329000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:07.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:08.710Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北714米\",\"location\":{\"lng\":119.53219069510726,\"lat\":35.359430917458376}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"124B\":\"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,2]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:12.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:13.900Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北707米\",\"location\":{\"lng\":119.53215951083132,\"lat\":35.35935027313633}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"124C\":\"049E1329000001E300005F190001AF2300A912F800AE53630027C87D002C90B30026DC7E003E0FE300410CEE004BAE210090E52D0076B0CD008286A300579C01001CE371000000000000000000000000000000000000000000000000\",\"124E\":\"049E0E560045803400386F4C02D115DB\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:17.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:18.924Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北707米\",\"location\":{\"lng\":119.53215951083132,\"lat\":35.35935027313633}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"124F\":\"049E13290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:22.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:23.858Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北701米\",\"location\":{\"lng\":119.53218019806611,\"lat\":35.359303239363705}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1250\":\"049E132901E885B500E6106800CD591100BDFA34003D342C000625350000AA670000210C000004C30000003000000000000000000000000000000000000000000000000000000000\",\"1251\":\"049E132900000320014545A000A2F934003C18CF0279BB86\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:27.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:28.908Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北701米\",\"location\":{\"lng\":119.53218019806611,\"lat\":35.359303239363705}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1254\":\"049E1329000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:32.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:33.712Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183177543,\"lat\":35.35929889096534}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1254\":\"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,2]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:37.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:38.922Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183177543,\"lat\":35.35929889096534}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1255\":\"049E132900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:42.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:43.816Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218210370572,\"lat\":35.3592986182397}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1256\":\"049E13290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:47.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:48.920Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218210370572,\"lat\":35.3592986182397}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1257\":\"049E132901000100049E1328081309110002110E049E1328000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:54.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:55.808Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183198825,\"lat\":35.35929861976075}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1259\":\"049DD1A0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:10:58.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:10:59.925Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183198825,\"lat\":35.35929861976075}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1259\":\"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,2]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:03.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:04.989Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183198825,\"lat\":35.35929861976075}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1282\":\"NegativeResponse\",\"1286\":\"049EB85E000000000000000000000000000003A70000F18E00115B600023645C002FA6450010B8D900003194000000000000000000000000\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:08.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:09.865Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218183198825,\"lat\":35.35929861976075}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1287\":\"049DD1A0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:13.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:14.772Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218156027079,\"lat\":35.3592986212817}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1287\":\"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,2]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:18.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:20.004Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218156027079,\"lat\":35.3592986212817}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"12C4\":\"049DD1A0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:23.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:24.702Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218128876618,\"lat\":35.35929835159801}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"12C4\":\"00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\"},\"split\":[2,2]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:28.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:29.949Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218128876618,\"lat\":35.35929835159801}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1274\":\"049E1329000E2883\"},\"split\":[1,1]}"
    },
    {
        "chassisId": "L220H007261VOLVO",
        "deviceId": "l2130024",
        "msgBundle": true,
        "timestamp": "2021-12-08T16:11:33.000Z",
        "timestampSource": 0,
        "dateInfo": "2021-12-09",
        "processedAt": "2021-12-08T16:11:34.878Z",
        "streamType": "log",
        "machineModel": "L220H",
        "gnssValid": true,
        "gnssSat": 8,
        "gnssHdop": 0.6,
        "geoCode": "{\"status\":true,\"address\":{\"addressComponent\":{\"country\":\"中国\",\"country_code\":0,\"country_code_iso\":\"CHN\",\"country_code_iso2\":\"CN\",\"province\":\"山东省\",\"city\":\"日照市\",\"city_level\":2,\"district\":\"东港区\",\"town\":\"北京路街道\",\"town_code\":\"371102008\",\"adcode\":\"371102\",\"street\":\"港区路\",\"street_number\":\"\",\"direction\":\"\",\"distance\":\"\"},\"formattedAddress\":\"山东省日照市东港区北京路街道港区路日照顺和集装箱服务有限公司西北700米\",\"location\":{\"lng\":119.53218101747441,\"lat\":35.35929781070963}}}",
        "streamBody": "{}",
        "rawPayload": "{\"data\":{\"1275\":\"049EB85E000000000000009100000316000000000000000000000000000000000000000000000000000000000000006E000037B80000B96800000000000000000000000000000000000000000000000000000000000000440002F1FF000E65E30000033A000000000000000000000000000000000000000000000000000000030001C44500212DA40000727100000000000000000000000000000000000000000000000000000000000023440028FC4100067F710000074E00000000000000000000000000000000000000000000000000000100000966A80006FF33000051FE0000000000000000000000000000000000000000000000000000000000001154\"},\"split\":[2,1]}"
    }
];
(async function () {
    const topic = 'test-log'
    const groupId = 'save-logDecode'
    try {
        /* for (let i = 0; i < 10000; i++) {
            await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    resolve(1)
                }, 1000)
            }).then(async () => {
                console.log('发送的数据为:', i)
                await kafka.producer(topic, groupId, [{
                    key: "C200E130000VOLVO"+i,//key值为了保证消费者按照生产者生产的数据顺序，消费数据,key值必须一致;如果不需要消费者按照生产的顺序消费，key去掉即可，参考： https://www.zhihu.com/question/266390197
                    value: JSON.stringify(body)
                }])
            })
        } */
        // for (let i = 0; i < 10000; i++) {

            for (let i = 0; i < logData.length; i++) {
                await new Promise((resolve, reject) => {
                    setTimeout(async () => {
                        resolve(1)
                    }, 1000)
                }).then(async () => {
                    console.log('发送的数据为:', i)
                    let data = logData[i]
                    await kafka.producer(topic, groupId, [{
                        key: data.chassisId, //key值为了保证消费者按照生产者生产的数据顺序，消费数据,key值必须一致;如果不需要消费者按照生产的顺序消费，key去掉即可，参考： https://www.zhihu.com/question/266390197
                        value: JSON.stringify(data)
                    }])
                })
            }
        // }
    } catch (error) {
        console.log(14, error)
        throw error;
    }

})()
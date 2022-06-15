module.exports = {
  "logIdentifierConf": {
    //different identifier mapping same logId , like j1201/1332=1285 mapping to LogID1201, 1285 is the key in Loglist.js
    "j972": "12A4", //incrementObjConfig=> "12A4": "ld972_engloaddis", //Engine load distribution by engine modes
    "j215": "1371", //incrementObjConfig=> "1371": "ld215_engboostairtempdis", //Engine Boost air temperature distribution, ld215_info
    "j1057": "1282", //durationObjConfig=> "1282": "ld1057_waterlvlsepadurs", //To store data how often the water in fuel alarm is active from water separator
    "j493": "124B", //durationObjConfig=>  "124B": "ld493_lowengoilpresdurs", //Low engine oil pressure, duration log

    "j217": null,
    "j457": "1375", //incrementObjConfig=>   "1375": "ld457_engloadvsspds", //Engine load (torque) vs speed, ld457_info


    "j1255": null,
    "j218": "1372", //incrementObjConfig=> "1372": "ld218_hydrotatoropers", //Hydraulic Rotator operating hours(h), ld218_info
    "j219": "1373", //incrementObjConfig=> "1373": "ld219_hydflowctldis", //Hydraulic Flow control distribution, ld219_info
    "j318": "1374", //incrementObjConfig=> "1374": "ld318_hydcoolfanspddis", //Hydraulic cooling fan speed control current distribution, ld318_info

    "j319": "12A0", //incrementObjConfig=> "12A0": "ld319_hydoiltempdis", //Hydraulic oil temperature distribution
    "j429": "1246", //incrementObjConfig=> "1246": "ld429_cooltempstartdis", //Engine Coolant Temperature at start-up log
    "j430": "1245", //incrementObjConfig=>   "1245": "ld430_cooltempoutdis",
    "12F2": "1245", //Loader`s log 12F2 is ld1245
    "j434": "124C", //incrementObjConfig=> "124C": "ld434_engspeeddis", //Engine speed distribution log

    "j435": "1249", // eventObjConfig =>"1249": "ld435_lowengoillvlevts", //Engine oil level, low, log

    "j439": "124A", //durationObjConfig=>"124A": "ld439_engairfilterclogdurs", //Engine Air Filter Clogged, duration log
    "j440": "127B", //durationObjConfig=>"127B": "ld440_hydoiltempdurs", //Hydraulic Oil Temperature, duration log
    "j482": "12A1", //durationObjConfig=> "12A1": "ld482_engchargeairtempdurs", //Engine Charge air temp high instance
    "j495": "12A2", //durationObjConfig=>"12A2": "ld495_lowcoolleveldurs", //Engine low coolant level hours, count(Engine Coolant Lavel Low Instances)
    "j422": "1379", //incrementObjConfig=> "1379": "ld422_hydpowerboostdis", //Hydraulic Working operation with Power boost distribution, ld422_info
    "j1055": "137A", //incrementObjConfig=> "137A": "ld1055_hydpumppresdis", //Hydraulic Pump load pressure distribution (%, Hr)
    "j978": "137B", //incrementObjConfig=>  "137B": "ld978_pumpinputtorquedis", // Pump Input torque distribution (%, Hr)
    "j979": "137C", //incrementObjConfig=> "137C": "ld979_hydworkmodedis", //Hydraulic working operation mode distribution (%, Hr)
    "j492": "1247", //durationObjConfig=>"1247": "ld492_highcooltempdurs", //High Engine Coolant Temperature, duration log
    "12F4": "1247", //Loader`s log 12F4 is ld492
    "j1201": "1285", //incrementObjConfig=>"1285": "ld1201_airpresdis", //used for altitude distribution by height group,0-1000,1001-2000,2001-2500,2501-3000,-3000
    "1332": "1285", //Loader`s log 1332 is ld1201

    "j1203": "1380", //incrementObjConfig=>  "1380": "ld1203_x3swpatterns", //X3 control usage by switch pattern
    "j1204": "137E", //incrementObjConfig=> "137E": "ld1204_coolfanopers", //Cooling fan operating, reverse/normal
    "j1205": "137D", //incrementObjConfig=>  "137D": "ld1205_refansetmanuals", //Reversible fan setting usage - manual
    "j1206": "1388", //incrementObjConfig=>"1388": "ld1206_x1ctlsworrcvs", //X1 control usage by switch or RCV, ld1206_info
    "j1207": "1381", //incrementObjConfig=>  "1381": "ld1207_refansetautos", //Reversible fan setting time - auto1, ld1207_info
    "j1208": "1382", //incrementObjConfig=>  "1382": "ld1208_refansetusages", //Reversible fan setting usage, ld1208_info
    "j1209": "137F", //incrementObjConfig=> "137F": "ld1209_x1pressettings", //X1 usage by pressure setting

    "j1211": "1383", //incrementObjConfig=>"1383": "ld1211_coolfanspddis", //Cooling fan speed distribution
    "j1212": "12A7", //durationObjConfig=>"12A7": "ld1212_fuelfilterdurs", //Fuel filter clogging duration log

    "j1252": "1384", //incrementObjConfig=> "1384": "ld1252_ecomodedis", //ECO mode distribution
    "j1269": "1385", //incrementObjConfig=> "1385": "ld1269_ecoengctlmodedis", //Engine control mode distribution at ECO mode

    //below is Incremental type in CCM, 6 Tables
    "j431": "1265", //incrementObjConfig=> "1265": "ld431_acautomanualdis", //HVAC Auto/ Manual mode selection distribution (%) log
    "j436": "1266", //incrementObjConfig=>  "1266": "ld436_acairblowerdis", //HVAC Air distribution mode and Blower motor selection distribution (%, hr) log
    "j437": "1267", //incrementObjConfig=>  "1267": "ld437_actempsetdis", //HVAC Air temperature setting for auto control distribution (%) log
    "j438": "1268", //incrementObjConfig=>  "1268": "ld438_acambienttempdis", //HVAC Ambient temperature log
    "j486": "126A", //incrementObjConfig=>   "126A": "ld486_accompreusingdis", //AC Compressor Usage log
    "j487": "126B", //incrementObjConfig=>  "126B": "ld487_acclutchlifeprols" //AC Clutch Life Prolongation
    //below is Duration type in CCM
    "j485": "1269", //durationObjConfig=>  "1269": "ld485_achishighpres", //Show history of high AC pressure.
    "j494": "126C", //durationObjConfig=>  "126C": "ld494_accutoutpres" //AC system cut out pressure

    "j970": "1376", //incrementObjConfig=>  "1376": "ld970_machineutilzations", //Machine utilization

    "j971": "12A3", //incrementObjConfig=>   "12A3": "ld971_ctlmodfuelconsdis", //Engine control mode and Fuel consumption distribution
    "j973": "1281", //incrementObjConfig=>   "1281": "ld973_engshutidledis", //Engine shutdown and idle time before engine shutdown log
    "j974": "1377", //incrementObjConfig=>   "1377": "ld974_hammershareoperdis", //Hammer Shear operating on mode distribution (%, h)
    "j975": "1378", //incrementObjConfig=>   "1378": "ld975_traveltimespddis", //Hydraulic Travel time and speed distribution
    "j1202": "12A5", //incrementObjConfig=>  "12A5": "ld1202_engaveloadpercs", //Engine average load distribution by modes
    "j1210": "12A6", //incrementObjConfig=>  "12A6": "ld1210_engcooltempdis", //Engine coolant temperature distribution

  },
  "logMap": {
    //Object.keys(logMap)=Object.keys(LogList.js)
    /**
     * HMICU CCM *
     * */
    "1245": "ld430",
    "1246": "ld429",
    "1247": "ld492",
    "1249": "ld435",
    "124A": "ld439",
    "124B": "ld493",
    "124C": "ld434",
    "1254": "ld1193",
    "1255": "ld1197",
    "1256": "ld1198",
    "1257": "ld1199",
    "1281": "ld973",
    "1282": "ld1057",
    "1285": "ld1201",
    "127B": "ld440",
    "12A0": "ld319",
    "12A1": "ld482",
    "12A2": "ld495",
    "12A3": "ld971",
    "12A4": "ld972",
    "12A5": "ld1202",
    "12A6": "ld1210",
    "12A7": "ld1212",
    "12E2": "ld1279",
    /**
     * GPMCU CCM *
     * */
    "137A": "ld1055",
    "137B": "ld978",
    "137C": "ld979",
    "137D": "ld1205",
    "137E": "ld1204",
    "137F": "ld1209",
    "1380": "ld1203",
    "1381": "ld1207",
    "1382": "ld1208",
    "1371": "ld215",
    "1372": "ld218",
    "1373": "ld219",
    "1374": "ld318",
    "1375": "ld457",
    "1376": "ld970",
    "1377": "ld974",
    "1378": "ld975",
    "1379": "ld422",
    "1388": "ld1206",
    "1383": "ld1211",
    "1384": "ld1252",
    "1385": "ld1269",
    "1528": "ld1333",
    "152A": "ld1334",
    "152C": "ld1335",
    "154A": "ld1340",
    /**
     * logID CCM *
     * */
    "1265": "ld431",
    "1266": "ld436",
    "1267": "ld437",
    "1268": "ld438",
    "1269": "ld485",
    "126A": "ld486",
    "126B": "ld487",
    "126C": "ld494",
    "j1255": "ld1255",
    "j217": "ld217",
    /* L220H 24 */
    "1248": "ld432",
    "124E": "ld324",
    "124F": "ld362",
    "1250": "ld426",
    "1251": "ld427",
    "1259": "ld449",
    "1286": "ld1259",
    "1287": "ld1194",
    "12C4": "ld448",
    "1274": "ld371",
    "1275": "ld375",
    "1277": "ld433",
    "136C": "ld1351",
    "136F": "ld1347",
    /* L220H D1 */
    "12EC": "ld372",
    "12ED": "ld491",
    "12FA": "ld361",
    "1305": "ld363",
    "1574": "ld1273",
  }

}
const logList = {
  /**
   * HMICU CCM *
   * */
  '1245': {
    id: '1245',
    demo: null,
    logID: 'LogID430',
    x: 'Coolant temperature [°C]',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt30' },
      { key: 'bt30n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n98' },
      { key: 'bt98n103' },
      { key: 'gt103' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 10, unit: "s" }],
    Purpose: 'Register the spread of the engine coolant temperature when the engine is running.',
    Informant: 'Fredrik Grop, TUM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine coolant temperature engine.\nDiesel engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '0.1 Hz',
    Hz: 0.1,
    BitResolution: 'Cell 1: 1 bit = 1 s.\nCell 2-11: 1 bit = 10 s.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine has to run.',
    OutputDataFormat: 'Data is stored in a vector of 11 cells.\n' +
      'In cell no. 1 the duration of the log should be stored.\n' +
      'In cell 2-11 stores the time that the temperature has been within the defined interval.'
  },
  '1246': {
    demo: '0000341400000000000000000000000000000000000000030000000A00000034',
    id: '1246',
    logID: 'LogID429',
    x: 'Coolant temperature [°C]',
    y: 'start of engine',
    xKeyArr: [
      { key: 'ltm20' },
      { key: 'bt20nm15' },
      { key: 'btm15nm10' },
      { key: 'btm10n0' },
      { key: 'bt0n30' },
      { key: 'bt30n40' },
      { key: 'gte40' }
    ],
    yKeyArr: [{ key: 'startOfEngine', ratio: 1, unit: "times" }],
    Purpose: 'Log the distribution of coolant temperature at start-up. This is important information if unusual wear of the engine has occurred.',
    Informant: 'Fredrik Grop, UKM3',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine coolant temperature\nDiesel engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: 'Logged each time the engine is started.',
    Hz: null,
    BitResolution: 'Cell 1: 1 bit = 1 s\nCell 2-8: 1 bit = 1 start of engine',
    BitA: 1,
    BitAUnit: 's',
    BitB: '1',
    BitBUnit: 'starts',
    ConditionsForLogging: 'Logging should be performed within 10 seconds from that the engine is up and running.\n' +
      'Only 1 log per engine start occasion should be saved.',
    OutputDataFormat: 'Data is stored in a vector of six cells.\n' +
      'In cell no. 1 the duration of the log should be stored.'
  },
  '1247': {
    demo: "0001348D0200020000000071110D03150017250F0000006D0000006A110D0315001720120000000400000069000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    id: '1247',
    logID: 'LogID492',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'temperature', ratio: 1, unit: "℃" }],
    Purpose: 'Register the last times the machine has been running with high engine coolant temperature.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm signal for high coolant temperature.\n' +
      'Engine coolant temperature\n' +
      'Diesel engine running',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: null,
    BitAUnit: 's',
    BitB: '1',
    BitBUnit: '℃',
    events: 20,
    optional: 1,
    optionalUnit: '℃',
    optionalMsg: "The optional cell shall store the highest,engine coolant temperature with resolution 1 degree and unit Celsius.",
    ConditionsForLogging: 'Diesel engine must run. Alarm signal for high engine coolant temperature shall be active.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with\n' +
      '20 events and shall use a 60 s duration filter. The optional cell shall store the highest\n' +
      'engine coolant temperature with resolution 1 degree and unit Celsius.'
  },
  '1249': {
    id: '1249',
    demo: '0000BF530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID435',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "startedTimes" }],
    Purpose: 'Register the number of times the engine has been started with low engine oil level.',
    Informant: 'Fredrik Grop, TUM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    optionalUnit: '',
    optionalMsg: "",
    InputSignal: 'Alarm signal that indicates low engine oil level.\nEngine start up.',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: 'Logging does only take place at start up of the machine.',
    ConditionsForLogging: 'Alarm received at start up of machine.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as an event log with\n' +
      '20 events.'
  },
  '124A': {
    id: '124A',
    demo: null,
    logID: 'LogID439',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To store data how often the engine air filter is clogged.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm engine air filter clogged [clogged, normal]\nDiesel engine running',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: null,
    BitAUnit: null,
    BitB: '1',
    BitBUnit: 'h',
    events: 20,
    optional: 0,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Diesel engine must run. Logging should be performed when Alarm engine air filter is clogged.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter.'
  },
  '124B': {
    /*注意 optional*/
    id: '124B',
    demo: null,
    logID: 'LogID493',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'engOilPre', ratio: 1, unit: "time" }], //engineOilPressure
    Purpose: 'Register the last times the machine has been running with low engine oil pressure.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm signal for low engine oil pressure.\n' +
      'Engine oil pressure\n' +
      'Diesel engine running',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: null,
    BitAUnit: null,
    BitB: 0.1,
    BitBUnit: 'bar',
    events: 20,
    optional: 0.1,
    optionalUnit: 'bar',
    optionalMsg: "The optional cell shall store the lowest,engine oil pressure with resolution 0.1 bar.",
    ConditionsForLogging: 'Diesel engine must run. Alarm signal for low engine oil pressure shall be active.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with\n' +
      '20 events and shall use a 60 s duration filter. The optional cell shall store the lowest\n' +
      'engine oil pressure with resolution 0.1 bar.'
  },
  '124C': {
    id: '124C',
    demo: '000178240000000E000000090000000700000053000001B9000007ED0000829B0000009B000002CE00000B080000030100001AD7000021F30000423100005B0500000000000000000000000000000000000000000000000000000000',
    logID: 'LogID434',
    x: 'Engine speed [rpm]',
    y: 'Cel no',
    xKeyArr: [
      { key: 'lt500' }, { key: 'bt500n600' },
      { key: 'bt600n650' }, { key: 'bt650n700' },
      { key: 'bt700n750' }, { key: 'bt750n800' },
      { key: 'bt800n850' }, { key: 'bt850n900' },
      { key: 'bt900n1000' }, { key: 'bt1000n1100' },
      { key: 'bt1100n1200' }, { key: 'bt1200n1400' },
      { key: 'bt1400n1600' }, { key: 'bt1600n1800' },
      { key: 'bt1800n2000' }, { key: 'bt2000n2200' },
      { key: 'bt2200n2400' }, { key: 'bt2400n2500' },
      { key: 'bt2500n2600' }, { key: 'bt2600n2800' },
      { key: 'bt2800n3000' }, { key: 'gte3000' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'Register the distribution of engine speed.',
    Informant: 'Fredrik Grop, TUM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Diesel engine speed\nEngine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1-23: 1 bit = 1s',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine must run.',
    OutputDataFormat: 'Data is stored in 23 cells.\n' +
      'In cell no. 1 the duration of the log should be stored.\n' +
      'The total time with an engine speed within the defined intervals is stored in cell 2-23.'
  },
  '1254': {
    id: '1254',
    demo: null,
    logID: 'LogID1193',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    /*alarmTimes*/
    Purpose: 'To record the alarms generated due to regenerations not performed in time. The 20 latest alarms are recorded.',
    Informant: '53550 Per Verner',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Particulate Trap Status\nClock\nDate\nMachine Hours',
    Filtering: '',
    ActionsAtInputSignalError: 'According to general requirements.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'According to the general requirements for a “Duration log”, in addition the optional\n' +
      'Cell (“Cell #7”) shall be coded according to the following table:PARKED_REGENERATION 1\n' +
      'SERVICE_NEEDED 2',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "The following events shall trigger the duration log:\n" +
      " If Particulate Trap Status= PARKED_REGENERATION.\n" +
      " If Particulate Trap Status= SERVICE_NEEDED.\n" +
      "The event which triggered the duration log shall be stored in the optional cell",
    ConditionsForLogging: 'The following events shall trigger the duration log:\n' +
      ' If Particulate Trap Status= PARKED_REGENERATION.\n' +
      ' If Particulate Trap Status= SERVICE_NEEDED.\n' +
      'The event which triggered the duration log shall be stored in the optional cell (Cell #7).',
    OutputDataFormat: 'According to general requirements for duration log.',
    Comment: 'Modifications 2010-07-14, New Issue U02 Viktor Pahv:\n' +
      'Removed signal value “SERVICE NEEDED DPF CLOGGED” since this state can not\n' +
      'be detected.'
  },
  '1255': {
    id: '1255',
    demo: null,
    logID: 'LogID1197',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To record aborted regenerations.\n' +
      'The 20 latest aborted regenerations are recorded.',
    Informant: '53550 Per Verner',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    InputSignal: 'Regeneration In Progress\n' +
      'Key Feed\n' +
      'Switch Start/Stop Regeneration\n' +
      'Clock\n' +
      'Date\n' +
      'Machine Hours',
    Filtering: 'None',
    ActionsAtInputSignalError: 'According to general requirements.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'According to the general requirements for an “Event log”, in addition an optional Cell\n' +
      '(“Cell #5”) shall exist and be coded according to the following table:\n' +
      'Event Trigger Encoding\n' +
      'Key Feed changes to OFF 1\n' +
      'Switch Start/Stop Regeneration = changes to Stop 2',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "Key Feed changes to OFF 1\n" +
      "Switch Start/Stop Regeneration = changes to Stop 2",
    ConditionsForLogging: 'The following events shall trigger the log:\n' +
      ' If Key Feed changes to OFF and Regeneration In Progress = ON.\n' +
      ' If Switch Start/Stop Regeneration changes to Stop and Regeneration In Progress =\n' +
      'ON.\n' +
      'The event which triggered the event log shall be stored in the optional cell (Cell #5).',
    OutputDataFormat: 'According to general requirements for event log.',
    Comment: 'Modifications 2010-07-14, New Issue U02 Viktor Pahv:\n' +
      'Changed CELL #7 to CELL#5 since the log has changed from duration log to event log\n' +
      'at some point. Also clarified that it is an “event log”..'
  },
  '1256': {
    id: '1256',
    demo: null,
    logID: 'LogID1198',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To record regeneration durations.\n' +
      'The 20 latest regenerations are recorded.',
    Informant: '53550 Per Verner',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Regeneration In Progress\nClock\nDate\nMachine Hours',
    Filtering: 'None',
    ActionsAtInputSignalError: 'According to general requirements.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'According to the general requirements for a “Duration log”.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "No information shall be stored in the additional cell (Cell #7).",
    ConditionsForLogging: 'The following event shall trigger the duration log:\n' +
      '- 68 -\n' +
      ' Regeneration In Progress = ON.\n' +
      'No information shall be stored in the additional cell (Cell #7).',
    OutputDataFormat: 'According to general requirements for duration log.',
    Comment: 'None'
  },
  '1257': {
    id: '1257',
    demo: null,
    logID: 'LogID1199',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To record regeneration intervals.\n' +
      'The time between the 20 latest regenerations are recorded.',
    Informant: '53550 Per Verner',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Regeneration In Progress\nClock\nDate\nMachine Hours',
    Filtering: 'None',
    ActionsAtInputSignalError: 'According to general requirements.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'According to the general requirements for a “Duration log”.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "No information shall be stored in the additional cell (Cell #7).",
    ConditionsForLogging: 'The following event shall trigger the duration log:\n' +
      ' Regeneration In Progress = OFF.\n' +
      'No information shall be stored in the additional cell (Cell #7).',
    OutputDataFormat: 'According to general requirements for duration log.',
    Comment: 'None'
  },
  '1282': {
    id: '1282',
    demo: '00000B810000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID1057',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To store data how often the water in fuel alarm is active.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Water in fuel alarm [on, off]\nengine state [on, off, crank]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'According to the general requirements for a “Duration log”.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 0,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Engine sate is on. Logging should be performed when water in fuel alarm is on.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events.',
    Comment: 'None'
  },
  '1285': {
    id: '1285',
    demo: null,
    logID: 'LogID1201',
    x: 'Pressure distribution(mbar)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt955' },
      { key: 'bt955n899' },
      { key: 'bt899n845' },
      { key: 'bt845n795' },
      { key: 'bt795n747' },
      { key: 'bt747n701' },
      { key: 'bt701n657' },
      { key: 'bt657n' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log barometric pressure distribution.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Barometric pressure, PID108 [Bar]\nengine state [running, standstill]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'For all cells, 1bit = 1second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine state is running.',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).'
  },
  '127B': {
    id: '127B',
    demo: null,
    logID: 'LogID440',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'temperature', ratio: 1, unit: "ºC" }],
    Purpose: 'Specify data relating to high hydraulic oil temperature instances that is logged.',
    Informant: 'MV',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Engine state {Off, On}\n' +
      'Hydraulic oil temperature {ºC}\n' +
      'Hydraulic oil temperature status {Normal, High, Error}',
    Filtering: 'none',
    ActionsAtInputSignalError: 'Engine state no data logging\n' +
      'Hydraulic oil temperature no data logging\n' +
      'Hydraulic oil temperature status no data logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.\n' +
      'For temperature values, 1 bit = 1 ºC.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'ºC',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Engine state must be “on” for logging in any of the cells or range pairs.\n' +
      'Hydraulic oil temperature status must also be high for time to be logged in cell 3. In order for an occurrence of\n' +
      'high oil temperature to be recorded in a range pair and the count to increment by 1, the high hydraulic oil\n' +
      'temperature status must change from “normal” or “error” to “high.” The event of high hydraulic oil temperature\n' +
      'will end when the status changes from “high” back to “normal” or “error.”',
    OutputDataFormat: 'This log has standard duration log format with one additional cell storing the highest temperature of each high\n' +
      'hydraulic oil temperature event that is logged. A total of 20 events of high hydraulic oil temperature are stored at\n' +
      'a time.',
    Comment: 'Log has common duration log format and is intended for use by all VCE business lines.'
  },
  '1281': {
    id: '1281',
    demo: '000ECF9500000000000000030000021D00000001000000070000000100000001000000040000000000000000000000000000000000000000000000000000000000000003000000400000000000000000000000C70000000000000000000000A100000000000000000000002C000000000000000000000049',
    logID: 'LogID973',
    x: 'Engine speed (rpm)',
    y: 'Number of engine shutdown',
    xKeyArr: [
      { key: 'lt600' },
      { key: 'bt600n800' },
      { key: 'bt800n1000' },
      { key: 'bt1000n1200' },
      { key: 'bt1200n1400' },
      { key: 'bt1400n1600' },
      { key: 'bt1600n1800' },
      { key: 'bt1800n2000' },
      { key: 'bt2000n2200' },
      { key: 'bt2200n2400' },
      { key: 'bt2400n2600' },
      { key: 'bt2600n2800' },
      { key: 'bt2800n3000' },
      { key: 'gt3000' }
    ],
    yKeyArr: [
      { key: 'numEngShutdown', ratio: 1, unit: "shutdownNumber" }, //numberOfEngineShutdown
      { key: 'lt3', ratio: 1, unit: "delayedTimes" },
      { key: 'bt3n10', ratio: 1, unit: "delayedTimes" },
      { key: 'bt10n60', ratio: 1, unit: "delayedTimes" },
      { key: 'bt60n180', ratio: 1, unit: "delayedTimes" },
      { key: 'gt180', ratio: 1, unit: "delayedTimes" }
    ],
    Purpose: 'To see engine high speed stop and idle time before engine shutdown distribution.',
    Informant: 'Excavator team, Jaesu Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event count in class --1281',
    /*special log*/
    InputSignal: 'Engine speed, Engine off',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 event',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine on, start key OFF',
    OutputDataFormat: 'See document General log requirements. Event count of each class.\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'Example:\n' +
      'Vector with total number of each class.',
    Comment: ''
  },
  '12A5': {
    id: '12A5',
    demo: null,
    logID: 'LogID1202',
    x: 'Engine mode(Common/D-BRIC)',
    y: 'Engine average load (%)',
    xKeyArr: [
      { key: 'i2ori2' },
      { key: 'i1ori1' },
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "%" }],
    Purpose: 'To see average load distribution by engine modes.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine load, PID92 [%]\nengine state [running, standstill]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 1,
    BitResolution: '1 bit = 1 %',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: '%',
    ConditionsForLogging: 'Engine running.',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).'
  },
  '12A6': {
    id: '12A6',
    demo: null,
    logID: 'LogID1210',
    x: 'Coolant temperature (°C)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt75' },
      { key: 'bt75n85' },
      { key: 'bt85n95' },
      { key: 'bt95n105' },
      { key: 'bt105n108' },
      { key: 'gt108' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data of engine coolant temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine state [running, standstill]\nCoolant temperature [°C]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running.',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).'
  },
  '12A0': {
    id: '12A0',
    demo: null,
    logID: 'LogID319',
    x: 'Hydraulic Oil Temperature (°C)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'ltm40' }, { key: 'btm40nm30' },
      { key: 'btm30nm20' }, { key: 'btm20nm10' },
      { key: 'btm10n0' }, { key: 'bt0n30' },
      { key: 'bt30n40' }, { key: 'bt40n60' },
      { key: 'bt60n70' }, { key: 'bt70n80' },
      { key: 'bt80n85' }, { key: 'bt85n90' },
      { key: 'bt90n95' }, { key: 'bt95n100' },
      { key: 'bt100n110' }, { key: 'bt110n120' },
      { key: 'gte120' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'Specify data relating to hydraulic oil temperature distribution that is logged,',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine State {Off, Crank, On}\nHydraulic Oil Temperature {°C}',
    Filtering: '',
    ActionsAtInputSignalError: 'Engine State no data logging\nHydraulic Oil Temperature no data logging',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine state must be “on” for logging in any of the cells to occur.\n' +
      'For all cells except cell 1, the hydraulic oil temperature must correspond to the correct temperature interval.',
    OutputDataFormat: 'Output is stored in a vector containing the time the hydraulic system has run in each oil temperature interval.\n' +
      'In cell 1 information of total log duration is stored.'
  },
  '12A1': {
    id: '12A1',
    demo: null,
    logID: 'LogID482',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'temperature', ratio: 1, unit: "ºC" }],
    Purpose: 'Specify data relating to high engine charge air temperature instances that is logged.',
    Informant: 'MV',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Engine state {Off, On}\n' +
      'Engine charge air temperature from E-ECU {ºC}\n' +
      'Engine charge air temperature status from E-ECU {Normal, High, Error}',
    Filtering: 'none',
    ActionsAtInputSignalError: 'Engine state no data logging\n' +
      'Engine charge air temperature no data logging\n' +
      'Engine charge air temperature status no data logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.\n' +
      'For temperature values, 1 bit = 1 ºC.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'ºC',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Engine state must be “on” for logging in any of the cells or range pairs.\n' +
      'Charge air temperature status must also be high for time to be logged in cell 3. In order for an occurrence of high\n' +
      'engine charge air temperature to be recorded in a range pair and the count to increment by 1, the engine charge air\n' +
      'temperature must change from “normal” to “high.” The event of high engine charge air temperature will end when\n' +
      'the status changes from “high” back to “normal.”',
    OutputDataFormat: 'This log has standard duration log format with one additional cell storing the highest temperature of each high\n' +
      'charge air temperature event that is logged. A total of 20 events of high charge air temperature are stored at a\n' +
      'time.',
    Comment: 'Log has common duration log format and is intended for use by all VCE business lines.'
  },
  '12A2': {
    id: '12A2',
    demo: '000124B50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID495',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'Specify data relating to low engine coolant level instances that is logged.',
    Informant: 'MV',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Engine state {Off, On}\nEngine Coolant Level {Normal, Low}',
    Filtering: 'Duration filter of 60 seconds used for all logged data.',
    ActionsAtInputSignalError: 'Engine state no data logging\nEngine Coolant Level no data logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 0,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Engine state must be “on” for logging in any of the cells.\n' +
      'In order for an occurrence of low engine coolant level to be recorded in a data point, the count to increment by 1\n' +
      'and time to be recorded in cell 2, the engine coolant level state must change from “normal” to “low.” The event of\n' +
      'low engine coolant level will end when the status changes from “low” to “normal.”',
    OutputDataFormat: 'This log has standard duration log format. A total of 20 events of low engine coolant level are stored at a time.',
    Comment: 'Log has common duration log format and is intended for use by all VCE business lines.'
  },
  '12A3': {
    id: '12A3',
    demo: '0001782300008EB900000CA300000B2B00000B0E000015440000110300000441000006600000174800007E5E000000740000000E000000120000001400000031000000280000000E0000001800000088000003C2',
    logID: 'LogID971',
    x: 'Engine mode(Common/D-BRIC)',
    y: 'DBRIC',
    xKeyArr: [
      { key: 'i2ori2' },
      { key: 'i1ori1' },
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [{ key: 'timeInClass', ratio: 1, unit: "s" },
      { key: 'fuelConsumptionLitre', ratio: 0.472, unit: "L" }
    ],
    Purpose: 'To see engine speed mode and fuel consumption distribution.',
    Informant: 'Excavator team, Jaesu Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Mode switch',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 1,
    BitResolution: '1 bit = 1 second for Engine mode(time in class)\n' +
      '1 bit = 0.472L (0.125gal) for Fuel (Litre)',
    BitA: 1,
    BitAUnit: 's',
    BitB: 0.472,
    BitBUnit: 'L',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).'
  },
  '12A4': {
    id: '12A4',
    demo: null,
    logID: 'LogID972',
    x: 'Engine mode%(Common/D-BRIC)',
    y: 'DBRIC',
    xKeyArr: [
      { key: 'i2ori2' },
      { key: 'i1ori1' },
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [
      { key: 'lt60', ratio: 1, unit: "s" },
      { key: 'bt60n70', ratio: 1, unit: "s" },
      { key: 'bt70n80', ratio: 1, unit: "s" },
      { key: 'bt80n90', ratio: 1, unit: "s" },
      { key: 'gte90', ratio: 1, unit: "s" }
    ],
    Purpose: 'To see load distribution by engine modes.',
    Informant: 'Engine load percent from the EMS(%)',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Mode switch',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: '%',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).'
  },
  '12A7': {
    id: '12A7',
    logID: 'LogID1212',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'machineHours', ratio: 1, unit: "machineHours" }],
    Purpose: 'To store data how often the fuel filter clogging alarm is active.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Fuel filter clogging [on, off]\nEngine state[running, off, crank]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 0,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Engine sate is running. Logging should be performed when fuel filter clogging alarm is on.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events.'
  },
  '12E2': {
    /*new--->2021-03-25*/
    id: '12E2',
    demo: null,
    logID: 'LogID1279',
    x: 'Engine mode',
    y: 'cellNo',
    xKeyArr: [
      { key: 'Correct' },
      { key: 'Incorrect' },
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "number" }],

    Purpose: 'To see correct quick coupler operation.',
    Informant: 'Jaeheon Ryu, E&E System EXC',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine RPM\n' +
      'Control lock lever switch\n' +
      'Quick coupler initiating switch\n' +
      'Quick coupler confirm switch\n' +
      'Diagnostic signal of acoustic alarm device\n' +
      'Diagnostic signal of quick coupler actuator device\n' +
      'Operating mode switch (Wheel EXC only)',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if one signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1: 1 bit = 1s\n' +
      'Cell 2: 1 bit = number of correct sequence operation\n' +
      'Cell 3: 1 bit = number of incorrect sequence operation',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: '%',
    ConditionsForLogging: 'Engine running',
    OutputDataFormat: 'Preconditions:\n' +
      'Engine is running\n' +
      'Control lockout lever is unlock\n' +
      'No parking mode (wheel EXC only)\n' +
      'Correct:\n' +
      'The number of correct operation shall be increased when operator follows below\n' +
      'sequence.\n' +
      'Quick coupler initiating switch = On\n' +
      'Quick coupler confirm switch = pressed over 0.7sec after detecting rising edge\n' +
      'Quick coupler initiating switch = Off\n' +
      'Quick coupler confirm switch = pressed over 0.7sec after detecting rising edge\n' +
      'Incorrect:\n' +
      'The number of incorrect operation shall be increased when operator follows below one\n' +
      'sequence.\n' +
      'Preconditions are not fulfilled.\n' +
      'Quick coupler initiating switch is On.\n' +
      'Or\n' +
      'Preconditions are fulfilled.\n' +
      'Quick coupler initiating switch is On.\n' +
      'Then precondition is not fulfilled before finishing correct sequence.',
  },

  /**
   * GPMCU CCM *
   * */
  '137B': {
    demo: '000037DD00003456000001DE0000019100000018000000000000000000003442000001F100000199000000110000000000000000000032B50000024C000001290000006F000000F200000052',
    id: '137B',
    logID: 'LogID978',
    x: 'Pump configuration',
    y: 'Pump Input Torque',
    xKeyArr: [{ key: 'pump1' }, { key: 'pump2' }, { key: 'pump1AddPump2' }],
    yKeyArr: [
      { key: 'lt10', ratio: 1, unit: "s" },
      { key: 'bt10n30', ratio: 1, unit: "s" },
      { key: 'bt30n50', ratio: 1, unit: "s" },
      { key: 'bt50n70', ratio: 1, unit: "s" },
      { key: 'bt70n90', ratio: 1, unit: "s" },
      { key: 'gt90', ratio: 1, unit: "s" }
    ],
    Purpose: 'To see hydraulic pump load torque distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pump load Torque from sensor.',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: '1',
    BitBUnit: 'Vector with total number  ???',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'Example:\n' +
      'Vector with total number of each class.'
  },
  '137C': {
    id: '137C',
    demo: '0000185F0000000B000000150000001F00000032000000430000002A0000000900000016000000130000002300000047000002240000000D0000002700000018000000280000002F0000002A000000280000004000000014000000220000002C0000021F000000060000007500000092000001250000000900000070000000A0000001140000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID979',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'bt6n10' },
      { key: 'bt10n15' },
      { key: 'bt15n25' },
      { key: 'gt25' }
    ],
    yKeyArr: [
      { key: 'boomUp', ratio: 1, unit: "s" },
      { key: 'boomDown', ratio: 1, unit: "s" },
      { key: 'armIn', ratio: 1, unit: "s" },
      { key: 'armOut', ratio: 1, unit: "s" },
      { key: 'bucketInorOut', ratio: 1, unit: "s" },
      { key: 'swing', ratio: 1, unit: "s" },
      { key: 'travelLH', ratio: 1, unit: "s" },
      { key: 'travelRH', ratio: 1, unit: "s" },
      { key: 'x1', ratio: 1, unit: "s" },
      { key: 'adjustableBoom', ratio: 1, unit: "s" }
    ],
    Purpose: 'To see Hydraulic working operation mode distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pilot pressure signal from each solenoid valve.',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: '1',
    BitBUnit: 'Vector with total number ???',
    ConditionsForLogging: '1. Engine On\n' +
      '2. It records when Pilot pressure for each Actuator working is equal and larger than 6.0\n' +
      'kgf /㎠. Especially for Adjustable boom working only, It records when Pilot pressure\n' +
      'has to be equal and larger than 14.0 kgf /㎠.',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'Example:\n' +
      'Vector with total number of each class.'
  },
  '137D': {
    id: '137D',
    demo: null,
    logID: 'LogID1205',
    x: 'Reversing time (sec)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'bt20n40' },
      { key: 'bt41n60' },
      { key: 'bt61n80' },
      { key: 'bt81n100' },
      { key: 'bt101n120' },
      { key: 'bt121n140' },
      { key: 'bt141n160' },
      { key: 'bt161n180' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To see Hydraulic working operation mode distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pilot pressure signal from each solenoid valve.',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'sec',
    ConditionsForLogging: '1. Engine On\n' +
      '2. It records when Pilot pressure for each Actuator working is equal and larger than 6.0\n' +
      'kgf /㎠. Especially for Adjustable boom working only, It records when Pilot pressure\n' +
      'has to be equal and larger than 14.0 kgf /㎠.',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'Example:\n' +
      'Vector with total number of each class.'
  },
  '137E': {
    id: '137E',
    demo: "0000000000000000",
    logID: 'LogID1204',
    x: 'Log duration/Fan reversing',
    y: 'cellNo',
    xKeyArr: [{ key: 'fanReversing' }],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data for fan operating, normal/reverse.',
    Informant: 'Engine state [running, standstill]\nFan rotating [normal, reverse]',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pilot pressure signal from each solenoid valve.',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running,',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'If output actuator for fan reversing is erroneous, do not increment fan reversing.,'
  },
  '137F': {
    id: '137F',
    demo: null,
    logID: 'LogID1209',
    x: 'X1 operating with pressure setting',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt120' },
      { key: 'bt121n140' },
      { key: 'bt141n160' },
      { key: 'bt161n180' },
      { key: 'bt181n200' },
      { key: 'bt201n220' },
      { key: 'bt221n240' },
      { key: 'bt241n260' },
      { key: 'bt261n280' },
      { key: 'bt281n300' },
      { key: 'bt301n320' },
      { key: 'bt321n340' },
      { key: 'bt341n360' },
      { key: 'gt361' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data for X1 pressure control setting usage.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'X1 operating [on, off]\n' +
      'Engine state [running, standstill]\n' +
      'X1 pressure setting [bar]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running,\nX1 operating',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None.'
  },
  '1380': {
    id: '1380',
    demo: null,
    logID: 'LogID1203',
    x: 'X3 operating by',
    y: 'cellNo',
    xKeyArr: [{ key: 'push' }, { key: 'toggle' }, { key: 'proportional' }],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "time" }],
    Purpose: 'To log data for X3 control usage by switch pattern.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'X3 operating [on, off]\n' +
      'Engine state [running, standstill]\n' +
      'Switch pattern setting [push, toggle, proportional]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running,\nX3 operating',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None.'
  },
  '1381': {
    id: '1381',
    demo: null,
    logID: 'LogID1207',
    x: 'Interval(min)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'bt20n30' },
      { key: 'bt31n40' },
      { key: 'bt41n50' },
      { key: 'bt51n60' },
      { key: 'bt61n70' },
      { key: 'bt71n80' },
      { key: 'bt81n90' },
      { key: 'bt91n100' },
      { key: 'bt101n110' },
      { key: 'bt111n120' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "time" }],
    Purpose: 'To log data for reversible fan time – auto1',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine state [running, standstill]\n' +
      'Reversible fan setting mode [manual, auto1, auto2, off]\n' +
      'Auto1 time(JGY) [minute]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running,\nAuto1 mode',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None.'
  },
  '1382': {
    id: '1382',
    demo: null,
    logID: 'LogID1208',
    x: 'Reversible fan setting mode (operating time)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'manual' },
      { key: 'auto1' },
      { key: 'auto2' },
      { key: 'off' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data for reversible fan usage',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine state [running, standstill]\n' +
      'Reversible fan setting mode [manual, auto1, auto2, off]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None.'
  },
  '1371': {
    id: '1371',
    demo: null,
    logID: 'LogID215',
    x: 'Engine boost air temperature [°C]',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lte20' },
      { key: 'bt21n30' },
      { key: 'bt31n40' },
      { key: 'bt41n57' },
      { key: 'bt58n62' },
      { key: 'bt63n67' },
      { key: 'bt68n72' },
      { key: 'bt73n77' },
      { key: 'bt78n82' },
      { key: 'gte83' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    /* doc is wrong , Doc description ratio = 10 */
    Purpose: 'Register the Engine boost air temperature distribution while machine operates.',
    Informant: 'Hakyong Yang, Engine team',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine boost temperature signal from E-ECU (PID 105 on J1587)',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Cell 1: 1 bit = 1 s\nCell 2-11: 1 bit = 10s',
    BitA: 1,
    BitAUnit: 's',
    BitB: 10,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON.',
    OutputDataFormat: 'Data is stored in 11 cells.\n' +
      'In cell no. 1 the duration of the total log should be stored.\n' +
      'The total time with Boost air temperature distribution within the defined intervals is\n' +
      'stored in cell 2-11.',
    Comment: 'None.'
  },
  '1372': {
    id: '1372',
    demo: null,
    logID: 'LogID218',
    x: 'Engine control mode(Common/D-BRIC)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'Register the rotator operating number and time while machine operates.',
    Informant: 'Yanggu Lee, Hydraulic team',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Rotator switch',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'Cell 1-9: 1 bit = 1 s',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Cell no 1-9: Engine ON.\nCell no 2-9: Rotator ON',
    OutputDataFormat: 'Data is stored in 9 cells.\n' +
      'In cell no. 1 the duration of the total log should be stored.',
    Comment: 'Display the total time of rotator operation at the specified engine control mode'
  },
  '1373': {
    /*注意*/
    id: '1373',
    demo: null,
    logID: 'LogID219',
    x: 'Hydraulic oil flow rate range (lpm)',
    y: 'One way flow/Two way flow',
    xKeyArr: [
      { key: 'lte50' },
      { key: 'bt51n100' },
      { key: 'bt101n150' },
      { key: 'bt151n200' },
      { key: 'bt201n250' },
      { key: 'bt251n300' },
      { key: 'bt301n350' },
      { key: 'bt351n400' },
      { key: 'bt401n450' },
      { key: 'bt451n500' },
      { key: 'bt501n550' },
      { key: 'bt551n600' },
      { key: 'gte601' }
    ],
    yKeyArr: [{ key: 'oneWayFlow', ratio: 1, unit: "totalNumber" },
      { key: 'twoWayFlow', ratio: 1, unit: "totalNumber" }
    ],
    Purpose: 'To see the percentage of each flow control selection.',
    Informant: 'Yanggu Lee, Hydraulic team',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Current X1 flow rate which is dependent on engine RPM,\n' +
      'Hammer/Shear selection switch mode, Hammer/Shear pressure sensor signal',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 10,
    BitBUnit: '%???',
    ConditionsForLogging: 'Engine ON, X1 is activating',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'Display the distribution of the oil flow rate.'
  },
  '1374': {
    id: '1374',
    demo: null,
    logID: 'LogID318',
    x: 'Current distribution (mA)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt50' },
      { key: 'bt50n100' },
      { key: 'bt100n150' },
      { key: 'bt150n200' },
      { key: 'bt200n250' },
      { key: 'bt250n300' },
      { key: 'bt300n350' },
      { key: 'bt350n400' },
      { key: 'bt400n450' },
      { key: 'bt450n500' },
      { key: 'bt500n550' },
      { key: 'bt550n600' },
      { key: 'gte600' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "time" }],
    Purpose: 'To see the current distribution of the hydraulic oil cooler',
    Informant: 'Hydraulic department, / Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Hydraulic oil control current',
    Filtering: 'None',
    ActionsAtInputSignalError: 'Wrong signal not logging.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON',
    OutputDataFormat: 'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'Display the current distribution of the hydraulic oil cooler at the specified range.'
  },
  '1375': {
    id: '1375',
    demo: null,
    logID: 'LogID457',
    x: 'Engine Speed Signal (rpm)',
    y: 'Torque (Nm)',
    xKeyArr: [
      { key: 'lt750' },
      { key: 'bt751n1000' },
      { key: 'bt1000n1250' },
      { key: 'bt1250n1500' },
      { key: 'bt1500n1700' },
      { key: 'bt1700n1900' },
      { key: 'bt1900n2100' },
      { key: 'bt2100nMAX' },
      { key: 'gteMAX' }
    ],
    yKeyArr: [
      { key: 'lt150', ratio: 1, unit: "time" },
      { key: 'bt150n300', ratio: 1, unit: "time" },
      { key: 'bt300n450', ratio: 1, unit: "time" },
      { key: 'bt450n600', ratio: 1, unit: "time" },
      { key: 'bt600n750', ratio: 1, unit: "time" },
      { key: 'bt750n900', ratio: 1, unit: "time" },
      { key: 'bt900n1050', ratio: 1, unit: "time" },
      { key: 'bt1050n1200', ratio: 1, unit: "time" },
      { key: 'gte1200', ratio: 1, unit: "time" }
    ],
    Purpose: 'Specify the data related to engine operation at various load-speed conditions that is logged.',
    Informant: 'Hydraulic department, / Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'ESW Parameter, Grader Model {G930, G940, G946, G960, G970, G976, G990}\n' +
      'Engine State {Off, Crank, On}\n' +
      'Engine Speed Signal\n' +
      'Engine Torque Signal',
    Filtering: 'None',
    ActionsAtInputSignalError: 'Engine State no data logging\n' +
      'Engine Speed Signal no data logging\n' +
      'Engine Torque Signal no data logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For cell all cells, 1 bit = 1 second.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine state must be “on” for logging in any of the cells to occur.\n' +
      'For all cells except cell 1, the rpm and torque must correspond to the specified rpm and torque range of a cell for\n' +
      'time to be recorded.',
    OutputDataFormat: 'In cell 1 information of total log duration is stored.\n' +
      'All other data is logged in a 9 X 9 matrix where each cell contains a value representing time in hours to the nearest\n' +
      '0.1 hour.',
    Comment: ''
  },
  '1376': {
    id: '1376',
    demo: null,
    logID: 'LogID970',
    x: 'Machine operation',
    y: 'cellNo',
    xKeyArr: [
      { key: 'engONButNoWorkIdle' }, //engineONButNoWorkIdlingOperation
      { key: 'workAndTravel' } //workAttachmentAndTravelOperation
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "totalNumber" }],
    Purpose: 'To see the machine utilization distribution (attachment and track usage, Idling).',
    Informant: 'Excavator team, Jaesu Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: '1. Attachment pilot pressure switch ON, and Travel operation pilot pressure switch ON,\n' +
      '2. Engine ON but no work operation: Idling.',
    Filtering: 'None',
    ActionsAtInputSignalError: 'Engine State no data logging\n' +
      'Engine Speed Signal no data logging\n' +
      'Engine Torque Signal no data logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'Display the working ratio: attachment move and track move versus only Engine ON'
  },
  '1377': {
    id: '1377',
    demo: null,
    logID: 'LogID974',
    x: 'Engine speed control switch mode(Common/D-BRIC)',
    y: 'Time in Class',
    xKeyArr: [
      { key: 'i2ori2' },
      { key: 'i1ori1' },
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [{ key: 'timeInClass', ratio: 1, unit: "totalNumber" }],
    Purpose: 'To see Hammer/Shear operating on mode distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Signal from switch or Pedal (pressure switch signal), Engine control mode',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    BitResolution: '1 bit = 1 second',
    ConditionsForLogging: 'Engine ON, Hammer/Shear selection switch ON',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'Display the working ratio: attachment move and track move versus only Engine ON'
  },
  '1378': {
    id: '1378',
    demo: null,
    logID: 'LogID975',
    x: 'Time',
    y: 'cellNo',
    xKeyArr: [{ key: 'highSpeed' }, { key: 'lowSpeed' }],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To see the percentage of the high and low speed of the tracks.',
    Informant: 'Hydraulic team, Yeonho Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pressure switch signal of travel working ( PiPrsTL, PiPrsTR)',
    Filtering: '',
    ActionsAtInputSignalError: 'Wrong signal not logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: '%???',
    ConditionsForLogging: 'If Engine running state = [ENGINE_RUNNING]\n' +
      ' Read signal in Cell no (1)\n' +
      'if Travel Speed Selection = [High] and ( PiPrsTL ³ 6 or PiPrsTR ³ 6)\n' +
      ' Read signal in Cell no (2)\n' +
      'else if Travel Speed Selection = [Low] and ( PiPrsTL ³ 6 or PiPrsTR ³ 6)\n' +
      ' Read signal in Cell no (3)',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'Display the travel speed distribution of the hydraulic travel unit at the specified speed'
  },
  '1379': {
    /*special log*/
    id: '1379',
    demo: "002CEF000000005C0000003F0000005700000055000000830000009A000185E40002894C000175250002737000019DD400030372000396A60000019C000541B2",
    logID: 'LogID422',
    x: 'Colno',
    y: 'Working operation mode',
    xKeyArr: [
      { key: 'boomUp' },
      { key: 'boomDown' },
      { key: 'armIn' },
      { key: 'armOut' },
      { key: 'bucketInorOut' },
      { key: 'swing' },
      { key: 'lHorRHTravel' },
      { key: 'totalBoosttime' }
    ],
    yKeyArr: [
      { key: 'boostSwitchOnExFmode', ratio: 1, unit: "totalNumber" }, //powerBoostSwitchONExceptFMode
      { key: 'travelEx460C', ratio: 1, unit: "totalNumber" }, //travelOperationExcept460C
      { key: 'engSpdCtlFmode', ratio: 1, unit: "totalNumber" } //engineSpeedControlFMode
    ],
    Purpose: 'To see Hydraulic Working operation with Power boost distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental --1379',
    /*special log*/
    InputSignal: 'Power boost solenoid valve ON with\n' +
      '1. Power boost switch (lever on RH) ON\n' +
      '2. Signals from Pilot pressure sensors of RCV for Travel operation only\n' +
      '3. Engine speed control: F mode',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'In the cell (15), it’s the log duration of Power boost switch (on the lever) ON with\n' +
      'Power boost solenoid valve ON except F mode.\n' +
      'In the cell (16), it’s the log duration of Engine speed mode “F” with Power boost\n' +
      'solenoid valve ON.\n' +
      'Example:\n' +
      'Vector with total number of each class.',
    Comment: 'See C-series V-ECU function spec. for detail functionality.'
  },
  '137A': {
    id: '137A',
    demo: null,
    logID: 'LogID1055',
    x: 'Pump Out pressure (kgf/㎠)',
    y: 'Pump working condition mode',
    xKeyArr: [
      { key: 'lt50' },
      { key: 'bt50n100' },
      { key: 'bt100n150' },
      { key: 'bt150n200' },
      { key: 'bt200n250' },
      { key: 'bt250n300' },
      { key: 'bt300n350' },
      { key: 'bt350n400' },
      { key: 'gt400' }
    ],
    yKeyArr: [
      { key: 'pump1Total', ratio: 1, unit: "s" },
      { key: 'pump2Total', ratio: 1, unit: "s" },
      { key: 'pump1ForSwing', ratio: 1, unit: "s" },
      { key: 'pump1ForTravelLH', ratio: 1, unit: "s" },
      { key: 'pump1ForTravelRH', ratio: 1, unit: "s" }
    ],
    Purpose: 'To see Pump load pressure distribution (%, Hr).',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pump load pressure from sensor',
    Filtering: '',
    ActionsAtInputSignalError: 'Wrong signal not logging',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: '%???',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: ''
  },
  '1388': {
    id: '1388',
    demo: null,
    logID: 'LogID1206',
    x: 'operating by',
    y: 'cellNo',
    xKeyArr: [
      { key: 'oneByPush' }, //oneWayOperatingByPush
      { key: 'oneByToggle' }, //oneWayOperatingByToggle
      { key: 'oneByProporTional' }, //oneWayOperatingByProporTional
      { key: 'oneByRCV' }, //oneWayOperatingByRCV
      { key: 'twoByPush' }, //twoWayOperatingByPush
      { key: 'twoByToggle' }, //twoWayOperatingByToggle
      { key: 'twoByProporTional' }, //twoWayOperatingByProporTional
      { key: 'twoByRCV' } //twoWayOperatingByRCV
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data for X1 control usage by switch or RCV',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'X1 operating [on, off]\n' +
      'Engine state [running, standstill]\n' +
      'Switch pattern setting [push, toggle, proportional]\n' +
      'RCV [activating, neutral]\n' +
      'X1 setting [1way, 2way]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running,\nX1 operating',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None'
  },
  '1383': {
    id: '1383',
    demo: null,
    logID: 'LogID1211',
    x: 'Fan speed (RPM)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt100' },
      { key: 'bt101n400' },
      { key: 'bt401n700' },
      { key: 'bt701n1000' },
      { key: 'bt1001n1300' },
      { key: 'bt1301n1600' },
      { key: 'bt1601n1900' },
      { key: 'bt1901n2200' },
      { key: 'bt2201n2500' },
      { key: 'bt2501n2800' },
      { key: 'bt2801n' }
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'To log data of cooling fan speed distribution.',
    Informant: 'Hydraulic team, Moonsoo Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine running',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).',
    Comment: 'None'
  },
  '1384': {
    id: '1384',
    demo: null,
    logID: 'LogID1252',
    x: 'Total Time when ECO mode is of',
    y: 'cellNo',
    xKeyArr: [
      { key: 'timeECOoff' }, //totalTimeWhenECOModeIsOff
    ],
    yKeyArr: [{ key: 'cellNo', ratio: 1, unit: "s" }],
    Purpose: 'Log the distribution of ECO mode usage.',
    Informant: 'Jan Liebhaeuser, Konz, TP E&E',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Information about ECO mode activation via J1939',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'For all cells, 1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: '- Engine on - ECO mode activation signal error-free',
    OutputDataFormat: 'In cell 1 information of total log duration is stored. In cell 2 the total time when ECO mode is off is stored.',
    Comment: 'None'
  },
  '1385': {
    id: '1385',
    demo: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID1269',
    x: 'Engine mode Common/D-BRIC',
    y: 'ECO mode activated',
    xKeyArr: [
      { key: 'i2ori2' },
      { key: 'i1ori1' },
      { key: 'f3orf2' },
      { key: 'f2orf1' },
      { key: 'f1org4' },
      { key: 'g3org3' },
      { key: 'g2org2' },
      { key: 'g1org1' },
      { key: 'horh' },
      { key: 'porp' }
    ],
    yKeyArr: [{ key: 'EcoOn', ratio: 1, unit: "s" }], //eCOModeActivated
    Purpose: 'To see the distribution of the engine control mode at ECO mode.',
    Informant: 'Wontaek Oh, Changwon, TP E&E',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Real Engine Control Mode\nECO-mode activated.',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 s',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON',
    OutputDataFormat: 'Time on class (11 classes)\n' +
      'Bit resolution = 1 s\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored',
    Comment: 'In case of Wheel EXC, this specification is applied at ”W” mode.'
  },
  '1528': {
    id: '1528',
    demo: null,
    logID: 'LogID1333',
    x: 'Pump Out pressure (kgf/㎠)',
    y: 'Pump working condition mode',
    xKeyArr: [
      { key: 'lt50' },
      { key: 'bt50n100' },
      { key: 'bt100n150' },
      { key: 'bt150n200' },
      { key: 'bt200n250' },
      { key: 'bt250n300' },
      { key: 'bt300n350' },
      { key: 'bt350n400' },
      { key: 'bt400n500' },
    ],
    yKeyArr: [
      { key: 'P1', ratio: 1, unit: "s" },
      { key: 'P2', ratio: 1, unit: "s" },
      { key: 'P3', ratio: 1, unit: "s" },
      { key: 'P1SW', ratio: 1, unit: "s" },
      { key: 'P1TLH', ratio: 1, unit: "s" },
      { key: 'P2TRH', ratio: 1, unit: "s" }
    ], //eCOModeActivated
    Purpose: 'To see Pump load pressure distribution (%, Hr).',
    Informant: 'E&E System EXC / Wooje Jin',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: '3 Pump load pressure from sensor',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 s',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine ON',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).\n' +
      'Example:Vector with total number of each class.',
    Comment: ''
  },
  '152A': {
    /*new--->2021-03-25*/
    id: '152A',
    demo: null,
    logID: 'LogID1334',
    x: 'Pump configuration',
    y: 'Pump Input Torque (%)',
    xKeyArr: [
      { key: 'Pump1' },
      { key: 'Pump2' },
      { key: 'Pump3' },
      { key: 'Pump1ANDPump2ANDPump3' }
    ],
    yKeyArr: [
      { key: 'lt10', ratio: 1, unit: "number" },
      { key: 'bt10n30', ratio: 1, unit: "number" },
      { key: 'bt30n50', ratio: 1, unit: "number" },
      { key: 'bt50n70', ratio: 1, unit: "number" },
      { key: 'bt70n90', ratio: 1, unit: "number" },
      { key: 'gt90', ratio: 1, unit: "number" },
    ],
    Purpose: 'To see hydraulic pump load torque distribution.',
    Informant: 'E&E System EXC / Wooje Jin',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pump load Torque from sensor',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'None.'
  },
  '152C': {
    /*new--->2021-03-25*/
    id: '152C',
    demo: null,
    logID: 'LogID1335',
    x: 'Current distribution (mA)',
    y: 'cellNo',
    xKeyArr: [
      { key: 'lt250' },
      { key: 'bt250n300' },
      { key: 'bt300n350' },
      { key: 'bt350n400' },
      { key: 'bt400n450' },
      { key: 'bt450n500' },
      { key: 'bt500n550' },
      { key: 'bt550n600' },
      { key: 'bt600n650' },
      { key: 'bt6500n700' },
      { key: 'bt700n750' },
      { key: 'bt750n800' },
      { key: 'gt800' },
    ],
    yKeyArr: [
      { key: 'cellNo', ratio: 1, unit: "" },
    ],
    Purpose: 'To see the current distribution of the cooling fan2',
    Informant: 'E&E System EXC / Wooje Jin',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Cooling fan2 control current',
    Filtering: '',
    ActionsAtInputSignalError: 'Wrong signal not logging',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Engine on',
    OutputDataFormat: 'In the first cell (1) of each log ID, information of total log duration shall be stored\n' +
      '(1 bit = 1 s).',
    Comment: 'None.'
  },
  '154A': {
    /*注意测试*/
    /*new--->2021-03-25*/
    id: '154A',
    demo: "000000000000000000000000000000000000000000000000000000000000000000000000",
    logID: 'LogID1340',
    x: 'operation mode',
    y: 'cellNo',
    xKeyArr: [
      { key: 'PipelayerMode' },
      { key: 'SeparatedMode' },
      { key: 'ManualSpeed' },
      { key: 'HighSpeed' },
      { key: 'X1InExcavator' },
      { key: 'X1InPipelayer' },
      { key: 'X3InExcavator' },
      { key: 'Reserved' },

    ],
    yKeyArr: [
      { key: 'cellNo', ratio: 1, unit: "" },
    ],
    Purpose: 'To log the usage of each operation mode and X1/X3 functions for the rotating pipelayer',
    Informant: 'Cannegieter Todd, EXC PPD NA',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pipelayer, Function Option parameter\n' +
      'Engine_Running Internal signal\n' +
      'ExcMacTyp Option parameter\n' +
      'Excavator Mode Machine mode selection switch input\n' +
      'Separated Mode Pump allocation mode switch input\n' +
      'Travel Mode Travel mode (speed) switch input\n' +
      'X1 Acting Internal signal\n' +
      'X3 Acting Internal signal',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: '',
    OutputDataFormat: '',
    Comment: 'The usage of each operation mode and X1/X3 function is tabulated below..'
  },

  /**
   * logID CCM *
   * */
  '1265': {
    id: '1265',
    demo: null,
    logID: 'LogID431',
    x: 'Time in Class',
    y: 'HVAC mode',
    xKeyArr: [{ key: 'time' }],
    yKeyArr: [{ key: 'autoMode', ratio: 1, unit: "s" }, { key: 'manualMode', ratio: 1, unit: "s" }],
    Purpose: 'To see Auto/ Manual mode selection distribution of HVAC.',
    Informant: 'Electric team, Taeyoun Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Signal from Auto/Manual mode selection switch',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'HVAC, Air-conditioner On',
    OutputDataFormat: 'See document General log requirements. (vector).\n' +
      '\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).\n' +
      '\n' +
      'Example:\n' +
      'Vector with total number of each class.\n',
    Comment: ''
  },
  '1266': {
    id: '1266',
    demo: null,
    logID: 'LogID436',
    x: 'Blower motor speed step',
    y: 'Air flow direction',
    xKeyArr: [
      { key: '1st' },
      { key: '2nd' },
      { key: '3rd' },
      { key: '4th' },
    ],
    yKeyArr: [
      { key: 'toFace', ratio: 1, unit: "s" },
      { key: 'toFoot', ratio: 1, unit: "s" },
      { key: 'toFaceFoot', ratio: 1, unit: "s" },
      { key: 'toDefroster', ratio: 1, unit: "s" }
    ],
    Purpose: 'To see Air distribution mode and Blower motor selection of HVAC (in manual mode).\n' +
      'The log can also be used to only show the Blower motor selection (in manual mode) if Air distribution is not present. \n',
    Informant: 'Electric team, Taeyoun Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Signal from switch selection',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'No logging shall be performed if the signal is erroneous.',
    OutputDataFormat: 'See document General log requirements (vector).\n' +
      '\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).\n' +
      '\n' +
      'Example:\n' +
      'Vector with total number of each class.\n' +
      'In case of no air distribution function in HVAC, then all logging should be done in cell 1-5 only. In this case the log only shows the Blower motor speed steps. Cell 6-17 should then be zeroes.\n' +
      '\n' +
      'Cell 2-5 will then have the following definition of the speed steps:\n' +
      '\n' +
      '1st step : \t  0% < Blower motor speed <= 40%\n' +
      '2nd step:  40% < Blower motor speed <= 60%\n' +
      '3rd step:  60% < Blower motor speed <= 80%\n' +
      '4th step:  80% < Blower motor speed <= 100%\n' +
      '\n' +
      'where 100% is the maximum Blower motor speed.\n',
    Comment: ''
  },
  '1267': {
    id: '1267',
    demo: null,
    logID: 'LogID437',
    x: 'Time in Class',
    y: 'Setting air temperature (degree C)',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [
      { key: 'lte16', ratio: 1, unit: "s" },
      { key: 'e17', ratio: 1, unit: "s" },
      { key: 'e18', ratio: 1, unit: "s" },
      { key: 'e19', ratio: 1, unit: "s" },
      { key: 'e20', ratio: 1, unit: "s" },
      { key: 'e21', ratio: 1, unit: "s" },
      { key: 'e22', ratio: 1, unit: "s" },
      { key: 'e23', ratio: 1, unit: "s" },
      { key: 'e24', ratio: 1, unit: "s" },
      { key: 'e25', ratio: 1, unit: "s" },
      { key: 'e26', ratio: 1, unit: "s" },
      { key: 'e27', ratio: 1, unit: "s" },
      { key: 'e28', ratio: 1, unit: "s" },
      { key: 'e29', ratio: 1, unit: "s" },
      { key: 'e30', ratio: 1, unit: "s" },
      { key: 'e31', ratio: 1, unit: "s" },
      { key: 'gte32', ratio: 1, unit: "s" },
    ],
    Purpose: 'To see Air temperature setting for auto control of HVAC.',
    Informant: 'Electric team, Taeyoun Kim',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Signal from switch selection',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: 'Bit resolutions are of standard duration log format.',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'HVAC, Auto control mode selection with Air-conditioner ON',
    OutputDataFormat: 'See document General log requirements (vector).\n' +
      '\n' +
      'Note: In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).\n' +
      '\n' +
      'Example:\n' +
      'Vector with total number of each class.\n',
    Comment: ''
  },
  '1268': {
    id: '1268',
    demo: null,
    logID: 'LogID438',
    x: 'Time in Class',
    y: 'Ambient temperature (degree C)',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [
      { key: 'em40', ratio: 10, unit: "s" },
      { key: 'em39', ratio: 10, unit: "s" },
      { key: 'em38', ratio: 10, unit: "s" },
      { key: 'em37', ratio: 10, unit: "s" },
      { key: 'em36', ratio: 10, unit: "s" },
      { key: 'em35', ratio: 10, unit: "s" },
      { key: 'em34', ratio: 10, unit: "s" },
      { key: 'em33', ratio: 10, unit: "s" },
      { key: 'em32', ratio: 10, unit: "s" },
      { key: 'em31', ratio: 10, unit: "s" },
      { key: 'em30', ratio: 10, unit: "s" },
      { key: 'em29', ratio: 10, unit: "s" },
      { key: 'em28', ratio: 10, unit: "s" },
      { key: 'em27', ratio: 10, unit: "s" },
      { key: 'em26', ratio: 10, unit: "s" },
      { key: 'em25', ratio: 10, unit: "s" },
      { key: 'em24', ratio: 10, unit: "s" },
      { key: 'em23', ratio: 10, unit: "s" },
      { key: 'em22', ratio: 10, unit: "s" },
      { key: 'em21', ratio: 10, unit: "s" },
      { key: 'em20', ratio: 10, unit: "s" },
      { key: 'em19', ratio: 10, unit: "s" },
      { key: 'em18', ratio: 10, unit: "s" },
      { key: 'em17', ratio: 10, unit: "s" },
      { key: 'em16', ratio: 10, unit: "s" },
      { key: 'em15', ratio: 10, unit: "s" },
      { key: 'em14', ratio: 10, unit: "s" },
      { key: 'em13', ratio: 10, unit: "s" },
      { key: 'em12', ratio: 10, unit: "s" },
      { key: 'em11', ratio: 10, unit: "s" },
      { key: 'em10', ratio: 10, unit: "s" },
      { key: 'em9', ratio: 10, unit: "s" },
      { key: 'em8', ratio: 10, unit: "s" },
      { key: 'em7', ratio: 10, unit: "s" },
      { key: 'em6', ratio: 10, unit: "s" },
      { key: 'em5', ratio: 10, unit: "s" },
      { key: 'em4', ratio: 10, unit: "s" },
      { key: 'em3', ratio: 10, unit: "s" },
      { key: 'em2', ratio: 10, unit: "s" },
      { key: 'em1', ratio: 10, unit: "s" },
      { key: 'e0', ratio: 10, unit: "s" },
      { key: 'e1', ratio: 10, unit: "s" },
      { key: 'e2', ratio: 10, unit: "s" },
      { key: 'e3', ratio: 10, unit: "s" },
      { key: 'e4', ratio: 10, unit: "s" },
      { key: 'e5', ratio: 10, unit: "s" },
      { key: 'e6', ratio: 10, unit: "s" },
      { key: 'e7', ratio: 10, unit: "s" },
      { key: 'e8', ratio: 10, unit: "s" },
      { key: 'e9', ratio: 10, unit: "s" },
      { key: 'e10', ratio: 10, unit: "s" },
      { key: 'e11', ratio: 10, unit: "s" },
      { key: 'e12', ratio: 10, unit: "s" },
      { key: 'e13', ratio: 10, unit: "s" },
      { key: 'e14', ratio: 10, unit: "s" },
      { key: 'e15', ratio: 10, unit: "s" },
      { key: 'e16', ratio: 10, unit: "s" },
      { key: 'e17', ratio: 10, unit: "s" },
      { key: 'e18', ratio: 10, unit: "s" },
      { key: 'e19', ratio: 10, unit: "s" },
      { key: 'e20', ratio: 10, unit: "s" },
      { key: 'e21', ratio: 10, unit: "s" },
      { key: 'e22', ratio: 10, unit: "s" },
      { key: 'e23', ratio: 10, unit: "s" },
      { key: 'e24', ratio: 10, unit: "s" },
      { key: 'e25', ratio: 10, unit: "s" },
      { key: 'e26', ratio: 10, unit: "s" },
      { key: 'e27', ratio: 10, unit: "s" },
      { key: 'e28', ratio: 10, unit: "s" },
      { key: 'e29', ratio: 10, unit: "s" },
      { key: 'e30', ratio: 10, unit: "s" },
      { key: 'e31', ratio: 10, unit: "s" },
      { key: 'e32', ratio: 10, unit: "s" },
      { key: 'e33', ratio: 10, unit: "s" },
      { key: 'e34', ratio: 10, unit: "s" },
      { key: 'e35', ratio: 10, unit: "s" },
      { key: 'e36', ratio: 10, unit: "s" },
      { key: 'e37', ratio: 10, unit: "s" },
      { key: 'e38', ratio: 10, unit: "s" },
      { key: 'e39', ratio: 10, unit: "s" },
      { key: 'e40', ratio: 10, unit: "s" },
      { key: 'e41', ratio: 10, unit: "s" },
      { key: 'e42', ratio: 10, unit: "s" },
      { key: 'e43', ratio: 10, unit: "s" },
      { key: 'e44', ratio: 10, unit: "s" },
      { key: 'e45', ratio: 10, unit: "s" },
      { key: 'e46', ratio: 10, unit: "s" },
      { key: 'e47', ratio: 10, unit: "s" },
      { key: 'e48', ratio: 10, unit: "s" },
      { key: 'e49', ratio: 10, unit: "s" },
      { key: 'e50', ratio: 10, unit: "s" },
    ],
    Purpose: 'The log shows the amount of time that the machine has been used in different ambient temperatures. ' +
      'For each temperature there is a “counter” that shows how long time the machine has been used at this ambient temperature. ' +
      'The total vehicle hour (log duration) is also logged.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Signal from ambient temperature sensor',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if the signal is erroneous.',
    SamplingRate: '0.1 Hz.',
    Hz: 0.1,
    BitResolution: '1 bit = 1 second ',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Key on',
    OutputDataFormat: 'See document General log requirements (vector).\n' +
      '\n' +
      'Note: In the first cell (1) information of total log duration shall be stored (1 bit = 1 s).\n' +
      '\n' +
      'In the following cells (2 to 92) the vehicle time for each temperature shall be stored.\n' +
      '\n' +
      'Example:\n' +
      'Vector with total number of each class.\n',
    Comment: 'The maximum time for logging is:\n' +
      '\n' +
      '0xFFFF FFFF seconds = 4294967295 seconds = 1193046 hours = 136 years.\n'
  },
  '1269': {
    id: '1269',
    demo: null,
    logID: 'LogID485',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'ambientTemperature', ratio: 1, unit: "℃" }],
    Purpose: 'Show history of high AC pressure. ',
    Informant: 'Magnus Svensson, VTEC',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Magnus Svensson, VTEC',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if a signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: '•High AC Pressure [TRUE]',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. In the optional cell the ambient temperature in degrees C shall be stored',
    Comment: "The user of this log chooses the appropriate pressure level, the aim for this log is to track high AC pressure. There is another pressure log (AC System cut out pressure), the intention for that log is to collect data about the nr of times the AC system is shut down due to high pressure. That is, the pressure level above this log.",
  },
  '126A': {
    id: '126A',
    demo: '001E3231000059850005F649',
    logID: 'LogID486',
    x: 'Compressor activated',
    y: 'cellNo',
    xKeyArr: [
      { key: 'numComprActi' },
      { key: 'compRunInSec' },
    ],
    yKeyArr: [
      { key: 'cellNo', ratio: 1, unit: "?" },

    ],
    Purpose: 'Register information about the number of compressor activations and runtime.',
    Informant: 'Magnus Svensson Volvo Technology.',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: '•\tCompressor activated \t\t[TRUE, FALSE]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if a signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second ',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'Cell 2: Compressor activated switches from [FALSE] to [TRUE]\n' +
      'Cell 3: Compressor activated = [TRUE]\n',
    OutputDataFormat: 'Data is stored in a vector with 3 cells. The first cell stores information about the  duration of the log. The second cell stores the number of compressor activations. The third cell stores the compressor run time in seconds.',
    Comment: ''
  },
  '126B': {
    id: '126B',
    demo: '002381BC00000CC9',
    logID: 'LogID487',
    x: 'AC Clutch Life Prolongation Activated',
    y: 'cellNo',
    xKeyArr: [
      { key: 'numClutLifeProl' },
    ],
    yKeyArr: [
      { key: 'cellNo', ratio: 1, unit: "?" },
    ],
    Purpose: 'Register information about the number of times the function AC clutch life prolongation has been activated.',
    Informant: 'Magnus Svensson Volvo Technology.',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: '•\tAC Clutch Life Prolongation Activated \t[TRUE, FALSE]',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if a signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '1 bit = 1 second ',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 's',
    ConditionsForLogging: 'AC Clutch Life Prolongation Activated switches from [FALSE] to [TRUE]',
    OutputDataFormat: 'Data is stored in a vector with 2 cells. The first cell stores information about the duration of the log. The second cell stores the number of clutch life prolongations..',
    Comment: ''
  },
  '126C': {
    id: '126C',
    demo: '002384CF00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    logID: 'LogID494',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'ambientTemp', ratio: 1, unit: "°C" }],
    Purpose: 'Show history of high AC system cut out. ',
    Informant: 'Magnus Svensson, VTEC',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '•\tAC cut out pressure\t[TRUE, FALSE]\n' +
      '•\tAmbient temperature [°C]\n',
    Filtering: '',
    ActionsAtInputSignalError: 'No logging shall be performed if a signal is erroneous.',
    SamplingRate: '1 Hz.',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: '•	AC cut out pressure [TRUE]',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. In the optional cell the ambient temperature in degrees C shall be stored\n' +
      '\n',
    Comment: 'The user of this log chooses the appropriate pressure level, the aim for this log is to track AC system cut out pressure. There is another pressure log (AC High Pressure ), the intention for that log is to collect data about high AC pressure, that is the pressure level below this log. '
  },
  'j1255': {
    id: 'j1255',
    demo: '000FF3D60000016F0000012E00000124000001150000049100000070000000500000004C0000004C000001980000001A0000000400000004000000040000003A000000190000000100000000000000000000000F00000232000000060000000400000003000000240000000000000000000000000000000000000000',
    logID: 'LogID1255',
    x: 'Pump power control current over rated current for the engine speed mode (mA)',
    y: 'Engine speed control mode',
    xKeyArr: [{ key: 'lt100' },
      { key: 'bt100n200' },
      { key: 'bt200n300' },
      { key: 'bt300n400' },
      { key: 'gte400' }
    ],
    yKeyArr: [{ key: 'g4', ratio: 1, unit: "mA" },
      { key: 'g3', ratio: 1, unit: "mA" },
      { key: 'g2', ratio: 1, unit: "mA" },
      { key: 'g1', ratio: 1, unit: "mA" },
      { key: 'h', ratio: 1, unit: "mA" },
      { key: 'p', ratio: 1, unit: "mA" }
    ],
    Purpose: 'Register the Pump power control current distribution on mode G4/G3/G2/G1/H/P while machine operates. ',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pump Power control valve input current, Engine control mode',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if a signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'Cell 1-31: 1 bit = 1 s ',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 31,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Cell no 1-31: Engine ON. \n' +
      'Cell no 2-31: Pump power control ON ',
    OutputDataFormat: 'Data is stored in 31 cells. \n' +
      'In cell no. 1 the duration of the total log should be stored.',
    Comment: 'Display the time percentage for the magnitude of the pump power control current on mode G4, G3, G2, G1, H and P (summation of modes)'
  },
  'j217': {
    id: 'j217',
    demo: '',
    logID: 'LogID217',
    x: 'Pump power control current over rated current for the engine speed mode (mA)',
    y: 'Engine speed control mode',
    xKeyArr: [{ key: 'lt100' },
      { key: 'bt100n200' },
      { key: 'bt200n300' },
      { key: 'bt300n400' },
      { key: 'gte400' }
    ],
    yKeyArr: [{ key: 'g3', ratio: 1, unit: "mA" },
      { key: 'g2', ratio: 1, unit: "mA" },
      { key: 'g1', ratio: 1, unit: "mA" },
      { key: 'h', ratio: 1, unit: "mA" },
      { key: 'p', ratio: 1, unit: "mA" }
    ],
    Purpose: 'Register the Pump power control current distribution on mode G3/G2/G1/H/P while machine operates.',
    Informant: 'Yanggu Lee, Hydraulic team',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Pump Power control valve input current, Engine control mode',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '10 Hz.',
    Hz: 10,
    BitResolution: 'Cell 1-26: 1 bit = 1 s ',
    BitA: 1,
    BitAUnit: 's',
    BitB: 1,
    BitBUnit: 'h',
    events: 26,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Cell no 1-26: Engine ON. \n' +
      'Cell no 2-26: Pump power control ON ',
    OutputDataFormat: 'Data is stored in 26 cells. \n' +
      'In cell no. 1 the duration of the total log should be stored.',
    Comment: 'Display the time percentage for the magnitude of the pump power control current on mode G3, G2, G1, H and P (summation of modes)'
  },
  '1248': {
    id: '1248',
    demo: null,
    logID: 'LogID432',
    x: 'Engine Oil Pressure [bar]',
    y: 'Cell no',
    xKeyArr: [
      { key: 'bt0n0p5' },
      { key: 'bt0p5n1' },
      { key: 'bt1n1p5' },
      { key: 'bt1p5n2' },
      { key: 'bt2n2p5' },
      { key: 'bt2p5n3' },
      { key: 'bt3n3p5' },
      { key: 'bt3p5n4' },
      { key: 'bt4n4p5' },
      { key: 'gte4p5' },
    ],
    yKeyArr: [{ key: 'engOilPres', ratio: 1, unit: "s" }],
    Purpose: 'Register the distribution of oil pressure within a small rpm- and temperature area.',
    Informant: 'Fredrik Grop, TUM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine oil pressure \n Engine coolant temperature \n Diesel engine speed \n Engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: ' 10Hz',
    Hz: 10,
    BitResolution: 'Cell 1: 1 bit = 1 s Cell 2-11: 1 bit = 0.1s',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine speed is between 1000-1020 rpm.\n Engine coolant temperature is between 80-85 °C.',
    OutputDataFormat: 'Data is stored in 11 cells. \n In cell no. 1 the duration of the log should be stored.'
  },
  '124E': {
    id: '124E',
    demo: null,
    logID: 'LogID324',
    x: 'Cell No ',
    y: 'Logged Value',
    xKeyArr: [
      { key: 'cellNo' },
    ],
    yKeyArr: [{ key: 'totalAccuFuelCons', ratio: 0.1, unit: "s" },
      { key: 'totalAccuFuelConsActualGearNeN', ratio: 0.1, unit: "s" },
      { key: 'totalTimeWithActualGearNeN', ratio: 1, unit: "s" }
    ],
    Purpose: 'Log the fuel consumption.',
    Informant: 'Mikael Petersson, ART',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Fuel consumption \n Actual gear \n Engine On',
    Filtering: 'N/A',
    ActionsAtInputSignalError: 'Erroneous signal should not be logged.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1 and 4: 1 bit = 1 s' +
      'Cell 2 and 3: 1 bit = 0.1 Liter',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine On',
    OutputDataFormat: ''
  },
  '124F': {
    id: '124F',
    demo: null,
    logID: 'LogID362',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'lowHydraulicOil', ratio: 1, unit: "s" }],
    Purpose: 'Register how long the machine has been working with low hydraulic oil level.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm signal for low hydraulic oil level. \n Diesel engine running \n Date \n Time \n Machine time',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 15,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Diesel engine must run.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. No optional cell shall be used.'
  },
  '1250': {
    id: '1250',
    demo: null,
    logID: 'LogID426',
    x: 'Cell nr',
    y: 'Interval Vehicle Speed[km/h]',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [
      { key: 'bt0n0p5', ratio: 1, unit: "s" },
      { key: 'bt0p5n4p5', ratio: 1, unit: "s" },
      { key: 'bt4p5n9', ratio: 1, unit: "s" },
      { key: 'bt9n13p5', ratio: 1, unit: "s" },
      { key: 'bt13p5n18', ratio: 1, unit: "s" },
      { key: 'bt18n22p5', ratio: 1, unit: "s" },
      { key: 'bt22p5n27', ratio: 1, unit: "s" },
      { key: 'bt27n31p5', ratio: 1, unit: "s" },
      { key: 'bt31p5n36', ratio: 1, unit: "s" },
      { key: 'bt36n40p5', ratio: 1, unit: "s" },
      { key: 'bt40p5n45', ratio: 1, unit: "s" },
      { key: 'bt45n49p5', ratio: 1, unit: "s" },
      { key: 'bt49p5n54', ratio: 1, unit: "s" },
      { key: 'bt54n58p5', ratio: 1, unit: "s" },
      { key: 'bt58p5n63', ratio: 1, unit: "s" },
      { key: 'bt63n67p5', ratio: 1, unit: "s" },
      { key: 'gte67p5', ratio: 1, unit: "s" },
    ],
    Purpose: 'Obtain information about the distribution of the vehicle speed.',
    Informant: 'Hans Spennare, UM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Vehicle speed \n Engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1-18: 1 bit = 1 s ',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine has to run.',
    OutputDataFormat: 'Data is stored in a vector of two cells.\n The duration of the log is stored in cell no. 1.'
  },
  '1251': {
    id: '1251',
    demo: null,
    logID: 'LogID427',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'val' },
    ],
    yKeyArr: [{ key: 'scalFactorX', ratio: 1, unit: "s" },
      { key: 'ltXorlt0p5', ratio: 1, unit: "s" },
      { key: 'gteXorlt0p5', ratio: 1, unit: "s" },
      { key: 'ltXorgte0p5', ratio: 1, unit: "s" },
      { key: 'gteXorget0p5', ratio: 1, unit: "s" }
    ],
    Purpose: 'Obtain information about the distribution between the engines idle and working time.',
    Informant: 'Hans Spennare, UM',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Diesel engine Speed \n Vehicle speed \n Engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1 and 3-6: 1 bit = 1 s \n Cell 2: 1 bit = 1 rpm',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine has to run.',
    OutputDataFormat: 'The definition Active Machine (Machine in motion) describes when the machines engine speed is equal to highest idle value (median + tolerance) plus the engine speed tolerance, and a vehicle speed that exceeds 0.5 km/h.' +
      'Data is stored in a vector of 6 cells.' +
      'The duration of the log is stored in cell no. 1.' +
      'Cell 2 is the scaling factor X, which is calculated by;' +
      'Idle speed (highest value) + Tolerance per machine model (see table below).' +
      'Cell 3 -6 describes the conditions for distribution. The conditions have the units [rpm] / [km/h].'
  },
  '1259': {
    id: '1259',
    demo: null,
    logID: 'LogID449',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'sysVolLow', ratio: 1, unit: "s" }],
    Purpose: 'To store data about how often the system voltage is too low.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm system voltage	[normal, low]' +
      'System voltage' +
      'Engine on' +
      'Date and time' +
      'Machine hours',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 10,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Logging should be performed when Alarm system voltage is low.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. After restart the 60s filter is not used.' +
      'The optional cell shall store the lowest voltage for the event with resolution 0.1 V.'
  },
  '1286': {
    id: '1286',
    demo: null,
    logID: 'LogID1259',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'ltbz40' },
      { key: 'btbz40nbz30' },
      { key: 'btbz30nbz20' },
      { key: 'btbz20nbz10' },
      { key: 'btbz10n0' },
      { key: 'bt0n10' },
      { key: 'bt10n20' },
      { key: 'bt20n30' },
      { key: 'bt30n40' },
      { key: 'bt40n50' },
      { key: 'bt50n60' },
      { key: 'bt60n70' },
      { key: 'gt70' },
    ],
    yKeyArr: [{ key: 'ambTemp', ratio: 10, unit: "℃" }],
    Purpose: 'The purpose is to log ambient temperature distribution in intervals of even ten degrees Celsius. The amount of time that the machine has been used in these different ambient temperature intervals is logged. The total vehicle hour (log duration) is also logged. The ambient temperature log information can be used at error detection. For example, along with the barometric pressure to see how temperature affects the engine stalling at high altitude work. ',
    Informant: 'Helena Müntzing (E&E Systems WLO, Eskilstuna)',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Ambient Temperature \n Engine Running',
    Filtering: 'N/A',
    ActionsAtInputSignalError: 'No logging shall be performed if any input signals are erroneous',
    SamplingRate: '0.1 Hz',
    Hz: 0.1,
    BitResolution: '1 bit = 1 Second',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine is running',
    OutputDataFormat: 'See document general log documents (vector)'
  },
  '1287': {
    id: '1287',
    demo: null,
    logID: 'LogID1194',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'engOverSpeed', ratio: 1, unit: "s" }],
    Purpose: 'Specify data relating to engine overspeed instances that is logged.',
    Informant: 'Log has common duration log format and is intended for use by all VCE business lines.' +
      'Compared to LogID 481 the sampling rate has increased to 10Hz.',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: 'Engine overspeed alarm	no error detectable' +
      'Engine speed	no data logging',
    SamplingRate: '10 Hz',
    Hz: 10,
    BitResolution: 'Bit resolutions are of standard duration log format.' +
      'For rpm values, 1 bit = 1 rpm.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'In order for an occurrence of engine overspeed to be recorded in a data point and the count to increment by 1, the engine overspeed alarm must change from “normal” to “overspeeding.”  The event of engine overspeeding will end when the alarm changes from “overspeeding” back to “normal.”  The peak engine speed for each engine overspeed event will also be stored.',
    OutputDataFormat: ''
  },
  '12C4': {
    id: '12C4',
    demo: null,
    logID: 'LogID448',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'sysVolHigh', ratio: 1, unit: "s" }],
    Purpose: 'To store data about how often the system voltage is too high.',
    Informant: 'Alarm system voltage	[normal, high] \n System voltage \n Engine on \n Date and time \n Machine hours',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 10,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    optionalMsg: "",
    ConditionsForLogging: 'Logging should be performed when Alarm system voltage is high.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. After restart the 60s filter is not used. The optional cell shall store the highest voltage for the event with resolution 0.1 V.'
  },
  '1274': {
    id: '1274',
    demo: null,
    logID: 'LogID371',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'distance' },
    ],
    yKeyArr: [{ key: 'travel', ratio: 100, unit: "s" }],
    Purpose: 'Register information about the distance the machine has traveled, which gives the opportunity to calculate average velocity.',
    Informant: 'UM, Hans Spennare ',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Velocity		[km/h] \n Ignition status',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1: 1 bit = 1s' +
      'Cell 2: 1 bit = 100 m',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Ignition must be on.',
    OutputDataFormat: 'The log should have 2 cells. 1st cell should store the duration of the log.' +
      '2nd cell should store the distance the machine has been driven. '
  },
  '1275': {
    id: '1275',
    demo: null,
    logID: 'LogID375',
    x: 'Hydraulic oil temperature',
    y: 'Ambient temperature',
    xKeyArr: [
      { key: 'HOTlt0' },
      { key: 'HOTbt0n30' },
      { key: 'HOTbt30n60' },
      { key: 'HOTbt60n70' },
      { key: 'HOTbt70n80' },
      { key: 'HOTbt80n90' },
      { key: 'HOTbt90n100' },
      { key: 'HOTbt100n110' },
      { key: 'HOTbt110n120' },
      { key: 'HOTgte120' },

    ],
    yKeyArr: [
      { key: 'ATltbz10', ratio: 10, unit: "s" },
      { key: 'ATbtbz10n0', ratio: 10, unit: "s" },
      { key: 'ATbt0n10', ratio: 10, unit: "s" },
      { key: 'ATbt10n20', ratio: 10, unit: "s" },
      { key: 'ATbt20n30', ratio: 10, unit: "s" },
      { key: 'ATbt30n40', ratio: 10, unit: "s" },
      { key: 'ATgte40', ratio: 10, unit: "s" },
    ],
    Purpose: 'To receive information about how the hydraulic oil temperature changes as function of ambient temperature.',
    Informant: 'Magnus Bergström, UG',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Hydraulic oil temperature \n Ambient temperature \n Engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '0.1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1: 1 bit = 1 s' +
      'Cell 2-71: 1 bit = 10 s',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine has to run.',
    OutputDataFormat: 'In cell no. 1 the duration of the log should be stored. Cell 2-71 should store the time according to ambient and hydraulic oil temperature.'
  },
  '1277': {
    id: '1277',
    demo: null,
    logID: 'LogID433',
    x: '',
    y: '',
    xKeyArr: [{ key: 'dayTime' }],
    yKeyArr: [{ key: 'startMotorOverheat', ratio: 1, unit: "s" }],
    Purpose: 'Show how many times the driver has allowed the starter motor to reach the alarm level according to specification for surveillance of starter motor activation. ',
    Informant: 'Andreas Ekvall, US',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    InputSignal: 'Engine on' +
      'Alarm for excessive starter motor usage 	[normal, high]' +
      'Date' +
      'Time' +
      'Machine time',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 10,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    ConditionsForLogging: 'Logging should be performed when alarm from function Alarm for excessive starter motor usage is active (e.g. High).' +
      'Engine on is not a condition for loging an event.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as an event log with 20 events and shall use a 60 s duration filter, i.e. only one event per minute can be registered. After restart however this filter is not used.'
  },
  /* '12DC': {
    id: '12DC',
    demo: null,
    logID: 'LogID1000',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [{ key: 'task', ratio: 0.000001, unit: "s" }],
    Purpose: 'To collect the max execution time in an ECU this to catch if scheduled task time is exceeded.',
    Informant: 'TUE',
    SYSDATALevel: '7',
    MethodOfMeasurement: 'Time',
    InputSignal: 'Task execution time',
    Filtering: 'N/A',
    ActionsAtInputSignalError: 'N/A',
    SamplingRate: 'Data collected and compared at every task switch',
    Hz: 1,
    BitResolution: 'LE' +
      'Word 1	Word 2' +
      'Task index/ID	1bit = 1µs',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 200,
    optional: 1,
    optionalUnit: '',
    ConditionsForLogging: 'Every time an execution time is greater than the previous saved value is detected it shall be saved.',
    OutputDataFormat: 'An array of 200 log elements'
  }, */
  '136C': {
    id: '136C',
    demo: null,
    logID: 'LogID1351',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'autoEngShutdown', ratio: 1, unit: "s" }],
    Purpose: 'Register automatic engine shutdowns due to machine in idle.	',
    Informant: 'Petri Meriläinen, Customer Solutions',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    InputSignal: 'Engine running' +
      'Shutdown Engine Automatic' +
      'Automatic Engine Shutdown Installed',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    ConditionsForLogging: 'The signal “Shutdown Engine Automatic” goes from OFF to ON.' +
      'Logs the last 20 occurrences.',
    OutputDataFormat: 'Cell 1 should only count if engine is running and automatic engine shutdown is installed.'
  },
  '136F': {
    id: '136F',
    demo: null,
    logID: 'LogID1347',
    x: 'IDLE in seconds (number of occasions per class)',
    y: '',
    xKeyArr: [
      // { key: 'totalIdleTime' },
      { key: 'bt0n3' },
      { key: 'bt3n10' },
      { key: 'bt10n30' },
      { key: 'bt30n60' },
      { key: 'bt60n120' },
      { key: 'bt120n180' },
      { key: 'bt180n240' },
      { key: 'bt240n300' },
      { key: 'bt300n600' },
      { key: 'bt600n900' },
      { key: 'bt900n1200' },
      { key: 'bt1200n1800' },
      { key: 'gt1800' },
    ],
    yKeyArr: [{ key: 'num', ratio: 1, unit: "o" }],
    Purpose: 'To log idle time. To see how long a machine stays in idle.',
    Informant: 'Petri Meriläinen, CS',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine running' +
      'Engine speed' +
      'Machine moving',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'For cell 1 and 2: 1 bit = 1 secound' +
      'For cell 3 to 15: 1 bit = 1 occation',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine is running and Engine speed is low and machine is not moving.',
    OutputDataFormat: 'Note: In the first cell (1) of each log ID, information of total log duration shall be stored (1 bit = 1 s).'
  },
  '12EC': {
    id: '12EC',
    demo: null,
    logID: 'LogID372',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'brakePres' },
    ],
    yKeyArr: [{ key: 'totalActiveTime', ratio: 0.1, unit: "s" },
      { key: 'numOfDeactiveToActive', ratio: 1, unit: "num" }
    ],
    Purpose: 'Register information about how long and how often brake pressure charging is activated.',
    Informant: 'Magnus Bergström, UF',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine running' +
      'Brake pressure charging is activated 	[yes, no]',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 1,
    BitResolution: 'Cell 1: Bit 1 = 1 s' +
      'Cell 2: Bit 1 = 0.1s' +
      'Cell 3: Bit 1 = Number of times',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine must be running.',
    OutputDataFormat: 'The log should have 3 cells. ' +
      '1st cell should store the duration of the log.' +
      '2nd cell should store the total time for which the brake pressure charging has been active.' +
      '3rd cell should store the number of times for which the brake pressure charging has changed state from deactivated to active.'
  },
  '12ED': {
    id: '12ED',
    demo: null,
    logID: 'LogID491',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'dayTime' },
    ],
    yKeyArr: [{ key: 'LBP', ratio: 1, unit: "s" }],
    Purpose: 'Register the last times the machine has been running with low brake pressure in the accumulators.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Alarm signal for low brake pressure.' +
      'Brake pressure in accumulators' +
      'Diesel engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 20,
    optional: 1,
    optionalUnit: '',
    ConditionsForLogging: 'Diesel engine must run. Alarm signal for low brake pressure shall be active.',
    OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. The optional cell shall store the lowest brake pressure in the accumulators with resolution 1 bar.'
  },
  /* '12F2': {
    id: '12F2',
    demo: null,
    logID: 'LogID430',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'lt30' },
      { key: 'bt30n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n98' },
      { key: 'bt98n103' },
      { key: 'gt103' },
    ],
    yKeyArr: [{ key: 'coolTemp', ratio: 10, unit: "s" }],
    Purpose: 'Register the spread of the engine coolant temperature when the engine is running.',
    Informant: 'Fredrik Grop, TUM ',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Engine coolant temperature engine.' +
      'Diesel engine running',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: ' Hz',
    Hz: 1,
    BitResolution: 'Cell 1: 1 bit = 1 s.' +
      'Cell 2-11: 1 bit = 10 s.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine has to run.',
    OutputDataFormat: 'Data is stored in a vector of 11 cells. ' +
      'In cell no. 1 the duration of the log should be stored.' +
      'In cell 2-11 stores the time that the temperature has been within the defined interval.'
  }, */
  /*  '12F4': {
     id: '12F4',
     demo: null,
     logID: 'LogID492',
     x: '',
     y: '',
     xKeyArr: [
       { key: 'dayTime' },
     ],
     yKeyArr: [{ key: 'highEngCoolTemp', ratio: 1, unit: "s" }],
     Purpose: 'Register the last times the machine has been running with high engine coolant temperature.',
     Informant: 'UG, Magnus Bergström ',
     SYSDATALevel: '6',
     MethodOfMeasurement: 'Duration',
     InputSignal: 'Alarm signal for high coolant temperature.' +
       'Engine coolant temperature' +
       'Diesel engine running' +
       'Machine hour' +
       'Date, Clock',
     Filtering: 'None',
     ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
     SamplingRate: '1 Hz',
     Hz: 1,
     BitResolution: '',
     BitA: 1,
     BitAUnit: 's',
     BitB: '10',
     BitBUnit: 's',
     events: 20,
     optional: 1,
     optionalUnit: '',
     ConditionsForLogging: 'Diesel engine must run. Alarm signal for high engine coolant temperature shall be active.',
     OutputDataFormat: 'See document General log requirements. The data shall be stored as a duration log with 20 events and shall use a 60 s duration filter. The optional cell shall store the highest engine coolant temperature with resolution 1 degree and unit Celsius.'
   }, */
  '12FA': {
    id: '12FA',
    demo: null,
    logID: 'LogID361',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'rpm' },
    ],
    yKeyArr: [
      { key: 'lt300', ratio: 1, unit: "r" },
      { key: 'bt300n400', ratio: 1, unit: "r" },
      { key: 'bt400n500', ratio: 1, unit: "r" },
      { key: 'bt500n600', ratio: 1, unit: "r" },
      { key: 'bt600n700', ratio: 1, unit: "r" },
      { key: 'bt700n750', ratio: 1, unit: "r" },
      { key: 'bt750n800', ratio: 1, unit: "r" },
      { key: 'bt800n850', ratio: 1, unit: "r" },
      { key: 'bt850n900', ratio: 1, unit: "r" },
      { key: 'bt900n950', ratio: 1, unit: "r" },
      { key: 'bt950n1000', ratio: 1, unit: "r" },
      { key: 'bt1000n1050', ratio: 1, unit: "r" },
      { key: 'bt1050n1100', ratio: 1, unit: "r" },
      { key: 'bt1100n1150', ratio: 1, unit: "r" },
      { key: 'bt1150n1200', ratio: 1, unit: "r" },
      { key: 'bt1200n1250', ratio: 1, unit: "r" },
      { key: 'bt1250n1300', ratio: 1, unit: "r" },
      { key: 'bt1300n1350', ratio: 1, unit: "r" },
      { key: 'bt1350n1400', ratio: 1, unit: "r" },
      { key: 'bt1400n1450', ratio: 1, unit: "r" },
      { key: 'bt1450n1500', ratio: 1, unit: "r" },
      { key: 'bt1500n1550', ratio: 1, unit: "r" },
      { key: 'bt1550n1600', ratio: 1, unit: "r" },
      { key: 'bt1600n1650', ratio: 1, unit: "r" },
      { key: 'bt1650n1700', ratio: 1, unit: "r" },
      { key: 'bt1700n1750', ratio: 1, unit: "r" },
      { key: 'bt1750n1800', ratio: 1, unit: "r" },
      { key: 'bt1800n1850', ratio: 1, unit: "r" },
      { key: 'bt1850n1900', ratio: 1, unit: "r" },
      { key: 'bt1900n1950', ratio: 1, unit: "r" },
      { key: 'bt1950n2000', ratio: 1, unit: "r" },
      { key: 'bt2000n2050', ratio: 1, unit: "r" },
      { key: 'gte2050', ratio: 1, unit: "r" },

    ],
    Purpose: 'Show the distribution of the cooling fan speed.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Cooling fan speed ' +
      'Diesel engine running	',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1-34 1 bit = 1s.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine must run.',
    OutputDataFormat: 'The distribution in seconds of the cooling fan speed is stored in cell 2-34.' +
      'The distribution is made according to the domain specified in each cell.'
  },
  '1305': {
    id: '1305',
    demo: null,
    logID: 'LogID363',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'SSP' },
    ],
    yKeyArr: [{ key: 'totalTimeIntall', ratio: 1, unit: "s" },
      { key: 'totalTimeNoTest', ratio: 1, unit: "s" },
      { key: 'totalNumNoTest', ratio: 1, unit: "s" },
      { key: 'totalTimeInTest', ratio: 1, unit: "s" },
      { key: 'totalNumInTest', ratio: 1, unit: "s" },
    ],
    Purpose: 'Store information about how often and how long the secondary steering is activated, and the total time with the secondary steering installed.',
    Informant: 'UG, Magnus Bergström',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Secondary steering pump activated' +
      'Secondary steering installed' +
      'Diesel engine running' +
      'Secondary steering test activated.',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging shall be performed if any signal is erroneous.',
    SamplingRate: '10 Hz',
    Hz: 10,
    BitResolution: 'Cell 1: Bit 1 = 1 second' +
      'Cell 2: Bit 1 = 1 second' +
      'Cell 3: Bit 1 = 1 second' +
      'Cell 4: Bit 1 = 1 activation' +
      'Cell 5: Bit 1 = 1 second' +
      'Cell 6: Bit 1 = 1 activation',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine must run. ',
    OutputDataFormat: ''
  },
  /* '1332': {
    id: '1332',
    demo: null,
    logID: 'LogID1201',
    x: 'Barometric pressure',
    y: '',
    xKeyArr: [
      { key: 'gte955' },
      { key: 'bt955n899' },
      { key: 'bt899n845' },
      { key: 'bt845n795' },
      { key: 'bt795n747' },
      { key: 'bt747n701' },
      { key: 'bt701n657' },
      { key: 'lt657' },
    ],
    yKeyArr: [{ key: 'BP', ratio: 1, unit: "s" }],
    Purpose: 'To log barometric pressure distribution.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Barometric pressure, PID108	[Bar]' +
      'engine state		[running, standstill]',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous.',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'For all cells, 1bit = 1second',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Engine state is running. ',
    OutputDataFormat: 'See document General log requirements. (vector).'
  }, */
  /* '1415': {
    id: '1415',
    demo: null,
    logID: 'LogID999',
    x: '',
    y: '',
    xKeyArr: [{ key: 'time' }],
    yKeyArr: [{ key: 'task', ratio: 0.000001, unit: "s" }],
    Purpose: 'To collect the max execution time in an ECU this to catch if scheduled task time is exceeded.',
    Informant: 'TUE',
    SYSDATALevel: '7',
    MethodOfMeasurement: 'Time',
    InputSignal: 'Task execution time',
    Filtering: 'None',
    ActionsAtInputSignalError: 'N/A',
    SamplingRate: ' Data collected and compared at every task switch',
    Hz: 1,
    BitResolution: 'Every time an execution time is greater than the previous saved value is detected it shall be saved.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    events: 150,
    optional: 1,
    optionalUnit: '',
    ConditionsForLogging: '',
    OutputDataFormat: 'An array of 150 log elements'
  }, */
  '1574': {
    id: '1574',
    demo: null,
    logID: 'LogID1273',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'bt0n0p2' },
      { key: 'bt0p2n0p4' },
      { key: 'bt0p4n0p6' },
      { key: 'bt0p6n0p8' },
      { key: 'bt0p8n1' },
    ],
    yKeyArr: [
      { key: 'Kab', ratio: 1, unit: "s" },
      { key: 'Kaf', ratio: 1, unit: "s" },
      { key: 'Kh', ratio: 1, unit: "s" },
      { key: 'Ktm2', ratio: 1, unit: "s" },
      { key: 'Ktm1', ratio: 1, unit: "s" },
      { key: 'Kllk', ratio: 1, unit: "s" },
      { key: 'Kac', ratio: 1, unit: "s" },
    ],
    Purpose: 'Register the machines outlay regarding cooling fan control system.',
    Informant: 'PPWL, Henrik Eriksson',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: 'Cooling fan coefficients' +
      'Diesel engine running	',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell 1-36: 1 bit = 1s.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine must run' +
      'Cooling fan coefficients > 0',
    OutputDataFormat: 'The distribution in seconds is stored per coefficient and value in cell 2-36, see table below.'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1557',
    x: 'SoC(%)',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
    ],
    yKeyArr: [{ key: 'soc', ratio: 1, unit: "s" }],
    Purpose: 'The purpose of this log is to collect the time distribution of SoC of the tracƟ on baƩ ery on its full range (from 0% to 100%) of an EMOB Machine.\n' +
        'These logged datas will allow a better knowledge of the distribute on of the level of charge of traction battery. This allow us to understand the behavior and the habits of the\n' +
        'user of an EMOB machine. This is also crucial information on for lifetime simulation on of battery.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Diesel engine speed' +
      'Engine running' +
      'Date and time' +
      'Machine hours',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1 HZ',
    Hz: 1,
    BitResolution: 'Cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Diesel engine must run',
    OutputDataFormat: 'Data is stored in 23 cells. '+
    'In cell no. 1 the duration of the log should be stored.'+
    'The total time with an engine speed within the defined intervals is stored in cell 2-23.'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1544',
    x: 'Charging power(% of Power Reference)',
    y: 'Time Distribution(s)',
    xKeyArr: [
      { key: 'bt0n0p5' },
      { key: 'bt0p5n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n17p5' },
      { key: 'bt17p5n20' },
      { key: 'bt20n22p5' },
      { key: 'bt22p5n25' },
      { key: 'bt25n27p5' },
      { key: 'bt27p5n30' },
      { key: 'bt30n32p5' },
      { key: 'bt32p5n35' },
      { key: 'bt35n37p5' },
      { key: 'bt37p5n40' },
      { key: 'bt40n42p5' },
      { key: 'bt42p5n45' },
      { key: 'bt45n47p5' },
      { key: 'bt47p5n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'chgPwr', ratio: 1, unit: "s" },
    ],
    Purpose: 'Collect the distribution of electrical power in charge direction exchanged with the tracƟ on baƩ ery of an EMOB Machine',
    Informant: 'These logged datas will allow a beƩ er knowledge on how the machine is used and how much power is charged in the ESS',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
        'Reference power cell shall be 32 bits and store an unsigned integer representing power (1 bit = 1 W).',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '',
    OutputDataFormat: 'Cell 1 stores the total log duration on (1 bit = 1 s).\n' +
        'Cell 2 stores a constant, the power reference, expressed in W, used for charging power range definition (1 bit = 1 W).\n' +
        'Cell 3 to 43 is a vector storing the time distribution on of the charging power exchanged with ESS, with the time elapsed for each power range (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1556',
    x: 'Temperature Ranges defined as: %x(Reference - Offset)+Offset',
    y: 'Vector of time distribute(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'TempRng', ratio: 1, unit: "s" },
    ],
    Purpose: 'The purpose of this log is to collect the distribution of temperature of the electrical motor of an EMOB Machine, on the full range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1HZ',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ' +
        '‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C)' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with motor temperature included within each temperature range, covering with medium resolution the full rang\n' +
        'of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s).\n' +
        'Cell 2 is splitted in two, to store both reference temperature value, and offset temperature value in the same cell, as follow :'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1542',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'num' },
    ],
    yKeyArr: [
      { key: 'PCC', ratio: 1, unit: "s" },
      { key: 'PCF', ratio: 1, unit: "s" },
    ],
    Purpose: 'The purpose of this log is to collect information about precharge phase, at tracƟ on battery connection. The log is intended to count how many precharge have failed, and\n' +
        'how many precharge have completed successfully.\n' +
        'These logged datas could help to diagnose a faultly precharge circuit, or current leakage on DC link leading to a significant number of precharge failed occurrences.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: '',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duration cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)\n' +
        'Cells accumulating number of occurrences shall be 32 bits and store an unsigned integer representing the total number of occurrences of an event (1 bit = 1 occurrence).',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Logging shall only occur when : ‐ Machine status is INIT\n' +
        'OR\n' +
        '‐ Machine status was INIT at previous execution of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
        'Cell 2 stores the total number of occurrences of event “precharge completed” (1 bit = 1 occurrence).\n' +
        'Cell 3 stores the total number of occurrences of event “precharge failed” (1 bit = 1 occurrence)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1479',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [
      { key: 'work', ratio: 1, unit: "s" },
      { key: 'idle', ratio: 1, unit: "s" },
      { key: 'excessiveIdle', ratio: 1, unit: "s" },
    ],
    Purpose: 'store machine utilization data only use a single log for all machine platforms instead of piecing this together in various logs plus offboard calculations as was previously done',
    Informant: 'The time spent either working, idle or excessive idling shall be updated. See Definitions for general guidance on what the different modes are',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'It is up to the platform to decide and document what signals that are necessary to determine when the machine is in working, waiƟ ng idle or excessive idle',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Each cell shall have a resolution of 32 bits and be of unsigned integer type.',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Logging shall occur when vehicle mode is Running',
    OutputDataFormat: 'What parameter properties that are defined in SEWS2 (if applicable).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1579',
    x: 'Working Mode',
    y: 'Total Time',
    xKeyArr: [
      { key: 'ecoNotForced' },
      { key: 'ecoForced' },
      { key: 'normal' },
      { key: 'boost' },
    ],
    yKeyArr: [
      { key: 'time', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribution of selected working mode when the motor is running, meaning how many time the machine is operated with each working mode.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Working mode selection (ECO / NORMAL / BOOST)\n' +
        'ECO mode forced status (FORCED_ECO / NOT_FORCED_ECO)\n' +
        'Motor running status (RUNNING / NOT_RUNNING)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1 Hz',
    Hz: 1,
    BitResolution: 'Cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '',
    OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
        'Cell 2 stores the total time elapsed with “eco” working mode forced by machine SW (1 bit = 1 sec).\n' +
        'Cell 3 stores the total time elapsed with “eco” working mode selected by operator (1 bit = 1 sec).\n' +
        'Cell 4 stores the total time elapsed with “normal” working mode selected by operator (1 bit = 1 sec).\n' +
        'Cell 5 stores the total time elapsed with “boost” working mode selected by operator (1 bit = 1 sec)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1545',
    x: 'Discharging power(% of Power reference)',
    y: 'time',
    xKeyArr: [
      { key: 'bt0n0p5' },
      { key: 'bt0p5n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n17p5' },
      { key: 'bt17p5n20' },
      { key: 'bt20n22p5' },
      { key: 'bt22p5n25' },
      { key: 'bt25n27p5' },
      { key: 'bt27p5n30' },
      { key: 'bt30n32p5' },
      { key: 'bt32p5n35' },
      { key: 'bt35n37p5' },
      { key: 'bt37p5n40' },
      { key: 'bt40n42p5' },
      { key: 'bt42p5n45' },
      { key: 'bt45n47p5' },
      { key: 'bt47p5n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'discPower', ratio: 1, unit: "s" },
    ],
    Purpose: 'The purpose of this log is to collect the distribuƟ on of electrical power in discharge direcƟ on exchanged with the tracƟ on baƩ ery of an EMOB Machine.\n' +
        'These logged datas will allow a beƩ er knowledge on how the machine is used and how much power is supplied by the ESS.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' ESS instantaneous discharging power (W)\n' +
        ' Reference power (W)\n' +
        ' ESS connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        'Reference power is a constant, used for the definiƟ on of the discharging power range of this log.\n' +
        'Discharging power ranges of this log are defined using a percentage range, percentage that is applied to reference value to determine physical range.\n' +
        'This allows the same log definiƟ on to cover several discharging power range distribuƟ on only by changing this constant value.',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Reference power cell shall be 32 bits and store an unsigned integer represenƟ ng power (1 bit = 1 W)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Logging shall only occur when : ‐ ESS connecƟ on status is CONNECTED\n' +
        '‐ ESS is being discharged, meaning ESS instantaneous discharging power (W) > 0\n' +
        'The method of measurement is Ɵme in class.',
    OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
        'Cell 2 stores a constant, the power reference, expressed in W, used for discharging power range definition (1 bit = 1 W).\n' +
        'Cell 3 to 43 is a vector storing the time distribution of the discharging power exchanged with ESS, with the time elapsed for each power range (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1552',
    x: 'Temperature Ranges defined as:% x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'tempRagDef', ratio: 1, unit: "℃" },
    ],
    Purpose: 'The purpose of this log is to collect the distribuƟ on of temperature of the inverter of an EMOB machine, on the full range of temperature.\n' +
        'These logged datas will allow a beƩ er knowledge of the level of temperature reached by the inverter. This would allow aŌ erwards an adjustment of the expected lifeƟ me of the\n' +
        'inverter depending on its usage and the temperature it reaches.\n' +
        'For future machine design, reusing same component, these temperature informaƟ on could be usefull to choose the locaƟ on of the mechanical integraƟ on, towards thermal behavi\n' +
        'of the components.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' Inverter temperature (°C)\n' +
        ' Machine status (WORKING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)\n' +
        'Reference and offset temperature are constant values, used for the definiƟ on of the temperature ranges of this log. Temperature ranges are defined using a percentage range,\n' +
        'percentage that is applied to reference and offset value to determine physical range.\n' +
        'This allows the same log definiƟ on to cover several temperature range distribuƟ on only by changing these constant values.',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C)' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with medium resoluƟ on the full ran\n' +
        'of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s).\n' +
        'Cell 2 is spliƩ ed in two, to store both reference temperature value, and offset temperature value in the same cell'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1541',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'ocr' },
    ],
    yKeyArr: [
      { key: 'NbMotorStop', ratio: 1, unit: "s" },
      { key: 'NbMotorStart', ratio: 1, unit: "s" },
    ],
    Purpose: 'The purpose of this log is to collect informaƟ on about motor start and motor stop event. The log is intended to count how many Ɵmes the motor is started successfully,\n' +
        'and how many Ɵmes the motor is stopped.\n' +
        'In case of EMOB machine, we expect to have much more occurrences of motor stop and motor stop. The datas from this log would allow to verify this assumpƟ on by\n' +
        'comparing it with log datas from convenƟ onal machines.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
        ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)\n' +
        'Machine status signal allow to know when machine is in working condiƟ ons or not. Working condiƟ ons are defined as a state where motor is started, or motor is stopped\n' +
        'but ready to be started by operator. When outside of working condiƟ ons (eg : CHARGING), this log could be disabled.',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on cell shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Cells accumulaƟ ng number of occurrences shall be 32 bits and store an unsigned integer represenƟ ng the total number of occurrences of an event (1 bit = 1 occurrence)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is WORKING_CONDITIONS\n' +
        'OR\n' +
        '‐ Machine status was WORKING_CONDITIONS at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 stores the total number of occurrences of event “motor started” (1 bit = 1 occurrence).\n' +
        'Cell 3 stores the total number of occurrences of event “motor stopped” (1 bit = 1 occurrence).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1526',
    x: 'Working Mode',
    y: '',
    xKeyArr: [
      { key: 'eco' },
      { key: 'normal' },
      { key: 'boost' },
    ],
    yKeyArr: [
      { key: 'timeElapsed', ratio: 1, unit: "s" },
      { key: 'energyConsumed', ratio: 1, unit: "Wh" },
    ],
    Purpose: 'collect the total energy that have been consumed by the inverter, over the life of an EMOB machine. Energy consumpƟ on datas will be sorted\n' +
        'into differents buckets depending on the selected working mode (ECO, NORMAL, BOOST), since this energy consumpƟ on may vary significantly with working mode.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Selected working mode (ECO / BOOST / NORMAL)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        ' Counter of the total Ɵme elapsed while energy consumed by the inverter (s)\n' +
        ' Counter of the total energy consumed by the inverter (Wh)',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Energy cells shall be 32 bits and store an unsigned integer represenƟ ng energy (1 bit = 1 Wh)\n' +
        'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        'OR\n' +
        '‐  TracƟ on baƩ ery connecƟ on status was CONNECTED at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cells 2, 3 and 4 store the total Ɵme elapsed where energy is consumed by the inverter, towards the different working condiƟ ons, one cell for each working mode (1 bit = 1 sec).\n' +
        'Cells 5, 6 and 7 store the total energy consumed by the inverter depending on the working condiƟ ons, one cell for each working mode (1 bit = 1 Wh)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1551',
    x: 'Power consumption(% of Power Reference)',
    y: 'Time Distribution',
    xKeyArr: [
      { key: 'bt0n4' },
      { key: 'bt4n8' },
      { key: 'bt8n12' },
      { key: 'bt12n16' },
      { key: 'bt16n20' },
      { key: 'bt20n24' },
      { key: 'bt24n28' },
      { key: 'bt28n32' },
      { key: 'bt32n36' },
      { key: 'bt36n40' },
      { key: 'bt40n44' },
      { key: 'bt44n48' },
      { key: 'bt48n52' },
      { key: 'bt52n56' },
      { key: 'bt56n60' },
      { key: 'bt60n64' },
      { key: 'bt64n68' },
      { key: 'bt68n72' },
      { key: 'bt72n76' },
      { key: 'bt76n80' },
      { key: 'bt80n84' },
      { key: 'bt84n88' },
      { key: 'bt88n92' },
      { key: 'bt92n96' },
      { key: 'bt96n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'time', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of inverter power consumpƟ on of an EMOB machine',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Inverter power consumpƟ on (W)\n' +
        ' Reference power (W)\n' +
        ' Inverter conversion status (CONVERTING / NOT_CONVERTING)',
    Filtering: 'None',
    ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Reference power cell shall be 32 bits and store an unsigned integer represenƟ ng power (1 bit = 1 W)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ Machine conversion status is CONVERTING\n' +
        '‐ Inverter is consuming power, meaning inverter power consumpƟ on (W) > 0',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores a constant, the power reference, expressed in W, used for power consumpƟ on range definiƟ on (1 bit = 1 W).\n' +
        'Cell 3 to 28 is a vector storing the Ɵme distribuƟ on of inverter power consumed for each power consumpƟ on range (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1553',
    x: 'Total time',
    y: 'Machine Status',
    xKeyArr: [
      { key: 'time' },
    ],
    yKeyArr: [
      { key: 'stopped', ratio: 1, unit: "s" },
      { key: 'runIdle', ratio: 1, unit: "s" },
      { key: 'runWork', ratio: 1, unit: "s" },
      { key: 'runTravel', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect informaƟ on about machine usage.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
        ' LS pressure status (LOW / NOT_LOW)\n' +
        ' Travel pressure status (TRAVELLING / NOT_TRAVELLING)\n' +
        ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'Time cell shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is WORKING_CONDITIONS',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 stores the total Ɵme elapsed with motor stopped (1 bit = 1 sec).\n' +
        'Cell 3 stores the total Ɵme elapsed with motor running and idling, meaning LS pressure is low (1 bit = 1 sec).\n' +
        'Cell 4 stores the total Ɵme elapsed with motor running and working, meaning LS pressure is not low and travel pressure indicates that machine is not travelling (1 bit = 1\n' +
        'sec).\n' +
        'Cell 5 stores the total Ɵme elapsed with motor running and travelling, meaning LS pressure is not low and travel pressure indicates that machine is travelling (1 bit = 1\n' +
        'sec)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1563',
    x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt80' },
      { key: 'bt80n81' },
      { key: 'bt81n82' },
      { key: 'bt82n83' },
      { key: 'bt83n84' },
      { key: 'bt84n85' },
      { key: 'bt85n86' },
      { key: 'bt86n87' },
      { key: 'bt87n88' },
      { key: 'bt88n89' },
      { key: 'bt89n90' },
      { key: 'bt90n91' },
      { key: 'bt91n92' },
      { key: 'bt92n93' },
      { key: 'bt93n94' },
      { key: 'bt94n95' },
      { key: 'bt95n96' },
      { key: 'bt96n97' },
      { key: 'bt97n98' },
      { key: 'bt98n99' },
      { key: 'bt99n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the inverter of an EMOB machine, on the high range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Inverter temperature (°C)\n' +
        ' Machine status (WORKING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with high resoluƟ on the high\n' +
        'range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1564',
    x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n16' },
      { key: 'bt16n17' },
      { key: 'bt17n18' },
      { key: 'bt18n19' },
      { key: 'bt19n20' },
      { key: 'gt20' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the inverter of an EMOB machine, on the low range of temperature',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'Inverter temperature (°C)\n' +
        ' Machine status (WORKING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with high resoluƟ on the low range\n' +
        'of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1565',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'mps' },
      { key: 'ips' },
      { key: 'tbps' },
      { key: 'ots' },
      { key: 'DCDCps' },
      { key: 'osrh' },
    ],
    yKeyArr: [
      { key: 'num', ratio: 1, unit: "occurrence" },
    ],
    Purpose: 'collect informaƟ on about motor start request event.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'TracƟ on baƩ ery protecƟ on status (INHIBIT_START / HEALTHY)\n' +
        ' Motor protecƟ on status (INHIBIT_START / HEALTHY)\n' +
        ' Inverter protecƟ on status INHIBIT_START / HEALTHY)\n' +
        ' DCDC protecƟ on status (INHIBIT_START / HEALTHY)\n' +
        ' Hydraulic oil temperature status (INHIBIT_START / HEALTHY)\n' +
        ' Operator hydraulic request status (REQUESTED / NOT_REQUESTED)\n' +
        ' Motor start request operator (REQUESTED / NOT_REQUESTED)\n' +
        ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on cell shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)\n' +
        'Cells accumulaƟ ng number of occurrences shall be 32 bits and store an unsigned integer represenƟ ng the total number of occurrences of an event (1 bit = 1 occurrence)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine status is WORKING_CONDITIONS',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 stores the total number of occurrences of event “motor start request from operator” (1 bit = 1 occurrence).\n' +
        'Cell 3 stores the total number of occurrences of event “motor start inhibited due to motor protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 4 stores the total number of occurrences of event “motor start inhibited due to inverter protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 5 stores the total number of occurrences of event “motor start inhibited due to tracƟ on baƩ ery protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 6 stores the total number of occurrences of event “motor start inhibited due to oil temperature status” (1 bit = 1 occurrence).\n' +
        'Cell 7 stores the total number of occurrences of event “motor start inhibited due to DCDC protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 8 stores the total number of occurrences of event “motor start inhibited due to operator sƟ ll requesƟ ng hydraulic” (1 bit = 1 occurrence)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1566',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'mps' },
      { key: 'ips' },
      { key: 'tbps' },
      { key: 'ots' },
      { key: 'af' },
      { key: 'iko' },
      { key: 'ar' },
    ],
    yKeyArr: [
      { key: 'num', ratio: 1, unit: "occurrence" },
    ],
    Purpose: 'collect informaƟ on about motor stop event.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: ' TracƟ on baƩ ery protecƟ on status (STOP_MOTOR / HEALTHY)\n' +
        ' Motor protecƟ on status (STOP_MOTOR / HEALTHY)\n' +
        ' Inverter protecƟ on status (STOP_MOTOR / HEALTHY)\n' +
        ' Hydraulic oil temperature status (STOP_MOTOR / HEALTHY)\n' +
        ' Armrest posiƟ on (RAISED / LOWERED)\n' +
        ' Autoshutdown stop motor request status (REQUESTED / NOT_REQUESTED)\n' +
        ' IgniƟ on key posiƟ on (KEY_OFF / KEY_ON)\n' +
        ' Motor stop request status (REQUESTED / NOT_REQUESTED)\n' +
        ' Motor control status (STARTING / STARTED / STOPPING / OTHER)\n' +
        ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on cell shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)\n' +
        'Cells accumulaƟ ng number of occurrences shall be 32 bits and store an unsigned integer represenƟ ng the total number of occurrences of an event (1 bit = 1 occurrence)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ Machine status is WORKING_CONDITIONS\n' +
        'OR\n' +
        '‐ Machine status was WORKING_CONDITIONS at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 stores the total number of occurrences of event “motor stop requested” (1 bit = 1 occurrence).\n' +
        'Cell 3 stores the total number of occurrences of event “motor stopped due to motor protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 4 stores the total number of occurrences of event “motor stopped due to inverter protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 5 stores the total number of occurrences of event “motor stopped due to tracƟ on baƩ ery protecƟ on status” (1 bit = 1 occurrence).\n' +
        'Cell 6 stores the total number of occurrences of event “motor stopped due to oil temperature status” (1 bit = 1 occurrence).\n' +
        'Cell 7 stores the total number of occurrences of event “motor stopped due to autoshutdown funcƟ on” (1 bit = 1 occurrence).\n' +
        'Cell 8 stores the total number of occurrences of event “motor stopped due to igniƟ on key off” (1 bit = 1 occurrence).\n' +
        'Cell 9 stores the total number of occurrences of event “motor stopped due to armrest raised” (1 bit = 1 occurrence)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1568',
    x: 'Motor stop time Range',
    y: 'Vector of occurrences of motor stop time before restart',
    xKeyArr: [
      { key: 'bt0n10sec' },
      { key: 'bt10n20sec' },
      { key: 'bt20n30sec' },
      { key: 'bt30n60sec' },
      { key: 'bt60n90sec' },
      { key: 'bt90n120sec' },
      { key: 'bt2n3min' },
      { key: 'bt3n4min' },
      { key: 'bt4n5min' },
      { key: 'bt5n10min' },
      { key: 'bt10n15min' },
      { key: 'bt15n20min' },
      { key: 'bt20n30min' },
      { key: 'bt30n45min' },
      { key: 'bt45n60min' },
      { key: 'bt60n90min' },
      { key: 'bt90n120min' },
      { key: 'bt2n3h' },
      { key: 'bt3n4h' },
      { key: 'gt4h' },
    ],
    yKeyArr: [
      { key: 'ocr', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect datas regarding how long the motor remains stopped before to be restarted by operator, as long as machine stays in working condiƟ ons',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
        ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)\n' +
        ' Motor first start status (FIRST_START_OCCURED / NOT_YET_STARTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer represenƟ ng how long the motor remained stopped before to be restarted, for each\n' +
        'Ɵ me range (1 bit = 1 occurrence).\n' +
        'For the log total duraƟ on, the cell shall be 32 bits and store an unsigned integer represenƟ ng a Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ Machine status is WORKING_CONDITIONS',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 to 21 is a vector storing the total number of occurrences where motor remains stopped for a duraƟ on included in each Ɵme range, before to be restarted (or\n' +
        'working condiƟ on leaved) (1 bit = 1 occurrence)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1569',
    x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt80' },
      { key: 'bt80n81' },
      { key: 'bt81n82' },
      { key: 'bt82n83' },
      { key: 'bt83n84' },
      { key: 'bt84n85' },
      { key: 'bt85n86' },
      { key: 'bt86n87' },
      { key: 'bt87n88' },
      { key: 'bt88n89' },
      { key: 'bt89n90' },
      { key: 'bt90n91' },
      { key: 'bt91n92' },
      { key: 'bt92n93' },
      { key: 'bt93n94' },
      { key: 'bt94n95' },
      { key: 'bt95n96' },
      { key: 'bt96n97' },
      { key: 'bt97n98' },
      { key: 'bt98n99' },
      { key: 'bt99n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'time', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the electrical motor of an EMOB Machine, on the high range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: ' Motor temperature (°C)\n' +
        ' Machine Status (WORKING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with motor temperature included within each temperature range, covering with high resoluƟ on the high\n' +
        'range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1570',
    x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n16' },
      { key: 'bt16n17' },
      { key: 'bt17n18' },
      { key: 'bt18n19' },
      { key: 'bt19n20' },
      { key: 'gt20' },
    ],
    yKeyArr: [
      { key: 'time', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the electrical motor of an EMOB Machine, on the low range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Duration',
    InputSignal: ' Motor temperature (°C)\n' +
        ' Machine Status (WORKING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ' +
        '‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine is in WORKING State or STANDBY State',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with motor temperature included within each temperature range, covering with high resoluƟ on the low range of\n' +
        'temperature (from 0% to 20% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1560',
    x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'time', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the DCDC converter of an EMOB machine, on full range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: 'DCDC temperature (°C)\n' +
        ' DCDC status (CONVERTING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'DCDC status is CONVERTING or STANDBY',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with DCDC converter temperature included within each temperature range, covering with medium resoluƟ on th\n' +
        'full range of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1558',
    x: 'SoC(%)',
    y: 'Vector of occurrences when charge is started' +
        'Vector of occurrences when charge is stopped',
    xKeyArr: [
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
    ],
    yKeyArr: [
      { key: 'numChargeStart', ratio: 1, unit: "occurrence" },
      { key: 'numChargeStop', ratio: 1, unit: "occurrence" },
    ],
    Purpose: 'collect the distribuƟ on of SoC of the tracƟ on baƩ ery of an EMOB Machine, especially at the moment where fast charge is started or stopped\n' +
        '(including mobile fast charge or plugged fast charge). Each Ɵme a fast charge process is started or stopped, this log should increment by one occurrence the cell\n' +
        'corresponding to the actual SoC level.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' SoC of the tracƟ on baƩ ery (%)\n' +
        '- 175 -\n' +
        ' Fast charging status (STANDBY / CHARGING)\n' +
        ' Machine state (CHARGING / OTHER_STATE)\n' +
        ' Charging mode detected (FAST / OTHER)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer represenƟ ng how many Ɵme the fast charge has been started or stopped for each\n' +
        'SoC range (1 bit = 1 occurrence).\n' +
        'For the log total duraƟ on, the cell shall be 32 bits and store an unsigned integer represenƟ ng a Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Machine state is CHARGING\n' +
        '‐ Charging mode detected is FAST\n' +
        'OR\n' +
        '‐ Machine state was CHARGING with Charging mode detected FAST at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 to 21 is a vector storing the total number of occurrences where fast charging is started for each SoC range (1 bit = 1 occurrence).\n' +
        'Cell 22 to 41 is a vector storing the total number of occurrences where fast charging is stopped for each SoC range (1 bit = 1 occurrence).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1559',
    x: 'SoC(%)',
    y: 'Vector of occurrences when charge is started' +
        'Vector of occurrences when charge is stopped',
    xKeyArr: [
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
    ],
    yKeyArr: [
      { key: 'numChargeStart', ratio: 1, unit: "occurrence" },
      { key: 'numChargeStop', ratio: 1, unit: "occurrence" },
    ],
    Purpose: 'collect the distribuƟ on of SoC of the tracƟ on baƩ ery of an EMOB Machine, especially at the moment where slow charge is started or stopped.\n' +
        'Each Ɵme a slow charge process is started or stopped, this log should increment by one occurrence the cell corresponding to the actual SoC level.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' SoC of the tracƟ on baƩ ery (%)\n' +
        '- 184 -\n' +
        ' Slow charging status (STANDBY / CHARGING)\n' +
        ' Machine state (CHARGING / OTHER_STATE)\n' +
        ' Charging mode detected (SLOW / OTHER)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '1Hz',
    Hz: 1,
    BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer represenƟ ng how many Ɵme the slow charge has been started or stopped for each SoC\n' +
        'range (1 bit = 1 occurrence).\n' +
        'For the log total duraƟ on, the cell shall be 32 bits and store an unsigned integer represenƟ ng a Ɵme (1 bit =1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: ' Machine state is CHARGING\n' +
        '‐ Charging mode detected is SLOW\n' +
        'OR\n' +
        '‐ Machine state was CHARGING with Charging mode detected SLOW at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 to 21 is a vector storing the total number of occurrences where slow charging is started for each SoC range (1 bit = 1 occurrence).\n' +
        'Cell 22 to 41 is a vector storing the total number of occurrences where slow charging is stopped for each SoC range (1 bit = 1 occurrence).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1571',
    x: 'Temperature Ranges defined as: %x(Reference - Offset)+Offset',
    y: 'Vector of time distribute(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'TempRng', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the OnBC of an EMOB machine, on the full range of temperat',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' OnBC temperature (°C)\n' +
        ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with medium resoluƟ on t\n' +
        'full range of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1525',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'off' },
      { key: 'on' },
    ],
    yKeyArr: [
      { key: 'timeElapsed', ratio: 1, unit: "s" },
      { key: 'energyConsumed', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the total energy that have been consumed by the DCDC converter, over the life of an EMOB machine. Energy consumpƟ on datas will\n' +
        'be sorted into differents buckets depending on the igniƟ on key posiƟ on (ON, OFF), since the DCDC converter energy consumpƟ on on the tracƟ on voltage link may vary\n' +
        'significantly with igniƟ on key posiƟ on, that inhibit or not some electrical funcƟ on supplied with accessory baƩ ery',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' IgniƟ on key posiƟ on (ON / OFF)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        ' Counter of the total Ɵme elapsed while energy consumed by the DCDC converter (s)\n' +
        ' Counter of the total energy consumed by the DCDC converter (W.h)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Energy cells shall be 32 bits and store an unsigned integer represenƟ ng energy (1 bit = 1 Wh)\n' +
        'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        'OR\n' +
        '‐  TracƟ on baƩ ery connecƟ on status was CONNECTED at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cells 2..3 store the total Ɵme elapsed where energy is consumed by the DCDC converter, towards igniƟ on key posiƟ on (1 bit = 1 sec).\n' +
        'Cells 4..5 store the total energy consumed by the DCDC converter, towards igniƟ on key posiƟ on (1 bit = 1 Wh)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1572',
    x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt80' },
      { key: 'bt80n81' },
      { key: 'bt81n82' },
      { key: 'bt82n83' },
      { key: 'bt83n84' },
      { key: 'bt84n85' },
      { key: 'bt85n86' },
      { key: 'bt86n87' },
      { key: 'bt87n88' },
      { key: 'bt88n89' },
      { key: 'bt89n90' },
      { key: 'bt90n91' },
      { key: 'bt91n92' },
      { key: 'bt92n93' },
      { key: 'bt93n94' },
      { key: 'bt94n95' },
      { key: 'bt95n96' },
      { key: 'bt96n97' },
      { key: 'bt97n98' },
      { key: 'bt98n99' },
      { key: 'bt99n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the OnBC of an EMOB machine, on the high range of temperature',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' OnBC temperature (°C)\n' +
        ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with high resoluƟ on the\n' +
        'high range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1573',
    x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n16' },
      { key: 'bt16n17' },
      { key: 'bt17n18' },
      { key: 'bt18n19' },
      { key: 'bt19n20' },
      { key: 'gt20' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of temperature of the OnBC of an EMOB machine, on the low range of temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' OnBC temperature (°C)\n' +
        ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with high resoluƟ on\n' +
        'the low range of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1539',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'cell' },
    ],
    yKeyArr: [
      { key: 'event', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect events where DC link voltage is anormally high. The type of data stored in this log is the level of DC link voltage (V) reached and the\n' +
        'Ɵ mestamp of : ‐ the 19 last events that occurred\n' +
        '‐ the most criƟ cal event that occurred in machine life (= the event where DC link voltage is the highest ever recorded)',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    InputSignal: ' DC Link voltage (V)\n' +
        ' Logging trigger level (V)\n' +
        ' Logging cooldown period (s)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on should be coded over 32 bits as an unsigned integer, represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Number of logging occurrence should be coded over 16 bits as an unsigned integer, represenƟ ng total number of event logged (1 bit = 1 occurence).\n' +
        'Trigger level should be coded over 16 bits as an unsigned integer, represenƟ ng the trigger level used by the log funcƟ on to evaluate triggering condiƟ ons (1 bit = 0.1V).',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'DC link is charged, meaning DC link voltage (V) > 5V',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 is spliƩ ed in two 16 bits words storing : ‐ the total number of events that have occured, meaning the total number of event that have fulfilled triggering condiƟ ons (1 bit = 1 occurrence).\n' +
        '‐ Private area, not available for logging purpose\n' +
        'Then, for each logged event :\n' +
        'The two first cells store the Ɵmestamp when the event occurred, meaning when triggering condiƟ ons (or re‐triggering condiƟ ons) have been fulfilled.\n' +
        'Another cell stores the value of the DC link voltage when the event occurred, meaning when trigerring condiƟ ons (or re‐triggering condiƟ ons) have been fulfilled (1 bit =\n' +
        '0.1V).\n' +
        'The last cell is spliƩ ed in two 16 bits words storing : ‐ The logging trigger level used (1 bit = 0.1V).\n' +
        '‐ The logging cooldown period (1 bit = 0.1 sec).\n' +
        'Note : This last cell of each logged event should have been stored only one Ɵme as a common value for all logged events, but due to some restricƟ ons from CEA2+\n' +
        'Plaƞ orm API, it has to be stored mulƟ ple Ɵme, in an addiƟ onal cell in each logged event.'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1540',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'cell' },
    ],
    yKeyArr: [
      { key: 'event', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect events where DC link voltage is anormally low. The type of data stored in this log is the level of DC link voltage (V) reached and the\n' +
        'Ɵ mestamp of : ‐ the 19 last events that occurred\n' +
        '‐ the most criƟ cal event that occurred in machine life (= the event where DC link voltage is the lowest ever recorded).',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    InputSignal: ' DC Link voltage (V)\n' +
        ' Logging trigger level (V)\n' +
        ' Logging cooldown period (s)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on should be coded over 32 bits as an unsigned integer, represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Number of logging occurrence should be coded over 16 bits as an unsigned integer, represenƟ ng total number of event logged (1 bit = 1 occurence).\n' +
        'Trigger level should be coded over 16 bits as an unsigned integer, represenƟ ng the trigger level used by the log funcƟ on to evaluate triggering condiƟ ons (1 bit = 0.1V)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: ' DC link is charged, meaning instantaneous DC link voltage (V) > 0V\n' +
        '‐ TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        'Or\n' +
        '‐ TracƟ on baƩ ery connecƟ on status was CONNECTED at previous execuƟ on of log (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 is spliƩ ed in two 16 bits words storing : ‐ the total number of events that have occured, meaning the total number of event that have fulfilled triggering condiƟ ons (1 bit = 1 occurrence).\n' +
        '‐ Private area, not available for logging purpose\n' +
        'Then, for each logged event :\n' +
        'The two first cells store the Ɵmestamp when the event occurred, meaning when triggering condiƟ ons (or re‐triggering condiƟ ons) have been fulfilled.\n' +
        'Another cell stores the value of the DC link voltage when the event occurred, meaning when trigerring condiƟ ons (or re‐triggering condiƟ ons) have been fulfilled (1 bit =\n' +
        '0.1V).\n' +
        'The last cell is spliƩ ed in two 16 bits words storing : ‐ The logging trigger level used (1 bit = 0.1V).\n' +
        '‐ The logging cooldown period (1 bit = 0.1 sec)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1543',
    x: 'Temperature Ranges defined as: %x(Reference - Offset)+Offset',
    y: 'Vector of time distribute(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n5' },
      { key: 'bt5n10' },
      { key: 'bt10n15' },
      { key: 'bt15n20' },
      { key: 'bt20n25' },
      { key: 'bt25n30' },
      { key: 'bt30n35' },
      { key: 'bt35n40' },
      { key: 'bt40n45' },
      { key: 'bt45n50' },
      { key: 'bt50n55' },
      { key: 'bt55n60' },
      { key: 'bt60n65' },
      { key: 'bt65n70' },
      { key: 'bt70n75' },
      { key: 'bt75n80' },
      { key: 'bt80n85' },
      { key: 'bt85n90' },
      { key: 'bt90n95' },
      { key: 'bt95n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'TempRng', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of average temperature of the mulƟ ples lithium ions cells of the tracƟ on baƩ ery of an EMOB Machine, on the full range of\n' +
        'temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' TracƟ on baƩ ery average cell temperature (°C)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'TracƟ on baƩ ery connecƟ on status is CONNECTED',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with tracƟ on baƩ ery cell average temperature included within each temperature range, covering with medium\n' +
        'resoluƟ on the full range of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1546',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'cell' },
    ],
    yKeyArr: [
      { key: 'event', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect informaƟ ons about tracƟ on baƩ ery disconnected unexpectedly event that could occur in EMOB machines.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    InputSignal: ' TracƟ on baƩ ery unexpected disconnecƟ on alarm status (ACTIVE / INACTIVE)\n' +
        ' TracƟ on baƩ ery current (A) with following convenƟ on : o Charging current > 0A\n' +
        'o Discharging current < 0A\n' +
        ' Machine status (SLEEP / NOT_SLEEP)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: '',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ Machine status is NOT_SLEEP',
    OutputDataFormat: 'Log duraƟ on shall be coded over 32 bits as an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Number of occurences shall be coded over 32 bits as an unsigned integer represenƟ ng the total number of occurences of an event (1 bit = 1 occurence).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1547',
    x: 'SoC(%)',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt80' },
      { key: 'bt80n81' },
      { key: 'bt81n82' },
      { key: 'bt82n83' },
      { key: 'bt83n84' },
      { key: 'bt84n85' },
      { key: 'bt85n86' },
      { key: 'bt86n87' },
      { key: 'bt87n88' },
      { key: 'bt88n89' },
      { key: 'bt89n90' },
      { key: 'bt90n91' },
      { key: 'bt91n92' },
      { key: 'bt92n93' },
      { key: 'bt93n94' },
      { key: 'bt94n95' },
      { key: 'bt95n96' },
      { key: 'bt96n97' },
      { key: 'bt97n98' },
      { key: 'bt98n99' },
      { key: 'bt99n100' }
    ],
    yKeyArr: [
      { key: 'soc', ratio: 1, unit: "%" },
    ],
    Purpose: 'collect the Ɵme distribuƟ on of SoC of the tracƟ on baƩ ery on an EMOB machine, especially on its high range (from 80% to 100%)',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' SoC of the tracƟ on baƩ ery (%)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        '‐ SoC of the tracƟ on baƩ ery is between 80% and 100% (included)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 to 21 is a vector storing the total number of seconds ellapsed for each SoC range (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1548',
    x: 'SoC(%)',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n16' },
      { key: 'bt16n17' },
      { key: 'bt17n18' },
      { key: 'bt18n19' },
      { key: 'bt19n20' },
    ],
    yKeyArr: [
      { key: 'soc', ratio: 1, unit: "%" },
    ],
    Purpose: 'collect the Ɵme distribuƟ on of SoC of the tracƟ on baƩ ery of an EMOB machine, especially on its low range (from 0% to 20%).',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' SoC of the tracƟ on baƩ ery (%)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        '‐ SoC of the tracƟ on baƩ ery is between 0% and 20% (included)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 to 21 is a vector storing the total number of seconds ellapsed for each SoC range (1 bit = 1 s).'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1554',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'cell' },
    ],
    yKeyArr: [
      { key: 'event', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect events where tracƟ on baƩ ery charging current is anormally high. The type of data stored in this log is the level of baƩ ery current (in A)\n' +
        'and DC link voltage (V) reached and the Ɵmestamp of : ‐ the 19 last events that occurred\n' +
        '‐ the most criƟ cal event that occurred in machine life (= the event where tracƟ on baƩ ery charging current is the highest ever recorded)',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    InputSignal: ' Instantaneous current charged into tracƟ on baƩ ery (A)\n' +
        ' Logging trigger level (A)\n' +
        ' Logging cooldown period (s)\n' +
        ' DC Link voltage (V)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on should be coded over 32 bits as an unsigned integer, represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Number of logging occurrence should be coded over 16 bits as an unsigned integer, represenƟ ng total number of event logged (1 bit = 1 occurence).\n' +
        'Trigger level should be coded over 16 bits as an unsigned integer, represenƟ ng the trigger level used by the log funcƟ on to evaluate triggering condiƟ ons (1 bit = 0.1A)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: '‐ TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        'OR\n' +
        '‐ TracƟ on baƩ ery connecƟ on status was CONNECTED within the last “2 * Logging cooldown period (s)” (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 is spliƩ ed in two 16 bits words storing : ‐ the total number of events that have occured, meaning the total number of event that have fulfilled triggering condiƟ ons (1 bit = 1 occurrence).\n' +
        '‐ Private area, not available for logging purpose'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1555',
    x: '',
    y: '',
    xKeyArr: [
      { key: 'cell' },
    ],
    yKeyArr: [
      { key: 'event', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect events where tracƟ on baƩ ery discharging current is anormally high. The type of data stored in this log is the level of baƩ ery current (in\n' +
        'A) and DC link voltage (V) reached and the Ɵmestamp of : ‐ the 19 last events that occurred\n' +
        '‐ the most criƟ cal event that occurred in machine life (= the event where tracƟ on baƩ ery discharging current is the highest ever recorded)',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Event',
    events: 20,
    optional: 0,
    InputSignal: ' Instantaneous current discharged from tracƟ on baƩ ery (A)\n' +
        ' Logging trigger level (A)\n' +
        ' Logging cooldown period (s)\n' +
        ' DC Link voltage (V)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '10Hz',
    Hz: 1,
    BitResolution: 'Log duraƟ on should be coded over 32 bits as an unsigned integer, represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'Number of logging occurrence should be coded over 16 bits as an unsigned integer, represenƟ ng total number of event logged (1 bit = 1 occurence).\n' +
        'Trigger level should be coded over 16 bits as an unsigned integer, represenƟ ng the trigger level used by the log funcƟ on to evaluate triggering condiƟ ons (1 bit = 0.1A)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'Logging shall only occur when : ‐ TracƟ on baƩ ery connecƟ on status is CONNECTED\n' +
        'OR\n' +
        '‐ TracƟ on baƩ ery connecƟ on status was CONNECTED within the last “2 * Logging cooldown period (s)” (*)',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 sec).\n' +
        'Cell 2 is spliƩ ed in two 16 bits words storing : ‐ the total number of events that have occured, meaning the total number of event that have fulfilled triggering condiƟ ons (1 bit = 1 occurrence).\n' +
        '‐ Private area, not available for logging purpose'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1574',
    x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt80' },
      { key: 'bt80n81' },
      { key: 'bt81n82' },
      { key: 'bt82n83' },
      { key: 'bt83n84' },
      { key: 'bt84n85' },
      { key: 'bt85n86' },
      { key: 'bt86n87' },
      { key: 'bt87n88' },
      { key: 'bt88n89' },
      { key: 'bt89n90' },
      { key: 'bt90n91' },
      { key: 'bt91n92' },
      { key: 'bt92n93' },
      { key: 'bt93n94' },
      { key: 'bt94n95' },
      { key: 'bt95n96' },
      { key: 'bt96n97' },
      { key: 'bt97n98' },
      { key: 'bt98n99' },
      { key: 'bt99n100' },
      { key: 'gt100' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of average temperature of the mulƟ ples lithium ions cells of the tracƟ on baƩ ery of an EMOB Machine, on the high range of\n' +
        'temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' TracƟ on baƩ ery average cell temperature (°C)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'TracƟ on baƩ ery connecƟ on status is CONNECTED',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with tracƟ on baƩ ery cell average temperature included within each temperature range, covering with high\n' +
        'resoluƟ on the high range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
  },
  '': {
    id: '',
    demo: null,
    logID: 'LogID1575',
    x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
    y: 'Vector of time distribution(s)',
    xKeyArr: [
      { key: 'lt0' },
      { key: 'bt0n1' },
      { key: 'bt1n2' },
      { key: 'bt2n3' },
      { key: 'bt3n4' },
      { key: 'bt4n5' },
      { key: 'bt5n6' },
      { key: 'bt6n7' },
      { key: 'bt7n8' },
      { key: 'bt8n9' },
      { key: 'bt9n10' },
      { key: 'bt10n11' },
      { key: 'bt11n12' },
      { key: 'bt12n13' },
      { key: 'bt13n14' },
      { key: 'bt14n15' },
      { key: 'bt15n16' },
      { key: 'bt16n17' },
      { key: 'bt17n18' },
      { key: 'bt18n19' },
      { key: 'bt19n20' },
      { key: 'gt20' },
    ],
    yKeyArr: [
      { key: 'tempRange', ratio: 1, unit: "s" },
    ],
    Purpose: 'collect the distribuƟ on of average temperature of the mulƟ ples lithium ions cells of the tracƟ on baƩ ery of an EMOB Machine, on the low range of\n' +
        'temperature.',
    Informant: '',
    SYSDATALevel: '6',
    MethodOfMeasurement: 'Incremental',
    InputSignal: ' TracƟ on baƩ ery average cell temperature (°C)\n' +
        ' TracƟ on baƩ ery connecƟ on status (CONNECTED / NOT_CONNECTED)\n' +
        ' Reference temperature (°C)\n' +
        ' Offset temperature (°C)',
    Filtering: 'None',
    ActionsAtInputSignalError: '',
    SamplingRate: '0.1Hz',
    Hz: 1,
    BitResolution: 'Time cells shall be 32 bits and store an unsigned integer represenƟ ng Ɵme (1 bit = 1 sec).\n' +
        'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)\n' +
        '‐ Offset temperature value, as a signed integer coded over 16 bits, represenƟ ng temperature (1 bit = 0.1°C)',
    BitA: 1,
    BitAUnit: 's',
    BitB: '10',
    BitBUnit: 's',
    ConditionsForLogging: 'TracƟ on baƩ ery connecƟ on status is CONNECTED',
    OutputDataFormat: 'Cell 1 stores the total log duraƟ on (1 bit = 1 s).\n' +
        'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
        'Cell 3 to 24 is a vector storing the total number of seconds elapsed with tracƟ on baƩ ery cell average temperature included within each temperature range, covering with high\n' +
        'resoluƟ on the low range of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s).'
  },


}

module.exports = logList
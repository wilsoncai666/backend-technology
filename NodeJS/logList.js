const logList = {
    '': {
        id: '',
        demo: null,
        logID: 'LogID1552',
        x: 'Temperature Ranges defined as:% x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "℃"},
        ],
        Purpose: 'The purpose of this log is to collect the distribution of temperature of the inverter of an EMOB machine, on the full range of temperature.\n' +
            'These logged datas will allow a better knowledge of the level of temperature reached by the inverter. This would allow afterwards an adjustment of the expected lifetime of the\n' +
            'inverter depending on its usage and the temperature it reaches.\n' +
            'For future machine design, reusing same component, these temperature information could be usefull to choose the location of the mechanical integration, towards thermal behavior\n' +
            'of the components.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' Inverter temperature (°C)\n' +
            ' Machine status (WORKING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)\n' +
            'Reference and offset temperature are constant values, used for the definition of the temperature ranges of this log. Temperature ranges are defined using a percentage range,\n' +
            'percentage that is applied to reference and offset value to determine physical range.\n' +
            'This allows the same log definition to cover several temperature range distribution only by changing these constant values.',
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
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C)' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with medium resolution the full ran\n' +
            'of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1541',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'ocr'},
        ],
        yKeyArr: [
            {key: 'NbMotorStart', ratio: 1, unit: "s"},
            {key: 'NbMotorStop', ratio: 1, unit: "s"},
        ],
        Purpose: 'The purpose of this log is to collect information about motor start and motor stop event. The log is intended to count how many times the motor is started successfully,\n' +
            'and how many times the motor is stopped.\n' +
            'In case of EMOB machine, we expect to have much more occurrences of motor stop and motor stop. The datas from this log would allow to verify this assumption by\n' +
            'comparing it with log datas from conventional machines.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
            ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)\n' +
            'Machine status signal allow to know when machine is in working conditions or not. Working conditions are defined as a state where motor is started, or motor is stopped\n' +
            'but ready to be started by operator. When outside of working conditions (eg : CHARGING), this log could be disabled.',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'Log duration cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'Cells accumulating number of occurrences shall be 32 bits and store an unsigned integer representing the total number of occurrences of an event (1 bit = 1 occurrence)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine status is WORKING_CONDITIONS\n' +
            'OR\n' +
            '‐ Machine status was WORKING_CONDITIONS at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
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
            {key: 'eco'},
            {key: 'normal'},
            {key: 'boost'},
        ],
        yKeyArr: [
            {key: 'timeElapsed', ratio: 1, unit: "s"},
            {key: 'energyConsumed', ratio: 1, unit: "Wh"},
        ],
        Purpose: 'collect the total energy that have been consumed by the inverter, over the life of an EMOB machine. Energy consumption datas will be sorted\n' +
            'into differents buckets depending on the selected working mode (ECO, NORMAL, BOOST), since this energy consumption may vary significantly with working mode.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: 'Selected working mode (ECO / BOOST / NORMAL)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)\n' +
            ' Counter of the total time elapsed while energy consumed by the inverter (s)\n' +
            ' Counter of the total energy consumed by the inverter (Wh)',
        Filtering: 'None',
        ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Energy cells shall be 32 bits and store an unsigned integer representing energy (1 bit = 1 Wh)\n' +
            'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Traction battery connection status is CONNECTED\n' +
            'OR\n' +
            '‐ Traction battery connection status was CONNECTED at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cells 2, 3 and 4 store the total time elapsed where energy is consumed by the inverter, towards the different working conditions, one cell for each working mode (1 bit = 1 sec).\n' +
            'Cells 5, 6 and 7 store the total energy consumed by the inverter depending on the working conditions, one cell for each working mode (1 bit = 1 Wh)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1551',
        x: 'Power consumption(% of Power Reference)',
        y: 'Time Distribution',
        xKeyArr: [
            {key: 'bt0n4'},
            {key: 'bt4n8'},
            {key: 'bt8n12'},
            {key: 'bt12n16'},
            {key: 'bt16n20'},
            {key: 'bt20n24'},
            {key: 'bt24n28'},
            {key: 'bt28n32'},
            {key: 'bt32n36'},
            {key: 'bt36n40'},
            {key: 'bt40n44'},
            {key: 'bt44n48'},
            {key: 'bt48n52'},
            {key: 'bt52n56'},
            {key: 'bt56n60'},
            {key: 'bt60n64'},
            {key: 'bt64n68'},
            {key: 'bt68n72'},
            {key: 'bt72n76'},
            {key: 'bt76n80'},
            {key: 'bt80n84'},
            {key: 'bt84n88'},
            {key: 'bt88n92'},
            {key: 'bt92n96'},
            {key: 'bt96n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of inverter power consumption of an EMOB machine',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'Inverter power consumption (W)\n' +
            ' Reference power (W)\n' +
            ' Inverter conversion status (CONVERTING / NOT_CONVERTING)',
        Filtering: 'None',
        ActionsAtInputSignalError: 'No logging should be performed if any input signal is erroneous',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'Reference power cell shall be 32 bits and store an unsigned integer representing power (1 bit = 1 W)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Machine conversion status is CONVERTING\n' +
            '‐ Inverter is consuming power, meaning inverter power consumption (W) > 0',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores a constant, the power reference, expressed in W, used for power consumption range definition (1 bit = 1 W).\n' +
            'Cell 3 to 28 is a vector storing the time distribution of inverter power consumed for each power consumption range (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1553',
        x: 'Total time',
        y: 'Machine Status',
        xKeyArr: [
            {key: 'time'},
        ],
        yKeyArr: [
            {key: 'stopped', ratio: 1, unit: "s"},
            {key: 'runIdle', ratio: 1, unit: "s"},
            {key: 'runWork', ratio: 1, unit: "s"},
            {key: 'runTravel', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect information about machine usage.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
            ' LS pressure status (LOW / NOT_LOW)\n' +
            ' Travel pressure status (TRAVELLING / NOT_TRAVELLING)\n' +
            ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'Time cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine status is WORKING_CONDITIONS',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 stores the total time elapsed with motor stopped (1 bit = 1 sec).\n' +
            'Cell 3 stores the total time elapsed with motor running and idling, meaning LS pressure is low (1 bit = 1 sec).\n' +
            'Cell 4 stores the total time elapsed with motor running and working, meaning LS pressure is not low and travel pressure indicates that machine is not travelling (1 bit = 1\n' +
            'sec).\n' +
            'Cell 5 stores the total time elapsed with motor running and travelling, meaning LS pressure is not low and travel pressure indicates that machine is travelling (1 bit = 1\n' +
            'sec)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1563',
        x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt80'},
            {key: 'bt80n81'},
            {key: 'bt81n82'},
            {key: 'bt82n83'},
            {key: 'bt83n84'},
            {key: 'bt84n85'},
            {key: 'bt85n86'},
            {key: 'bt86n87'},
            {key: 'bt87n88'},
            {key: 'bt88n89'},
            {key: 'bt89n90'},
            {key: 'bt90n91'},
            {key: 'bt91n92'},
            {key: 'bt92n93'},
            {key: 'bt93n94'},
            {key: 'bt94n95'},
            {key: 'bt95n96'},
            {key: 'bt96n97'},
            {key: 'bt97n98'},
            {key: 'bt98n99'},
            {key: 'bt99n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the inverter of an EMOB machine, on the high range of temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'Inverter temperature (°C)\n' +
            ' Machine status (WORKING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine status is in WORKING State or STANDBY State',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with high resolution the high\n' +
            'range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1564',
        x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n1'},
            {key: 'bt1n2'},
            {key: 'bt2n3'},
            {key: 'bt3n4'},
            {key: 'bt4n5'},
            {key: 'bt5n6'},
            {key: 'bt6n7'},
            {key: 'bt7n8'},
            {key: 'bt8n9'},
            {key: 'bt9n10'},
            {key: 'bt10n11'},
            {key: 'bt11n12'},
            {key: 'bt12n13'},
            {key: 'bt13n14'},
            {key: 'bt14n15'},
            {key: 'bt15n16'},
            {key: 'bt16n17'},
            {key: 'bt17n18'},
            {key: 'bt18n19'},
            {key: 'bt19n20'},
            {key: 'gt20'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the inverter of an EMOB machine, on the low range of temperature',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'Inverter temperature (°C)\n' +
            ' Machine status (WORKING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine status is in WORKING State or STANDBY State',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with inverter temperature included within each temperature range, covering with high resolution the low range\n' +
            'of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1565',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'startReq'},
            {key: 'mps'},
            {key: 'ips'},
            {key: 'tbps'},
            {key: 'ots'},
            {key: 'DCDCps'},
            {key: 'osrh'},
        ],
        yKeyArr: [
            {key: 'num', ratio: 1, unit: "occurrence"},
        ],
        Purpose: 'collect information about motor start request event.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: 'Traction battery protection status (INHIBIT_START / HEALTHY)\n' +
            ' Motor protection status (INHIBIT_START / HEALTHY)\n' +
            ' Inverter protection status INHIBIT_START / HEALTHY)\n' +
            ' DCDC protection status (INHIBIT_START / HEALTHY)\n' +
            ' Hydraulic oil temperature status (INHIBIT_START / HEALTHY)\n' +
            ' Operator hydraulic request status (REQUESTED / NOT_REQUESTED)\n' +
            ' Motor start request operator (REQUESTED / NOT_REQUESTED)\n' +
            ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)\n' +
            'Cells accumulating number of occurrences shall be 32 bits and store an unsigned integer representing the total number of occurrences of an event (1 bit = 1 occurrence)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine status is WORKING_CONDITIONS',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 stores the total number of occurrences of event “motor start request from operator” (1 bit = 1 occurrence).\n' +
            'Cell 3 stores the total number of occurrences of event “motor start inhibited due to motor protection status” (1 bit = 1 occurrence).\n' +
            'Cell 4 stores the total number of occurrences of event “motor start inhibited due to inverter protection status” (1 bit = 1 occurrence).\n' +
            'Cell 5 stores the total number of occurrences of event “motor start inhibited due to traction battery protection status” (1 bit = 1 occurrence).\n' +
            'Cell 6 stores the total number of occurrences of event “motor start inhibited due to oil temperature status” (1 bit = 1 occurrence).\n' +
            'Cell 7 stores the total number of occurrences of event “motor start inhibited due to DCDC protection status” (1 bit = 1 occurrence).\n' +
            'Cell 8 stores the total number of occurrences of event “motor start inhibited due to operator still requesting hydraulic” (1 bit = 1 occurrence)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1566',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'stopReq'},
            {key: 'mps'},
            {key: 'ips'},
            {key: 'tbps'},
            {key: 'ots'},
            {key: 'af'},
            {key: 'iko'},
            {key: 'ar'},
        ],
        yKeyArr: [
            {key: 'num', ratio: 1, unit: "occurrence"},
        ],
        Purpose: 'collect information about motor stop event.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: ' Traction battery protection status (STOP_MOTOR / HEALTHY)\n' +
            ' Motor protection status (STOP_MOTOR / HEALTHY)\n' +
            ' Inverter protection status (STOP_MOTOR / HEALTHY)\n' +
            ' Hydraulic oil temperature status (STOP_MOTOR / HEALTHY)\n' +
            ' Armrest position (RAISED / LOWERED)\n' +
            ' Autoshutdown stop motor request status (REQUESTED / NOT_REQUESTED)\n' +
            ' Ignition key position (KEY_OFF / KEY_ON)\n' +
            ' Motor stop request status (REQUESTED / NOT_REQUESTED)\n' +
            ' Motor control status (STARTING / STARTED / STOPPING / OTHER)\n' +
            ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration cell shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)\n' +
            'Cells accumulating number of occurrences shall be 32 bits and store an unsigned integer representing the total number of occurrences of an event (1 bit = 1 occurrence)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Machine status is WORKING_CONDITIONS\n' +
            'OR\n' +
            '‐ Machine status was WORKING_CONDITIONS at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 stores the total number of occurrences of event “motor stop requested” (1 bit = 1 occurrence).\n' +
            'Cell 3 stores the total number of occurrences of event “motor stopped due to motor protection status” (1 bit = 1 occurrence).\n' +
            'Cell 4 stores the total number of occurrences of event “motor stopped due to inverter protection status” (1 bit = 1 occurrence).\n' +
            'Cell 5 stores the total number of occurrences of event “motor stopped due to traction battery protection status” (1 bit = 1 occurrence).\n' +
            'Cell 6 stores the total number of occurrences of event “motor stopped due to oil temperature status” (1 bit = 1 occurrence).\n' +
            'Cell 7 stores the total number of occurrences of event “motor stopped due to autoshutdown function” (1 bit = 1 occurrence).\n' +
            'Cell 8 stores the total number of occurrences of event “motor stopped due to ignition key off” (1 bit = 1 occurrence).\n' +
            'Cell 9 stores the total number of occurrences of event “motor stopped due to armrest raised” (1 bit = 1 occurrence)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1568',
        x: 'Motor stop time Range',
        y: 'Vector of occurrences of motor stop time before restart',
        xKeyArr: [
            {key: 'bt0n10sec'},
            {key: 'bt10n20sec'},
            {key: 'bt20n30sec'},
            {key: 'bt30n60sec'},
            {key: 'bt60n90sec'},
            {key: 'bt90n120sec'},
            {key: 'bt2n3min'},
            {key: 'bt3n4min'},
            {key: 'bt4n5min'},
            {key: 'bt5n10min'},
            {key: 'bt10n15min'},
            {key: 'bt15n20min'},
            {key: 'bt20n30min'},
            {key: 'bt30n45min'},
            {key: 'bt45n60min'},
            {key: 'bt60n90min'},
            {key: 'bt90n120min'},
            {key: 'bt2n3h'},
            {key: 'bt3n4h'},
            {key: 'gt4h'},
        ],
        yKeyArr: [
            {key: 'ocr', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect datas regarding how long the motor remains stopped before to be restarted by operator, as long as machine stays in working conditions',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: 'Motor running status (RUNNING / NOT_RUNNING)\n' +
            ' Machine status (WORKING_CONDITIONS / NOT_WORKING_CONDITIONS)\n' +
            ' Motor first start status (FIRST_START_OCCURRED / NOT_YET_STARTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer representing how long the motor remained stopped before to be restarted, for each\n' +
            'time range (1 bit = 1 occurrence).\n' +
            'For the log total duration, the cell shall be 32 bits and store an unsigned integer representing a time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Machine status is WORKING_CONDITIONS',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 to 21 is a vector storing the total number of occurrences where motor remains stopped for a duration included in each time range, before to be restarted (or\n' +
            'working condition leaved) (1 bit = 1 occurrence)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1569',
        x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt80'},
            {key: 'bt80n81'},
            {key: 'bt81n82'},
            {key: 'bt82n83'},
            {key: 'bt83n84'},
            {key: 'bt84n85'},
            {key: 'bt85n86'},
            {key: 'bt86n87'},
            {key: 'bt87n88'},
            {key: 'bt88n89'},
            {key: 'bt89n90'},
            {key: 'bt90n91'},
            {key: 'bt91n92'},
            {key: 'bt92n93'},
            {key: 'bt93n94'},
            {key: 'bt94n95'},
            {key: 'bt95n96'},
            {key: 'bt96n97'},
            {key: 'bt97n98'},
            {key: 'bt98n99'},
            {key: 'bt99n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the electrical motor of an EMOB Machine, on the high range of temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: ' Motor temperature (°C)\n' +
            ' Machine Status (WORKING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine is in WORKING State or STANDBY State',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with motor temperature included within each temperature range, covering with high resolution the high\n' +
            'range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1570',
        x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n1'},
            {key: 'bt1n2'},
            {key: 'bt2n3'},
            {key: 'bt3n4'},
            {key: 'bt4n5'},
            {key: 'bt5n6'},
            {key: 'bt6n7'},
            {key: 'bt7n8'},
            {key: 'bt8n9'},
            {key: 'bt9n10'},
            {key: 'bt10n11'},
            {key: 'bt11n12'},
            {key: 'bt12n13'},
            {key: 'bt13n14'},
            {key: 'bt14n15'},
            {key: 'bt15n16'},
            {key: 'bt16n17'},
            {key: 'bt17n18'},
            {key: 'bt18n19'},
            {key: 'bt19n20'},
            {key: 'gt20'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the electrical motor of an EMOB Machine, on the low range of temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Duration',
        InputSignal: ' Motor temperature (°C)\n' +
            ' Machine Status (WORKING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
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
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with motor temperature included within each temperature range, covering with high resolution the low range of\n' +
            'temperature (from 0% to 20% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1560',
        x: 'Temperature Ranges defined as :% x (Reference -Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the DCDC converter of an EMOB machine, on full range of temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: 'DCDC temperature (°C)\n' +
            ' DCDC status (CONVERTING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'DCDC status is CONVERTING or STANDBY',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with DCDC converter temperature included within each temperature range, covering with medium resolution th\n' +
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
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
        ],
        yKeyArr: [
            {key: 'ocrChargeStart', ratio: 1, unit: "occurrence"},
            {key: 'ocrChargeStop', ratio: 1, unit: "occurrence"},
        ],
        Purpose: 'collect the distribution of SoC of the traction battery of an EMOB Machine, especially at the moment where fast charge is started or stopped\n' +
            '(including mobile fast charge or plugged fast charge). Each time a fast charge process is started or stopped, this log should increment by one occurrence the cell\n' +
            'corresponding to the actual SoC level.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' SoC of the traction battery (%)\n' +
            '- 175 -\n' +
            ' Fast charging status (STANDBY / CHARGING)\n' +
            ' Machine state (CHARGING / OTHER_STATE)\n' +
            ' Charging mode detected (FAST / OTHER)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer representing how many time the fast charge has been started or stopped for each\n' +
            'SoC range (1 bit = 1 occurrence).\n' +
            'For the log total duration, the cell shall be 32 bits and store an unsigned integer representing a time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Machine state is CHARGING\n' +
            '‐ Charging mode detected is FAST\n' +
            'OR\n' +
            '‐ Machine state was CHARGING with Charging mode detected FAST at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
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
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
        ],
        yKeyArr: [
            {key: 'numChargeStart', ratio: 1, unit: "occurrence"},
            {key: 'numChargeStop', ratio: 1, unit: "occurrence"},
        ],
        Purpose: 'collect the distribution of SoC of the traction battery of an EMOB Machine, especially at the moment where slow charge is started or stopped.\n' +
            'Each time a slow charge process is started or stopped, this log should increment by one occurrence the cell corresponding to the actual SoC level.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' SoC of the traction battery (%)\n' +
            '- 184 -\n' +
            ' Slow charging status (STANDBY / CHARGING)\n' +
            ' Machine state (CHARGING / OTHER_STATE)\n' +
            ' Charging mode detected (SLOW / OTHER)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '1Hz',
        Hz: 1,
        BitResolution: 'For the vector of occurrences, each cell shall be 32 bits and store an unsigned integer representing how many time the slow charge has been started or stopped for each SoC\n' +
            'range (1 bit = 1 occurrence).\n' +
            'For the log total duration, the cell shall be 32 bits and store an unsigned integer representing a time (1 bit =1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: ' Machine state is CHARGING\n' +
            '‐ Charging mode detected is SLOW\n' +
            'OR\n' +
            '‐ Machine state was CHARGING with Charging mode detected SLOW at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
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
            {key: 'lt0'},
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the OnBC of an EMOB machine, on the full range of temperat',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' OnBC temperature (°C)\n' +
            ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with medium resolution t\n' +
            'full range of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1525',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'off'},
            {key: 'on'},
        ],
        yKeyArr: [
            {key: 'totalTimeElapsed', ratio: 1, unit: "s"},
            {key: 'totalEnergyConsumed', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the total energy that have been consumed by the DCDC converter, over the life of an EMOB machine. Energy consumption datas will\n' +
            'be sorted into differents buckets depending on the ignition key position (ON, OFF), since the DCDC converter energy consumption on the traction voltage link may vary\n' +
            'significantly with ignition key position, that inhibit or not some electrical function supplied with accessory battery',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' Ignition key position (ON / OFF)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)\n' +
            ' Counter of the total time elapsed while energy consumed by the DCDC converter (s)\n' +
            ' Counter of the total energy consumed by the DCDC converter (W.h)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Energy cells shall be 32 bits and store an unsigned integer representing energy (1 bit = 1 Wh)\n' +
            'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Traction battery connection status is CONNECTED\n' +
            'OR\n' +
            '‐ Traction battery connection status was CONNECTED at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cells 2..3 store the total time elapsed where energy is consumed by the DCDC converter, towards ignition key position (1 bit = 1 sec).\n' +
            'Cells 4..5 store the total energy consumed by the DCDC converter, towards ignition key position (1 bit = 1 Wh)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1572',
        x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt80'},
            {key: 'bt80n81'},
            {key: 'bt81n82'},
            {key: 'bt82n83'},
            {key: 'bt83n84'},
            {key: 'bt84n85'},
            {key: 'bt85n86'},
            {key: 'bt86n87'},
            {key: 'bt87n88'},
            {key: 'bt88n89'},
            {key: 'bt89n90'},
            {key: 'bt90n91'},
            {key: 'bt91n92'},
            {key: 'bt92n93'},
            {key: 'bt93n94'},
            {key: 'bt94n95'},
            {key: 'bt95n96'},
            {key: 'bt96n97'},
            {key: 'bt97n98'},
            {key: 'bt98n99'},
            {key: 'bt99n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the OnBC of an EMOB machine, on the high range of temperature',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' OnBC temperature (°C)\n' +
            ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with high resolution the\n' +
            'high range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1573',
        x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n1'},
            {key: 'bt1n2'},
            {key: 'bt2n3'},
            {key: 'bt3n4'},
            {key: 'bt4n5'},
            {key: 'bt5n6'},
            {key: 'bt6n7'},
            {key: 'bt7n8'},
            {key: 'bt8n9'},
            {key: 'bt9n10'},
            {key: 'bt10n11'},
            {key: 'bt11n12'},
            {key: 'bt12n13'},
            {key: 'bt13n14'},
            {key: 'bt14n15'},
            {key: 'bt15n16'},
            {key: 'bt16n17'},
            {key: 'bt17n18'},
            {key: 'bt18n19'},
            {key: 'bt19n20'},
            {key: 'gt20'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of temperature of the OnBC of an EMOB machine, on the low range of temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' OnBC temperature (°C)\n' +
            ' OnBC status (CONVERTING / STANDBY / OTHER)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'OnBC status is CONVERTING or STANDBY',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with on board charger temperature included within each temperature range, covering with high resolution\n' +
            'the low range of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1539',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'cell'},
        ],
        yKeyArr: [
            {key: 'event', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect events where DC link voltage is anormally high. The type of data stored in this log is the level of DC link voltage (V) reached and the\n' +
            'timestamp of : ‐ the 19 last events that occurred\n' +
            '‐ the most critical event that occurred in machine life (= the event where DC link voltage is the highest ever recorded)',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Event',
        events: 20,
        optional: 0,
        InputSignal: ' DC Link voltage (V)\n' +
            ' Logging trigger level (V)\n' +
            ' Logging cooldown period (s)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration should be coded over 32 bits as an unsigned integer, representing time (1 bit = 1 sec).\n' +
            'Number of logging occurrence should be coded over 16 bits as an unsigned integer, representing total number of event logged (1 bit = 1 occurrence).\n' +
            'Trigger level should be coded over 16 bits as an unsigned integer, representing the trigger level used by the log function to evaluate triggering conditions (1 bit = 0.1V).',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'DC link is charged, meaning DC link voltage (V) > 5V',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 is splitted in two 16 bits words storing : ‐ the total number of events that have occurred, meaning the total number of event that have fulfilled triggering conditions (1 bit = 1 occurrence).\n' +
            '‐ Private area, not available for logging purpose\n' +
            'Then, for each logged event :\n' +
            'The two first cells store the timestamp when the event occurred, meaning when triggering conditions (or re‐triggering conditions) have been fulfilled.\n' +
            'Another cell stores the value of the DC link voltage when the event occurred, meaning when trigerring conditions (or re‐triggering conditions) have been fulfilled (1 bit =\n' +
            '0.1V).\n' +
            'The last cell is splitted in two 16 bits words storing : ‐ The logging trigger level used (1 bit = 0.1V).\n' +
            '‐ The logging cooldown period (1 bit = 0.1 sec).\n' +
            'Note : This last cell of each logged event should have been stored only one time as a common value for all logged events, but due to some restrictions from CEA2+\n' +
            'Plaƞ orm API, it has to be stored multiple time, in an additional cell in each logged event.'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1540',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'cell'},
        ],
        yKeyArr: [
            {key: 'event', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect events where DC link voltage is anormally low. The type of data stored in this log is the level of DC link voltage (V) reached and the\n' +
            'timestamp of : ‐ the 19 last events that occurred\n' +
            '‐ the most critical event that occurred in machine life (= the event where DC link voltage is the lowest ever recorded).',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Event',
        events: 20,
        optional: 0,
        InputSignal: ' DC Link voltage (V)\n' +
            ' Logging trigger level (V)\n' +
            ' Logging cooldown period (s)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration should be coded over 32 bits as an unsigned integer, representing time (1 bit = 1 sec).\n' +
            'Number of logging occurrence should be coded over 16 bits as an unsigned integer, representing total number of event logged (1 bit = 1 occurrence).\n' +
            'Trigger level should be coded over 16 bits as an unsigned integer, representing the trigger level used by the log function to evaluate triggering conditions (1 bit = 0.1V)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: ' DC link is charged, meaning instantaneous DC link voltage (V) > 0V\n' +
            '‐ Traction battery connection status is CONNECTED\n' +
            'Or\n' +
            '‐ Traction battery connection status was CONNECTED at previous execution of log (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 is splitted in two 16 bits words storing : ‐ the total number of events that have occurred, meaning the total number of event that have fulfilled triggering conditions (1 bit = 1 occurrence).\n' +
            '‐ Private area, not available for logging purpose\n' +
            'Then, for each logged event :\n' +
            'The two first cells store the timestamp when the event occurred, meaning when triggering conditions (or re‐triggering conditions) have been fulfilled.\n' +
            'Another cell stores the value of the DC link voltage when the event occurred, meaning when trigerring conditions (or re‐triggering conditions) have been fulfilled (1 bit =\n' +
            '0.1V).\n' +
            'The last cell is splitted in two 16 bits words storing : ‐ The logging trigger level used (1 bit = 0.1V).\n' +
            '‐ The logging cooldown period (1 bit = 0.1 sec)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1543',
        x: 'Temperature Ranges defined as: %x(Reference - Offset)+Offset',
        y: 'Vector of time distribute(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n5'},
            {key: 'bt5n10'},
            {key: 'bt10n15'},
            {key: 'bt15n20'},
            {key: 'bt20n25'},
            {key: 'bt25n30'},
            {key: 'bt30n35'},
            {key: 'bt35n40'},
            {key: 'bt40n45'},
            {key: 'bt45n50'},
            {key: 'bt50n55'},
            {key: 'bt55n60'},
            {key: 'bt60n65'},
            {key: 'bt65n70'},
            {key: 'bt70n75'},
            {key: 'bt75n80'},
            {key: 'bt80n85'},
            {key: 'bt85n90'},
            {key: 'bt90n95'},
            {key: 'bt95n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of average temperature of the multiples lithium ions cells of the traction battery of an EMOB Machine, on the full range of\n' +
            'temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' Traction battery average cell temperature (°C)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Traction battery connection status is CONNECTED',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with traction battery cell average temperature included within each temperature range, covering with medium\n' +
            'resolution the full range of temperature (from 0% to 100% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1546',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'cell'},
        ],
        yKeyArr: [
            {key: 'event', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect informations about traction battery disconnected unexpectedly event that could occur in EMOB machines.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Event',
        events: 20,
        optional: 0,
        InputSignal: ' Traction battery unexpected disconnection alarm status (ACTIVE / INACTIVE)\n' +
            ' Traction battery current (A) with following convention : o Charging current > 0A\n' +
            'o Discharging current < 0A\n' +
            ' Machine status (SLEEP / NOT_SLEEP)',
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
        OutputDataFormat: 'Log duration shall be coded over 32 bits as an unsigned integer representing time (1 bit = 1 sec).\n' +
            'Number of occurrences shall be coded over 32 bits as an unsigned integer representing the total number of occurrences of an event (1 bit = 1 occurrence).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1547',
        x: 'SoC(%)',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt80'},
            {key: 'bt80n81'},
            {key: 'bt81n82'},
            {key: 'bt82n83'},
            {key: 'bt83n84'},
            {key: 'bt84n85'},
            {key: 'bt85n86'},
            {key: 'bt86n87'},
            {key: 'bt87n88'},
            {key: 'bt88n89'},
            {key: 'bt89n90'},
            {key: 'bt90n91'},
            {key: 'bt91n92'},
            {key: 'bt92n93'},
            {key: 'bt93n94'},
            {key: 'bt94n95'},
            {key: 'bt95n96'},
            {key: 'bt96n97'},
            {key: 'bt97n98'},
            {key: 'bt98n99'},
            {key: 'bt99n100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "%"},
        ],
        Purpose: 'collect the time distribution of SoC of the traction battery on an EMOB machine, especially on its high range (from 80% to 100%)',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' SoC of the traction battery (%)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Traction battery connection status is CONNECTED\n' +
            '‐ SoC of the traction battery is between 80% and 100% (included)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 to 21 is a vector storing the total number of seconds ellapsed for each SoC range (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1548',
        x: 'SoC(%)',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n1'},
            {key: 'bt1n2'},
            {key: 'bt2n3'},
            {key: 'bt3n4'},
            {key: 'bt4n5'},
            {key: 'bt5n6'},
            {key: 'bt6n7'},
            {key: 'bt7n8'},
            {key: 'bt8n9'},
            {key: 'bt9n10'},
            {key: 'bt10n11'},
            {key: 'bt11n12'},
            {key: 'bt12n13'},
            {key: 'bt13n14'},
            {key: 'bt14n15'},
            {key: 'bt15n16'},
            {key: 'bt16n17'},
            {key: 'bt17n18'},
            {key: 'bt18n19'},
            {key: 'bt19n20'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "%"},
        ],
        Purpose: 'collect the time distribution of SoC of the traction battery of an EMOB machine, especially on its low range (from 0% to 20%).',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' SoC of the traction battery (%)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Traction battery connection status is CONNECTED\n' +
            '‐ SoC of the traction battery is between 0% and 20% (included)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 to 21 is a vector storing the total number of seconds ellapsed for each SoC range (1 bit = 1 s).'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1554',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'cell'},
        ],
        yKeyArr: [
            {key: 'event', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect events where traction battery charging current is anormally high. The type of data stored in this log is the level of battery current (in A)\n' +
            'and DC link voltage (V) reached and the timestamp of : ‐ the 19 last events that occurred\n' +
            '‐ the most critical event that occurred in machine life (= the event where traction battery charging current is the highest ever recorded)',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Event',
        events: 20,
        optional: 0,
        InputSignal: ' Instantaneous current charged into traction battery (A)\n' +
            ' Logging trigger level (A)\n' +
            ' Logging cooldown period (s)\n' +
            ' DC Link voltage (V)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration should be coded over 32 bits as an unsigned integer, representing time (1 bit = 1 sec).\n' +
            'Number of logging occurrence should be coded over 16 bits as an unsigned integer, representing total number of event logged (1 bit = 1 occurrence).\n' +
            'Trigger level should be coded over 16 bits as an unsigned integer, representing the trigger level used by the log function to evaluate triggering conditions (1 bit = 0.1A)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: '‐ Traction battery connection status is CONNECTED\n' +
            'OR\n' +
            '‐ Traction battery connection status was CONNECTED within the last “2 * Logging cooldown period (s)” (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 is splitted in two 16 bits words storing : ‐ the total number of events that have occurred, meaning the total number of event that have fulfilled triggering conditions (1 bit = 1 occurrence).\n' +
            '‐ Private area, not available for logging purpose'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1555',
        x: '',
        y: '',
        xKeyArr: [
            {key: 'cell'},
        ],
        yKeyArr: [
            {key: 'event', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect events where traction battery discharging current is anormally high. The type of data stored in this log is the level of battery current (in\n' +
            'A) and DC link voltage (V) reached and the timestamp of : ‐ the 19 last events that occurred\n' +
            '‐ the most critical event that occurred in machine life (= the event where traction battery discharging current is the highest ever recorded)',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Event',
        events: 20,
        optional: 0,
        InputSignal: ' Instantaneous current discharged from traction battery (A)\n' +
            ' Logging trigger level (A)\n' +
            ' Logging cooldown period (s)\n' +
            ' DC Link voltage (V)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '10Hz',
        Hz: 1,
        BitResolution: 'Log duration should be coded over 32 bits as an unsigned integer, representing time (1 bit = 1 sec).\n' +
            'Number of logging occurrence should be coded over 16 bits as an unsigned integer, representing total number of event logged (1 bit = 1 occurrence).\n' +
            'Trigger level should be coded over 16 bits as an unsigned integer, representing the trigger level used by the log function to evaluate triggering conditions (1 bit = 0.1A)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Logging shall only occur when : ‐ Traction battery connection status is CONNECTED\n' +
            'OR\n' +
            '‐ Traction battery connection status was CONNECTED within the last “2 * Logging cooldown period (s)” (*)',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 sec).\n' +
            'Cell 2 is splitted in two 16 bits words storing : ‐ the total number of events that have occurred, meaning the total number of event that have fulfilled triggering conditions (1 bit = 1 occurrence).\n' +
            '‐ Private area, not available for logging purpose'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1574',
        x: 'Temperature Ranges defined as :% x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt80'},
            {key: 'bt80n81'},
            {key: 'bt81n82'},
            {key: 'bt82n83'},
            {key: 'bt83n84'},
            {key: 'bt84n85'},
            {key: 'bt85n86'},
            {key: 'bt86n87'},
            {key: 'bt87n88'},
            {key: 'bt88n89'},
            {key: 'bt89n90'},
            {key: 'bt90n91'},
            {key: 'bt91n92'},
            {key: 'bt92n93'},
            {key: 'bt93n94'},
            {key: 'bt94n95'},
            {key: 'bt95n96'},
            {key: 'bt96n97'},
            {key: 'bt97n98'},
            {key: 'bt98n99'},
            {key: 'bt99n100'},
            {key: 'gt100'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of average temperature of the multiples lithium ions cells of the traction battery of an EMOB Machine, on the high range of\n' +
            'temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' Traction battery average cell temperature (°C)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Traction battery connection status is CONNECTED',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with traction battery cell average temperature included within each temperature range, covering with high\n' +
            'resolution the high range of temperature (from 80% to 100% of reference temperature) (1 bit = 1 s)'
    },
    '': {
        id: '',
        demo: null,
        logID: 'LogID1575',
        x: 'Temperature Ranges defined as:%x(Reference-Offset)+Offset',
        y: 'Vector of time distribution(s)',
        xKeyArr: [
            {key: 'lt0'},
            {key: 'bt0n1'},
            {key: 'bt1n2'},
            {key: 'bt2n3'},
            {key: 'bt3n4'},
            {key: 'bt4n5'},
            {key: 'bt5n6'},
            {key: 'bt6n7'},
            {key: 'bt7n8'},
            {key: 'bt8n9'},
            {key: 'bt9n10'},
            {key: 'bt10n11'},
            {key: 'bt11n12'},
            {key: 'bt12n13'},
            {key: 'bt13n14'},
            {key: 'bt14n15'},
            {key: 'bt15n16'},
            {key: 'bt16n17'},
            {key: 'bt17n18'},
            {key: 'bt18n19'},
            {key: 'bt19n20'},
            {key: 'gt20'},
        ],
        yKeyArr: [
            {key: 'time', ratio: 1, unit: "s"},
        ],
        Purpose: 'collect the distribution of average temperature of the multiples lithium ions cells of the traction battery of an EMOB Machine, on the low range of\n' +
            'temperature.',
        Informant: '',
        SYSDATALevel: '6',
        MethodOfMeasurement: 'Incremental',
        InputSignal: ' Traction battery average cell temperature (°C)\n' +
            ' Traction battery connection status (CONNECTED / NOT_CONNECTED)\n' +
            ' Reference temperature (°C)\n' +
            ' Offset temperature (°C)',
        Filtering: 'None',
        ActionsAtInputSignalError: '',
        SamplingRate: '0.1Hz',
        Hz: 1,
        BitResolution: 'Time cells shall be 32 bits and store an unsigned integer representing time (1 bit = 1 sec).\n' +
            'One cell shall be 32 bits and store : ‐ Reference temperature value, as an unsigned integer coded over 16 bits, representing temperature (1 bit = 0.1°C)\n' +
            '‐ Offset temperature value, as a signed integer coded over 16 bits, representing temperature (1 bit = 0.1°C)',
        BitA: 1,
        BitAUnit: 's',
        BitB: '10',
        BitBUnit: 's',
        ConditionsForLogging: 'Traction battery connection status is CONNECTED',
        OutputDataFormat: 'Cell 1 stores the total log duration (1 bit = 1 s).\n' +
            'Cell 2 stores reference and offset temperature value (1 bit = 0.1°C).\n' +
            'Cell 3 to 24 is a vector storing the total number of seconds elapsed with traction battery cell average temperature included within each temperature range, covering with high\n' +
            'resolution the low range of temperature (from 0% to 20% of reference temperature) (1 bit = 1 s).'
    },


}

module.exports = logList
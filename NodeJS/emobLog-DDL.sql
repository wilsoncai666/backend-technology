DROP TABLE IF EXISTS ld1552 CASCADE;
CREATE TABLE ld1552
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n5"      INTEGER,
    "time_bt5n10"     INTEGER,
    "time_bt10n15"    INTEGER,
    "time_bt15n20"    INTEGER,
    "time_bt20n25"    INTEGER,
    "time_bt25n30"    INTEGER,
    "time_bt30n35"    INTEGER,
    "time_bt35n40"    INTEGER,
    "time_bt40n45"    INTEGER,
    "time_bt45n50"    INTEGER,
    "time_bt50n55"    INTEGER,
    "time_bt55n60"    INTEGER,
    "time_bt60n65"    INTEGER,
    "time_bt65n70"    INTEGER,
    "time_bt70n75"    INTEGER,
    "time_bt75n80"    INTEGER,
    "time_bt80n85"    INTEGER,
    "time_bt85n90"    INTEGER,
    "time_bt90n95"    INTEGER,
    "time_bt95n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1552 IS 'Inverter temperature distribution (full range)';

DROP TABLE IF EXISTS ld1541 CASCADE;
CREATE TABLE ld1541
(
    id                 SERIAL       NOT NULL,
    "chassisId"        VARCHAR(255) NOT NULL,
    created_by         INTEGER,
    created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by         INTEGER,
    updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone           DATE         NOT NULL,
    "timeStampAtZone"  VARCHAR(255),
    "timeZone"         VARCHAR(255),
    "timeStamp"        VARCHAR(255),
    "processedAt"      VARCHAR(255),
    "totalLoggedTime"  INTEGER,
    "NbMotorStart_ocr" INTEGER,
    "NbMotorStop_ocr"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1541 IS 'Motor start and stop occurences';

DROP TABLE IF EXISTS ld1526 CASCADE;
CREATE TABLE ld1526
(
    id                      SERIAL       NOT NULL,
    "chassisId"             VARCHAR(255) NOT NULL,
    created_by              INTEGER,
    created_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by              INTEGER,
    updated_at              TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone                DATE         NOT NULL,
    "timeStampAtZone"       VARCHAR(255),
    "timeZone"              VARCHAR(255),
    "timeStamp"             VARCHAR(255),
    "processedAt"           VARCHAR(255),
    "totalLoggedTime"       INTEGER,
    "timeElapsed_eco"       INTEGER,
    "timeElapsed_normal"    INTEGER,
    "timeElapsed_boost"     INTEGER,
    "energyConsumed_eco"    INTEGER,
    "energyConsumed_normal" INTEGER,
    "energyConsumed_boost"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1526 IS 'Inverter Total Energy Consumed , Working Modes';

DROP TABLE IF EXISTS ld1551 CASCADE;
CREATE TABLE ld1551
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "powerReference"  INTEGER,
    "time_bt0n4"      INTEGER,
    "time_bt4n8"      INTEGER,
    "time_bt8n12"     INTEGER,
    "time_bt12n16"    INTEGER,
    "time_bt16n20"    INTEGER,
    "time_bt20n24"    INTEGER,
    "time_bt24n28"    INTEGER,
    "time_bt28n32"    INTEGER,
    "time_bt32n36"    INTEGER,
    "time_bt36n40"    INTEGER,
    "time_bt40n44"    INTEGER,
    "time_bt44n48"    INTEGER,
    "time_bt48n52"    INTEGER,
    "time_bt52n56"    INTEGER,
    "time_bt56n60"    INTEGER,
    "time_bt60n64"    INTEGER,
    "time_bt64n68"    INTEGER,
    "time_bt68n72"    INTEGER,
    "time_bt72n76"    INTEGER,
    "time_bt76n80"    INTEGER,
    "time_bt80n84"    INTEGER,
    "time_bt84n88"    INTEGER,
    "time_bt88n92"    INTEGER,
    "time_bt92n96"    INTEGER,
    "time_bt96n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1551 IS 'Inverter Power Consumption, Distribution';

DROP TABLE IF EXISTS ld1553 CASCADE;
CREATE TABLE ld1553
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "stopped_time"    INTEGER,
    "runIdle_time"    INTEGER,
    "runWork_time"    INTEGER,
    "runTravel_time"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1553 IS 'Electrical Motor Usage Information';

DROP TABLE IF EXISTS ld1563 CASCADE;
CREATE TABLE ld1563
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt80"       INTEGER,
    "time_bt80n81"    INTEGER,
    "time_bt81n82"    INTEGER,
    "time_bt82n83"    INTEGER,
    "time_bt83n84"    INTEGER,
    "time_bt84n85"    INTEGER,
    "time_bt85n86"    INTEGER,
    "time_bt86n87"    INTEGER,
    "time_bt87n88"    INTEGER,
    "time_bt88n89"    INTEGER,
    "time_bt89n90"    INTEGER,
    "time_bt90n91"    INTEGER,
    "time_bt91n92"    INTEGER,
    "time_bt92n93"    INTEGER,
    "time_bt93n94"    INTEGER,
    "time_bt94n95"    INTEGER,
    "time_bt95n96"    INTEGER,
    "time_bt96n97"    INTEGER,
    "time_bt97n98"    INTEGER,
    "time_bt98n99"    INTEGER,
    "time_bt99n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1563 IS 'Inverter Temperature, High Range, Time Distribution';

DROP TABLE IF EXISTS ld1564 CASCADE;
CREATE TABLE ld1564
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n1"      INTEGER,
    "time_bt1n2"      INTEGER,
    "time_bt2n3"      INTEGER,
    "time_bt3n4"      INTEGER,
    "time_bt4n5"      INTEGER,
    "time_bt5n6"      INTEGER,
    "time_bt6n7"      INTEGER,
    "time_bt7n8"      INTEGER,
    "time_bt8n9"      INTEGER,
    "time_bt9n10"     INTEGER,
    "time_bt10n11"    INTEGER,
    "time_bt11n12"    INTEGER,
    "time_bt12n13"    INTEGER,
    "time_bt13n14"    INTEGER,
    "time_bt14n15"    INTEGER,
    "time_bt15n16"    INTEGER,
    "time_bt16n17"    INTEGER,
    "time_bt17n18"    INTEGER,
    "time_bt18n19"    INTEGER,
    "time_bt19n20"    INTEGER,
    "time_gt20"       INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1564 IS 'Inverter Temperature, Low Range, Time Distribution';

DROP TABLE IF EXISTS ld1565 CASCADE;
CREATE TABLE ld1565
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "num_startReq"    INTEGER,
    "num_mps"         INTEGER,
    "num_ips"         INTEGER,
    "num_tbps"        INTEGER,
    "num_ots"         INTEGER,
    "num_DCDCps"      INTEGER,
    "num_osrh"        INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1565 IS 'Electric Motor, Start Request Event, Counter';
COMMENT
ON COLUMN ld1565."num_startReq" IS 'motor start request from operator';
COMMENT
ON COLUMN ld1565."num_mps" IS 'motor start inhibited due to motor protection status';
COMMENT
ON COLUMN ld1565."num_ips" IS 'motor start inhibited due to inverter protection status';
COMMENT
ON COLUMN ld1565."num_tbps" IS 'motor start inhibited due to traction battery protection status';
COMMENT
ON COLUMN ld1565."num_ots" IS 'motor start inhibited due to oil temperature status';
COMMENT
ON COLUMN ld1565."num_DCDCps" IS 'motor start inhibited due to DCDC protection status';
COMMENT
ON COLUMN ld1565."num_osrh" IS 'motor start inhibited due to operator still requesting hydraulic';

DROP TABLE IF EXISTS ld1566 CASCADE;
CREATE TABLE ld1566
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "num_stopReq"     INTEGER,
    "num_mps"         INTEGER,
    "num_ips"         INTEGER,
    "num_tbps"        INTEGER,
    "num_ots"         INTEGER,
    "num_af"          INTEGER,
    "num_iko"         INTEGER,
    "num_ar"          INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1566 IS 'Electric Motor, Stop Request Event, Counter';
COMMENT
ON COLUMN ld1566."num_stopReq" IS 'motor stop requested';
COMMENT
ON COLUMN ld1566."num_mps" IS 'motor stopped due to motor protection status';
COMMENT
ON COLUMN ld1566."num_ips" IS 'motor stopped due to inverter protection status';
COMMENT
ON COLUMN ld1566."num_tbps" IS 'motor stopped due to traction battery protection status';
COMMENT
ON COLUMN ld1566."num_ots" IS 'motor stopped due to oil temperature status';
COMMENT
ON COLUMN ld1566."num_af" IS 'motor stopped due to autoshutdown function';
COMMENT
ON COLUMN ld1566."num_iko" IS 'motor stopped due to ignition key off';
COMMENT
ON COLUMN ld1566."num_ar" IS 'motor stopped due to armrest raised';

DROP TABLE IF EXISTS ld1568 CASCADE;
CREATE TABLE ld1568
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ocr_bt0n10sec"   INTEGER,
    "ocr_bt10n20sec"  INTEGER,
    "ocr_bt20n30sec"  INTEGER,
    "ocr_bt30n60sec"  INTEGER,
    "ocr_bt60n90sec"  INTEGER,
    "ocr_bt90n120sec" INTEGER,
    "ocr_bt2n3min"    INTEGER,
    "ocr_bt3n4min"    INTEGER,
    "ocr_bt4n5min"    INTEGER,
    "ocr_bt5n10min"   INTEGER,
    "ocr_bt10n15min"  INTEGER,
    "ocr_bt15n20min"  INTEGER,
    "ocr_bt20n30min"  INTEGER,
    "ocr_bt30n45min"  INTEGER,
    "ocr_bt45n60min"  INTEGER,
    "ocr_bt60n90min"  INTEGER,
    "ocr_bt90n120min" INTEGER,
    "ocr_bt2n3h"      INTEGER,
    "ocr_bt3n4h"      INTEGER,
    "ocr_gt4h"        INTEGER
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1568 IS 'Electric Motor Restart, Counter, Time Distribution';

DROP TABLE IF EXISTS ld1569 CASCADE;
CREATE TABLE ld1569
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt80"       INTEGER,
    "time_bt80n81"    INTEGER,
    "time_bt81n82"    INTEGER,
    "time_bt82n83"    INTEGER,
    "time_bt83n84"    INTEGER,
    "time_bt84n85"    INTEGER,
    "time_bt85n86"    INTEGER,
    "time_bt86n87"    INTEGER,
    "time_bt87n88"    INTEGER,
    "time_bt88n89"    INTEGER,
    "time_bt89n90"    INTEGER,
    "time_bt90n91"    INTEGER,
    "time_bt91n92"    INTEGER,
    "time_bt92n93"    INTEGER,
    "time_bt93n94"    INTEGER,
    "time_bt94n95"    INTEGER,
    "time_bt95n96"    INTEGER,
    "time_bt96n97"    INTEGER,
    "time_bt97n98"    INTEGER,
    "time_bt98n99"    INTEGER,
    "time_bt99n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1569 IS 'Electrical Motor Temperature, High range, Time Distribution';

DROP TABLE IF EXISTS ld1570 CASCADE;
CREATE TABLE ld1570
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n1"      INTEGER,
    "time_bt1n2"      INTEGER,
    "time_bt2n3"      INTEGER,
    "time_bt3n4"      INTEGER,
    "time_bt4n5"      INTEGER,
    "time_bt5n6"      INTEGER,
    "time_bt6n7"      INTEGER,
    "time_bt7n8"      INTEGER,
    "time_bt8n9"      INTEGER,
    "time_bt9n10"     INTEGER,
    "time_bt10n11"    INTEGER,
    "time_bt11n12"    INTEGER,
    "time_bt12n13"    INTEGER,
    "time_bt13n14"    INTEGER,
    "time_bt14n15"    INTEGER,
    "time_bt15n16"    INTEGER,
    "time_bt16n17"    INTEGER,
    "time_bt17n18"    INTEGER,
    "time_bt18n19"    INTEGER,
    "time_bt19n20"    INTEGER,
    "time_gt20"       INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1570 IS 'Electrical Motor Temperature, Low Range, Time Distribution';

DROP TABLE IF EXISTS ld1560 CASCADE;
CREATE TABLE ld1560
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n5"      INTEGER,
    "time_bt5n10"     INTEGER,
    "time_bt10n15"    INTEGER,
    "time_bt15n20"    INTEGER,
    "time_bt20n25"    INTEGER,
    "time_bt25n30"    INTEGER,
    "time_bt30n35"    INTEGER,
    "time_bt35n40"    INTEGER,
    "time_bt40n45"    INTEGER,
    "time_bt45n50"    INTEGER,
    "time_bt50n55"    INTEGER,
    "time_bt55n60"    INTEGER,
    "time_bt60n65"    INTEGER,
    "time_bt65n70"    INTEGER,
    "time_bt70n75"    INTEGER,
    "time_bt75n80"    INTEGER,
    "time_bt80n85"    INTEGER,
    "time_bt85n90"    INTEGER,
    "time_bt90n95"    INTEGER,
    "time_bt95n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1560 IS 'DCDC Converter temperature distribution (full range)';

DROP TABLE IF EXISTS ld1558 CASCADE;
CREATE TABLE ld1558
(
    id                        SERIAL       NOT NULL,
    "chassisId"               VARCHAR(255) NOT NULL,
    created_by                INTEGER,
    created_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by                INTEGER,
    updated_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone                  DATE         NOT NULL,
    "timeStampAtZone"         VARCHAR(255),
    "timeZone"                VARCHAR(255),
    "timeStamp"               VARCHAR(255),
    "processedAt"             VARCHAR(255),
    "totalLoggedTime"         INTEGER,
    "ocrChargeStart_bt0n5"    INTEGER,
    "ocrChargeStart_bt5n10"   INTEGER,
    "ocrChargeStart_bt10n15"  INTEGER,
    "ocrChargeStart_bt15n20"  INTEGER,
    "ocrChargeStart_bt20n25"  INTEGER,
    "ocrChargeStart_bt25n30"  INTEGER,
    "ocrChargeStart_bt30n35"  INTEGER,
    "ocrChargeStart_bt35n40"  INTEGER,
    "ocrChargeStart_bt40n45"  INTEGER,
    "ocrChargeStart_bt45n50"  INTEGER,
    "ocrChargeStart_bt50n55"  INTEGER,
    "ocrChargeStart_bt55n60"  INTEGER,
    "ocrChargeStart_bt60n65"  INTEGER,
    "ocrChargeStart_bt65n70"  INTEGER,
    "ocrChargeStart_bt70n75"  INTEGER,
    "ocrChargeStart_bt75n80"  INTEGER,
    "ocrChargeStart_bt80n85"  INTEGER,
    "ocrChargeStart_bt85n90"  INTEGER,
    "ocrChargeStart_bt90n95"  INTEGER,
    "ocrChargeStart_bt95n100" INTEGER,
    "ocrChargeStop_bt0n5"     INTEGER,
    "ocrChargeStop_bt5n10"    INTEGER,
    "ocrChargeStop_bt10n15"   INTEGER,
    "ocrChargeStop_bt15n20"   INTEGER,
    "ocrChargeStop_bt20n25"   INTEGER,
    "ocrChargeStop_bt25n30"   INTEGER,
    "ocrChargeStop_bt30n35"   INTEGER,
    "ocrChargeStop_bt35n40"   INTEGER,
    "ocrChargeStop_bt40n45"   INTEGER,
    "ocrChargeStop_bt45n50"   INTEGER,
    "ocrChargeStop_bt50n55"   INTEGER,
    "ocrChargeStop_bt55n60"   INTEGER,
    "ocrChargeStop_bt60n65"   INTEGER,
    "ocrChargeStop_bt65n70"   INTEGER,
    "ocrChargeStop_bt70n75"   INTEGER,
    "ocrChargeStop_bt75n80"   INTEGER,
    "ocrChargeStop_bt80n85"   INTEGER,
    "ocrChargeStop_bt85n90"   INTEGER,
    "ocrChargeStop_bt90n95"   INTEGER,
    "ocrChargeStop_bt95n100"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1558 IS 'Traction battery SoC distribution fast charge started or stopped';

DROP TABLE IF EXISTS ld1559 CASCADE;
CREATE TABLE ld1559
(
    id                        SERIAL       NOT NULL,
    "chassisId"               VARCHAR(255) NOT NULL,
    created_by                INTEGER,
    created_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by                INTEGER,
    updated_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone                  DATE         NOT NULL,
    "timeStampAtZone"         VARCHAR(255),
    "timeZone"                VARCHAR(255),
    "timeStamp"               VARCHAR(255),
    "processedAt"             VARCHAR(255),
    "totalLoggedTime"         INTEGER,
    "ocrChargeStart_bt0n5"    INTEGER,
    "ocrChargeStart_bt5n10"   INTEGER,
    "ocrChargeStart_bt10n15"  INTEGER,
    "ocrChargeStart_bt15n20"  INTEGER,
    "ocrChargeStart_bt20n25"  INTEGER,
    "ocrChargeStart_bt25n30"  INTEGER,
    "ocrChargeStart_bt30n35"  INTEGER,
    "ocrChargeStart_bt35n40"  INTEGER,
    "ocrChargeStart_bt40n45"  INTEGER,
    "ocrChargeStart_bt45n50"  INTEGER,
    "ocrChargeStart_bt50n55"  INTEGER,
    "ocrChargeStart_bt55n60"  INTEGER,
    "ocrChargeStart_bt60n65"  INTEGER,
    "ocrChargeStart_bt65n70"  INTEGER,
    "ocrChargeStart_bt70n75"  INTEGER,
    "ocrChargeStart_bt75n80"  INTEGER,
    "ocrChargeStart_bt80n85"  INTEGER,
    "ocrChargeStart_bt85n90"  INTEGER,
    "ocrChargeStart_bt90n95"  INTEGER,
    "ocrChargeStart_bt95n100" INTEGER,
    "ocrChargeStop_bt0n5"     INTEGER,
    "ocrChargeStop_bt5n10"    INTEGER,
    "ocrChargeStop_bt10n15"   INTEGER,
    "ocrChargeStop_bt15n20"   INTEGER,
    "ocrChargeStop_bt20n25"   INTEGER,
    "ocrChargeStop_bt25n30"   INTEGER,
    "ocrChargeStop_bt30n35"   INTEGER,
    "ocrChargeStop_bt35n40"   INTEGER,
    "ocrChargeStop_bt40n45"   INTEGER,
    "ocrChargeStop_bt45n50"   INTEGER,
    "ocrChargeStop_bt50n55"   INTEGER,
    "ocrChargeStop_bt55n60"   INTEGER,
    "ocrChargeStop_bt60n65"   INTEGER,
    "ocrChargeStop_bt65n70"   INTEGER,
    "ocrChargeStop_bt70n75"   INTEGER,
    "ocrChargeStop_bt75n80"   INTEGER,
    "ocrChargeStop_bt80n85"   INTEGER,
    "ocrChargeStop_bt85n90"   INTEGER,
    "ocrChargeStop_bt90n95"   INTEGER,
    "ocrChargeStop_bt95n100"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1559 IS 'Traction battery SoC distribution slow charge started or stopped';

DROP TABLE IF EXISTS ld1571 CASCADE;
CREATE TABLE ld1571
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n5"      INTEGER,
    "time_bt5n10"     INTEGER,
    "time_bt10n15"    INTEGER,
    "time_bt15n20"    INTEGER,
    "time_bt20n25"    INTEGER,
    "time_bt25n30"    INTEGER,
    "time_bt30n35"    INTEGER,
    "time_bt35n40"    INTEGER,
    "time_bt40n45"    INTEGER,
    "time_bt45n50"    INTEGER,
    "time_bt50n55"    INTEGER,
    "time_bt55n60"    INTEGER,
    "time_bt60n65"    INTEGER,
    "time_bt65n70"    INTEGER,
    "time_bt70n75"    INTEGER,
    "time_bt75n80"    INTEGER,
    "time_bt80n85"    INTEGER,
    "time_bt85n90"    INTEGER,
    "time_bt90n95"    INTEGER,
    "time_bt95n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1571 IS 'On Board Charger temperature distribution (full range)';

DROP TABLE IF EXISTS ld1525 CASCADE;
CREATE TABLE ld1525
(
    id                        SERIAL       NOT NULL,
    "chassisId"               VARCHAR(255) NOT NULL,
    created_by                INTEGER,
    created_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by                INTEGER,
    updated_at                TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone                  DATE         NOT NULL,
    "timeStampAtZone"         VARCHAR(255),
    "timeZone"                VARCHAR(255),
    "timeStamp"               VARCHAR(255),
    "processedAt"             VARCHAR(255),
    "totalLoggedTime"         INTEGER,
    "totalTimeElapsed_off"    INTEGER,
    "totalTimeElapsed_on"     INTEGER,
    "totalEnergyConsumed_off" INTEGER,
    "totalEnergyConsumed_on"  INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1525 IS 'Total energy consumed DCDC VS key position';

DROP TABLE IF EXISTS ld1572 CASCADE;
CREATE TABLE ld1572
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt80"       INTEGER,
    "time_bt80n81"    INTEGER,
    "time_bt81n82"    INTEGER,
    "time_bt82n83"    INTEGER,
    "time_bt83n84"    INTEGER,
    "time_bt84n85"    INTEGER,
    "time_bt85n86"    INTEGER,
    "time_bt86n87"    INTEGER,
    "time_bt87n88"    INTEGER,
    "time_bt88n89"    INTEGER,
    "time_bt89n90"    INTEGER,
    "time_bt90n91"    INTEGER,
    "time_bt91n92"    INTEGER,
    "time_bt92n93"    INTEGER,
    "time_bt93n94"    INTEGER,
    "time_bt94n95"    INTEGER,
    "time_bt95n96"    INTEGER,
    "time_bt96n97"    INTEGER,
    "time_bt97n98"    INTEGER,
    "time_bt98n99"    INTEGER,
    "time_bt99n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1572 IS 'On Board Charger temperature distribution (high range)';

DROP TABLE IF EXISTS ld1573 CASCADE;
CREATE TABLE ld1573
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n1"      INTEGER,
    "time_bt1n2"      INTEGER,
    "time_bt2n3"      INTEGER,
    "time_bt3n4"      INTEGER,
    "time_bt4n5"      INTEGER,
    "time_bt5n6"      INTEGER,
    "time_bt6n7"      INTEGER,
    "time_bt7n8"      INTEGER,
    "time_bt8n9"      INTEGER,
    "time_bt9n10"     INTEGER,
    "time_bt10n11"    INTEGER,
    "time_bt11n12"    INTEGER,
    "time_bt12n13"    INTEGER,
    "time_bt13n14"    INTEGER,
    "time_bt14n15"    INTEGER,
    "time_bt15n16"    INTEGER,
    "time_bt16n17"    INTEGER,
    "time_bt17n18"    INTEGER,
    "time_bt18n19"    INTEGER,
    "time_bt19n20"    INTEGER,
    "time_gt20"       INTEGER
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1573 IS 'On Board Charger temperature distribution (low range)';

DROP TABLE IF EXISTS ld1539 CASCADE;
CREATE TABLE ld1539
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "no0_ct"          VARCHAR(255),
    "no0_mh"          INTEGER,
    "no0_ed"          INTEGER,
    "no1_ct"          VARCHAR(255),
    "no1_mh"          INTEGER,
    "no1_ed"          INTEGER,
    "no2_ct"          VARCHAR(255),
    "no2_mh"          INTEGER,
    "no2_ed"          INTEGER,
    "no3_ct"          VARCHAR(255),
    "no3_mh"          INTEGER,
    "no3_ed"          INTEGER,
    "no4_ct"          VARCHAR(255),
    "no4_mh"          INTEGER,
    "no4_ed"          INTEGER,
    "no5_ct"          VARCHAR(255),
    "no5_mh"          INTEGER,
    "no5_ed"          INTEGER,
    "no6_ct"          VARCHAR(255),
    "no6_mh"          INTEGER,
    "no6_ed"          INTEGER,
    "no7_ct"          VARCHAR(255),
    "no7_mh"          INTEGER,
    "no7_ed"          INTEGER,
    "no8_ct"          VARCHAR(255),
    "no8_mh"          INTEGER,
    "no8_ed"          INTEGER,
    "no9_ct"          VARCHAR(255),
    "no9_mh"          INTEGER,
    "no9_ed"          INTEGER,
    "no10_ct"         VARCHAR(255),
    "no10_mh"         INTEGER,
    "no10_ed"         INTEGER,
    "no11_ct"         VARCHAR(255),
    "no11_mh"         INTEGER,
    "no11_ed"         INTEGER,
    "no12_ct"         VARCHAR(255),
    "no12_mh"         INTEGER,
    "no12_ed"         INTEGER,
    "no13_ct"         VARCHAR(255),
    "no13_mh"         INTEGER,
    "no13_ed"         INTEGER,
    "no14_ct"         VARCHAR(255),
    "no14_mh"         INTEGER,
    "no14_ed"         INTEGER,
    "no15_ct"         VARCHAR(255),
    "no15_mh"         INTEGER,
    "no15_ed"         INTEGER,
    "no16_ct"         VARCHAR(255),
    "no16_mh"         INTEGER,
    "no16_ed"         INTEGER,
    "no17_ct"         VARCHAR(255),
    "no17_mh"         INTEGER,
    "no17_ed"         INTEGER,
    "no18_ct"         VARCHAR(255),
    "no18_mh"         INTEGER,
    "no18_ed"         INTEGER,
    "no19_ct"         VARCHAR(255),
    "no19_mh"         INTEGER,
    "no19_ed"         INTEGER,
    "no0_od"          NUMERIC(24, 2),
    "no1_od"          NUMERIC(24, 2),
    "no2_od"          NUMERIC(24, 2),
    "no3_od"          NUMERIC(24, 2),
    "no4_od"          NUMERIC(24, 2),
    "no5_od"          NUMERIC(24, 2),
    "no6_od"          NUMERIC(24, 2),
    "no7_od"          NUMERIC(24, 2),
    "no8_od"          NUMERIC(24, 2),
    "no9_od"          NUMERIC(24, 2),
    "no10_od"         NUMERIC(24, 2),
    "no11_od"         NUMERIC(24, 2),
    "no12_od"         NUMERIC(24, 2),
    "no13_od"         NUMERIC(24, 2),
    "no14_od"         NUMERIC(24, 2),
    "no15_od"         NUMERIC(24, 2),
    "no16_od"         NUMERIC(24, 2),
    "no17_od"         NUMERIC(24, 2),
    "no18_od"         NUMERIC(24, 2),
    "no19_od"         NUMERIC(24, 2)

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1539 IS 'Maximum voltage on DC link';

DROP TABLE IF EXISTS ld1540 CASCADE;
CREATE TABLE ld1540
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "no0_ct"          VARCHAR(255),
    "no0_mh"          INTEGER,
    "no0_ed"          INTEGER,
    "no1_ct"          VARCHAR(255),
    "no1_mh"          INTEGER,
    "no1_ed"          INTEGER,
    "no2_ct"          VARCHAR(255),
    "no2_mh"          INTEGER,
    "no2_ed"          INTEGER,
    "no3_ct"          VARCHAR(255),
    "no3_mh"          INTEGER,
    "no3_ed"          INTEGER,
    "no4_ct"          VARCHAR(255),
    "no4_mh"          INTEGER,
    "no4_ed"          INTEGER,
    "no5_ct"          VARCHAR(255),
    "no5_mh"          INTEGER,
    "no5_ed"          INTEGER,
    "no6_ct"          VARCHAR(255),
    "no6_mh"          INTEGER,
    "no6_ed"          INTEGER,
    "no7_ct"          VARCHAR(255),
    "no7_mh"          INTEGER,
    "no7_ed"          INTEGER,
    "no8_ct"          VARCHAR(255),
    "no8_mh"          INTEGER,
    "no8_ed"          INTEGER,
    "no9_ct"          VARCHAR(255),
    "no9_mh"          INTEGER,
    "no9_ed"          INTEGER,
    "no10_ct"         VARCHAR(255),
    "no10_mh"         INTEGER,
    "no10_ed"         INTEGER,
    "no11_ct"         VARCHAR(255),
    "no11_mh"         INTEGER,
    "no11_ed"         INTEGER,
    "no12_ct"         VARCHAR(255),
    "no12_mh"         INTEGER,
    "no12_ed"         INTEGER,
    "no13_ct"         VARCHAR(255),
    "no13_mh"         INTEGER,
    "no13_ed"         INTEGER,
    "no14_ct"         VARCHAR(255),
    "no14_mh"         INTEGER,
    "no14_ed"         INTEGER,
    "no15_ct"         VARCHAR(255),
    "no15_mh"         INTEGER,
    "no15_ed"         INTEGER,
    "no16_ct"         VARCHAR(255),
    "no16_mh"         INTEGER,
    "no16_ed"         INTEGER,
    "no17_ct"         VARCHAR(255),
    "no17_mh"         INTEGER,
    "no17_ed"         INTEGER,
    "no18_ct"         VARCHAR(255),
    "no18_mh"         INTEGER,
    "no18_ed"         INTEGER,
    "no19_ct"         VARCHAR(255),
    "no19_mh"         INTEGER,
    "no19_ed"         INTEGER,
    "no0_od"          NUMERIC(24, 2),
    "no1_od"          NUMERIC(24, 2),
    "no2_od"          NUMERIC(24, 2),
    "no3_od"          NUMERIC(24, 2),
    "no4_od"          NUMERIC(24, 2),
    "no5_od"          NUMERIC(24, 2),
    "no6_od"          NUMERIC(24, 2),
    "no7_od"          NUMERIC(24, 2),
    "no8_od"          NUMERIC(24, 2),
    "no9_od"          NUMERIC(24, 2),
    "no10_od"         NUMERIC(24, 2),
    "no11_od"         NUMERIC(24, 2),
    "no12_od"         NUMERIC(24, 2),
    "no13_od"         NUMERIC(24, 2),
    "no14_od"         NUMERIC(24, 2),
    "no15_od"         NUMERIC(24, 2),
    "no16_od"         NUMERIC(24, 2),
    "no17_od"         NUMERIC(24, 2),
    "no18_od"         NUMERIC(24, 2),
    "no19_od"         NUMERIC(24, 2)

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1540 IS 'Minimum voltage on DC link';

DROP TABLE IF EXISTS ld1543 CASCADE;
CREATE TABLE ld1543
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n5"      INTEGER,
    "time_bt5n10"     INTEGER,
    "time_bt10n15"    INTEGER,
    "time_bt15n20"    INTEGER,
    "time_bt20n25"    INTEGER,
    "time_bt25n30"    INTEGER,
    "time_bt30n35"    INTEGER,
    "time_bt35n40"    INTEGER,
    "time_bt40n45"    INTEGER,
    "time_bt45n50"    INTEGER,
    "time_bt50n55"    INTEGER,
    "time_bt55n60"    INTEGER,
    "time_bt60n65"    INTEGER,
    "time_bt65n70"    INTEGER,
    "time_bt70n75"    INTEGER,
    "time_bt75n80"    INTEGER,
    "time_bt80n85"    INTEGER,
    "time_bt85n90"    INTEGER,
    "time_bt90n95"    INTEGER,
    "time_bt95n100"   INTEGER,
    "time_gt100"      INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1543 IS 'Traction battery cell average temperature distribution (full range)';

DROP TABLE IF EXISTS ld1546 CASCADE;
CREATE TABLE ld1546
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "no0_ct"          VARCHAR(255),
    "no0_mh"          INTEGER,
    "no0_ed"          INTEGER,
    "no1_ct"          VARCHAR(255),
    "no1_mh"          INTEGER,
    "no1_ed"          INTEGER,
    "no2_ct"          VARCHAR(255),
    "no2_mh"          INTEGER,
    "no2_ed"          INTEGER,
    "no3_ct"          VARCHAR(255),
    "no3_mh"          INTEGER,
    "no3_ed"          INTEGER,
    "no4_ct"          VARCHAR(255),
    "no4_mh"          INTEGER,
    "no4_ed"          INTEGER,
    "no5_ct"          VARCHAR(255),
    "no5_mh"          INTEGER,
    "no5_ed"          INTEGER,
    "no6_ct"          VARCHAR(255),
    "no6_mh"          INTEGER,
    "no6_ed"          INTEGER,
    "no7_ct"          VARCHAR(255),
    "no7_mh"          INTEGER,
    "no7_ed"          INTEGER,
    "no8_ct"          VARCHAR(255),
    "no8_mh"          INTEGER,
    "no8_ed"          INTEGER,
    "no9_ct"          VARCHAR(255),
    "no9_mh"          INTEGER,
    "no9_ed"          INTEGER,
    "no10_ct"         VARCHAR(255),
    "no10_mh"         INTEGER,
    "no10_ed"         INTEGER,
    "no11_ct"         VARCHAR(255),
    "no11_mh"         INTEGER,
    "no11_ed"         INTEGER,
    "no12_ct"         VARCHAR(255),
    "no12_mh"         INTEGER,
    "no12_ed"         INTEGER,
    "no13_ct"         VARCHAR(255),
    "no13_mh"         INTEGER,
    "no13_ed"         INTEGER,
    "no14_ct"         VARCHAR(255),
    "no14_mh"         INTEGER,
    "no14_ed"         INTEGER,
    "no15_ct"         VARCHAR(255),
    "no15_mh"         INTEGER,
    "no15_ed"         INTEGER,
    "no16_ct"         VARCHAR(255),
    "no16_mh"         INTEGER,
    "no16_ed"         INTEGER,
    "no17_ct"         VARCHAR(255),
    "no17_mh"         INTEGER,
    "no17_ed"         INTEGER,
    "no18_ct"         VARCHAR(255),
    "no18_mh"         INTEGER,
    "no18_ed"         INTEGER,
    "no19_ct"         VARCHAR(255),
    "no19_mh"         INTEGER,
    "no19_ed"         INTEGER,
    "no0_od"          NUMERIC(24, 2),
    "no1_od"          NUMERIC(24, 2),
    "no2_od"          NUMERIC(24, 2),
    "no3_od"          NUMERIC(24, 2),
    "no4_od"          NUMERIC(24, 2),
    "no5_od"          NUMERIC(24, 2),
    "no6_od"          NUMERIC(24, 2),
    "no7_od"          NUMERIC(24, 2),
    "no8_od"          NUMERIC(24, 2),
    "no9_od"          NUMERIC(24, 2),
    "no10_od"         NUMERIC(24, 2),
    "no11_od"         NUMERIC(24, 2),
    "no12_od"         NUMERIC(24, 2),
    "no13_od"         NUMERIC(24, 2),
    "no14_od"         NUMERIC(24, 2),
    "no15_od"         NUMERIC(24, 2),
    "no16_od"         NUMERIC(24, 2),
    "no17_od"         NUMERIC(24, 2),
    "no18_od"         NUMERIC(24, 2),
    "no19_od"         NUMERIC(24, 2)
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1546 IS 'Traction battery disconnected unexpectedly event occurences';

DROP TABLE IF EXISTS ld1547 CASCADE;
CREATE TABLE ld1547
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "time_lt80"       INTEGER,
    "time_bt80n81"    INTEGER,
    "time_bt81n82"    INTEGER,
    "time_bt82n83"    INTEGER,
    "time_bt83n84"    INTEGER,
    "time_bt84n85"    INTEGER,
    "time_bt85n86"    INTEGER,
    "time_bt86n87"    INTEGER,
    "time_bt87n88"    INTEGER,
    "time_bt88n89"    INTEGER,
    "time_bt89n90"    INTEGER,
    "time_bt90n91"    INTEGER,
    "time_bt91n92"    INTEGER,
    "time_bt92n93"    INTEGER,
    "time_bt93n94"    INTEGER,
    "time_bt94n95"    INTEGER,
    "time_bt95n96"    INTEGER,
    "time_bt96n97"    INTEGER,
    "time_bt97n98"    INTEGER,
    "time_bt98n99"    INTEGER,
    "time_bt99n100"   INTEGER

)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1547 IS 'Traction battery SoC distribution (high range)';

DROP TABLE IF EXISTS ld1548 CASCADE;
CREATE TABLE ld1548
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n1"      INTEGER,
    "time_bt1n2"      INTEGER,
    "time_bt2n3"      INTEGER,
    "time_bt3n4"      INTEGER,
    "time_bt4n5"      INTEGER,
    "time_bt5n6"      INTEGER,
    "time_bt6n7"      INTEGER,
    "time_bt7n8"      INTEGER,
    "time_bt8n9"      INTEGER,
    "time_bt9n10"     INTEGER,
    "time_bt10n11"    INTEGER,
    "time_bt11n12"    INTEGER,
    "time_bt12n13"    INTEGER,
    "time_bt13n14"    INTEGER,
    "time_bt14n15"    INTEGER,
    "time_bt15n16"    INTEGER,
    "time_bt16n17"    INTEGER,
    "time_bt17n18"    INTEGER,
    "time_bt18n19"    INTEGER,
    "time_bt19n20"    INTEGER
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1548 IS 'Traction battery SoC distribution (low range)';

DROP TABLE IF EXISTS ld1554 CASCADE;
CREATE TABLE ld1554
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "no0_ct"          VARCHAR(255),
    "no0_mh"          INTEGER,
    "no0_ed"          INTEGER,
    "no1_ct"          VARCHAR(255),
    "no1_mh"          INTEGER,
    "no1_ed"          INTEGER,
    "no2_ct"          VARCHAR(255),
    "no2_mh"          INTEGER,
    "no2_ed"          INTEGER,
    "no3_ct"          VARCHAR(255),
    "no3_mh"          INTEGER,
    "no3_ed"          INTEGER,
    "no4_ct"          VARCHAR(255),
    "no4_mh"          INTEGER,
    "no4_ed"          INTEGER,
    "no5_ct"          VARCHAR(255),
    "no5_mh"          INTEGER,
    "no5_ed"          INTEGER,
    "no6_ct"          VARCHAR(255),
    "no6_mh"          INTEGER,
    "no6_ed"          INTEGER,
    "no7_ct"          VARCHAR(255),
    "no7_mh"          INTEGER,
    "no7_ed"          INTEGER,
    "no8_ct"          VARCHAR(255),
    "no8_mh"          INTEGER,
    "no8_ed"          INTEGER,
    "no9_ct"          VARCHAR(255),
    "no9_mh"          INTEGER,
    "no9_ed"          INTEGER,
    "no10_ct"         VARCHAR(255),
    "no10_mh"         INTEGER,
    "no10_ed"         INTEGER,
    "no11_ct"         VARCHAR(255),
    "no11_mh"         INTEGER,
    "no11_ed"         INTEGER,
    "no12_ct"         VARCHAR(255),
    "no12_mh"         INTEGER,
    "no12_ed"         INTEGER,
    "no13_ct"         VARCHAR(255),
    "no13_mh"         INTEGER,
    "no13_ed"         INTEGER,
    "no14_ct"         VARCHAR(255),
    "no14_mh"         INTEGER,
    "no14_ed"         INTEGER,
    "no15_ct"         VARCHAR(255),
    "no15_mh"         INTEGER,
    "no15_ed"         INTEGER,
    "no16_ct"         VARCHAR(255),
    "no16_mh"         INTEGER,
    "no16_ed"         INTEGER,
    "no17_ct"         VARCHAR(255),
    "no17_mh"         INTEGER,
    "no17_ed"         INTEGER,
    "no18_ct"         VARCHAR(255),
    "no18_mh"         INTEGER,
    "no18_ed"         INTEGER,
    "no19_ct"         VARCHAR(255),
    "no19_mh"         INTEGER,
    "no19_ed"         INTEGER,
    "no0_od"          NUMERIC(24, 2),
    "no1_od"          NUMERIC(24, 2),
    "no2_od"          NUMERIC(24, 2),
    "no3_od"          NUMERIC(24, 2),
    "no4_od"          NUMERIC(24, 2),
    "no5_od"          NUMERIC(24, 2),
    "no6_od"          NUMERIC(24, 2),
    "no7_od"          NUMERIC(24, 2),
    "no8_od"          NUMERIC(24, 2),
    "no9_od"          NUMERIC(24, 2),
    "no10_od"         NUMERIC(24, 2),
    "no11_od"         NUMERIC(24, 2),
    "no12_od"         NUMERIC(24, 2),
    "no13_od"         NUMERIC(24, 2),
    "no14_od"         NUMERIC(24, 2),
    "no15_od"         NUMERIC(24, 2),
    "no16_od"         NUMERIC(24, 2),
    "no17_od"         NUMERIC(24, 2),
    "no18_od"         NUMERIC(24, 2),
    "no19_od"         NUMERIC(24, 2)
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1554 IS 'Maximum charging current from traction battery';

DROP TABLE IF EXISTS ld1555 CASCADE;
CREATE TABLE ld1555
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "no0_ct"          VARCHAR(255),
    "no0_mh"          INTEGER,
    "no0_ed"          INTEGER,
    "no1_ct"          VARCHAR(255),
    "no1_mh"          INTEGER,
    "no1_ed"          INTEGER,
    "no2_ct"          VARCHAR(255),
    "no2_mh"          INTEGER,
    "no2_ed"          INTEGER,
    "no3_ct"          VARCHAR(255),
    "no3_mh"          INTEGER,
    "no3_ed"          INTEGER,
    "no4_ct"          VARCHAR(255),
    "no4_mh"          INTEGER,
    "no4_ed"          INTEGER,
    "no5_ct"          VARCHAR(255),
    "no5_mh"          INTEGER,
    "no5_ed"          INTEGER,
    "no6_ct"          VARCHAR(255),
    "no6_mh"          INTEGER,
    "no6_ed"          INTEGER,
    "no7_ct"          VARCHAR(255),
    "no7_mh"          INTEGER,
    "no7_ed"          INTEGER,
    "no8_ct"          VARCHAR(255),
    "no8_mh"          INTEGER,
    "no8_ed"          INTEGER,
    "no9_ct"          VARCHAR(255),
    "no9_mh"          INTEGER,
    "no9_ed"          INTEGER,
    "no10_ct"         VARCHAR(255),
    "no10_mh"         INTEGER,
    "no10_ed"         INTEGER,
    "no11_ct"         VARCHAR(255),
    "no11_mh"         INTEGER,
    "no11_ed"         INTEGER,
    "no12_ct"         VARCHAR(255),
    "no12_mh"         INTEGER,
    "no12_ed"         INTEGER,
    "no13_ct"         VARCHAR(255),
    "no13_mh"         INTEGER,
    "no13_ed"         INTEGER,
    "no14_ct"         VARCHAR(255),
    "no14_mh"         INTEGER,
    "no14_ed"         INTEGER,
    "no15_ct"         VARCHAR(255),
    "no15_mh"         INTEGER,
    "no15_ed"         INTEGER,
    "no16_ct"         VARCHAR(255),
    "no16_mh"         INTEGER,
    "no16_ed"         INTEGER,
    "no17_ct"         VARCHAR(255),
    "no17_mh"         INTEGER,
    "no17_ed"         INTEGER,
    "no18_ct"         VARCHAR(255),
    "no18_mh"         INTEGER,
    "no18_ed"         INTEGER,
    "no19_ct"         VARCHAR(255),
    "no19_mh"         INTEGER,
    "no19_ed"         INTEGER,
    "no0_od"          NUMERIC(24, 2),
    "no1_od"          NUMERIC(24, 2),
    "no2_od"          NUMERIC(24, 2),
    "no3_od"          NUMERIC(24, 2),
    "no4_od"          NUMERIC(24, 2),
    "no5_od"          NUMERIC(24, 2),
    "no6_od"          NUMERIC(24, 2),
    "no7_od"          NUMERIC(24, 2),
    "no8_od"          NUMERIC(24, 2),
    "no9_od"          NUMERIC(24, 2),
    "no10_od"         NUMERIC(24, 2),
    "no11_od"         NUMERIC(24, 2),
    "no12_od"         NUMERIC(24, 2),
    "no13_od"         NUMERIC(24, 2),
    "no14_od"         NUMERIC(24, 2),
    "no15_od"         NUMERIC(24, 2),
    "no16_od"         NUMERIC(24, 2),
    "no17_od"         NUMERIC(24, 2),
    "no18_od"         NUMERIC(24, 2),
    "no19_od"         NUMERIC(24, 2)
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1555 IS 'Maximum discharging current from traction battery';

DROP TABLE IF EXISTS ld1574 CASCADE;
CREATE TABLE ld1574
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt80"       INTEGER,
    "time_bt80n81"    INTEGER,
    "time_bt81n82"    INTEGER,
    "time_bt82n83"    INTEGER,
    "time_bt83n84"    INTEGER,
    "time_bt84n85"    INTEGER,
    "time_bt85n86"    INTEGER,
    "time_bt86n87"    INTEGER,
    "time_bt87n88"    INTEGER,
    "time_bt88n89"    INTEGER,
    "time_bt89n90"    INTEGER,
    "time_bt90n91"    INTEGER,
    "time_bt91n92"    INTEGER,
    "time_bt92n93"    INTEGER,
    "time_bt93n94"    INTEGER,
    "time_bt94n95"    INTEGER,
    "time_bt95n96"    INTEGER,
    "time_bt96n97"    INTEGER,
    "time_bt97n98"    INTEGER,
    "time_bt98n99"    INTEGER,
    "time_bt99n100"   INTEGER,
    "time_gt100"      INTEGER
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1574 IS 'Traction battery cell average temperature distribution (high range)';

DROP TABLE IF EXISTS ld1575 CASCADE;
CREATE TABLE ld1575
(
    id                SERIAL       NOT NULL,
    "chassisId"       VARCHAR(255) NOT NULL,
    created_by        INTEGER,
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by        INTEGER,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    day_zone          DATE         NOT NULL,
    "timeStampAtZone" VARCHAR(255),
    "timeZone"        VARCHAR(255),
    "timeStamp"       VARCHAR(255),
    "processedAt"     VARCHAR(255),
    "totalLoggedTime" INTEGER,
    "ofsTemp"         INTEGER,
    "refTemp"         INTEGER,
    "time_lt0"        INTEGER,
    "time_bt0n1"      INTEGER,
    "time_bt1n2"      INTEGER,
    "time_bt2n3"      INTEGER,
    "time_bt3n4"      INTEGER,
    "time_bt4n5"      INTEGER,
    "time_bt5n6"      INTEGER,
    "time_bt6n7"      INTEGER,
    "time_bt7n8"      INTEGER,
    "time_bt8n9"      INTEGER,
    "time_bt9n10"     INTEGER,
    "time_bt10n11"    INTEGER,
    "time_bt11n12"    INTEGER,
    "time_bt12n13"    INTEGER,
    "time_bt13n14"    INTEGER,
    "time_bt14n15"    INTEGER,
    "time_bt15n16"    INTEGER,
    "time_bt16n17"    INTEGER,
    "time_bt17n18"    INTEGER,
    "time_bt18n19"    INTEGER,
    "time_bt19n20"    INTEGER,
    "time_gt20"       INTEGER
)PARTITION BY RANGE ("day_zone");
COMMENT
ON TABLE ld1575 IS 'Traction battery cell average temperature distribution (low range)';



------------- create index start-------------------------------

CREATE UNIQUE INDEX ld1552_uk_chassisId_dayZone ON ld1552 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1541_uk_chassisId_dayZone ON ld1541 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1526_uk_chassisId_dayZone ON ld1526 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1551_uk_chassisId_dayZone ON ld1551 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1553_uk_chassisId_dayZone ON ld1553 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1563_uk_chassisId_dayZone ON ld1563 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1564_uk_chassisId_dayZone ON ld1564 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1565_uk_chassisId_dayZone ON ld1565 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1566_uk_chassisId_dayZone ON ld1566 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1568_uk_chassisId_dayZone ON ld1568 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1569_uk_chassisId_dayZone ON ld1569 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1570_uk_chassisId_dayZone ON ld1570 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1560_uk_chassisId_dayZone ON ld1560 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1558_uk_chassisId_dayZone ON ld1558 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1559_uk_chassisId_dayZone ON ld1559 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1571_uk_chassisId_dayZone ON ld1571 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1525_uk_chassisId_dayZone ON ld1525 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1572_uk_chassisId_dayZone ON ld1572 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1573_uk_chassisId_dayZone ON ld1573 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1539_uk_chassisId_dayZone ON ld1539 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1540_uk_chassisId_dayZone ON ld1540 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1543_uk_chassisId_dayZone ON ld1543 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1546_uk_chassisId_dayZone ON ld1546 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1547_uk_chassisId_dayZone ON ld1547 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1548_uk_chassisId_dayZone ON ld1548 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1554_uk_chassisId_dayZone ON ld1554 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1555_uk_chassisId_dayZone ON ld1555 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1574_uk_chassisId_dayZone ON ld1574 ("chassisId", "day_zone");
CREATE UNIQUE INDEX ld1575_uk_chassisId_dayZone ON ld1575 ("chassisId", "day_zone");

------------- create index end  -------------------------------

    
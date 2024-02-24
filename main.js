const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const allowedAPIKeys = [
    "CVAC-RwLc-YqgS-APzL",
    "CVAC-znVQ-WSlN-OMGZ",
    "CVAC-iMbu-XuTx-FLwB",
    "CVAC-DYlU-kfLr-LXyJ",
    "CVAC-qvUM-TeHr-TGyT",
    "CVAC-JsXq-RUiC-EmyQ",
    "CVAC-WrNm-TPVd-Hlzu",
    "CVAC-kGtQ-BRJF-jGRr",
    "CVAC-ryuO-fgVu-YHjd",
    "CVAC-hxyU-DaTJ-QlPz",
    "CVAC-Qtpv-RjMf-nKCh",
    "CVAC-DfXu-SpIz-fsXy",
    "CVAC-hDZd-LDzK-xZFr",
    "CVAC-nIvZ-cjKo-pKwA",
    "CVAC-DKuG-xySj-dVns",
    "CVAC-rAeC-tQjv-szYk",
    "CVAC-yBgu-TvtY-PeYn",
    "CVAC-UKGt-dhDV-nxZz",
    "CVAC-IViQ-PNuK-oPjy",
    "CVAC-EpJz-fyDn-iRDb"
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/authCVAC', (req, res) => {
    const apiKey = req.body.apiKey;
    if (allowedAPIKeys.includes(apiKey)) {
        res.send(true);
    } else {
        res.status(401).send(false);
    }
});

app.listen(port, () => {console.log(`App in ascolto sulla porta ${port}`);});
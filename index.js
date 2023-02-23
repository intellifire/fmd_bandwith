// this file will read in teh JSON file and parse it into a JS object
// then it will append the end.sum_sent data into a markdown file called README.md

const fs = require('fs');
const path = require('path');
const data = require('./bandwidth.json');
const readme = path.join(__dirname, 'README.md');
const sum_sent = data.end.sum_sent.bits_per_second;
const sum_received = data.end.sum_received.bits_per_second;
const date = new Date().toLocaleString();
const MBsSent =  Math.round(sum_sent / 1000000 * 100) / 100;
const MBsReceived = Math.round(sum_received / 1000000 * 100) / 100;
const logLine = "`" + `${date}:` + "` UP: `" + `${MBsSent}` + "`" + `/MBs DOWN:` + "`" + `${MBsReceived}` + "`" + `/MBs`;
const content = `- ${logLine}
`

// append the content to the file

fs.appendFile(readme, content, (err) => {
    if (err) throw err;
    console.log('Metrics Updated!');
    }
);



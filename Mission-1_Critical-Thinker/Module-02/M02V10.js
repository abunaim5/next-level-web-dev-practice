//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
    { timestamp: "2025-10-22T10:01:00Z", type: "click" },
    { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
    { timestamp: "2025-10-22T10:14:00Z", type: "click" },
    { timestamp: "2025-10-22T10:31:00Z", type: "click" },
    { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
    { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const INTERVAL = 30 * 60 * 1000;

const getTimestamp = (dt) => {
    const date = new Date(dt);

    return date.getTime();
}

const binningEvents = events.reduce((acc, event) => {
    const { timestamp, type } = event;
    const eventTime = getTimestamp(timestamp);
    const bin = new Date(Math.floor(eventTime / INTERVAL) * INTERVAL).toISOString();

    if (!acc[bin]) {
        acc[bin] = {
            total: 0,
            types: {
                [type]: 0
            }
        }
    }

    acc[bin].total += 1;
    if (!acc[bin].types[type]) {
        acc[bin].types = {
            ...acc[bin].types,
            [type]: 0
        }
    }
    acc[bin].types[type] += 1;

    return acc;
}, {});

console.log(binningEvents);

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }
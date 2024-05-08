// @ts-ignore
function timeDiff(date1_, date2_) {
    const date1 = new Date(date1_)
    const date2 = new Date(date2_)
    if (!(date1 instanceof Date && date2 instanceof Date))
        throw new RangeError('Invalid date arguments');
        
    const timeIntervals = [31536000, 2628000, 604800, 86400, 3600, 60, 1];
    const intervalNames = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
    const diff = Math.abs(date2.getTime()-date1.getTime())/1000;
    const index = timeIntervals.findIndex(i=>(diff/i) >= 1);
    const n = Math.floor(diff/timeIntervals[index]);
    const interval = intervalNames[index];
    const d2 = date2.getTime() > (new Date).getTime() ? true : false;
    return [n, interval, d2];
}
/**
 * Format a date difference into a string.
 * @param {number} value numeric value
 * @param {string} str time unit
 * @return {string} value and unit, taking plurals into account
 */
function diffResponse(value, str, check)
{
    if (value != 1)
        str += 's';
        if (check) {
            return `in ${value} ${str} `
        } else {
            return `${value} ${str} ago`
        }
    
}

function humanTimeDiff(d1, d2) {
    if(!d2) d2 = new Date(Date.now())
    return diffResponse(...timeDiff(d1, d2))
}

module.exports = {humanTimeDiff}

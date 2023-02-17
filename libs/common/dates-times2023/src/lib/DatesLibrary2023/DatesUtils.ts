import { isMatch, compareAsc, format, intervalToDuration } from 'date-fns'

export function getDateFromString_YYYY_MM_DD(dateStr: string) : Date {
    const validateDateStr = isMatch(dateStr, "yyyy-MM-dd");
    if (!validateDateStr) {
        //console.log(dateStr);
        throw new Error("Invalid date format, YYYY-MM-DD expected.");
        //return null;
    }
    const dateArray = dateStr.split('-');
    const year = parseInt(dateArray[0]);
    const month = parseInt(dateArray[1]);
    const monthIndex = month - 1;
    const day = parseInt(dateArray[2]);

    if (year > 2200 || year < 1970) {
        throw new Error("Invalid year number! (valid 1970 - 2200) Received: " + year);
    }
    if (month > 12 || month < 1) {
        throw new Error("Invalid month number: " + month);
    }
    if (day > 31 || day < 1) {
        throw new Error("Invalid day number: " + day);
    }

    const date = new Date(year, monthIndex, day, 0, 0);

    return date;
}


export function getString_YYYY_MM_DD_FromDate(dt: Date) {
    //const dtStr = format(dt, 'yyyy-MM-dd');
    const year = dt.getFullYear();
    const monthIndex = dt.getMonth();
    const month = monthIndex + 1;
    const day = dt.getDate();

    let result = `${year}-`;

    if (month < 10) {
        result += `0${month}-`;
    } else {
        result += `${month}-`;
    }

    if (day < 10) {
        result += `0${day}`;
    } else {
        result += `${day}`;
    }

    return result;
}


export function getDaysNumberBetweenDates(dtStart: Date, dtEnd: Date | null) {
    const MILLISECONDS_IN_DAY = 86400000;
    if (!dtStart) {
        throw new Error("Start date required!");
    }
    if (!dtEnd) {
        return 0;
    }
    dtStart.setHours(12);
    dtStart.setMinutes(0);
    dtStart.setMilliseconds(0);
    dtEnd.setHours(12);
    dtEnd.setMinutes(0);
    dtEnd.setMilliseconds(0);

    const dtStartMS = dtStart.getTime();
    const dtEndMS = dtEnd.getTime();
    //
    const timeDiff = Math.round((dtEndMS - dtStartMS) / MILLISECONDS_IN_DAY);

    return timeDiff;

}

export function getDaysNumberBetweenDateStrings(dateStartStr: string, dateEndStr?: string | null) {
    let selectedDaysNumber = 0;
    if (dateStartStr && !dateEndStr) {
        selectedDaysNumber = 1;
    } else if (dateStartStr && dateEndStr) {
        const dtStart = getDateFromString_YYYY_MM_DD(dateStartStr);
        const dtEnd = getDateFromString_YYYY_MM_DD(dateEndStr);
        selectedDaysNumber = getDaysNumberBetweenDates(dtStart, dtEnd) + 1;
    }
    return selectedDaysNumber;
}
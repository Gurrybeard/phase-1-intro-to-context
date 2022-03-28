// Your code here
function createEmployeeRecord(array){
 return {
     firstName: array[0],
     familyName:array[1],
     title:array[2],
     payPerHour:array[3],
     timeInEvents:[],
     timeOutEvents:[]
    }
}
function createEmployeeRecords(arOfAr){
    const records = [];
   arOfAr.map((element,index) => {
        records.push(createEmployeeRecord(arOfAr[index])) 
    });
    return records;
}
function createTimeInEvent(employeeRecord,dateTime){
    let [date,hour] =dateTime.split(' ');
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date
    })
    return employeeRecord;
}
function createTimeOutEvent(employeeRecord,dateTime){
    let [date,hour] =dateTime.split(' ');
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date
    })
    return employeeRecord;

}


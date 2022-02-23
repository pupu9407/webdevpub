export class Clock{
    constructor(hour,minute) {
        this.hour=hour;
        this.minute=minute;
        this.alarmIsActive=true
        this.allTime=""
        if (hour >= 24 || hour <0 ){
            throw Error("The hour argument must be between 0 and 23");


        }
        else if (minute > 60 || minute < 0){
            throw Error ("Error: minute value must be >= 0 and < 60");
        }
        

    }
    tick(){
        this.minute+=1
        if (this.minute>=60){
            this.minute=0
            this.hour+=1
            if(this.hour>=24){
                this.hour=0
            }
        }
        if(this.minute<10 && this.hour<10){
            return("0"+this.hour + ":" + "0" + this.minute)
        }
        else if(this.minute<10){
            return(this.hour + ":" + "0" + this.minute)
        }
        else if(this.hour<10){
            return("0" + this.hour + ":" + this.minute)
        } 
        else{
            return(this.hour + ":" + this.minute)
        }
        if(this.minute==this.alarmMinute && this.hour==this.alarmHour && this.alarmIsActive==true){
            console.log("Alarm!!!")
        }
    }

    time(){
        if(this.minute<10 && this.hour<10){
            return("0"+this.hour + ":" + "0" + this.minute)
        }
        else if(this.minute<10){
            return(this.hour + ":" + "0" + this.minute)
        }
        else if(this.hour<10){
            return("0" + this.hour + ":" + this.minute)
        } 
        else{
            return(this.hour + ":" + this.minute)
        }
    }
    setAlarm (setAlarmHour,setAlarmMinute) {
        this.alarmHour=setAlarmHour;
        this.alarmMinute=setAlarmMinute;
    }
    deactivateAlarm(){
        this.alarmIsActive=false
    }
    activateAlarm(){
        this.alarmIsActive=true
    }
}
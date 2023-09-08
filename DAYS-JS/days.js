var days = prompt("Enter Your day")


switch (days) {
    case "m": case "M": case "Mon": case "mon": case "MON": case "monday": case "Monday": case "MONDAY": {
        document.write("This is a Monday" + " " + "=" + " " + days)
        break;
    }
    case "t": case "T": case "Tue": case "tue": case "TUE": case "Tues": case "tues": case "TUES": case "tuesday": case "Tuesday": case "TUESDAY": {
        if (days == "t" || days == "T") {
            document.write("Thursday or Tuesday")
        } else {
            document.write("This is a Tuesday" + " " + "=" + " " + days + "<br> <br>")
        }
        break;
    }
    case "w": case "W": case "Wed": case "wed": case "WED": case "wednesday": case "Wednesday": case "WEDNESDAY": {
        document.write("This is a Wednesday" + " " + "=" + " " + days + "<br>")
        break;
    }
    case "t": case "T": case "Thur": case "thur": case "THUR": case "Thurs": case "thurs": case "THURS": case "thursday": case "Thursday": case "THURSDAY": {
        document.write("This is a Thursday" + " " + "=" + " " + days + "<br>")
        break;
    }
    case "f": case "F": case "Fri": case "fri": case "FRI": case "friday": case "Friday": case "FRIDAY": {
        document.write("This is a Friday" + " " + "=" + " " + days + "<br>")
        break;
    }
    case "s": case "S": case "Sat": case "sat": case "SAT": case "saturday": case "Saturday": case "SATURDAY": {

        // document.write("This is a weekend")
        if (days == "s" || days == "S") {
            document.write("Saturday or Sunday <br>")
            document.write("This is a weekend <br>")
        } else {
            document.write("This is a Saturday" + " " + "=" + " " + days + "<br>")
            document.write("This is a weekend <br>")
        }
        break;
    }
    case "s": case "S": case "Sun": case "sun": case "SUN": case "sunday": case "Sunday": case "SUNDAY": {
        document.write("This is a Sunday" + " " + "=" + " " + days + "<br>")
        document.write("This is a weekend")
        break;
    }

    default:
        document.write("This is not a day")
        break;
}
const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8 * 7
    return idealHours
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("You slept the perfect amount of hours this week! " + idealSleepHours + " hours!" );
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You slept too much this week! You overslept by " + (actualSleepHours - idealSleepHours) + " hour(s)!");
    } else {
      console.log("You didn't get enough sleep this week! You underslept by " + (idealSleepHours - actualSleepHours) + " hour(s)!");
    }
  };
  
  calculateSleepDebt();


// creates a new function that takes in title and description, and returns a task object

const newTask = (title, description) => {
  const task = {
    title,  // title: title,
    description, // description: description
    complete: false

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

    markCompleted: function() {
      this.compelte = true;
    }



  }
  return task;
};



const task1 = newTask("Clean Cat Litter", "Take all the pooooooop out of the litter box");
const task2 = newTask("Do Laundry", "ohhhh noooooooo");
const tasks = [task1, task2];


console.log(tasks);













// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }







// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

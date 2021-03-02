function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let i=0; i<people.length; i++) {
    let personName = document.createElement('h1');
    let personJob = document.createElement('h2');
    personName.innerHTML = people[i].name;
    personJob.innerHTML = people[i].job;
    content.append(personName, personJob);
  }

}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];


listOfNames(people);

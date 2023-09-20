var students = []
class Student {
    constructor() {
        this.name = "",
            this.age = "",
            this.location = "",
            this.gender = "",
            this.id = "";
    }


    // Function to add a new student
    addStudent() {
        student.id = prompt('Student id: ');
        student.name = prompt('Student name:');
        student.age = prompt('Student age:');
        student.gender = prompt('Student gender:');
        student.location = prompt('Student location:');
        this.students.push(student);
        alert('Student added successfully.');
    }

    // Function to edit student information
    editStudent() {
        const studentid = prompt("Enter the id of the student you want to edit:");
        const studentIndex = this.students.findIndex(student => student.id === studentid);

        if (studentIndex !== -1) {
            const id = prompt("Enter the new id: ");
            const name = prompt("Enter the new name:");
            const age = parseInt(prompt("Enter the new age:"));
            const location = prompt("Enter the new location:");
            const gender = prompt("Enter the new gender:");

            // Update the student's details
            this.students[studentIndex] = student;
            alert('Student edited successfully.');
        }

        // console.log(`Student ${studentName}'s details updated.`);
        else {
            console.log(`Student with id ${studentid} not found.`);
        }
    }

    deleteStudent() {
        const studentId = prompt("Enter the id of the student you want to delete:");
        const studentIndex = this.students.findIndex(student => student.id === studentId);

        if (studentIndex !== -1) {
            this.students.splice(studentIndex, 1); // Remove the student from the array
            console.log('Student ${studentId} deleted.');
        } else {
            console.log(`Student with id ${studentId} not found.`);
        }
    }


    // Function to display student information


    displayStudent() {
        for (let i = 0; i < this.students.length; i++) {
            // console.log(`Student ${i + 1} details:`);
            // console.log("Id:", this.students[i].id);
            // console.log("Name:", this.students[i].name);
            // console.log("Age:", this.students[i].age);
            // console.log("Location:", this.students[i].location);
            // console.log("Gender:", this.students[i].gender);
            alert(students[i].name + students[i].id + students[i].age + students[i].location + students[i].gender);
        }


    };



    // Function to display the menu
    displayMenu() {
        let choice;
        
        do {
            choice = prompt(
                'Student Management Menu:\n' +
                '1. Add Student\n' +
                '2. Delete Student\n' +
                '3. Edit Student\n' +
                '4. Display Student Info\n' +
                '5.  Exit\n' +
                'Enter your choice (1/2/3/4/5):'
            );

            switch (choice) {
                case '1':
                    this.addStudent();
                    break;
                case '2':
                    this.deleteStudent();
                    break;
                case '3':
                    this.deleteStudent();
                    break;
                case '4':
                    this.displayStudent();
                    break;
                case '5':
                    alert("Exit");
                    break;
                default:
                    alert('Invalid choice.');
            }
        } while (choice !== '5');
    }
};


// student.addStudent();
// student.displayStudent();
var student = new Student();
student.displayMenu();
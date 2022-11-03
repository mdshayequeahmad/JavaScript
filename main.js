class Student {
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge){
        return (minMarks) => {
            if (this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + " is ready for placement");
            } else {
                console.log(this.name + " is not ready for placement");
            }
        }
    }
}


const yash = new Student('yash', 25, 75);
const vaibhav = new Student('vaibhav', 13, 35);

yash.setPlacementAge(18)(40);
vaibhav.setPlacementAge(13)(40);

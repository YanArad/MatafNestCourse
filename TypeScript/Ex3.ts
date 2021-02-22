class Student<T>
{
    grades : Array<T> = new Array<T>();

    addGrade(grade : T)
    {
        this.grades.push(grade);
    }
}

class School<T>
{
    students : Array<Student<T>> = new Array<Student<T>>();

}

let school : School<number> = new School<number>();
school.students.push(new Student<number>());


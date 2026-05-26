function StudentCard({ name, marks, grade }) {
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Marks: {marks}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}
export default StudentCard;
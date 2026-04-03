const a=document.getElementById("toggle-button")
const b=document.getElementById("icon")
const c=document.getElementById("main-content")
const d=document.getElementById("h1")
const e=document.getElementById("h11")
const form=document.getElementById("form-data")
let isDark=false;
function but(){
    if(!isDark){
        b.textContent="☀️ Light Mode";
        c.style.backgroundColor="black";
        d.style.color="white";
        d.style.borderBottomColor="white"
        e.style.color="white";
        e.style.borderBottomColor="white"
        form.style.color="white"
        isDark=true;
    }
    else{
        b.textContent="🌙 Dark Mode";
        c.style.backgroundColor="";
        d.style.color="";
        d.style.borderBottomColor=""
        e.style.color="";
        e.style.borderBottomColor=""
        form.style.color=""
        isDark=false;
    }
    
}

let studentData=[]
const output = document.getElementById("output");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh

    // Get values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;
    const grade=document.getElementById("grade").value;

    const student = { name, age, course, grade };

    studentData.push(student);

    displayStudents(studentData); // show all
    form.reset();
  });

  function displayStudents(data) {
  output.innerHTML = ""; // clear old data

  data.forEach(student => {
    const div = document.createElement("div");
    div.classList.add("output-card");

    div.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Grade:</strong> ${student.grade}</p>
    `;

    output.appendChild(div);
  });
}

const searchInput = document.getElementById("searchName");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = studentData.filter(s =>
    s.name.toLowerCase().includes(value)
  );

  displayStudents(filtered);
});

const gradeFilter = document.getElementById("filterGrade");

gradeFilter.addEventListener("change", () => {
  const value = gradeFilter.value;

  if (value === "") {
    displayStudents(studentData);
  } else {
    const filtered = studentData.filter(s => s.grade === value);
    displayStudents(filtered);
  }
});

document.getElementById("refreshBtn").addEventListener("click", () => {
  displayStudents(studentData);
});
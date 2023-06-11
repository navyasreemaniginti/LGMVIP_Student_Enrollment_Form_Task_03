const form = document.getElementById('enrollmentForm');
const table = document.getElementById('enrollmentTable');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const image = document.getElementById('image').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender[]"]:checked')).map(gender => gender.value);
    const skills = Array.from(document.querySelectorAll('input[name="skills[]"]:checked')).map(skill => skill.value);
    
    const row = document.createElement('tr');
    const detailsCell = document.createElement('td');
    const imageCell = document.createElement('td');
    
    detailsCell.innerHTML = `Name: ${name}<br>Email: ${email}<br>Website: ${website}<br>Gender: ${gender}<br>Skills: ${skills.join(", ")}`;
    imageCell.innerHTML = `<img src="${image}" alt="Image" width="200">`;
    
    row.appendChild(detailsCell);
    row.appendChild(imageCell);
    
    table.appendChild(row);
    
    form.reset();
});
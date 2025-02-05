
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('input').forEach(input => input.classList.toggle('dark-mode'));
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    document.querySelector('.dark-mode-toggle').classList.toggle('dark-mode');
    
   
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}


window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelectorAll('input').forEach(input => input.classList.add('dark-mode'));
        document.querySelectorAll('button').forEach(button => button.classList.add('dark-mode'));
        document.querySelector('.dark-mode-toggle').classList.add('dark-mode');
    }
}


if (window.location.pathname === '/page2.html') {
    const params = new URLSearchParams(location.search);
    const studentInfo = document.getElementById('studentInfo');
    
    const studentDetails = [
        { key: 'Full Name', value: params.get('name') },
        { key: 'GPA', value: params.get('gpa') },
        { key: 'SAT Score', value: params.get('sat') },
        { key: 'English Proficiency Score', value: params.get('english') }
    ];

    studentDetails.forEach(detail => {
        const div = document.createElement('div');
        div.classList.add('key-val');
        div.innerHTML = `<strong>${detail.key}</strong>: ${detail.value}`;
        studentInfo.appendChild(div);
    });
}

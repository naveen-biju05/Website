
const { jsPDF } = window.jspdf;


document.querySelector('.generate-resume-btn').addEventListener('click', () => {
    const doc = new jsPDF();

    
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    

    
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');

    
    doc.text('Personal Information', 10, 35);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`, 10, 45);
    doc.text(`Email: ${document.getElementById('email').value}`, 10, 55);
    doc.text(`Phone: ${document.getElementById('phone').value}`, 10, 65);

    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', 10, 80);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(document.getElementById('summary').value, 10, 90, { maxWidth: 180 });

    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Work Experience', 10, 110);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Company: ${document.getElementById('companyName').value}`, 10, 120);
    doc.text(`Job Title: ${document.getElementById('jobTitle').value}`, 10, 130);
    doc.text(`Dates: ${document.getElementById('startDate').value} to ${document.getElementById('endDate').value}`, 10, 140);
    doc.text(`Description: ${document.getElementById('jobDescription').value}`, 10, 150, { maxWidth: 180 });

    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Education', 10, 170);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Institution: ${document.getElementById('institutionName').value}`, 10, 180);
    doc.text(`Degree: ${document.getElementById('degree').value}`, 10, 190);
    doc.text(`Dates: ${document.getElementById('eduStartDate').value} to ${document.getElementById('eduEndDate').value}`, 10, 200);

    
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Skills', 10, 220);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(document.getElementById('skills').value, 10, 230, { maxWidth: 180 });

    
    doc.save('resume.pdf');
});


document.querySelector('.preview-btn').addEventListener('click', () => {
    const modal = document.getElementById('previewModal');
    const resumePreview = document.getElementById('resumePreview');

    
    resumePreview.innerHTML = `
        <h2>${document.querySelector('.create-your-resume').textContent}</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${document.getElementById('firstName').value} ${document.getElementById('lastName').value}</p>
        <p><strong>Email:</strong> ${document.getElementById('email').value}</p>
        <p><strong>Phone:</strong> ${document.getElementById('phone').value}</p>
        <h3>Professional Summary</h3>
        <p>${document.getElementById('summary').value}</p>
        <h3>Work Experience</h3>
        <p><strong>Company:</strong> ${document.getElementById('companyName').value}</p>
        <p><strong>Job Title:</strong> ${document.getElementById('jobTitle').value}</p>
        <p><strong>Dates:</strong> ${document.getElementById('startDate').value} to ${document.getElementById('endDate').value}</p>
        <p><strong>Description:</strong> ${document.getElementById('jobDescription').value}</p>
        <h3>Education</h3>
        <p><strong>Institution:</strong> ${document.getElementById('institutionName').value}</p>
        <p><strong>Degree:</strong> ${document.getElementById('degree').value}</p>
        <p><strong>Dates:</strong> ${document.getElementById('eduStartDate').value} to ${document.getElementById('eduEndDate').value}</p>
        <h3>Skills</h3>
        <p>${document.getElementById('skills').value}</p>
    `;

    modal.style.display = 'block';
});


document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('previewModal').style.display = 'none';
});


window.onclick = (event) => {
    const modal = document.getElementById('previewModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

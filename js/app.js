function downloadPDF(fileName) {
    const link = document.createElement('a');
    link.href = `pdfs/${fileName}`;
    link.download = fileName;
    link.click();
}

document.addEventListener('DOMContentLoaded', function () {
    const codeEditor = document.getElementById('code-editor');
    const executeButton = document.getElementById('execute-button');
    const outputFrame = document.getElementById('output-frame');

    executeButton.addEventListener('click', function () {
        const code = codeEditor.value;
        outputFrame.contentDocument.open();
        outputFrame.contentDocument.write(code);
        outputFrame.contentDocument.close();
    });
});

import inquirer from 'inquirer';
// Function to count words in a given text
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word.length > 0).length;
}
// Function to prompt the user for text input
async function promptForText() {
    const { text } = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text to count words (or type "exit" to quit):',
        },
    ]);
    if (text.toLowerCase() === 'exit') {
        return null;
    }
    return text;
}
// Main function to run the word counter
async function runWordCounter() {
    console.log('Welcome to the Word Counter!');
    while (true) {
        const text = await promptForText();
        if (text === null) {
            console.log('You have exited the word counter. Thanks for using it!');
            break;
        }
        const wordCount = countWords(text);
        console.log(`The text contains ${wordCount} words.`);
    }
}
runWordCounter().catch((error) => {
    console.error('An error occurred:', error);
});

function passwordValidator(password) {
    let digitCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt();

        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBigLetter) {
            isSymbol = true;
        }
    }
    if (password.length < 6 || password.length > 10) {
        console.log('password must be between 6 and 10 charecters');
    } if (isSymbol) {
        console.log('password must cosist only of letters and digits');
    } if (digitCounter < 2) {
        console.log('password must have atleast 2 diggits');
    } if (digitCounter >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)) {
        console.log('valid password');
    }
}
passwordValidator('logIn')
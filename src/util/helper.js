export function validateEmail(email) {
    const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailPattern.test(email);
}
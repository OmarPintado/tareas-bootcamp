export function sanitizeInput(input) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
    return input.replace(/[&<>"'/]/g, match => map[match]).trim();
}

export function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

export function validatePhone(phone) {
    return /^[0-9]+$/.test(phone);
}


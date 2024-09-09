export function domRendering(contacts, contactList) {
    contactList.innerHTML = '';
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.classList.add('contact-item');
        li.setAttribute('data-id', contact.id);
        li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        contactList.appendChild(li);
    });
}

export function showError(message, elementId) {
    const error = document.createElement('span');
    error.classList.add('error');
    error.textContent = message;
    document.getElementById(elementId).insertAdjacentElement('afterend', error);
    setTimeout(() => error.remove(), 1500);
}

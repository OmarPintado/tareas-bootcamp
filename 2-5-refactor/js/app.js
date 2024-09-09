import {ContactManager} from './contactManager.js';
import {sanitizeInput, validateName, validatePhone} from './validation.js';
import {domRendering, showError} from './domRendering.js';

const contactList = document.getElementById('contactList');
const filterInput = document.getElementById('filter');
const clearFilterBtn = document.getElementById('clearFilterBtn');
const addContactBtn = document.getElementById('addContactBtn');
const contactForm = document.getElementById('contacts');

const contactManager = new ContactManager();

domRendering(contactManager.contacts, contactList);

contactForm.onsubmit = function (e) {
    e.preventDefault();

    const name = sanitizeInput(document.getElementById('name').value);
    const phone = sanitizeInput(document.getElementById('phone').value);
    const terms = document.getElementById('terms').checked;

    if (!validateName(name)) {
        showError('Name should contain only letters.', 'name');
        return;
    }

    if (!validatePhone(phone)) {
        showError('Phone should contain only numbers.', 'phone');
        return;
    }

    if (!name || !phone || !terms) {
        showError('Please fill in all fields and accept the terms', 'addContactBtn');
        return;
    }

    contactManager.addContact(name, phone);
    domRendering(contactManager.contacts, contactList);

    contactForm.reset();
};

contactList.addEventListener('click', function (e) {
    const contactId = e.target.parentElement.getAttribute('data-id');

    if (e.target.classList.contains('delete-btn')) {
        contactManager.deleteContact(contactId);
        domRendering(contactManager.contacts, contactList);
    } else if (e.target.classList.contains('edit-btn')) {
        const contactToEdit = contactManager.getContact(contactId);
        document.getElementById('name').value = contactToEdit.name;
        document.getElementById('phone').value = contactToEdit.phone;

        addContactBtn.textContent = 'Update Contact';
        addContactBtn.addEventListener('click', function () {
            const updatedName = sanitizeInput(document.getElementById('name').value);
            const updatedPhone = sanitizeInput(document.getElementById('phone').value);

            if (!validateName(updatedName)) {
                showError('Name should contain only letters.', 'name');
                return;
            }

            if (!validatePhone(updatedPhone)) {
                showError('Phone should contain only numbers.', 'phone');
                return;
            }

            contactManager.updateContact(contactId, updatedName, updatedPhone);
            domRendering(contactManager.contacts, contactList);

            contactForm.reset();
            addContactBtn.textContent = 'Add Contact';
        })
    }
})

filterInput.oninput = function () {
    const filterValue = filterInput.value.toLowerCase();
    const filteredContacts = contactManager.filterContacts(filterValue);
    domRendering(filteredContacts, contactList);
};

clearFilterBtn.addEventListener('click', function () {
    filterInput.value = '';
    domRendering(contactManager.contacts, contactList);
});



export class ContactManager {
    constructor() {
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    }

    saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }

    addContact(name, phone) {
        const newContact = { id: Date.now(), name, phone };
        this.contacts.push(newContact);
        this.saveContacts();
    }

    deleteContact(contactId) {
        this.contacts = this.contacts.filter(contact => contact.id !== Number(contactId));
        this.saveContacts();
    }

    getContact(contactId) {
        return this.contacts.find(contact => contact.id === Number(contactId));
    }

    updateContact(contactId, name, phone) {
        const contact = this.getContact(contactId);
        if (contact) {
            contact.name = name;
            contact.phone = phone;
            this.saveContacts();
        }
    }

    filterContacts(filterValue) {
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterValue) ||
            contact.phone.includes(filterValue)
        );
    }
}

// AddressBook objekt
function AddressBook() {
    // defineerime tühja massiivi
    this.contacts = [];
    // defineerime booleani, mille algne väärtus on false
    this.initialComplete = false;
}

// objekti meetod "getInitialContacts", mis on oma olemuselt asünkroonne
AddressBook.prototype.getInitialContacts = function(cb) {
    // defineerime muutuja "self", mis võtab väärtuseks "this", mis viitab AddressBook objektile, ilma selleta test feiliks, kuna tekib scope error
    var self = this;
    // asünkroonne funktsioon, mis muudab AddressBook objektis initialComplete välja väärust pärast defineeritud perioodi, antud näite puhul 3
    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}

// objekti meetod "addContact", mis lisab konstruktoris defineeritud massiivi kontakti
AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

// objekti meetod "getContact", mis otsib konstruktoris defineeritud massiivist indexi järgi kontakti ja tagastab selle
AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

// objekti meetod "deleteContact", mis eemaldab konstruktoris defineeritud massiivist kontakti indexi järgi
AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}
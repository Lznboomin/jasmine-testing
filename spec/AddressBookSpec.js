// defineerime blocki, mis jooksutab Address Booki teste
describe('Address Book', () => {
    // defineerime tühjad muutujad, et neid kasutada beforeEach funktsioonis
    var addressBook,
        thisContact;

    // defineerime funktsiooni, mis käivitub enne igat "it" blocki, initsialiseerimaks objekte
    beforeEach(function() {
        // initsialiseerime objektid
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    // defineerime, mida peaks funktsioon tegema
    it('should be able to add a contact', () => {
        // kasutame addressBook objekti meetodit "addContact", mis lisab objekti massiivi kontakti, mille defineerisime beforeEach funktsioonis
        addressBook.addContact(thisContact);
        // eeldame, et pärast kontakti lisamist leiame objekti massiivist kontakti, positsioonilt "0"
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    // defineerime, mida peaks funktsioon tegema
    it('should be able to delete a contact', () => {
        // kasutame addressBook objekti meetodit "addContact", mis võtab parameetriks beforeEach funktsioonis defineeritud Contact objekti
        addressBook.addContact(thisContact);
        // kasutame addressBook objekti meetodit "deleteContact", mis eemaldab objektis defineeritud massiivist kontakti indexi järgi
        addressBook.deleteContact(0);
        // eeldame, et pärast "deleteContact" meetodit ei esine positsioonil "0" ühtegi kontakti
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

// defineerime blocki, mis jooksutab Async Address Booki teste, teisisõnu on see wrapper "it" blockidele
describe('Async Address Book', () => {
    // defineerime ja initsialiseerime objekti AddressBook
    var addressBook = new AddressBook();

    // enne "it" blocki käivitamist ootab, et asünkroonne funktsioon lõpetaks oma töö
    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    // defineerime, mida peaks funktsioon tegema
    it('should grab initial contacts', function(done) {
        // eeldame, et pärast asünkroonnset meetodi on objekti muutuja väärtus muudetud "false" pealt ümber "true"-ks
        expect(addressBook.initialComplete).toBe(true);
        // asünkroonne meetod on lõpetanud oma töö
        done();
    });
});
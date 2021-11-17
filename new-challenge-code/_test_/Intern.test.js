    const Intern = require('../lib/Employee.js');
    const intern = new Intern('Hwoarang', '08141978', 'krazyLegz@yahoo.com', 'University of Wisconsin-Madison');

    test('test if we can get the name from the getName() method', () => {
        expect(intern.name).toBe('Hwoarang');
        expect(intern.id).toBe('08141978');
        expect(intern.email).toBe('krazyLegz@yahoo.com');
        expect(intern.school).toBe('University of Wisconsin-Madison');
        expect(intern.role).toBe('Intern');
    });

    test('test if we can get the name from the getName() method', () => {
        expect(intern.getName()).toBe('Hwoarang');
    });

    test('test if we can get the name from the getId() method', () => {
        expect(intern.getId()).toBe('08141978');
    });

    test('test if we can get the email from the getEmail() method', () => {
        expect(intern.getEmail()).toBe('krazyLegz@yahoo.com');
    });

    test('test if we can get the role from the getSchool() method', () => {
        expect(intern.getSchool()).toBe('University of Wisconsin-Madison');
    });

    test('test if we can get the role from the getRole() method', () => {
        expect(intern.getRole()).toBe('Intern');
    });
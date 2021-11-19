const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Alucard Draculea', '∞', 'iAmNotMyFatherVlad.com','https://github.com/vang007');

    test('value retrieval for Engineer object', () => {

    expect(engineer.name).toBe("Alucard Draculea");
    expect(engineer.id).toBe("∞");
    expect(engineer.email).toBe("iAmNotMyFatherVlad@yahoo.com");
    expect(engineer.github).toBe("https://github.com/vang007");
    },

    test('Engineer name retrieval using getName() method', () => {
    expect(engineer.getName()).toBe('Alucard Draculea');
    }),
    
    test('Engineer id retrieval using getId() method', () => {
    expect(engineer.getId()).toBe('∞');
    }),
    
    test('Engineer email retrieval using getEmail() method', () => {
    expect(engineer.getEmail()).toBe('iAmNotMyFatherVlad@yahoo.com');
    }), 

    test('Engineer role retrieval using getRole() method', () => {
        expect(engineer.getGithub()).toBe('https://github.com/vang007');
    }),
    
    test('Engineer role retrieval using getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
    }))
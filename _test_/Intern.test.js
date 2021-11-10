const Intern = require('../lib/Intern');
const intern = new Intern('Brai Nyack-Lee', '101', 'im_A-sian_not_B-sian@gmail.com', "D.O.U (Drop Out Univerity)");

test('testing: value retrieval for Engineer object', () => {
    
    expect(intern.name).toBe("Brai Nyack-Lee");
    expect(intern.id).toBe("101");
    expect(intern.email).toBe("im_A-sian_not_B-sian@gmail.com");
    expect(intern.school).toBe("D.O.U (Drop Out Univerity)");
})
    test('Intern name retrieval using getName() method', () => {
    expect(intern.getName()).toBe('Brai Nyack-Lee');
    })
    
    test('Intern id retrieval using getId() method', () => {
    expect(intern.getId()).toBe('101');
    })
    
    test('Intern email retrieval using getEmail() method', () => {
    expect(intern.getEmail()).toBe('im_A-sian_not_B-sian@gmail.com');
    })
    
    test('Intern school retrieval using getSchool() method', () => {
        expect(intern.getSchool()).toBe('D.O.U (Drop Out Univerity)');
    })
    
    test('Intern role retrieval using getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');    
    })

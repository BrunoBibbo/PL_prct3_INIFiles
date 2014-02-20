var assert = chai.assert;

suite('Pruebas para ficheros INI', function() {
    test('Comprobando correcto funcionamiento', function() {
    });

    test('Espacios en blanco', function() {
        var token = lexer('   ');
		assert.equal(token[0].type,'blanks');
    });

    test('Asignacion', function() {
        var token =lexer('animal = gato');
        assert.equal(token[0].type,'nameEqualValue');
    });

    test('Comentario', function() {
        var token = lexer('; comentario de prueba');
		assert.equal(token[0].type,'comments');
    });

    test('Error', function() {
        var token = lexer('@#!!?3');
		assert.equal(token[0].type,'error');
    });
});
var request = require('supertest-as-promised'),
    assert = require("assert"),
    urlModificada = '';

request = request('http://tinyurl.com');

describe('Diminuindo url e diminuido o resultado', function(){
  it('Deve diminuir a url', function(done){
    request
      .get('/api-create.php?url=http://globo.com/')
      .expect(200)
      .then(function (res) {
        urlModificada = res.text;
        
        done();
      });
  });
  it('Deve alterar a url diminuida', function(done){
    request
      .get('/api-create.php?url=' + urlModificada)
      .expect(200)
      .then(function(res){
        assert.notEqual(urlModificada,res.text);
        done();    
      });
  });
});
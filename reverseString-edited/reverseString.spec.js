const reverseString = require('./reverseString')

//describe('Hello world', function() {
  //it('reverses single word', function() {
   // expect(reverseString('hello')).toEqual('olleh');
  //});
  console.log(reverseString("hello"))

  //it('reverses multiple words', function() {
    //expect(reverseString('hello there')).toEqual('ereht olleh')
  //})
   console.log(reverseString("hello there"))

  //it('works with numbers and punctuation', function() {
    //expect(reverseString('123! abc!')).toEqual(+'!cba !321')
  //})
   console.log(reverseString("123 abc!"))
  /*it('works with blank strings', function() {
    expect(reverseString('')).toEqual('')
  })
});*/
console.log(reverseString(""))

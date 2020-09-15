const identityForm = (reader) => {
  reader.question ("first name", (name) => {
    reader.question ("last name", (lastname) => {
      reader.question ("age", (age) => {
        console.log (`Your name is ${name} ${lastname} and you are ${age}.`);
        reader.close();
      
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;


var Person = function(firstAndLast) {
      this.getFirstName =  function(){
        if (this.hasOwnProperty("firstName")) {
          return this.firstName;
        }
        this.firstName = firstAndLast.split(" ")[0];
        return this.firstName;
      };
      this.getLastName =  function() {
        if (this.hasOwnProperty("lastName")) {
          return this.lastName;
        }
        this.lastName = firstAndLast.split(" ")[firstAndLast.split(" ").length - 1];
        return this.lastName;
      };
      this.getFullName =  function (){
        if (this.hasOwnProperty("firstName") && this.hasOwnProperty("lastName")) {
          return this.firstName + " " + this.lastName;
        }
        if (this.hasOwnProperty("firstName") && !this.hasOwnProperty("lastName")) {
          return this.firstName + " " + firstAndLast.split(" ")[firstAndLast.split(" ").length - 1];
        }
        if (!this.hasOwnProperty("firstName") && this.hasOwnProperty("lastName")) {
          return  firstAndLast.split(" ")[0] + " " + this.lastName;
        }
        if (!this.hasOwnProperty("firstName") && !this.hasOwnProperty("lastName")) {
          return firstAndLast.split(" ")[0] + " " + firstAndLast.split(" ")[firstAndLast.split(" ").length - 1];
        }

      };
      this.setFirstName =  function(first){
        this.firstName = first;
        console.log(this.firstName);
      };
      this.setLastName =  function(last){
        this.lastName = last;
      };
      this.setFullName =  function(firstAndLast){
        var arr = firstAndLast.split(" ");
        this.fullName = firstAndLast;
        this.firstName = arr[0];
        this.lastName =  arr[arr.length - 1];
      }
};

var bob = new Person('Bob Ross');
console.log(Object.keys(bob));
console.log(bob.getFullName());
bob.setFirstName("Haskell");
console.log(bob.getFullName());

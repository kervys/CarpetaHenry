var foo = 1;

setTimeout(() => {
    let foo = 2;

    const bar = {
        foo: 3,
        getFoo(){
         return this.foo;
        }
      }
  
  console.log(bar.getFoo());
  console.log(bar.getFoo.call(this));
  }, 0);

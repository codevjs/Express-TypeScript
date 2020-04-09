**Typescript**

Typescript adalah bahasa pemrograman berbasis JavaScript yang menambahkan fitur strong-typing & konsep pemrograman OOP klasik ( class, interface). Di dalam dokumentasinya, TypeScript disebut sebagai super-set dari JavaScript, artinya semua kode JavaScript adalah kode TypeScript juga. Bahasa pemrograman ini menawarkan class, module, dan interface yang membuat developer bisa mengembangkan aplikasi kompleks dengan lebih mudah.

**Getting Started**
- clone https://github.com/codevjs/Express-TypeScript.git
- npm install 
- npm run start


**add endpoint**

main.routes.ts

` private routes() : void {
         // tambah endpoint 
         this.routes.route('/users')
             .get(User.readUser)
             .post(User.createUser)
  }`

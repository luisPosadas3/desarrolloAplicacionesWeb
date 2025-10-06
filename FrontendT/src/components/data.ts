export class data {
  listUsers = [
    {
      id:0,
      nombre:"Pedro",
      edad:30,
      email:"pedro@gmail.com"
    },
    {
      id:1,
      nombre:"Jose",
      edad:25,
      email:"jose@gmail.com"},
      {
        id:2,
        nombre:"Juan",
        edad:23,
        email:"juan@gmail.com"
      },
      {
        id:3,
        nombre:"Pablo",
        edad:19,
        email:"pablo@gmail.com"
      }
    ];

    count(){
        return this.listUsers.length;
    }

 getAll(){
return this.listUsers
  }
}
 
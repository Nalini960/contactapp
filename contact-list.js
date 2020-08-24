import Service from '@ember/service';
import {A} from '@ember/array';
import { set } from '@ember/object';

export default Service.extend({
   contacts: A([
        {id:1,name:'Nalini',phoneNumber:9876543210,mailId:'nalini.sp@zohocorp.com',dob:'16-DEC-1998',gender:'Female'},
        {id:2,name:'Devasena',phoneNumber:8907654321,mailId:'devasena.m@zohocorp.com',dob:'22-JUN-1999',gender:'Female'},
        {id:3,name:'Swetha',phoneNumber:8098765432,mailId:'swetha.a@zohocorp.com',dob:'12-JUN-1999',gender:'Female'},
        {id:4,name:'Ragavi',phoneNumber:8010212432,mailId:'ragavi.sp@abc.com',dob:'26-MAR-2001',gender:'Female'},
        {id:5,name:'Mohanapriya',phoneNumber:9876541213,mailId:'mohanapriya.r@def.com',dob:'08-DEC-1998',gender:'Female'},
        {id:6,name:'Janani',phoneNumber:7890821415,mailId:'janani.s@ghi.com',dob:'18-OCT-1999',gender:'Female'},
    ]),

    init() {
        this._super(...arguments);
        // this.set('items', A([]));
    },

    add(item) {
        this.contacts.pushObject(item);
    },

    remove(item) {
        this.contacts.removeObject(item);
    },
   save(value)
   {
     var obj=this.contacts.findBy('id',value.id);
     set( obj, "name",value.name);
     set( obj, "phoneNumber", value.phoneNumber);
     set( obj, "mailId", value.mailId);
     
    // set(obj,{"id":val,"name":name,"phoneNumber":phnum,"mailId":mailid});
  
     }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    
    contactList: service('contact-list'),
    model(params)
     {
     var paramId = parseInt(params.id);
     var details =this.contactList.contacts;
     var res=details.findBy('id',paramId);
     var obj=Ember.copy(res,true);
     return obj;
     },


});

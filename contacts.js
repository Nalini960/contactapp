import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    contactList: service('contact-list'),
   
    model()
    {
        return this.contactList.contacts;
    },
    
});

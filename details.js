import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
    contactList: service('contact-list'),
    model(params){
        let details =this.modelFor('contacts');
        console.log("From details model :"+details)
        let id=parseInt(params.details_id);
        let ans=details.findBy('id',id);
        //let obj=Ember.copy(ans,true);
        return ans;
       },
       actions: {
        remove(item) {
            if (confirm('Are you sure want to delete contact?')) {
            this.contactList.remove(item);
            this.contactList.contacts.forEach(element => {
            console.log(element.name);
            this.transitionTo('contacts');
        });
    } else {
        // Bubble the `willTransition` action so that
        // parent routes can decide whether or not to abort.
        return true;
      }
        },
    }
});

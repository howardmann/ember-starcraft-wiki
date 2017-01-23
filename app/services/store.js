import Ember from 'ember';
import Race from '../models/race';

const races = [];

let terran = Race.create({
  id: '1',
  name: 'terran',
  description: 'The terrans are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth. Compared to the protoss and zerg, the terrans are highly factionalized and endure frequent wars amongst themselves in addition to the more recent conflicts with their alien neighbors. Nevertheless, terrans stand as one of the three dominant species of the galaxy.'
});

let protoss = Race.create({
  id: '2',
  name: 'protoss',
  description: "The protoss, a.k.a. the Firstborn, are a sapient humanoid race native to Aiur. Their advanced technology complements and enhances their psionic mastery. The main protoss cultural groups are the Khalai, who adhere to the communal Khala, and the Nerazim, who reject the Khala. In addition, another branch of the protoss separate from the Khala called the Tal'darim lives in various places in the galaxy. Protoss civilization was reunified when the Khalai and Nerazim, sundered since the Discord, were reunited after the devastation of Aiur by the zerg during the Great War.Alongside the zerg and terrans, the protoss stand as one of the three dominant species of the Milky Way. Protoss are not found outside the Koprulu sector."
});

let zerg = Race.create({
  id: '3',
  name: 'zerg',
  description: "The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own. They are named the Swarm per their ability to rapidly create strains, and the relentless assaults they employ to overwhelm their foes."
});

races.pushObjects([terran, protoss, zerg]);


export default Ember.Service.extend({
  getRaces(){
    return races;
  },
  getRace(id){
    return this.getRaces().findBy('id', id);
  }
});

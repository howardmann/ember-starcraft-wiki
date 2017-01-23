import Ember from 'ember';
import Race from '../models/race';
import Planet from '../models/planet';

const races = [];
const planets = [];

let terran = Race.create({
  id: '1',
  name: 'terran',
  description: 'The terrans are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth. Compared to the protoss and zerg, the terrans are highly factionalized and endure frequent wars amongst themselves in addition to the more recent conflicts with their alien neighbors. Nevertheless, terrans stand as one of the three dominant species of the galaxy.',
  planet: {}
});

let protoss = Race.create({
  id: '2',
  name: 'protoss',
  description: "The protoss, a.k.a. the Firstborn, are a sapient humanoid race native to Aiur. Their advanced technology complements and enhances their psionic mastery. The main protoss cultural groups are the Khalai, who adhere to the communal Khala, and the Nerazim, who reject the Khala. In addition, another branch of the protoss separate from the Khala called the Tal'darim lives in various places in the galaxy. Protoss civilization was reunified when the Khalai and Nerazim, sundered since the Discord, were reunited after the devastation of Aiur by the zerg during the Great War.Alongside the zerg and terrans, the protoss stand as one of the three dominant species of the Milky Way. Protoss are not found outside the Koprulu sector.",
  planet: {}
});

let zerg = Race.create({
  id: '3',
  name: 'zerg',
  description: "The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own. They are named the Swarm per their ability to rapidly create strains, and the relentless assaults they employ to overwhelm their foes.",
  planet: {}
});

races.pushObjects([terran, protoss, zerg]);

let korhal = Planet.create({
  id: '1',
  name: 'korhal',
  description: "Korhal IV (often simply refered to as Korhal) is the fourth planet in the Korhal system. During the four years since the establishment of the Terran Dominion, a large portion of the planet has developed into an ecumenopolis",
  race: terran
});

let aiur = Planet.create({
  id: '2',
  name: 'aiur',
  description: "Aiur is the protoss homeworld, located in a star system with a single yellow star and possessing a single moon not unlike Luna. It is at least the third of the system's terrestrial planets, if not further out. A great psionic matrix emanated from Aiur. Protoss structures and units, to a lesser extent, drew their energy from it. A nexus provided a link to this matrix, but pylons were needed to actually tap into the energy required to provide psionic energy to new colonies.Aiur possesses great, almost spiritual significance to all protoss.",
  race: protoss
});

let char = Planet.create({
  id: '3',
  name: 'char',
  description: "It is an inhospitable volcanic planet with thick ash covering most of its surface and tainting its acrid atmosphere. The hazardous environment is further intensified by extremely high levels of cosmic radiation from its volatile pairing of binary stars. Char's elliptical orbit means whole regions of its sunward face can become molten seas during a close approach, with temporary islands forming in them due to rapid cooling as the planet swings away to the frozen outer reaches of the system.",
  race: zerg
});

planets.pushObjects([korhal, aiur, char]);

terran.planet = korhal;
protoss.planet = aiur;
zerg.planet = char;

export default Ember.Service.extend({
  getRace(id){
    return this.getRaces().findBy('id', id);
  },
  getRaces(){
    return races;
  },
  getPlanets(){
    return planets;
  },
  getPlanet(id){
    return this.getPlanets().findBy('id', id);
  }
});

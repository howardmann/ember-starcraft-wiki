import Ember from 'ember';
import Race from '../models/race';
import Planet from '../models/planet';
import Hero from '../models/hero';

const races = [];
const planets = [];
const heroes = [];

let terran = Race.create({
  id: '1',
  name: 'terran',
  description: 'The terrans are a young species with psionic potential. The terrans of the Koprulu sector descend from the survivors of a disastrous 23rd century colonization mission from Earth. Compared to the protoss and zerg, the terrans are highly factionalized and endure frequent wars amongst themselves in addition to the more recent conflicts with their alien neighbors. Nevertheless, terrans stand as one of the three dominant species of the galaxy.',
  planet: {},
  heroes: []
});

let protoss = Race.create({
  id: '2',
  name: 'protoss',
  description: "The protoss, a.k.a. the Firstborn, are a sapient humanoid race native to Aiur. Their advanced technology complements and enhances their psionic mastery. The main protoss cultural groups are the Khalai, who adhere to the communal Khala, and the Nerazim, who reject the Khala. In addition, another branch of the protoss separate from the Khala called the Tal'darim lives in various places in the galaxy. Protoss civilization was reunified when the Khalai and Nerazim, sundered since the Discord, were reunited after the devastation of Aiur by the zerg during the Great War.Alongside the zerg and terrans, the protoss stand as one of the three dominant species of the Milky Way. Protoss are not found outside the Koprulu sector.",
  planet: {},
  heroes: []
});

let zerg = Race.create({
  id: '3',
  name: 'zerg',
  description: "The Zerg Swarm is a terrifying and ruthless amalgamation of biologically advanced, arthropodal aliens. Dedicated to the pursuit of genetic perfection, the zerg relentlessly hunt down and assimilate advanced species across the galaxy, incorporating useful genetic code into their own. They are named the Swarm per their ability to rapidly create strains, and the relentless assaults they employ to overwhelm their foes.",
  planet: {},
  heroes: []
});

races.pushObjects([terran, protoss, zerg]);

let korhal = Planet.create({
  id: '1',
  name: 'korhal',
  description: "Korhal IV (often simply refered to as Korhal) is the fourth planet in the Korhal system. During the four years since the establishment of the Terran Dominion, a large portion of the planet has developed into an ecumenopolis",
  race: terran,
  heroes: []
});

let aiur = Planet.create({
  id: '2',
  name: 'aiur',
  description: "Aiur is the protoss homeworld, located in a star system with a single yellow star and possessing a single moon not unlike Luna. It is at least the third of the system's terrestrial planets, if not further out. A great psionic matrix emanated from Aiur. Protoss structures and units, to a lesser extent, drew their energy from it. A nexus provided a link to this matrix, but pylons were needed to actually tap into the energy required to provide psionic energy to new colonies.Aiur possesses great, almost spiritual significance to all protoss.",
  race: protoss,
  heroes: []
});

let char = Planet.create({
  id: '3',
  name: 'char',
  description: "It is an inhospitable volcanic planet with thick ash covering most of its surface and tainting its acrid atmosphere. The hazardous environment is further intensified by extremely high levels of cosmic radiation from its volatile pairing of binary stars. Char's elliptical orbit means whole regions of its sunward face can become molten seas during a close approach, with temporary islands forming in them due to rapid cooling as the planet swings away to the frozen outer reaches of the system.",
  race: zerg,
  heroes: []
});

planets.pushObjects([korhal, aiur, char]);

terran.planet = korhal;
protoss.planet = aiur;
zerg.planet = char;

let jim = Hero.create({
  id: '1',
  name: "jim raynor",
  description: "Jim Raynor is a former terran marshal turned rebel, who has became one of the major figures in the Koprulu sector through his work to bring down the Confederacy and, later, in the struggle against the Confederacy's successor, the Dominion. Raynor is one of the few terrans to engage in a long-term alliance with the protoss.",
  health: 100,
  attack: 200,
  race: terran
});

let zeratul = Hero.create({
  id: '2',
  name: "zeratul",
  description: "Zeratul was a revered Nerazim mystic. During the Great War, Zeratul allied with the Khalai Tassadar, despite his hatred for the Conclave that once banished his forbears. The Dark Templar personally slew the cerebrate Zasz, but in turn accidentally gave the Overmind the location of Aiur.Zeratul was manipulated by Sarah Kerrigan during the Brood War into killing the Second Overmind and Raszagal, the Dark Templar Matriarch.",
  health: 80,
  attack: 300,
  race: protoss
});

let sarah = Hero.create({
  id: '3',
  name: "sarah kerrigan",
  description: "Sarah Louise Kerrigan was a psychic terran female. She began her career as a Confederate ghost and later became the second-in-command of the Sons of Korhal. Following Arcturus Mengsk's betrayal, she was captured and infested by the Zerg Swarm, ultimately becoming the self-proclaimed Queen of Blades (a.k.a. the Zerg Queen) and leader of the Swarm.",
  health: 300,
  attack: 300,
  race: zerg
});

heroes.pushObjects([jim, zeratul, sarah]);

terran.get('heroes').pushObject(jim);
zerg.get('heroes').pushObject(sarah);
protoss.get('heroes').pushObject(zeratul);

korhal.get('heroes').pushObject(jim);
char.get('heroes').pushObject(sarah);
aiur.get('heroes').pushObject(zeratul);

export default Ember.Service.extend({
  getRace(id) {
    return this.getRaces().findBy('id', id);
  },
  getRaces() {
    return races;
  },
  getPlanets() {
    return planets;
  },
  getPlanet(id) {
    return this.getPlanets().findBy('id', id);
  },
  getHeroes() {
    return heroes;
  },
  getHero(id) {
    return this.getHeroes().findBy('id', id);
  },
  newHero(){
    return Hero.create({
    });
  },
  saveHero(hero){
    heroes.pushObject(hero);
    hero.race.get('heroes').pushObject(hero);
    hero.race.planet.get('heroes').pushObject(hero);
    hero.set('id', heroes.length);
  },
  deleteHero(hero){
    var index = heroes.indexOf(hero);
    heroes.splice(index,1);
  }
});

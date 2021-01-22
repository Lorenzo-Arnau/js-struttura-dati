
const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
]

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
]

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}


const cards =[
  {
  cardName: 'Grizzly Bears',
  cost: {
    genericCostNumber: 1,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[4]   // 'G'
    ],
  },
  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Bear',
  editionType: editions['SP'],
  description:'',
  story:'We cannot forget that ecc...',
  authorString:'autore copyright autore',
  cardColor: fieldCodes[4],
  score: {
    power: 2,  // filtrarlo per power
    toughness: 2
    }
  },


  {
  cardName: 'Serra Angel',
  cost: {
    genericCostNumber: 3,
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[0],  // 'W',  - un suo riferimento
      fieldCodes[0]   // 'W'
    ],
  },
  picture: 'images/i.png',
  cardType: cardTypes[1],
  cardObject: 'Angel',
  editionType: editions['SP'],
  description:'Flying vigilance',
  story:'The angel remembers ecc...',
  authorString:'autore copyright autore',
  cardColor: fieldCodes[0],
  score: {
    power: 4,  // filtrarlo per power
    toughness: 4
    }
  },


  {
    cardName: 'Sviluppatore guerriero',
    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },
    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Develop',
    editionType: editions['BL'],
    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
    score: {
      power: 5,  // r
      toughness: 3
    }
    },


  {
  cardName: 'Sundering Titan',
  cost: {
    genericCostNumber: 8,
    costFields: [ // colors array con riferimento a fieldCodes
    ],
  },
  picture: 'images/i.png',
  cardType: cardTypes[3],
  cardObject: 'Golem',
  editionType: editions['SP'],
  description:'When Titan ecc..',
  story:'Even if we defeat it ecc...',
  authorString:'autore copyright autore',
  cardColor: fieldCodes[1],
  score: {
    power: 5,  // filtrarlo per power
    toughness: 10
    }
  },
  {
  cardName: 'Paralyze',
  cost: {
    genericCostNumber: '',
    costFields: [ // colors array con riferimento a fieldCodes
      fieldCodes[2],  // 'B',  - un suo riferimento
    ],
  },
  picture: 'images/i.png',
  cardType: cardTypes[2],
  cardObject: 'Enchant',
  editionType: editions['SP'],
  description:'When paralyze ecc..',
  story:'',
  authorString:'autore copyright autore',
  cardColor: fieldCodes[2],
  score: {
    power: 0,  // filtrarlo per power
    toughness: 0
    }
  },
]
console.log(cards);
const page =  $('#container');
const selector = $('.filter');
selector.change(function(){
  page.html('');
  let valore = $(this).val();
  console.log(valore);
  const powerList = [];
  const typeList =[];
  cards.forEach((element) => {
    if(!powerList.includes(element.score.power)) {
      powerList.push(`Power ${element.score.power} name ${element.cardName}`);
    }
  });
  cards.forEach((element) => {
    if(!typeList.includes(element.cardType)) {
      typeList.push(`Type ${element.cardType} name ${element.cardName}`);
    }
  });
  console.log(powerList);
  powerList.sort();
  switch (valore) {
    case 'power':
      powerList.forEach((item) => {
        page.append(`
        <div>
        ${item}
        </div>
        `)
      });
      break;
      case 'type':
        typeList.forEach((item) => {
          page.append(`
          <div>
          ${item}
          </div>
          `)
        });
        break;
    default:
    cards.forEach((item) => {
    page.append(`
    <div>
    ${item.cardName}
    </div>
    `)
    });
  }
})
selector.change();

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  //find text node with the given textNodeIndex
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }
  var image = document.getElementById("image");
  var image = document.createElement("image");


  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the sorcerer world. Cursed Spirits run rampant and plague the lives of citizens and are the reason for unknown deaths. Cursed Spirits are a race of spiritual beings who manifested from cursed energy as a result of the negative emotions that flow out of humans. They bring harm to humanity. They are able to make themselves unnoticable to ordinary people but only a certain few can see them, Sorcerers. Sorcerers are individuals trained and employed in Japan to defend humanity from cursed spirits. Sorcerers are also able to use cursed energy to defend others but sorcerers who use their sorcery for evil are known as cursed users who work with cursed spirits to destroy the world. So, go on your path of heroism young sorcerer. Develop your techniques, become stronger, and reach the peak of sorcery to become the strongest and unrivaled sorcerer.',
    image: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/60/Divine_Dogs_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20201003031056',
    options: [
      {
        text: 'Start your journey',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    text: 'Choose a family:',
    options: [
      {
        text: 'Zenin family ',
        setState: { blueGoo: true },
        nextText: 13
      },
      {
        text: 'Kamo family',
        nextText: 14
      },
      {
        text: 'Gojo family',
        nextText: 15
      }
    ]
  },
  {
    id: 3,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 4
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 4
      },
      {
        text: 'Ignore the merchant',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 5
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 6
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 8,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 9
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 10
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 11
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 12
      }
    ]
  },
  {
    id: 9,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'The Zenin Family, one of the 3 noble clans that embody all the noble values of a major clan. They believe powerful cursed techniques are more important than anything else. Choose an innate technique to posses:',
    options: [
      {
        text: 'Ten Shadows Technique',
        setState: { blueGoo: true },
        nextText: 16
      },
      {
        text: 'Inverse Technique',
        nextText: 17
      },
      {
        text: 'Straw Doll Technique',
        nextText: 18
      },
      {
        text: 'Choose another family',
        nextText: 2
      }
    ]
  },
  {
    id: 14,
    text: 'The Kamo Family is one of the 3 noble clans that values blood ties immeasurably, but like the Zenin Family, inheriting their passed down technique is first priority. The Kamo Family is also responsible for the biggest blight on the Big Three Sorcerer Families. Recognized as the most evil sorcerer in history, Noritoshi Kamo of a past era performed experimentations on humans and cursed spirits. Choose an innate technique to posses:',
    options: [
      {
        text: 'Blood Manipulation',
        setState: { blueGoo: true },
        nextText: 19
      },
      {
        text: 'Projection Sorcery',
        nextText: 20
      },
      {
        text: 'Cursed Speech',
        nextText: 21
      },
      {
        text: 'Choose another family',
        nextText: 2
      }
    ]
  },
  {
    id: 15,
    text: 'The Gojo Family, descendents from Michizane Sugawara, a legendary sorcerer. The Gojo Family possesses the strongest sorcerer in the world, Satoru Gojom and sits a top of the sorcerer family hierarchy as the strongest noble clan. Choose an innate technique to posses:',
    options: [
      {
        text: 'Limitless',
        setState: { blueGoo: true },
        nextText: 22
      },
      {
        text: 'Idle Transfiguration',
        nextText: 23
      },
      {
        text: 'Cursed Spirit Manipulation',
        nextText: 24
      },
      {
        text: 'Choose another family',
        nextText: 2
      }
    ]
  },
  {
    id: 16,
    text: 'Ten Shadows Technique: The Ten Shadows Technique is an inherited technique passed down in the Zenin Family. Using shadows as an intermediary, this technique allows the user to summon ten different shikigami.',
    image: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/6/60/Divine_Dogs_%28Anime%29.png/revision/latest/scale-to-width-down/1000?cb=20201003031056',
        options: [
      {
        text: 'Choose this technique',
        nextText: 26
      },
      {
        text: 'Go back',
        nextText: 13
      }
    ]
  },
  {
    id: 17,
    text: 'Inverse Technique: The Inverse technque is a technique developed by Jiro Awasaka which allows attacks targeting the user to become weaker the stronger they are and stronger the weaker they are. Due to the effect of inverse, weak things such as air resistance could kill the user of the technique while it was activated but do not worry, the technique has a maximum and a minimum.',
        options: [
      {
        text: 'Choose this technique',
        nextText: 26
      },
      {
        text: 'Go back',
        nextText: 13
      }
    ]
  },
  {
    id: 18,
    text: 'Straw Doll Technique: The Straw Doll Technique was invented by Nobara Kugisaki and uses a set of tools which include a hammer, nails, and a straw doll. This technique allows the user to put cursed energy into nails allowing them to fly through the air and the cursed energy through the nails allows for explosive cursed energy to be generated. The user can use the straw doll once they had established a connection with a target and using resonance, can pierce the straw doll with nails and do the same to their target at the same time.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 26
      },
      {
        text: 'Go back',
        nextText: 13
      }
    ]
  },
  {
    id: 19,
    text: 'Blood Manipulation: Blood Manipulation is an inherited techniquepassed down in the  Kamo Family. It allows the user to control their own blood. As the name implies, Blood Manipulation is a cursed technique that allows the user to control and shape their blood beyond its natural form or motion for a variety of effects. It can be used to manipulate every aspect of the blood of the user, including blood composition, plasma, and red blood cells. Internal and external blood can be utilized as long as it belongs to the user.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 27
      },
      {
        text: 'Go back',
        nextText: 14
      }
    ]
  },
  {
    id: 20,
    text: 'Projection Sorcery: Projection Sorcery is an inherited technique passed down in the Kamo family. It traces movement at twenty-four frames per second and traps anyone who disobeys that rule inside a frame for one second. This technique divides one second into twenty-four frames of animation using the field of view of the user as the projection angle of view. The user can trace a predetermined set of movements into those twenty-four frames and execute them in that single second. Moving using this technique makes the user appear to move unnaturally fast.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 27
      },
      {
        text: 'Go back',
        nextText: 14
      }
    ]
  },
  {
    id: 21,
    text: 'Cursed Speech: Cursed Speech is a technique in the Kamo Family which reincorces the words of the user with cursed energy, which compels the listeners to act or be acted upon based on those words. To use cursed speech, the user must use a cursed tool with a special seal on it like how Toga Kamo, who uses cursed speech, applied the seal to his cheeks and tongue to not need to use a cursed tool but warning: If you use this method, than you would lose the ability to speak normally and would need to speak in code basically as listeners would be compelled to follow your words whenever you spoke. ',
    options: [
      {
        text: 'Choose this technique',
        nextText: 27
      },
      {
        text: 'Go back',
        nextText: 14
      }
    ]
  },
  {
    id: 22,
    text: 'Limitless: Limitless is the inherited technique passed down within the Gojo Family. This technique brings the concept of "Infinity" into reality, allowing the user to manipulate and distort space at will. The Limitless technique operates the same way convergent and divergent sequences do in mathematics. The Infinity is the convergence of an immeasurable series, anything that approaches the infinity slows down and never reaches the user.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 25
      },
      {
        text: 'Go back',
        nextText: 15
      }
    ]
  },
  {
    id: 23,
    text: 'Idle Transfiguration: Idle Transfiguration is a technique developed by Maito which allows the user the ability to distort the shape of souls and transfigure their respective bodies as a result. The user can resahpte the souls of themselves or anyone they touch physically and the shape of the body is dependent on the shape of the soul, so if the soul is distorted, so too is the body.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 25
      },
      {
        text: 'Go back',
        nextText: 15
      }
    ]
  },
  {
    id: 24,
    text: 'Cursed Spirit Manipulation: Cursed Spirit Manipulation is a technique developed by Suguru Geto, who used to be a friend of Satoru Gojo. This technique allows the user to control curses that they conquer in battle and instead of exorcising them, you can absorb them into a small ball which can be consumed to gain complete control over the curses and to summon them.',
    options: [
      {
        text: 'Choose this technique',
        nextText: 25
      },
      {
        text: 'Go back',
        nextText: 15
      }
    ]
  },
  {
    id: 25,
    text: 'Are you sure you want to choose this technique? You can not change your decision later.',
    options: [
      {
        text: 'Yes, I am sure',
        nextText: 28
      },
      {
        text: 'No I want to change my technique',
        nextText: 15
      }
    ]
  },
  {
    id: 26,
    text: 'Are you sure you want to choose this technique? You can not change your decision later.',
    options: [
      {
        text: 'Yes, I am sure',
        nextText: 28
      },
      {
        text: 'No I want to change my technique',
        nextText: 13
      }
    ]
  },
  {
    id: 27,
    text: 'Are you sure you want to choose this technique? You can not change your decision later.',
    options: [
      {
        text: 'Yes, I am sure',
        nextText: 28
      },
      {
        text: 'No I want to change my technique',
        nextText: 14
      }
    ]
  },
  {
    id: 28,
    text: 'Working',
    options: [
    ]
  },
]

startGame()
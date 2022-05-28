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

document.getElementById('image').style.display = "contents";

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the sorcerer world. Cursed Spirits run rampant and plague the lives of citizens and are the reason for unknown deaths. They are able to make themselves unnoticable to ordinary people but only a certain few can see them, Sorcerers. Sorcerers are individuals trained and employed to defend humanity from cursed spirits. Sorcerers are also able to use cursed energy to defend others So, go on your path of heroism young sorcerer. Develop your techniques, become stronger, and reach the peak of sorcery to become the strongest.',
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
    text: 'You wake up in a desolate temple unable to recall who you are.',
    options: [
    {
        text: 'Walk out the destroyed door to the dark and cursed forest',
        nextText: 29
      },
      {
        text: 'Commit Seppuku as a sacrifice.',
        nextText: 30
      }
    ]
  },
  {
    id: 29,
    text: 'You find an ominous cursed soul',
    options: [
    {
        text: 'Pick it up',
        nextText: 31
    },
    {
        text: 'Leave it there',
        nextText: 49
    },
    ]
  },
  {
    id: 30,
    text: 'As you lay there bleeding out. You wish that in your next life, you can live an honest life',
    options: [
    {
        text: 'You enter the channel of Reincarnation',
        nextText: -1
      },
    ]
  },
  {
    id: 31,
    text: 'As you pick it up, you feel a sting in your hand and a bit light headed',
    options: [
    {
        text: 'Continue',
        nextText: 32
    },
    ]
  },
  {
    id: 32,
    text: 'You put the ominous soul in your cursed pouch and walk through the forest',
    options: [
    {
        text: 'Continue walking',
        setState: { essence: true },
        nextText: 33
    },
    ]
  },
  {
    id: 33,
    text: 'In your vision you see an old shack and hear the whispers of a person',
    options: [
    {
        text: 'Go check it out',
        nextText: 34
    },
    {
        text: 'Ignore the shack',
        nextText: 43
    },
    ]
  },
  {
    id: 34,
    text: 'In the shack there is an old man with bandages over his eyes. "Hello there young one" he says before you step into the shack',
    options: [
    {
        text: '"Hello there senior. May I be presumptious and ask the identity of senior?"',
        nextText: 35
    },
    ]
  },
  {
    id: 35,
    text: '"Me? I am but a person of a past era waiting for the clock to stop ticking.',
    options: [
    {
        text: '"What I have in my hand? I do not know, do you know what it is senior?"',
        requiredState: (currentState) => currentState.essence,
        nextText: 36
    },
    {
        text: '"It was nice meeting you senior,I will be on my way then."',
        nextText: 45
    },
    ]
  },
  {
    id: 36,
    text: '"An ominous soul, a soul that could not develop in time and died off to become an ominous soul. I have not seen one of those in a century so here me out young one, If you give me the ominous soul, Ill give you one of my many techniques to help you on your journey."',
    options: [
    {
        text: '"Sure Senior, I trust you, here it is."',
        nextText: 37
    },
    {
        text: '"I think I will keep it with me senior."',
        nextText: 43
    },
    ]
  },
  {
    id: 37,
    text: '"You have made the right choice my precious junior. Now choose, which technique do you want me to teach you?"',
    options: [
    {
        text: '"Broken Cycle of Life and Death"',
        nextText: 38
    },
    {
        text: '"Heavenly Jade eyes"',
        nextText: 39
    },
    {
        text: '"Miracle of the Heavens"',
        nextText: 40
    },
    ]
  },
  {
    id: 38,
    text: '"Ah, the "Broken Cycle of Life and Death", a technique which is said that if mastered, its users can breake the cycle of life and death and become immortal, undying and unaging but as you practice it, your lifespan and healht shall improve by leaps and leaps as well. Are you sure you want this technique?"',
    options: [
    {
        text: '"Yes"',
        requiredState: (currentState) => currentState.essence,
        setState: { essence: false, Life: true },
        nextText: 41
    },
    {
        text: '"Let me look at the other techniques"',
        nextText: 37
    },
    ]
  },
  {
    id: 39,
    text: '"Ah, the "Heavenly Jade eyes", a technique which is said to have been made by Changming after surviving a deadly survive attack to help allow him to see everything around him. As you practice it, you will be able to notice all the things around you from the smallest of details and if mastered, one could see all that there is in the mortal realm. Are you sure you want this technique?"',
    options: [
    {
        text: '"Yes"',
        requiredState: (currentState) => currentState.essence,
        setState: { essence: false, Jade: true },
        nextText: 41
    },
    {
        text: '"Let me look at the other techniques"',
        nextText: 37
    },
    ]
  },
  {
    id: 40,
    text: '"Ah, "Miracle of the Heavens", a technique which allows the user to gain the attention and protection of the heavens. Its users are said to have luck befitting the heavens and if mastered, its believed you would become a true "Miracle of the Heavens" finding fortune where ever you step and surviving any encounter. Are you sure you want this technique?"',
    options: [
    {
        text: '"Yes"',
        requiredState: (currentState) => currentState.essence,
        setState: { essence: false, Miracle: true },
        nextText: 41
    },
    {
        text: '"Let me look at the other techniques"',
        nextText: 37
    },
    ]
  },
  {
    id: 41,
    text: '"Ok then, here is the technique my precious junior and thank you for the ominous soul, it should make for an amazing elixir"',
    options: [
    {
        text: '"Thank you senior. I shall never forget your kindness."',
        nextText: 44
    },
    ]
  },
  {
    id: 42,
    text: 'You decide to not touch the strange and ominous object',
    options: [
    {
        text: 'You continue on your journey through the dark forest',
        nextText: 45
    },
    ]
  },
  {
    id: 43,
    text: '"If that is what you want foolish young one than I shall not interfere with your choice but do not come back begging me for another chance."',
    options: [
    {
        text: 'You leave the shack and contine your journey',
        nextText: 45
    },
    ]
  },
  {
    id: 44,
    text: 'You walk out the shack excited that you got a new technique to add to your arsenal',
    options: [
    {
        text: 'You continue through the dark forest',
        nextText: 45
    },
    ]
  },
  {
    id: 45,
    text: 'As you walk through the forest you begin to see light ahead of you. You run towards the light and what you see is shocking.',
    options: [
    {
        text: '...',
        nextText: 46
    },
    ]
  },
  {
    id: 46,
    text: 'Infront of you is a small cliff with a vibrant world full of color. Underneath the cliff you see a town full of life.',
    options: [
    {
        text: 'In the rush of the moment, you run and jump of the cliff to get to the town quickly thinking it is not to big, you will survive.',
        nextText: 47
    },
    {
        text: 'You go down the path on the side of the cliff',
        nextText: 48
    },
    ]
  },
  {
    id: 47,
    text: 'You died. why would you jum off. It is still a cliff genius. Oh my, oh my, you poor, poor soul, may you life a better life in your reincarnation',
    options: [
    {
        text: 'You enter the channel of Reincarnation',
        nextText: -1
    },
    ]
  },
  {
    id: 48,
    text: 'After a short walk you arrive at the village.',
    options: [
    {
        text: 'You explore the village',
        nextText: 50
    },
    ]
  },
  {
    id: 49,
    text: 'You walk deeper into the dark forest',
    options: [
    {
        text: '...',
        nextText: 33
    },
    ]
  },
  {
    id: 49,
    text: 'You walk deeper into the dark forest',
    options: [
    {
        text: '...',
        nextText: 33
    },
    ]
  },
  {
    id: 50,
    text: 'Where do you go?',
    options: [
    {
        text: 'The alchemist guild',
        nextText: 51
    },
    {
        text: 'The inn',
        nextText: 52
    },
    {
        text: 'The sorcerer guild',
        nextText: 53
    },
    ]
  },
  {
    id: 51,
    text: 'The alchemist guild, a worlwide guild known for being the #1 elixir and pill producers who can make any pill',
    options: [
    {
        text: 'Enter the alchemist guild',
        nextText: 54
    },
    {
        text: 'Go somewhere else',
        nextText: 50
    },
    ]
  },
  {
    id: 54,
    text: 'As you enter, the smell of thousands of herbs hits you followed up by the smell of smoke from the cauldrons. You can see alchemists working with their cauldrons with other carrying herbs frantically.',
    options: [
    {
        text: 'Go to the receptionist',
        nextText: 55
    },
    ]
  },
  {
    id: 55,
    text: '"Hello, how may I help you?"',
    options: [
    {
        text: '"Hello, I just wanted to see if this was worth anything?"',
        requiredState: (currentState) => currentState.essence,
        nextText: 56
    },
    ]
  },
  {
    id: 56,
    text: '"What is i--Wait, is that an ominous soul! How did you get it"',
    options: [
    {
        text: '"Hello, I just wanted to see if this was worth anything?"',
        nextText: 56
    },
    ]
  },
]
startGame()



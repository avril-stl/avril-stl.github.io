// Define the entire conversation flow
import './terminalModal.css'; 

export const conversationFlow = [
    {
      stage: 0,
      door: 'CLOSED', 
      options: {
        'help': {
          responses: [
            "available commands:",
            "> terminal_how_to",
            "> help", 
            "> cd", 
            "> ls", 
            "> clr",
            "> echo", 
            "> save_avril"
          ],
          nextStage: 0,
        },
        'save_avril': {
          responses: [
            "What took you so long?!",
            "I need your help.",
            "An evil wizard trapped me inside this website :(",
            "...yes I know that's cliche",
            "But I can't get out D:",
            "Type c to continue or e to exit: ",
          ],
          nextStage: 1,
        },
        'ls': {
          responses: [
            "favorite_songs",
            "old_photos",
            "boring_old_about_page",
            <a 
              href={'http://localhost:3000/crimes'} 
              className=".link-listed"
            >
              avril_trivia
            </a>
          ],
          nextStage: 0,
        },
        'cd favorite_songs': {
          responses: [
            'I Live - Jason Faulkner',
            'Underground - Ben Folds Five',
            'I Just Want To Be Your Friend - The Millenium Band',
            'RWFybHkgVG8gVGhlIFBhcnR5IC0gQW5keSBTaGF1ZiA=',
            'Must Do Something About it - Wings', 
            'Lithium - Nirvana', 

            'Oh No! it looks like one of the songs is base 64 encoded!',
            'Type c to continue or e to exit: '
          ],
          nextStage: 4,
        },
        'cd old_photos': {
          responses: [
            'summer_2024.jpeg',
            'halloween_2008.jpeg',
            'spring_2004.jpeg'
          ],
          nextStage: 0,
        },
        
        'terminal_how_to': {
          responses: [
            'help -- lists all available commands',
            'cd -- puts you in a new directory',
            'ls -- lists all the items in a directory',
            'save_avril -- liberates avril from this website hell :D',
            'clr -- clears terminal',
            'echo -- echos what you said back',
            'echo -n ... | base 64 -- base64 encodes a string'

          ],
          nextStage: 0,
        }
        
      },
    },
    {
      stage: 1,
      door: 'CLOSED', 
      options: {
        c: {
          responses: [
            "I need you to help me find three keys... ",
            "Once you get them I can finally escape",
            "Will you help me?",
            "Type c to continue or e to exit: "
          ],
          nextStage: 2,  // Conversation ends or resets
        },
        e: {
          responses: [
            "Oh...okay...thanks anyways...I guess.",
          ],
          nextStage: 0,  // Go back to the beginning
        },
        'help': {
          responses: [
            "available commands: help, cd, ls, save_avril, clr",
          ],
          nextStage: 0,
        }
      },
    },
    {
        stage: 2,
        door: 'CLOSED', 
        options: {
          c: {
            responses: [
              "thank you thank you thank you :D !!",
              "there's no food in here",
              "and I'm dying for some french toast :,( ",
              "type c to continue or e to exit"

            ],
            nextStage: 3,
          },
          e: {
            responses: [
              "Oh...okay...thanks anyways...I guess.",
            ],
            nextStage: 0,  // Go back to the beginning
          },
          'help': {
            responses: [
              "available commands: help, cd, ls, save_avril, clr",
            ],
            nextStage: 0,
          }
        },
    },
    {
      stage: 3,
      door: 'OPEN', 
      options: {
        c: {
          responses: [
              "The keys are hidden somewhere in this website",
              "I think I saw at least one of them buried in an old file somewhere around here...",
              "Try using ls and cd to navigate the subdirectories"

          ],
          nextStage: 0,  // Conversation ends or resets
        },
        e: {
          responses: [
            "Oh...okay...thanks anyways...I guess.",
          ],
          nextStage: 0,  // Go back to the beginning
        },
        'help': {
          responses: [
            "available commands: help, cd, ls, save_avril, clr",
          ],
          nextStage: 0,
        }
      },
    },
    {
      stage: 4,
      door: 'CLOSED', 
      options: {
        c: {
          responses: [
              'huh, looks base 64...',
              'whats that handy command? echo -n ... | base 64? '

          ],
          nextStage: 0,  // Conversation ends or resets
        },
        e: {
          responses: [
            "Oh...okay...thanks anyways...I guess.",
          ],
          nextStage: 0,  // Go back to the beginning
        },
        'help': {
          responses: [
            "available commands: help, cd, ls, save_avril, clr",
          ],
          nextStage: 0,
        }
      },
    }
    // You can continue adding more stages here as needed
  ];
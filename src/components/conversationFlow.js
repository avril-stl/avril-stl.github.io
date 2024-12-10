// Define the entire conversation flow
export const conversationFlow = [
    {
      stage: 0,
      options: {
        'help': {
          responses: [
            "available commands: help, cd, ls, save_avril, clr, terminal-how-to",
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
            "about_page_(boring)"
          ],
          nextStage: 0,
        },
        'cd favorite_songs': {
          responses: [
            'ZHJlYW0gYSBsaXR0bGUgZHJlYW0gb2YgbWU=',
            'TGEgUml0b3VybmVsbGUgYnkgU2ViYXN0aWVuIFRlbGxpZXIg',

          ],
          nextStage: 0,
        },
        'cd old_photos': {
          responses: [
            'summer_2024.jpeg',
            'halloween_2008.jpeg',
            'spring_2004.jpeg'
          ],
          nextStage: 0,
        },
        'terminal-how-to': {
          responses: [
            'help -- lists all available commands',
            'cd -- puts you in a new directory',
            'ls -- lists all the items in a directory',
            'save_avril -- liberates avril from this website hell :D',
            'clr -- clears terminal'

          ],
          nextStage: 0,
        }
        
      },
    },
    {
      stage: 1,
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
        options: {
          c: {
            responses: [
                "The keys are located somewhere in this website",
                "I couldn’t tell you where...I tend to lose mine...",
                "But once you close this terminal, a button should appear.", 
                "The password is “SHERLOCKED”",
                "...A huge dork must have chosen that", 
                "anyways Good luck! I’m rooting for you! and for me!", 
                "[Click anywhere outside the terminal to close terminal]"

            ],
            nextStage: 4,  // Conversation ends or resets
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
    // You can continue adding more stages here as needed
  ];
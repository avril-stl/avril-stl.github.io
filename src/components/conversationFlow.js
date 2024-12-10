// Define the entire conversation flow
export const conversationFlow = [
    {
      stage: 0,
      options: {
        'help': {
          responses: [
            "available commands: help, cd, ls, save_avril, clr",
          ],
          nextStage: 0,
        },
        'save_avril': {
          responses: [
            "What took you so long?!",
            "I need your help.",
            "An evil wizard who shall not be named...",
            "...but whose name happens to rhyme with my shmevil ex-shboyfriend shmjohn.",
            "Trapped me inside this website :(...",
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
            'ZHJlYW0gYSBsaXR0bGUgZHJlYW0gb2YgbWU='
          ],
          nextStage: 0,
        },
        
      },
    },
    {
      stage: 1,
      options: {
        c: {
          responses: [
            "...yes I know that's cliche",
            "But I can't get out",
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
            "available commands: help, cd, dir, ls, help_avril, cat",
          ],
          nextStage: 1,
        }
      },
    },
    {
        stage: 2,
        options: {
          c: {
            responses: [
              "Thank you thank you thank you :,D !!",
              "there's no food in here",
              "and I'm dying for some french toast :,( ",
              "*insert sad tiny violin sound*",
              "type c to continue or e to exit"

            ],
            nextStage: 3,  // Conversation ends or resets
          },
          e: {
            responses: [
              "Oh...okay...thanks anyways...I guess.",
            ],
            nextStage: 0,  // Go back to the beginning
          },
          'help': {
            responses: [
              "available commands: help, cd, dir, ls, help_avril, cat",
            ],
            nextStage: 2,
          }
        },
    },
    {
        stage: 3,
        options: {
          c: {
            responses: [
                "The keys are located somewhere in this website",
                "I couldn’t tell you where...I tend to lose mine'",
                "Once you close this terminal, a button should appear.", 
                "The password is “SHERLOCKED”",
                "...A huge dork must have chosen that", 
                "Anyways Good luck! I’m rooting for you! for me!", 
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
              "available commands: help, cd, dir, ls, help_avril, cat",
            ],
            nextStage: 3,
          }
        },
    },
    // You can continue adding more stages here as needed
  ];
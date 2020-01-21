new Vue ({
  el: '#app',

  components: {
    mdbRow: mdbvue.mdbRow,
    mdbCol: mdbvue.mdbCol,
    mdbContainer: mdbvue.mdbContainer,
    mdbBtn: mdbvue.mdbBtn,
    mdbIcon: mdbvue.mdbIcon,
    mdbListGroup: mdbvue.mdbListGroup,
    mdbListGroupItem: mdbvue.mdbListGroupItem,
    mdbNavbar: mdbvue.mdbNavbar,
    mdbNavbarBrand: mdbvue.mdbNavbarBrand,
    mdbNavbarToggler: mdbvue.mdbNavbarToggler,
    mdbNavbarNav: mdbvue.mdbNavbarNav,
    mdbNavItem: mdbvue.mdbNavItem,
    mdbModal: mdbvue.mdbModal,
    mdbModalHeader: mdbvue.mdbModalHeader,
    mdbModalTitle: mdbvue.mdbModalTitle,
    mdbModalBody: mdbvue.mdbModalBody,
    mdbModalFooter: mdbvue.mdbModalFooter,
    mdbInput: mdbvue.mdbInput,
    mdbCard: mdbvue.mdbCard,
    mdbCardBody: mdbvue.mdbCardBody,
    mdbCardTitle: mdbvue.mdbCardTitle,
    mdbCardText: mdbvue.mdbCardText,
    mdbView: mdbvue.mdbView
  },

  data: {
    title: 'Frog Bother Chat',
    mainUserName: 'Vito Croakleone',
    mainUserFirstName: 'Vito',
    newMessage: null,
    frogs: [
      {
        frog: 'Mosquito Pacino',
        lastMessageID: 3,
        messages: [
          {
              id: 1,
              sender: 'Mosquito',
              content: 'Say hello to my little frog!',
              sentTime: '2020-01-18 5:15 pm'
          },
          {
              id: 2,
              sender: 'Vito',
              content: 'Probably a missed opportunity by not naming you Micheal Pacino.',
              sentTime: '2020-01-18 5:42 pm'
          },
          {
              id: 3,
              sender: 'Mosquito',
              content: 'You know what wasn\'t a missed opportunity, Vito? The hit on Sonny. https://youtu.be/roCcf5Vge0o?t=32',
              sentTime: '2020-01-18 5:42 pm'
          }
        ]
      },
      {
        frog: 'Frodo Croakins',
        lastMessageID: 1,
        messages: [
          {
            id: 1,
            sender: 'Vito',
            content: 'Did you cast the ring into the swamp like I\'d asked?',
            sentTime: '2020-01-18 4:13 pm'
          }
        ]
      },
      {
        frog: 'Lily Pad',
        lastMessageId: 1,
        messages: [
          {
            id: 1,
            sender: 'Lily',
            content: 'Can you please bother a new frog if you haven\'t already?\nThanks.',
            sentTime: '2020-01-18 11:01 am'
          }
        ]
      }
    ],
    selectedFrog: 'no one',
    newFrog: {
      firstName: null,
      lastName: null
    },
    addingFrog: false
  },

  computed: {
    frogsCount: function() {
      return this.frogs.length;
    }
  },

  methods: {
    saveNewFrog: function() {
      let currentNewFrog = {
        frog: this.newFrog.firstName + ' ' + this.newFrog.lastName,
        messages: []
      };
      this.frogs.push(currentNewFrog);
      this.newFrog = {
        firstName: null,
        lastName: null
      };
      this.addingFrog = false;
      this.loadChat(currentNewFrog)
    },

    loadChat: function(frogInfo) {
        this.selectedFrog = frogInfo;
    },

    sendMessage: function() {
      let message = {
        id: this.selectedFrog.lastMessageID+1,
        sender: this.mainUserFirstName,
        content: this.newMessage,
        sentTime: new Date().toLocaleString()
      };

      this.selectedFrog.messages.push(message);
      this.selectedFrog.lastMessageID += 1;
      this.newMessage = null;

      var chat = document.getElementById("chatBubbles");
      chat.scrollTop = chat.scrollHeight;
    }
  }
});

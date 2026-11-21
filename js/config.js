/* ==========================================================================
   INVITATION CONFIGURATION
   --------------------------------------------------------------------------
   Everything you will want to change lives in this file. Edit the values,
   save, then refresh index.html. Keep the quote marks and commas.

   Any value left empty ("") is hidden on the page instead of showing
   placeholder text, so you can fill things in gradually.
   ========================================================================== */

window.INVITE_CONFIG = {
  /* ------------------------------------------------------------------ */
  /* The baby + family                                                   */
  /* ------------------------------------------------------------------ */
  babyName: "Aureus Carwyn Ebuenga",
  parents: "Jonalyn Dalindin & Andrei Ebuenga",

  /* ISO date + time WITH timezone, e.g. "2026-12-27T10:00:00+08:00".
     The +08:00 keeps the countdown correct for guests in any time zone.
     Leave empty ("") and the countdown simply shows 00 00 00 00.        */
  eventDate: "2026-12-27T10:00:00+08:00",

  /* How the date and time read on the invitation.
     Leave displayTime empty to show the date on its own.                */
  displayDate: "Sunday, December 27, 2026",
  displayTime: "10:00 AM",

  /* ------------------------------------------------------------------ */
  /* Ceremony + reception                                                */
  /* Leave address or time empty and that line disappears.               */
  /* ------------------------------------------------------------------ */
  ceremony: {
    name: "The United Methodist Church",
    time: "10:00 AM",
    address: "",
    /* Leave "" and the dashed photo frame shows instead. */
    photo: "assets/church.jpg",
    mapsUrl: "https://maps.app.goo.gl/YQFvLTkuF9zGeCTZA"
  },

  reception: {
    name: "Dalindin Residence",
    time: "11:30 AM",
    address: "",
    photo: "assets/house.jpg",
    mapsUrl: "https://maps.app.goo.gl/F41XaP5qS2J248RN6"
  },

  /* ------------------------------------------------------------------ */
  /* Envelope                                                            */
  /* The line shown on the cream letter once the guest taps the envelope. */
  /* Leave empty to open the invitation without a message.               */
  /* ------------------------------------------------------------------ */
  openMessage: "Celebrate a blessed day with us",

  /* ------------------------------------------------------------------ */
  /* RSVP                                                                */
  /* Leave empty to hide the line: "Kindly reply on or before ..."       */
  /* ------------------------------------------------------------------ */
  rsvpDeadline: "",

  /* Shown as a tap-to-call link in the RSVP section. Empty hides it.    */
  contact: "",

  /* The RSVP is filled in on this page and posted in the background to the
     Google Form below, so the answers land in its linked Google Sheet.
     The guest never sees or visits the Google Form.
     actionUrl: the form's .../formResponse address.
     fields: the entry IDs from the form's pre-filled link.
     Leave actionUrl empty ("") and answers are only saved in localStorage. */
  googleForm: {
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSco_OqvOp1-L3kvb-6sJ_MmP-lFWTvn7tGGdO2-bRQDwRg2zQ/formResponse",
    fields: {
      name: "entry.937902673",
      attendance: "entry.924809838",
      guests: "entry.877125719",
      message: "entry.1624571763"
    }
  },

  /* Leave false in normal use. Set it to true to log the exact entry IDs
     and values being posted to the Google Form in the console.          */
  debug: false,

  /* ------------------------------------------------------------------ */
  /* Ninongs & Ninangs                                                   */
  /* One name per line, in quotes, separated by commas.                  */
  /*                                                                     */
  /*   ninongs: ["Name One", "Name Two"],                                */
  /*   ninangs: ["Name One", "Name Two"],                                */
  /*                                                                     */
  /* While a list is empty the page shows three soft [NAME] lines so you
     can see the layout. Set the arrays and the placeholders disappear.  */
  /* The list stays short until "See more" is tapped, however many names
     you add, so no other change is needed when this list grows.         */
  /* Set showGodparents: false to hide the whole section.                */
  /* ------------------------------------------------------------------ */
  showGodparents: true,
  ninongs: [
    "John Lord Guevarra",
    "Bryan Perito",
    "Prince Defeo",
    "Roel Alvero",
    "Augusto Egana",
    "John Matt De Leon",
    "Eric Montejo",
    "Jayvee Tugano",
    "Ar Ar Rabanera",
    "Lawrence Ebuenga"
  ],
  ninangs: [
    "Roxanne Dela Cruz",
    "Cecil Olesco",
    "Shaila Javier",
    "Ruffa Dalampasoc",
    "Dianne Dalindin",
    "Alyssa Nicole Sta Ana",
    "Vina Coloma",
    "Margie Garcia",
    "Marsha Cascasa",
    "Russel Garcia",
    "Kate Guevarra",
    "Katerina Tapispisan",
    "Ella Guevarra",
    "Tanya Evangelista",
    "Ayanne Vargas"
  ],

  /* ------------------------------------------------------------------ */
  /* Photos                                                              */
  /* Leave "" to show the dashed camera placeholder.                     */
  /* Example: "assets/photos/baby.jpg"                                   */
  /* ------------------------------------------------------------------ */
  photos: {
    baby: "assets/photos/pic1.jpg",
    ceremony: "",
    reception: ""
  },

  /* ------------------------------------------------------------------ */
  /* Music                                                               */
  /* musicFile: relative path to the song, e.g. "assets/music.mp3".      */
  /*   Keep the capitalisation identical to the real file (GitHub Pages  */
  /*   is case-sensitive). Leave "" and the player simply stays idle.    */
  /* musicTitle: the name shown on the player.                           */
  /* musicCredit: optional small line under the player, e.g. an artist   */
  /*   or licence note. Leave "" to show nothing.                        */
  /* Music only starts when the guest taps play (browsers block autoplay).*/
  /* ------------------------------------------------------------------ */
  musicFile: "assets/music.mp3",
  musicTitle: "Little Boss Theme",
  musicCredit: ""
};

const events = [
  {
    id: 'PT-01',
    name: 'Best Actor',
    poster_url:
      'https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FBA-min.jpg?alt=media&token=5bb0701f-84c7-47f6-b377-ec9ad93b70ac',
    description:
      'This event has two rounds. First is the preliminary round which is about 4-8 minutes act based on their own choice from which only the best 5 qualify to the final. In the final round, only 3-5 minutes duration is allowed based on the situation given by us.',
    award: { first: '2000', second: 'N/A' },
    regulations: ['No costumes allowed'],
    people: [
      { position: 'Head', contact_name: 'Abein Reni Varghese', contact_phone: '9656066561' },
      { position: 'Subhead', contact_name: 'Navaneeth Krishnan', contact_phone: '9188652293' },
      { position: 'Subhead', contact_name: 'Rohith H R', contact_phone: '9383480394' },
    ],
    form: 'https://your-google-form-link.com',
  },
  {
    id: 'PT-02',
    name: 'Best Choreo',
    poster_url: 'https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FBest%20Choreo.jpg?alt=media&token=f6afc8d5-7b88-4f47-912d-ebb202211acc',
    description:
      "Pratitya '24 proudly presents BEST CHOREO, an electrifying platform to showcase your dance prowess. Gather your crew and join us to set the dance floor on fire. The best two teams will receive cash prizes.",
    award: { first: '3000', second: '2000' },
    regulations: [
      'Finals Maximum time limit: 7 Minutes',
      'Minimum number of participants: 8',
      '8 teams will be selected for finals after screening',
    ],
    people: [
      { position: 'Head', contact_name: 'Vyshnavi Pal K V', contact_phone: '7994332551' },
      { position: 'Subhead', contact_name: 'Sarayu Raj', contact_phone: '8078261284' },
      { position: 'Subhead', contact_name: 'Adwetha Rajesh', contact_phone: '7994091096' },
    ],
    form: 'https://your-google-form-link.com',
  },
  {
    id: 'PT-03',
    name: 'HadhaF',
    poster_url: 'https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FPlaystation-min.jpg?alt=media&token=55f5eaa2-7da2-4383-802e-6bede2d61022',
    description:
      'Welcome to the electrifying EA FC 24 Tournament, where 16 solo teams collide in a thrilling single-round elimination on the cutting-edge PlayStation 5. Don\'t miss this gaming spectacle!',
    award: { first: '1500', second: '500' },
    regulations: [
      'Open to all years under SCE',
      'Every match will be a knockout',
      'Players cannot use custom teams (World XI, etc.)',
      'Games will be 3 min per half except semifinal and final',
    ],
    people: [
      { position: 'Head', contact_name: 'Aben B John', contact_phone: '9544453174' },
      { position: 'Subhead', contact_name: 'Akash Babu', contact_phone: '8606343980' },
      { position: 'Subhead', contact_name: 'Antony Sebastian', contact_phone: '9496940988' },
    ],
    form: 'https://your-google-form-link.com',
  },
  {
    id: 'PT-04',
    name: 'Mirage Maestro',
    poster_url: 'https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMirage%20Maestro-min.jpg?alt=media&token=592e78a5-23bf-42ae-9cba-47f4d174d94b',
    description:
      "Get ready for an unforgettable day filled with entertainment and excitement. Unveil your star power at 'Star of Saintgits', the epitome of Pratitya '24.",
    award: { first: '2000', second: '500' },
    regulations: [
      'There will be screening and prelims before the final round.',
      'The shortlisted participants will enter into the final round conducted on the main stage.',
      'The ultimate evaluation of the judges will be final.',
    ],
    people: [
      { position: 'Head', contact_name: 'Lea Sony Jacob', contact_phone: '7510127911' },
      { position: 'Subhead', contact_name: 'Reuben Punnoose Abraham', contact_phone: '9400396507' },
      { position: 'Subhead', contact_name: 'Naveen Prince Thomas', contact_phone: '9188327753' },
    ],
    form: 'https://your-google-form-link.com',
  },
  {
    id: 'PT-05',
    name: 'Art of Words',
    poster_url: 'https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FCaligraphy%20Competition.jpg?alt=media&token=de923681-a292-4372-9602-c976d5492ad8',
    description:
      'Prepare your pens and unleash your creativity at Art of Words: Calligraphy Competition! This event invites calligraphy enthusiasts of all skill levels to compete in a spirited showcase of artistic talent, precision, and flair.',
    award: { first: 'N/A', second: 'N/A' },
    regulations: [
      'Participants must use English language scripts only',
      'Each participant will be provided with the same prompt/theme',
      'Calligraphy must be done on provided paper',
      'Time limit: 2 hours and 30 minutes',
      'Participants must bring their own calligraphy tools',
      'Judging criteria: Creativity, technique, and adherence to the theme',
    ],
    people: [
      { position: 'Head', contact_name: 'Lakshmi Smitha Rajlal', contact_phone: '9544450018' },
      { position: 'Subhead', contact_name: 'Laxy Poly', contact_phone: '9778241407' },
      { position: 'Subhead', contact_name: 'Lekshmi S', contact_phone: '7994746962' },
    ],
    form: 'https://your-google-form-link.com',
  },
];

export default events;

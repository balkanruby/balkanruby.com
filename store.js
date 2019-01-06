const findSpeaker = (event, speakers) =>
  speakers.find(speaker => speaker.anchor === event.author);

const store = {
  speakers: [
    {
      anchor: 'aaron',
      image: '/static/images/speakers/aaron.png',
      link: 'http://tenderlovemaking.com',
      name: 'Aaron Patterson',
      company: 'GitHub',
      bio: `
        <p>
          Tender lovemaking! Ruby & Rails core team member.
        </p>
      `,
      talk: 'Keynote',
      description: `
        <p>Coming soon. </p>
      `,
    },

    {
      anchor: 'eileen',
      image: '/static/images/speakers/eileen.png',
      link: 'http://eileencodes.com/',
      name: 'Eileen Uchitelle',
      company: 'GitHub',
      bio: `
        <p>
          Senior Systems Engineer at GitHub. Avid contributor to Open Source
          and Rails Core Team and the Rails Security Team member. Enjoy
          speaking at conferences, usually about performance or contributing to
          Open Source. Other than writing code, enjoys craft beer and hiking
          with her husband, Abe and their dog, Arya.
        </p>
      `,
      talk: 'Keynote',
      description: `
        <p>Coming soon. </p>
      `,
    }
  ]
};

export default store;

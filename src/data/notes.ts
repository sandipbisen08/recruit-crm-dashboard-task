export interface Note {
  type: string;
  tag: string;
  content: string;
  associations: string[];
  author: string;
  timestamp: string;
}

export const mockNotes: Note[] = [
  {
    type: 'Note',
    tag: 'To Do',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    associations: ['1 Association(s)'],
    author: 'John Doe',
    timestamp: 'Jul 12, 2023, 11:54 am',
  },
  {
    type: 'Note',
    tag: 'To Do',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    associations: ['1 Association(s)'],
    author: 'John Doe',
    timestamp: 'Jul 12, 2023, 11:54 am',
  },
  {
    type: 'Note',
    tag: 'To Do',
    content: 'Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    associations: ['1 Association(s)'],
    author: 'John Doe',
    timestamp: 'Jul 12, 2023, 11:54 am',
  },
];

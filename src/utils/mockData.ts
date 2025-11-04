import { Entry, Group } from '../types';
export const books = ['Introduction to Algorithms', 'Clean Code', 'Design Patterns', 'The Pragmatic Programmer'];
export const mockEntries: Entry[] = [{
  id: '1',
  studentTr: 'TR001',
  studentName: 'Student TR001',
  bookName: 'Introduction to Algorithms',
  fromPage: 1,
  toPage: 50
}, {
  id: '2',
  studentTr: 'TR001',
  studentName: 'Student TR001',
  bookName: 'Introduction to Algorithms',
  fromPage: 100,
  toPage: 150
}, {
  id: '3',
  studentTr: 'TR002',
  studentName: 'Student TR002',
  bookName: 'Introduction to Algorithms',
  fromPage: 25,
  toPage: 75
}, {
  id: '4',
  studentTr: 'TR003',
  studentName: 'Student TR003',
  bookName: 'Introduction to Algorithms',
  fromPage: 40,
  toPage: 90
}];
export const mockGroups: Group[] = [{
  id: 'G1',
  bookName: 'Introduction to Algorithms',
  sharedPages: [{
    from: 25,
    to: 50
  }, {
    from: 40,
    to: 75
  }],
  members: [{
    trNumber: 'TR001',
    name: 'Student TR001'
  }, {
    trNumber: 'TR002',
    name: 'Student TR002'
  }, {
    trNumber: 'TR003',
    name: 'Student TR003'
  }]
}, {
  id: 'G2',
  bookName: 'Clean Code',
  sharedPages: [{
    from: 1,
    to: 30
  }],
  members: [{
    trNumber: 'TR004',
    name: 'Student TR004'
  }, {
    trNumber: 'TR005',
    name: 'Student TR005'
  }]
}];
import { StudentDto } from './student.dto';

describe('StudentDto', () => {
  it('should be defined', () => {
    expect(new StudentDto()).toBeDefined();
  });
});

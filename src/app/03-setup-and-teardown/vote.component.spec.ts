import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted ', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.upVote();
    component.upVote();
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(3);
  });

  it('should decrement totalVotes when dowvotes', () => {
    // Arrange
    // const component = new VoteComponent();

    // Act
    component.downVote();

    // Assert
    expect(component.totalVotes).toBe(-1);
  });

});

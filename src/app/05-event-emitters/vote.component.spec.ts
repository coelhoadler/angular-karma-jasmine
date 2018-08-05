import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    const emitter = component.voteChanged;
    emitter.subscribe(
      next => {
        expect(next).toBeGreaterThan(0);
      }
    );

    component.upVote();
  });
});

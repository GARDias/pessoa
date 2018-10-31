import { HomeModule } from './home.module';
import { MessageService } from '../../core/message/message.service';

describe('HomeModule', () => {
  let homeModule: HomeModule;
  let messageService: MessageService;

  beforeEach(() => {
    homeModule = new HomeModule(new MessageService());
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});

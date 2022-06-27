import { AppProfile } from './app-profile';
import { newSpecPage } from '@stencil/core/testing';
import { dispose } from '../../global/store';

describe('app-profile', () => {
  beforeEach(() => {
    dispose();
  });

  it('clicks the button', async () => {
    const page = await newSpecPage({
      components: [AppProfile],
      html: '<app-profile></app-profile>',
    });
    // page.root.querySelector('button').click();
  });

  it('clicks the button again', async () => {
    const page = await newSpecPage({
      components: [AppProfile],
      html: '<app-profile></app-profile>',
    });
    // page.root.querySelector('button').click();
  });
});

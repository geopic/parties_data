// * -----------------------------------------------------------------------------
// * End-to-end testing fixture(s).
// * -----------------------------------------------------------------------------
import { Selector } from 'testcafe';

interface ISelectors {
  [key: string]: Selector;
}

const elements: ISelectors = {};

fixture('Using the application').page('localhost:3000').beforeEach(t => t.setTestSpeed(1));

test('Example test', async t => {
  await t.typeText('body', 'Hello World!');
  expect(Selector('body').textContent).toEqual('Hello World!');
});

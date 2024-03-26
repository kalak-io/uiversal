import { E2EElement, E2EPage, newE2EPage} from '@stencil/core/testing';

const COMPONENT_NAME = 'uv-input';

let page: E2EPage;
let element: E2EElement;

describe('uv-input', () => {
  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(`<${COMPONENT_NAME}></${COMPONENT_NAME}>`);
    element = await page.find(COMPONENT_NAME);
  })

  it('renders', async () => {
    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
  });

  it('sets disabled to true', async () => {
    expect(element).not.toHaveAttribute('disabled');
    await page.$eval(COMPONENT_NAME, elm => {
      elm.disabled = true
    });
    await page.waitForChanges();
    expect(element).toHaveAttribute('disabled');
  });
});

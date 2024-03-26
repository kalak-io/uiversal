import { newE2EPage } from '@stencil/core/testing';

const COMPONENT_NAME = 'uv-field';

describe('uv-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${COMPONENT_NAME}></${COMPONENT_NAME}>`);
    const element = await page.find(COMPONENT_NAME);
    expect(element).not.toBeNull();
    expect(element).toHaveClass('hydrated');
  });

  it('sets label props', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${COMPONENT_NAME} label="Label"></${COMPONENT_NAME}>`);
    const element = await page.find(COMPONENT_NAME);
    expect(element).toHaveAttribute('label');
    // expect(element).toHaveValue('label', 'Label');
  });

  it('sets message props', async () => {
    const page = await newE2EPage();
    await page.setContent(`<${COMPONENT_NAME} message="Message"></${COMPONENT_NAME}>`);
    const element = await page.find(COMPONENT_NAME);
    expect(element).toHaveAttribute('message');
    // expect(element).toHaveValue('message', 'Message');
  });
});

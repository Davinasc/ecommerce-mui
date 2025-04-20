import { RenderOptions, render, cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: ({ children }) => children, ...options });
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render }; // override default render export

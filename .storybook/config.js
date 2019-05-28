const {addParameters, configure} = require('@storybook/react');
const requireContext = require('require-context.macro');

addParameters({
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: true,
  enableShortcuts: true,
});

const req = requireContext('../packages/', true, /\.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

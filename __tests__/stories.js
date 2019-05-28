import {resolve} from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({configPath: resolve(__dirname, '../.storybook')});

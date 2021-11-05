import './index.scss';
import { PluginInitializerContext } from '../../../src/core/public';

import { ExternalScriptsPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {
  return new ExternalScriptsPlugin(initializerContext);
}
export { ExternalScriptsPluginSetup, ExternalScriptsPluginStart } from './types';

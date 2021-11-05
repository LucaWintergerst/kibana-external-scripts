import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { ExternalScriptsPluginSetup, ExternalScriptsPluginStart } from './types';

export class ExternalScriptsPlugin
  implements Plugin<ExternalScriptsPluginSetup, ExternalScriptsPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('externalScripts: Setup');

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('externalScripts: Started');
    return {};
  }

  public stop() {}
}

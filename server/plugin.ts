import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { ExternalScriptsPluginSetup, ExternalScriptsPluginStart } from './types';
import { defineRoutes } from './routes';

export class ExternalScriptsPlugin
  implements Plugin<ExternalScriptsPluginSetup, ExternalScriptsPluginStart>
{
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('externalScripts: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('externalScripts: Started');
    return {};
  }

  public stop() {}
}

import { i18n } from '@kbn/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '../../../src/core/public';
import {
  ExternalScriptsPluginSetup,
  ExternalScriptsPluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';
import { ConfigSchema} from '../server';


export class ExternalScriptsPlugin
  implements Plugin<void, void> {
    private snippets: string[];
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
      this.snippets = initializerContext.config.get().snippets
    }

  public setup(core: CoreSetup): void {
    
  }

  public start(core: CoreStart): void {
    this.snippets.forEach(snippet => {
      const script = document.createElement("script")
      script.innerHTML = snippet
      script.setAttribute("nonce", "lk34hjg6hg34hkj56gjkh3g456hjgjkhg3456gjhgj3kh45g6jhjh3g456jk")
      document.body.appendChild(script)
    });
  }

  public stop() {}
}

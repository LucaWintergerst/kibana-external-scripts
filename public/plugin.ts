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
  implements Plugin<ExternalScriptsPluginSetup, ExternalScriptsPluginStart>
{
  private snippets: string[];
  constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    this.snippets = initializerContext.config.get().snippets
  }
  public setup(core: CoreSetup): ExternalScriptsPluginSetup {
    // Register an application into the side navigation menu
    core.application.register({
      id: 'externalScripts',
      title: PLUGIN_NAME,
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in kibana.json
        const [coreStart, depsStart] = await core.getStartServices();
        // Render the application
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params);
      },
    });

    // Return methods that should be available to other plugins
    return {
      getGreeting() {
        return i18n.translate('externalScripts.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): ExternalScriptsPluginStart {
    this.snippets.forEach(snippet => {
      const script = document.createElement("script")
      script.innerHTML = snippet
      script.setAttribute("nonce", "lk34hjg6hg34hkj56gjkh3g456hjgjkhg3456gjhgj3kh45g6jhjh3g456jk")
      document.body.appendChild(script)
    });

    return {};
  }

  public stop() {}
}

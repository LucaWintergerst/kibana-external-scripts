import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface ExternalScriptsPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExternalScriptsPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

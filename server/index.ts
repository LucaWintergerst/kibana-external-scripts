import { PluginConfigDescriptor, PluginInitializerContext } from '../../../src/core/server';
import { ExternalScriptsPlugin } from './plugin';
import { schema, TypeOf } from '@kbn/config-schema';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new ExternalScriptsPlugin(initializerContext);
}

export type { ExternalScriptsPluginSetup, ExternalScriptsPluginStart } from './types';


const configSchema = schema.object({"snippets": schema.arrayOf(schema.string())})

export type ConfigSchema = TypeOf<typeof configSchema>

export const config: PluginConfigDescriptor<ConfigSchema> = {
  schema: configSchema,
  exposeToBrowser: {
    snippets: true
  }
};

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import type { CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '@kbn/core/public';
import { ConfigType } from './config';

export class ExternalScripts implements Plugin<void, void, {}, {}> {
  constructor(private readonly initializerContext: PluginInitializerContext<ConfigType>) {}
  public setup(core: CoreSetup) { }

  public start(core: CoreStart) {
    this.initializerContext.config.get().snippets?.forEach(snippet => {
      const script = document.createElement("script")
      script.innerHTML = snippet
      script.setAttribute("nonce", "lk34hjg6hg34hkj56gjkh3g456hjgjkhg3456gjhgj3kh45g6jhjh3g456jk")
      document.body.appendChild(script)
    });
  }
}

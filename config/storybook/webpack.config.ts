import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config!.resolve!.modules = [paths.src, 'node_modules'];
  config!.resolve!.extensions!.push('.ts', '.tsx');
  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    use: ['@svgr/webpack'],
  });

  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(new DefinePlugin({
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify(''),
  }));

  return config;
};

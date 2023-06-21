import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from '../../model/types/Article';
import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article: Article = {
  id: '1',
  title: 'JavaScript News',
  subtitle: "What's new in JS at 2023?",
  img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  views: 1022,
  createdAt: '22.06.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'admin',
  },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блока',
      paragraphs: [
        'Программа, яку по традициї називають «Hello, world!», дуже проста. Вона виводить фразу «Hello, world!», або іншу подібну, за допомогою мови програмування.',
        'JavaScript — це мова, програми на якій можна виконувати в різних середовищах. В нашому випадку мова йде про браузери та серверну платформу Node.js. Якшо до сих пір ви не написали ні строчки коду на JS та читаєте цей текст в браузері, на настільному пк, це означає, що ви буквально в декількох секундах від своєї першої JavaScript-программи.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блока',
      paragraphs: [
        'Программа, яку по традициї називають «Hello, world!», дуже проста. Вона виводить фразу «Hello, world!», або іншу подібну, за допомогою мови програмування.',
        'JavaScript — це мова, програми на якій можна виконувати в різних середовищах. В нашому випадку мова йде про браузери та серверну платформу Node.js. Якшо до сих пір ви не написали ні строчки коду на JS та читаєте цей текст в браузері, на настільному пк, це означає, що ви буквально в декількох секундах від своєї першої JavaScript-программи.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Малюнок 1 - скріншот сайта',
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блока',
      paragraphs: [
        'JavaScript — це мова, програми на якій можна виконувати в різних середовищах. В нашому випадку мова йде про браузери та серверну платформу Node.js. Якшо до сих пір ви не написали ні строчки коду на JS та читаєте цей текст в браузері, на настільному пк, це означає, що ви буквально в декількох секундах від своєї першої JavaScript-программи.',
        'Программа, яку по традициї називають «Hello, world!», дуже проста',
      ],
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Малюнок 2 - скріншот сайта',
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блока',
      paragraphs: [
        'JavaScript — це мова, програми на якій можна виконувати в різних середовищах. В нашому випадку мова йде про браузери та серверну платформу Node.js. Якшо до сих пір ви не написали ні строчки коду на JS та читаєте цей текст в браузері, на настільному пк, це означає, що ви буквально в декількох секундах від своєї першої JavaScript-программи.',
      ],
    },
  ],
} as Article;

export const List = Template.bind({});
List.args = {
  view: ArticleView.LIST,
  article,
};

export const Plate = Template.bind({});
Plate.args = {
  view: ArticleView.PLATE,
  article,
};

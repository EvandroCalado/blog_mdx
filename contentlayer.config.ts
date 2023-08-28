/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
}));

const Category = defineNestedType(() => ({
  name: 'Categories',
  fields: {
    name: { type: 'string', required: true },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    cover: { type: 'string', required: true },
    coverResource: { type: 'string', required: true },
    coverResourceUrl: { type: 'string', required: true },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    categories: {
      type: 'list',
      of: Category,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: 'dark-plus',
  // Set to true to keep the background color
  keepBackground: true,

  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word'];
  },
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});
